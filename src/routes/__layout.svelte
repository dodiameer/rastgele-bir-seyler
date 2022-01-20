<script lang="ts">
	import '../app.css';
	import { TITLE } from '$lib/constants';

	const links = [
		{
			name: 'Ana sayfa',
			url: '/',
		},
		{
			name: 'Benim Hakkında',
			url: '/benim-hakkinda',
		},
	];
</script>

<nav class="px-2 py-4 bg-primary text-primary-text mb-3">
	<div class="container flex flex-col space-y-2">
		<a href="/" class="title !mb-0">
			{TITLE}
		</a>
		<ul class="flex flex-row items-center space-x-4 flex-wrap">
			{#each links as link}
				<li>
					<a href={link.url} class="font-semibold">{link.name}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
<main class="pb-6">
	<slot />
</main>
