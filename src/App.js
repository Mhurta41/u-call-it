import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Categories from './Components/Categories';
import Alcoholic from './Components/Alcoholic';
import Nonalcoholic from './Components/NonAlcoholic';
import OptionalAlcohol from './Components/OptionalAlcohol';
import Home from './Components/Home';
import Random from './Components/Random';
import CocktailDetails from './Components/CocktailDetails';
import { Route, Redirect } from 'react-router-dom';

const App = () => {
	return (
		<div className='body-app'>
			<Header />
			<main>
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route path='/home' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/categories' component={Categories} />
				<Route path='/random' component={Random} />
				<Route path='/cocktaildetails' component={CocktailDetails} />
				<Route path='/alcoholic' component={Alcoholic} />
				<Route path='/nonalcoholic' component={Nonalcoholic} />
				<Route path='/optional-alcohol' component={OptionalAlcohol} />
			</main>
		</div>
	);
};

export default App;
