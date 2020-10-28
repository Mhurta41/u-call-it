import React from 'react';
import "./Header.css"


const Header = () => {
    return (
			<div className='header'>
				<nav>
					<ul>
						<li>
							<a className='logo-title' href='/'>
								<img src='https://i.imgur.com/EA6Hg8U.png' alt='U-Call-It' />
							</a>
						</li>
						<li>
							<a className='logo-graphic' href='/'>
								<img src='https://i.imgur.com/ojp3Dft.png' alt='logo' />
							</a>
						</li>
                        </ul>
                        <div className="nav-buttons">
                        <ul>
						    <li>
							<a href='/'>Home</a>
						</li>
						<li className='bar'>|</li>
						<li>
							<a href='/'>Categories</a>
						</li>
						<li className='bar'>|</li>
						<li>
							<a href='/'>Random</a>
						</li>
					    </ul>
                    </div>
				</nav>
			</div>
		);
};

export default Header;