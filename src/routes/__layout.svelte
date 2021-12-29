<script lang="ts">
	import 'uno.css';
	// import '@unocss/reset/sanitize/sanitize.css';
	// import '@unocss/reset/sanitize/assets.css';
	// import '@unocss/reset/sanitize/typography.css';
	// import '@unocss/reset/sanitize/forms.css';
	import '@unocss/reset/tailwind.css';
	import '../global.css';
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

<nav class="px-2 py-4 bg-primary text-primary-text">
	<div class="c flex flex-col space-y-2">
		<a href="/">
			<h1>{TITLE}</h1>
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
<main>
	<slot />
</main>
