<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import NoteCard from '$lib/components/NoteCard.svelte';
	import NotesNotFound from '$lib/components/NotesNotFound.svelte';

	let { data } = $props();
</script>

<div class="min-h-screen">
	<Navbar />
	<div class="max-w-7-xl mx-auto p-4 mt-6">
		{#if data.notes.length === 0}
			<NotesNotFound />
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each data.notes as note}
					<NoteCard {note} />
				{/each}
			</div>
		{/if}
	</div>
</div>
