<script>
	import Title from '$lib/Title.svelte';
	import UrlBox from '$lib/UrlBox.svelte';
	import Recipe from '$lib/Recipe.svelte';
	import { recipe } from '../stores';
</script>

<main>
	<Title />
	<UrlBox />
	{#if $recipe.length > 0}
		<Recipe />
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		padding: 0 1rem;
	}

	:global(body) {
		font-family: 'Open Sans';
	}

	:global(input:focus) {
		outline: none;
	}
</style>
