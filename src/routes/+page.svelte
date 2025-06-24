<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import NoteCard from '$lib/components/NoteCard.svelte';
	import NotesNotFound from '$lib/components/NotesNotFound.svelte';
</script>

<Navbar />
<NotesNotFound />
<NoteCard
	note={{
		title: 'Test',
		content: 'Other',
		_id: '685a1daab584b8dac2dcc240',
		createdAt: '2025-06-24T03:38:18.928Z'
	}}
/>
