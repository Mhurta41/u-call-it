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
import SearchResults from './Components/SearchResults';
import { Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const App = () => {
	return (
		<div className='body-app'>
			<Helmet>
				<meta charSet='utf-8' />
				<title>U-Call-It!</title>
				<link rel='icon' type='image/png' href='favicon.png' sizes='16x16' />
			</Helmet>
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
				<Route path='/searchresults' component={SearchResults} />
			</main>
		</div>
	);
};

export default App;
