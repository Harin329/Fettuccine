<div class="step">
	<h4>Step 1:</h4>
	<div class="stepContainer">
		<textarea class="recipeDescription" placeholder="Enter step instructions..." />
		<img class="icon" src="./DeleteIcon.png" alt="Delete" />
	</div>
	<div class="stepContainer2">
		<div class="inputSection">
			<h4>Ingredients:</h4>
			<input class="largeInput" placeholder="Enter step ingredients..." />
		</div>
		<div class="inputSection">
			<h4>Step Time:</h4>
			<input class="smallInput" placeholder="0" />
			<p>mins</p>
		</div>
	</div>
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
