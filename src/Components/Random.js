import React, { useState, useEffect } from 'react';

const Random = () => {
	const [randomDrink, setRandomDrink] = useState(null);
	useEffect(() => {
		const randomUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
		fetch(randomUrl)
			.then((res) => res.json())
			.then((json) => {
				setRandomDrink(json.drinks[0]);
				console.log(json);
			})
			.catch(console.error);
	}, []);
	if (!randomDrink) {
		return null;
	}
	return (
		<div>
			{/* <Header /> */}
			<h1>Random Component</h1>
			<h1>{randomDrink.strDrink}</h1>
			<h2>{randomDrink.strCategory}</h2>
			<img
				className='drink-thumbnail'
				src={randomDrink.strDrinkThumb}
				alt='random-drink'
			/>
			<p>
				Instructions:
				{randomDrink.strInstructions}
				Recommended glass:
				{randomDrink.strGlass}
				{randomDrink.strIngredient1}:{randomDrink.strMeasure1}
				{randomDrink.strIngredient2}:{randomDrink.strMeasure2}
				{randomDrink.strIngredient3}:{randomDrink.strMeasure3}
				{randomDrink.strIngredient4}:{randomDrink.strMeasure4}
				{randomDrink.strIngredient5}:{randomDrink.strMeasure5}
				{randomDrink.strIngredient6}:{randomDrink.strMeasure6}
				{randomDrink.strIngredient7}:{randomDrink.strMeasure7}
				{randomDrink.strIngredient8}:{randomDrink.strMeasure8}
				{randomDrink.strIngredient9}:{randomDrink.strMeasure9}
				{randomDrink.strIngredient10}:{randomDrink.strMeasure10}
				{randomDrink.strIngredient11}:{randomDrink.strMeasure11}
				{randomDrink.strIngredient12}:{randomDrink.strMeasure12}
				{randomDrink.strIngredient13}:{randomDrink.strMeasure13}
				{randomDrink.strIngredient14}:{randomDrink.strMeasure14}
				{randomDrink.strIngredient15}:{randomDrink.strMeasure15}
			</p>
		</div>
	);
};

export default Random;
