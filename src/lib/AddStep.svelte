<script>
	import { recipe } from '../stores';
	import {v4 as uuidv4} from 'uuid';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="addStep"
	on:click={() => {
		$recipe[1].push({
			step_uuid: uuidv4(),
			step_time: 0,
			step_description: '',
			recipe_uuid: $recipe[0].recipe_uuid,
			step_image: ''
		});
		$recipe[1] = $recipe[1];
	}}
>
	<img class="icon" src="./AddIcon.png" alt="Add Step" />
	<p>Add Step</p>
</div>
<div class="spacer" />

<style>
	.addStep {
		display: flex;
		flex-direction: row;
		align-items: center;
		cursor: pointer;
		margin-top: 20px;
	}

	.spacer {
		width: 100px;
		padding-bottom: 100px;
	}

	img {
		width: 25px;
		height: 25px;
		margin-right: 10px;
	}
</style>
