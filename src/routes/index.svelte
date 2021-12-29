<script lang="ts">
	import { TITLE } from '$lib/constants';

	import { compareDesc, format, parse } from 'date-fns';
	const posts = Object.entries(import.meta.globEager('./posts/*.md'))
		.map(([name, { metadata }]) => {
			const link = name.replace('./posts/', '/posts/').replace(/.md$/, '');
			const date = parse(metadata.date, 'dd.MM.yyyy HH:mm', new Date());
			return { ...metadata, date, link };
		})
		.filter(({ isPublished }) => import.meta.env.DEV || isPublished)
		.sort((a, b) => compareDesc(a.date, b.date));
</script>

<svelte:head>
	<title>Anasayfa | {TITLE}</title>
</svelte:head>

<section class="c">
	<h2>Yazılar</h2>
	<ul class="no-list mt-2 space-y-2">
		{#each posts as post}
			<li class="flex flex-col">
				<a class="text-primary-900 font-semibold text-lg" href={post.link} sveltekit:prefetch>
					{post.title}
				</a>
				<time datetime={post.date.toString()} class="text-gray-600 text-sm">
					{format(post.date, 'dd.MM.yyyy - HH:mm')} tarihinde yazılmıştır.
				</time>
			</li>
		{:else}
			<p>Maalesef, hiçbir yazı bulamadık.</p>
		{/each}
	</ul>
</section>
