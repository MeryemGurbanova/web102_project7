import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jdfshfbehcmbpkfzeksw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkZnNoZmJlaGNtYnBrZnpla3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NzUzNzcsImV4cCI6MjA0NjM1MTM3N30.V_0wuNWAYlnWmt2y8vkZmhyUZdwSx37ijs045-9sZ18'
export const supabase = createClient(supabaseUrl, supabaseKey)