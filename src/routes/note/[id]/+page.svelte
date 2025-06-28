<script>
	import { enhance } from '$app/forms';

	let { data } = $props();
	let { note } = data;

	const handleDelete = ({ cancel }) => {
		if (!confirm('Are you sure?')) {
			cancel();
		}
	};
</script>

<div class="min-h-screen bg-base-200">
	<div class="container mx-auto px-4 py-8">
		<div class="max-w-2xl mx-auto">
			<div class="flex items-center justify-between mb-6">
				<a href="/" class="btn btn-ghost">Back to Notes</a>
				<form method="post" action="?/delete" use:enhance={handleDelete}>
					<input type="hidden" name="id" value={note._id} />
					<button
						type="submit"
						class="btn btn-ghost btn-xs text-error"
						onclick={(e) => {
							e.stopPropagation();
						}}>Delete</button
					>
				</form>
			</div>
			<div class="card bg-base-100">
				<div class="card-body">
					<form method="post" action="?/update" use:enhance>
						<input type="hidden" name="id" value={note._id} />

						<div class="form-control mb-4">
							<label for="title" class="label">
								<span class="label-text">Title</span>
							</label>
							<input
								type="text"
								id="title"
								name="title"
								required="true"
								placeholder="Note Title"
								class="input input-bordered"
								value={note.title}
							/>
						</div>

						<div class="form-control mb-4">
							<label class="label" for="content">
								<span class="label-text">Content</span>
							</label>
							<input
								type="text"
								id="content"
								name="content"
								required="true"
								placeholder="Write your note here..."
								class="textarea textarea-bordered hsl32"
								value={note.content}
							/>
						</div>

						<div class="card-actions justify-end">
							<button
								type="submit"
								class="btn btn-primary"
								onclick={(e) => {
									e.stopPropagation();
								}}>Save Changes</button
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
