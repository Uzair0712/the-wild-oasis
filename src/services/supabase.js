import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vyuvzezbfvhacmalgcgp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5dXZ6ZXpiZnZoYWNtYWxnY2dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0NDc3NTUsImV4cCI6MjAxMDAyMzc1NX0.khBje9Nyf9wtR2mOqPz38lspvh2xgO4b8PAa0QVxVzg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
