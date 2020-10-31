// import React, { useState, useEffect } from 'react';

// const CocktailDetails = () => {
// 	const [drink, setDrink] = useState(null);
// 	useEffect(() => {
// 		const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?${drink.strDrink}`;
// 		fetch(drinkUrl)
// 			.then((res) => res.json())
// 			.then((json) => {
// 				setDrink(json.drinks[0]);
// 				console.log(json);
// 			})
// 			.catch(console.error);
// 	}, []);
// 	if (!drink) {
// 		return null;
// 	}
// 	return (
// 		<div>
// 			<h1>{drink.strDrink}</h1>
// 			<h2>{drink.strCategory}</h2>
// 			<img className='drink-thumbnail' src={drink.strDrinkThumb} alt='drink' />
// 			<p>
// 				Instructions:
// 				{drink.strInstructions}
// 				Recommended glass:
// 				{drink.strIngredient1}:{drink.strMeasure1}
// 				{drink.strGlass}
// 				{drink.strIngredient2}:{drink.strMeasure2}
// 				{drink.strIngredient3}:{drink.strMeasure3}
// 				{drink.strIngredient4}:{drink.strMeasure4}
// 				{drink.strIngredient5}:{drink.strMeasure5}
// 				{drink.strIngredient6}:{drink.strMeasure6}
// 				{drink.strIngredient7}:{drink.strMeasure7}
// 				{drink.strIngredient8}:{drink.strMeasure8}
// 				{drink.strIngredient9}:{drink.strMeasure9}
// 				{drink.strIngredient10}:{drink.strMeasure10}
// 				{drink.strIngredient11}:{drink.strMeasure11}
// 				{drink.strIngredient12}:{drink.strMeasure12}
// 				{drink.strIngredient13}:{drink.strMeasure13}
// 				{drink.strIngredient14}:{drink.strMeasure14}
// 				{drink.strIngredient15}:{drink.strMeasure15}
// 			</p>
// 		</div>
// 	);
// };

// export default CocktailDetails;
import React from 'react';

const CocktailDetails = () => {
	return (
		<div>
			<h1>Cocktail Details</h1>
		</div>
	);
};

export default CocktailDetails;
