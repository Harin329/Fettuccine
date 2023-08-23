<script>
	import { endpoint, recipe } from '../stores';
	/**
	 * @type { any }
	 */
	export let step;

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
		const response = await fetch(`${$endpoint}/recipe/`, {
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

<div class="stepContainer2">
	<div class="inputSection">
		<h4>Ingredients:</h4>
		<input
			class="largeInput"
			placeholder="Enter step ingredients..."
			value={($recipe[2] ?? [])
				.filter((/** @type {{ step_uuid: any; }} */ i) => i?.step_uuid === step.step_uuid)
				.map((/** @type {{ ingredient_name: any; }} */ i) => i?.ingredient_name)
				.join(';;;')}
			on:blur={() => {
				console.log($recipe[2]);
			}}
		/>
	</div>
	<div class="inputSection">
		<h4>Step Time:</h4>
		<input
			class="smallInput"
			placeholder="0"
			bind:value={step.step_time}
			on:keypress={handleSubmit}
		/>
		<p>mins</p>
	</div>
</div>

<style>
	.stepContainer2 {
		display: flex;
		flex-direction: row;
		height: 100px;
		width: 96%;
		align-items: baseline;
		justify-content: space-between;
	}

	.inputSection {
		display: flex;
		flex-direction: row;
		align-items: baseline;
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

	.largeInput {
		border: none;
		font-size: 14px;
		padding-bottom: 5px;
		margin-left: 10px;
		border-bottom: 1px solid #737373;
		width: 900px;
	}
</style>
