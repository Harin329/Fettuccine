<script>
	import AddStep from '$lib/AddStep.svelte';
	import Step from '$lib/Step.svelte';
</script>

<div class="recipe">
	<div class="imageBox">
		<img classname="icon" src="./AppIcon.png" alt="App Icon" />
	</div>
	<div class="infoBox">
		<input class="recipeName" placeholder="Recipe Name" />
		<h1>Servings</h1>
		<h1>Cooking Time</h1>
		<h1>Description</h1>
	</div>
</div>
<Step />
<AddStep />

<style>
	.recipe {
		display: flex;
		flex-direction: row;
		width: 82%;
	}

	.imageBox {
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		background-color: #d9d9d9;
		border-radius: 5px;
	}

	.infoBox {
		display: flex;
		flex: 3;
		flex-direction: column;
		margin-left: 20px;
	}

	.recipeName {
		border: none;
		font-weight: 600;
		font-size: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #737373;
	}
</style>
