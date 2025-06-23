import { json } from '@sveltejs/kit';
import Note from '$lib/models/Note.js';

export async function GET({ req }) {
	try {
		const notes = await Note.find().sort({ createdAt: -1 });
		console.log(notes);
		return json(notes);
	} catch (error) {
		return json({ message: `Internal server error:${error}` }, { status: 500 });
	}
}

export async function POST({ request }) {
	try {
		const { title, content } = await request.json();
		const note = new Note({ title, content });
		const savedNote = await note.save();
		console.log(savedNote);
		return json(savedNote);
	} catch (error) {
		return json({ message: `Internal server error:${error}` }, { status: 500 });
	}
}
