<script>
    import Title from '$lib/Title.svelte';
    import UrlBox from '$lib/UrlBox.svelte';
    import Recipe from '$lib/Recipe.svelte';
</script>

<main>
    <Title />
    <UrlBox />
    <Recipe />
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