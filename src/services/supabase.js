import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gdeqrbntopllxdatrmlm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZXFyYm50b3BsbHhkYXRybWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NzQzODMsImV4cCI6MjA3MDI1MDM4M30.BBuMfu32CQk6zLO6q-Yg-VecY-eqSX7D2f5IljhIVno";
const supabase = createClient(supabaseUrl, supabaseKey);
export { supabase };
