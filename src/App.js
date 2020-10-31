import React from 'react';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Categories from './Components/Categories';
import Random from './Components/Random';
import Alcoholic from './Components/Alcoholic';
import Nonalcoholic from './Components/NonAlcoholic';
import OptionalAlcohol from './Components/OptionalAlcohol';
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
				<Route path='/alcoholic' component={Alcoholic} />
				<Route path='/nonalcoholic' component={Nonalcoholic} />
				<Route path='/optional-alcohol' component={OptionalAlcohol} />
				<Route
					path='/cocktaildetails/:id'
					render={(routerProps) => {
						return <CocktailDetails match={routerProps.match} />;
					}}
				/>
			</main>
		</div>
	);
};

export default App;
