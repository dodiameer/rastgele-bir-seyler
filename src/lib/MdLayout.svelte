<script>
	import { TITLE } from './constants';

	import PostLayout from './PostLayout.svelte';

	export let title;
	export let author = 'Mohammed Ali Agha';
	export let date;
	export let isNormalPage = false;
	export let isPublished = import.meta.env.DEV ? true : false;
</script>

<svelte:head>
	<title>{title ?? TITLE}</title>
</svelte:head>
{#if isPublished}
	{#if !isNormalPage}
		<PostLayout>
			<h1>{title}</h1>
			<p class="text-gray-700 text-sm">{date} tarihinde {author} tarafından yazılmıştır</p>
			<slot />
		</PostLayout>
	{:else}
		<PostLayout>
			<h1>{title}</h1>
			<slot />
		</PostLayout>
	{/if}
{:else}
	<div class="c">
		<h1>Yazı bulunmadı.</h1>
		<p>Yanlış bir linke girmiş olabilirsiniz.</p>
		<a href="/" class="text-primary">Ana sayfaya dön</a>
	</div>
{/if}
