<script>
	import { enhance } from '$app/forms';
</script>

<div class="min-h-screen bg-base-200">
	<div class="container mx-auto px-4 py-8">
		<div class="max-w-2xl mx-auto">
			<a href="/" class="btn btn-ghost mb-6">Back to Notes</a>
			<div class="card bg-base-100">
				<div class="card-body">
					<h2 class="card-title text-2xl mb-4">Create New Note</h2>
					<form method="POST" action="?/create">
						<div class="form-control mb-4">
							<label for="title" class="label">
								<span class="label-text">Title</span>
							</label>
							<input
								type="text"
								placeholder="Note Title"
								class="input input-bordered"
								id="title"
								name="title"
								required="true"
							/>
						</div>
						<div class="form-control mb-4">
							<label for="content" class="label">
								<span class="label-text">Content</span>
							</label>
							<textarea
								placeholder="Write your note here..."
								class="textarea textarea-bordered h-32"
								name="content"
								id="content"
								required="true"
							></textarea>
						</div>
						<div class="card-actions justify-end">
							<button type="submit" class="btn btn-primary">Create Note</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
