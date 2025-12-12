import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.46.1/+esm';

const supabaseUrl = 'https://bvmzgarccplvnuhbbeif.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2bXpnYXJjY3Bsdm51aGJiZWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1OTQ2MDEsImV4cCI6MjA3NDE3MDYwMX0.RzwmuBKuzMUXzKBc_89wPpyURUnqH6ippgXHmjNQ6yo';

export const supabase = createClient(supabaseUrl, supabaseKey);
