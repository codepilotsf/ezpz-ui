import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';

// Define our Zod Schema at the top level
// (outside of load or actions)
const schema = z.object({
  name: z.string(),
  email: z.string().email()
});

// Export a load function to supply initial form data.
export const load = async () => {
  const form = await superValidate(zod(schema));
  return { form };
};

// Export a default action (or named actions if needed) 
// to handle form submissions.
export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(schema));
    // If the form is not valid, return a 400 error with the form data.
    if (!form.valid) {
      return fail(400, { form });
    }
    // Form is valid. So here you can log the user in, save data to db, 
    // redirect to a success page, or whatever you need to do.
    // ...
  }
};