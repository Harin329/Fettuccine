<script>
	import { endpoint, recipe } from '../stores';

	/**
	 * @type {String}
	 */
	let urlText;

	/**
	 * @param {KeyboardEvent} e
	 */
	function handleSubmit(e) {
		if (e.key === 'Enter') {
			if (urlText) {
				postRecipe(urlText);
			}
		}
	}

	/**
	 * @param {String} urlText
	 */
	async function postRecipe(urlText) {
		const response = await fetch(
			`${$endpoint}/recipe/url/?url=${encodeURIComponent(urlText)}&creatorId=${"Qnj6AjQOLoZlJw4TZBpRE3iNz0K3"}`,
			{
				method: 'POST',
				redirect: 'follow',
			}
		)
		const result = await response.json();
		$recipe = result[0];
		console.log(result[0]);
	}
</script>

<input placeholder="Enter recipe url..." bind:value={urlText} on:keypress={handleSubmit} />

<style>
	input {
		width: 80%;
		min-height: 40px;
		height: 40px;
		margin-top: 20px;
		margin-bottom: 20px;
		padding: 0 1%;
		background-color: #d9d9d9;
		font-weight: 600;
		border: none;
		border-radius: 5px;
	}

	input::placeholder {
		color: #737373;
	}
</style>
