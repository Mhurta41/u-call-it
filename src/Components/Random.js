import React, { useState, useEffect } from 'react';

const Random = () => {
	const [randomDrink, setRandomDrink] = useState(null);
	const [ingredients, setIngredients] = useState([]);
	const defineIngredients = (drink) => {
		let temp = [];
		for (let i = 1; i <= 15; i++) {
			const currentIngredient = drink[`strIngredient${i}`];
			if (!currentIngredient) {
				break;
			}
			temp.push(currentIngredient);
		}
		setIngredients(temp);
	};

	const renderIngredients = () => {
		return (
			<ul>
				{ingredients.map((ingredient) => {
					return <li>{ingredient}</li>;
				})}
			</ul>
		);
	};

	useEffect(() => {
		const randomUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
		fetch(randomUrl)
			.then((res) => res.json())
			.then((json) => {
				setRandomDrink(json.drinks[0]);
				defineIngredients(json.drinks[0]);
			})
			.catch(console.error);
	}, []);
	if (!randomDrink) {
		return null;
	}
	return (
		<div>
			<h1>Random Component</h1>
			<h1>{randomDrink.strDrink}</h1>
			<h2>{randomDrink.strCategory}</h2>
			<img
				className='drink-thumbnail'
				src={randomDrink.strDrinkThumb}
				alt='random-drink'
			/>
			Ingredients:
			{renderIngredients()}
			<p>
				Instructions:
				{randomDrink.strInstructions}
				Recommended glass:
				{randomDrink.strGlass}
			</p>
		</div>
	);
};

export default Random;
