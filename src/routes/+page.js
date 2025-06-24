export async function load({ fetch, params }) {
	const res = await fetch('/api/notes');
	const notes = await res.json();
	return { notes };
}
