<script>
	import { formatDate } from '$lib/utils/utils';

	let { note } = $props();

	const handleDelete = async (e, id) => {
		e.preventDefaults();
		if (!window.confirm('Are you sure you want to delete this note?')) return;
	};
</script>

<a
	href="/note/{note._id}"
	class="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"
>
	<div class="card-body">
		<h3 class="card-title text-base-content">{note.title}</h3>
		<p class="text-base-content/70 line-clamp-3">{note.content}</p>
		<div class="card-actions justify-between items-center mt-4">
			<span class="text-sm text-base-content/60">
				{formatDate(new Date(note.createdAt))}
			</span>
			<div class="flex items-center gap-1">
				<p>Edit</p>
				<button
					class="btn btn-ghost btn-xs text-error"
					onclick={(e) => {
						handleDelete(e, note._id);
					}}>Delete</button
				>
			</div>
		</div>
	</div>
</a>
