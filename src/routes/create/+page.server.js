import Note from '$lib/models/Note.js';
import { json, redirect } from '@sveltejs/kit';

export const actions = {
	create: async ({ request }) => {
		try {
			const data = await request.formData();
			const title = data.get('title');
			const content = data.get('content');
			const note = new Note({ title, content });
			const savedNote = await note.save();
			throw redirect(303, '/');
		} catch (error) {
			if (error instanceof Response || error.status === 303) {
				throw error;
			}
		}
	}
};
