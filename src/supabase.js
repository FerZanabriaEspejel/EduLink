import { createClient } from '@supabase/supabase-js'

// URL base limpia de tu proyecto en Supabase
const supabaseUrl = 'https://gtaseradwsjfiuqdixtq.supabase.co'

// Tu Publishable / Anon Key
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0YXNlcmFkd3NqZml1cWRpeHRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4Njg5OTYsImV4cCI6MjEwODQ0NDk5Nn0.dprV7oAo_WEBxsV8Tl111MU4-cOkHzOlFvY3PbsVCps'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)