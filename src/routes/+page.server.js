import Note from '$lib/models/Note.js';
import { json, redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const notes = await Note.find().sort({ createdAt: -1 });
	return {
		notes: JSON.parse(JSON.stringify(notes))
	};
}

export const actions = {
	delete: async ({ request }) => {
		const data = await request.formData();
		console.log('Deleting Form');
		const id = data.get('id');
		try {
			const deletedNote = await Note.findByIdAndDelete(id);
			throw redirect(303, '/');
		} catch (error) {
			console.log('Component action error:', error);
		}
	}
};
