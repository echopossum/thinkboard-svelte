<script>
	let title = $state('');
	let content = $state('');
	let loading = $state(false);
</script>

<div class="min-h-screen bg-base-200">
	<div class="container mx-auto px-4 py-8">
		<div class="max-w-2xl mx-auto">
			<a href="/" class="btn btn-ghost mb-6">Back to Notes</a>
			<div class="card bg-base-100">
				<div class="card-body">
					<h2 class="card-title text-2xl mb-4">Create New Note</h2>
					<form method="POST" action="/api/notes"></form>
				</div>
			</div>
		</div>
	</div>
</div>
