import Note from '$lib/models/Note.js';
import { json } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const id = params.id;
	try {
		const note = await Note.findById(id);
		return {
			note: JSON.parse(JSON.stringify(note))
		};
	} catch (error) {
		return {
			error
		};
	}
}

export const actions = {
	update: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		const title = data.get('title');
		const content = data.get('content');
		console.log(id, title, content);
		try {
			const updatedNote = await Note.findByIdAndUpdate(
				id,
				{
					title,
					content
				},
				{ new: true }
			);
		} catch (error) {}
		throw redirect(303, '/');
	},

	delete: async ({ request }) => {
		const data = await request.formData();
		console.log('Deleting Form');
		const id = data.get('id');
		try {
			const deletedNote = await Note.findByIdAndDelete(id);
		} catch (error) {}
		throw redirect(303, '/');
	}
};
