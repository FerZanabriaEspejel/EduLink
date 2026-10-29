import { supabase } from "../utils/supabaseClient"; // Ajusta la ruta a tu cliente de Supabase

export async function evaluarYRegistrarEjercicio(topicId, exerciseId, esCorrecto) {
  if (!esCorrecto) {
    return {
      ganoPuntos: false,
      mensaje: "Incorrecto. ¡Sigue intentándolo, tú puedes!"
    };
  }

  try {
    // 1. Obtener el usuario autenticado actualmente en Supabase
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return {
        ganoPuntos: false,
        mensaje: "¡Correcto! (Inicia sesión para guardar tus puntos y medallas)."
      };
    }

    const userId = user.id;
    const uniqueExerciseKey = `${topicId}-${exerciseId}`;

    // 2. Verificar si este ejercicio ya fue resuelto antes por este usuario
    const { data: existente, error: selectError } = await supabase
      .from("user_exercises")
      .select("id")
      .eq("user_id", userId)
      .eq("exercise_id", uniqueExerciseKey)
      .maybeSingle();

    if (selectError) throw selectError;

    if (existente) {
      // Ya lo había resuelto -> Es correcto, pero NO da puntos nuevos
      return {
        ganoPuntos: false,
        mensaje: "¡Correcto! (Este ejercicio ya te había otorgado puntos anteriormente)."
      };
    }

    // 3. Si es nuevo: Registrar el ejercicio como resuelto
    const { error: insertError } = await supabase
      .from("user_exercises")
      .insert([{ user_id: userId, exercise_id: uniqueExerciseKey }]);

    if (insertError) throw insertError;

    // 4. Obtener los puntos actuales del usuario
    const { data: stats, error: statsError } = await supabase
      .from("user_stats")
      .select("puntos_totales")
      .eq("user_id", userId)
      .single();

    if (statsError) throw statsError;

    const PUNTOS_GANADOS = 10;
    const nuevosPuntos = (stats?.puntos_totales || 0) + PUNTOS_GANADOS;

    // 5. Actualizar el nuevo total de puntos en la tabla user_stats
    const { error: updateError } = await supabase
      .from("user_stats")
      .update({ puntos_totales: nuevosPuntos, updated_at: new Date() })
      .eq("user_id", userId);

    if (updateError) throw updateError;

    return {
      ganoPuntos: true,
      mensaje: `¡Correcto! +${PUNTOS_GANADOS} puntos añadidos a tu cuenta. 🎉`,
      puntosTotales: nuevosPuntos
    };

  } catch (error) {
    console.error("Error al procesar los puntos en Supabase:", error);
    return {
        ganoPuntos: false,
        mensaje: "¡Correcto! (Hubo un error al sincronizar con tu cuenta)."
    };
  }
}