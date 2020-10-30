import React from 'react';
import './App.css';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Home from './Components/Home';
import Random from './Components/Random';
import CocktailDetails from './Components/CocktailDetails';
import { Route, Redirect } from 'react-router-dom';

const App = () => {
	return (
		<div className='body-app'>
			<Header />
			<main>
				<img
					className='banner'
					src='https://i.imgur.com/nXoPJx3.png'
					alt='banner'
				/>
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route path='/home' exact component={Home} />
				<Route path='/categories' exact component={Categories} />
				<Route path='/random' exact component={Random} />
				<Route path='/cocktaildetails' exact component={CocktailDetails} />
			</main>
		</div>
	);
};

export default App;
