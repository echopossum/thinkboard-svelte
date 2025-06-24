import { json } from '@sveltejs/kit';
import Note from '$lib/models/Note.js';

export async function GET({ params }) {
  try {
    const noteId = params.id;
    const note = await Note.findById(noteId);
    return json(note);
  } catch (error) {
    return json({ message: `Internal server error:${error}` }, { status: 500 });
  }
}

export async function PUT({ request, params }) {
  try {
    const { title, content } = await request.json();

    const noteId = params.id;

    console.log(noteId, title, content);

    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      {
        title,
        content
      },
      { new: true }
    );

    if (!updatedNote) {
      return json({ message: 'Note not found' }, { status: 404 });
    }
    return json(updatedNote);
  } catch (error) {
    return json({ message: `Internal server error:${error}` }, { status: 500 });
  }
}

export async function DELETE({ params }) {
  try {
    const noteId = params.id;
    const note = await Note.findByIdAndDelete(noteId);
    return json(note);
  } catch (error) {
    return json({ message: `Internal server error:${error}` }, { status: 500 });
  }
}
