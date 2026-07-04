import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

let url = process.env.SUPABASE_URL;
url = url.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
const supabase = createClient(url, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  console.log('Fetching images...');
  const { data, error } = await supabase.from('images').select('*');
  console.log('Images:', data);
  if (error) console.error('Error:', error);
  
  if (data && data.length > 0) {
    console.log(`Deleting ${data.length} images...`);
    // Delete all images
    const { error: delError } = await supabase.from('images').delete().neq('id', '0');
    if (delError) console.error('Delete Error:', delError);
    else console.log('Successfully deleted all images from the gallery.');
  } else {
    console.log('No images found to delete.');
  }
}
run();
