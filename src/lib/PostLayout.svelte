<script lang="ts">
	import IconHome from '~icons/mdi/home';
</script>

<a
	href="/"
	class="fixed bottom-4 right-4 bg-primary text-primary-text no-underline rounded-full flex items-center justify-center p-2 text-2xl"
	title="Ana sayfaya dön"
>
	<IconHome />
	<p class="sr-only">Ana sayfaya dön</p>
</a>
<article class="container prose prose-blue lg:prose-lg lg:pt-4">
	<slot />
</article>
