<script>
	import AddStep from '$lib/AddStep.svelte';
	import Step from '$lib/Step.svelte';
	import { recipe } from '../stores';

	/**
	 * @param {KeyboardEvent} e
	 */
	function handleSubmit(e) {
		if (e.key === 'Enter') {
			console.log($recipe);
		}
	}
</script>

<div class="recipe">
	<div class="imageBox">
		<img src={$recipe[0]?.header_image ?? './AppIcon.png'} alt="App Icon" />
	</div>
	<div class="infoBox">
		<div class="infoTopRow">
			<input
				class="recipeName"
				placeholder="Recipe Name"
				bind:value={$recipe[0].recipe_name}
				on:keypress={handleSubmit}
			/>
			<div class="inputSection">
				<h4>Servings:</h4>
				<input
					class="smallInput"
					placeholder="0"
					bind:value={$recipe[0].servings}
					on:keypress={handleSubmit}
				/>
			</div>
			<div class="inputSection">
				<h4>Cooking Time:</h4>
				<input
					class="smallInput"
					placeholder="0"
					bind:value={$recipe[0].cooking_time}
					on:keypress={handleSubmit}
				/>
				<p>mins</p>
			</div>
		</div>
		<textarea
			class="recipeDescription"
			placeholder="Enter recipe description..."
			bind:value={$recipe[0].recipe_description}
			on:keypress={handleSubmit}
		/>
	</div>
</div>
<Step />
<AddStep />

<style>
	h4 {
		margin-right: 5px;
		height: 50px;
	}

	p {
		vertical-align: bottom;
		font-size: 12px;
		font-weight: 700;
		margin-left: 5px;
	}

	.inputSection {
		display: flex;
		flex-direction: row;
		align-items: baseline;
	}

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

	img {
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}

	.infoBox {
		display: flex;
		flex: 3;
		flex-direction: column;
		margin-left: 20px;
	}

	.infoTopRow {
		display: flex;
		flex-direction: row;
		height: 50px;
		align-items: baseline;
		justify-content: space-between;
	}

	.recipeName {
		border: none;
		font-weight: 600;
		font-size: 20px;
		padding-bottom: 5px;
		border-bottom: 1px solid #737373;
		width: 60%;
	}

	.smallInput {
		border: none;
		font-weight: 600;
		font-size: 20px;
		padding-bottom: 5px;
		border-bottom: 1px solid #737373;
		text-align: center;
		width: 35px;
	}

	.recipeDescription {
		width: 100%;
		height: 100%;
		margin-top: 20px;
		padding: 1%;
		background-color: #d9d9d9;
		border: none;
		border-radius: 5px;
	}

	.recipeDescription::placeholder {
		color: #737373;
		font-family: 'Open Sans';
	}
</style>
