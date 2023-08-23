<script>
	import { endpoint, recipe } from '../stores';
	// import StepDetails from './StepDetails.svelte';

	/**
	 * @param {KeyboardEvent} e
	 */
	function handleSubmit(e) {
		if (e.key === 'Enter') {
			updateRecipe($recipe);
		}
	}

	/**
	 * @param {any} recipe
	 */
	async function updateRecipe(recipe) {
		const response = await fetch(`${endpoint}/recipe/`, {
			method: 'PUT',
			redirect: 'follow',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				recipe: recipe[0],
				steps: recipe[1],
				ingredients: recipe[2]
			})
		});
		const result = await response.json();
		console.log(result);
	}
</script>

<div class="step">
	{#each $recipe[1] ?? [] as step, i}
		<h4>Step {i + 1}:</h4>
		<div class="stepContainer">
			<textarea
				class="recipeDescription"
				placeholder="Enter step instructions..."
				bind:value={step.step_description}
				on:keypress={handleSubmit}
				on:blur={() => {
					step.step_index = i;
					updateRecipe($recipe);
				}}
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<img
				class="icon"
				src="./DeleteIcon.png"
				alt="Delete"
				on:click={() => {
					const newSteps = $recipe[1].filter(
						(/** @type {{ step_uuid: any; }} */ s) => s.step_uuid !== step.step_uuid
					);
					$recipe[1] = newSteps;
					updateRecipe($recipe);
				}}
			/>
		</div>
		<!-- <StepDetails step={step} /> -->
	{/each}
</div>

<style>
	img {
		width: 25px;
		height: 25px;
		margin-left: 20px;
		cursor: pointer;
	}

	.step {
		width: 82%;
	}

	.stepContainer {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.recipeDescription {
		width: 100%;
		height: 100px;
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
