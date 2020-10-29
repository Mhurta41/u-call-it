import React, { useState } from 'react';
import './Header.css';
import { Route, Link, Redirect } from 'react-router-dom';
import Home from './Home';
import Random from './Random';

const Header = () => {
	return (
		<div className='header'>
			<nav>
				<ul>
					<li>
						<Link to='/home'>
							<a className='logo-title' href='/'>
								<img src='https://i.imgur.com/EA6Hg8U.png' alt='U-Call-It' />
							</a>
						</Link>
					</li>
					<li>
						<Link to='/home'>
							<a className='logo-graphic' href='/'>
								<img src='https://i.imgur.com/ojp3Dft.png' alt='logo' />
							</a>
						</Link>
					</li>
				</ul>
				<div className='nav-buttons'>
					<ul>
						<li>
							<Link to='/home'>
								<h2>Home</h2>
							</Link>
						</li>
						<li className='bar'>
							<h2>|</h2>
						</li>
						<li>
							<Link to='/categories'>
								<h2>Categories</h2>
							</Link>
						</li>
						<li className='bar'>
							<h2>|</h2>
						</li>
						<li>
							<Link to='/random'>
								<h2>Random</h2>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
