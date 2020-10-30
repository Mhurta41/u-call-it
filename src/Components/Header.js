import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<nav>
				<ul>
					<li className='navigation-bar'>
						<Link to='/home'>
							<a href='/'>
								<img
									className='logo-title'
									src='https://i.imgur.com/EA6Hg8U.png'
									alt='U-Call-It'
								/>
							</a>
						</Link>
					</li>
					<li className='navigation-bar'>
						<Link to='/home'>
							<a href='/'>
								<img
									className='logo-graphic'
									src='https://i.imgur.com/ojp3Dft.png'
									alt='logo'
								/>
							</a>
						</Link>
					</li>
				</ul>
				<div className='nav-div'>
					<ul>
						<li className='navigation-bar'>
							<Link to='/home'>
								<h2>Home</h2>
							</Link>
						</li>
						<li className='bar navigation-bar'>
							<h2>|</h2>
						</li>
						<li className='navigation-bar'>
							<Link to='/about'>
								<h2>About</h2>
							</Link>
						</li>
						<li className='bar navigation-bar'>
							<h2>|</h2>
						</li>
						<li className='navigation-bar'>
							<Link to='/categories'>
								<h2>Categories</h2>
							</Link>
						</li>
						<li className='bar navigation-bar'>
							<h2>|</h2>
						</li>
						<li className='navigation-bar'>
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
