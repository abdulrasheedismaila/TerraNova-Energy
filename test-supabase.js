import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  const { data, error } = await supabase.from('images').select('*');
  console.log('Images:', data);
  if (error) console.error('Error:', error);
  
  if (data && data.length > 0) {
    console.log('Deleting all images...');
    const { error: delError } = await supabase.from('images').delete().neq('id', '0');
    if (delError) console.error('Delete Error:', delError);
    else console.log('Deleted all images.');
  }
}
run();
