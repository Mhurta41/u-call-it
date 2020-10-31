import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

const Categories = () => {
	return (
		<>
			<h1 className='title'>Categories</h1>
			<section className='container'>
				<Link to='/alcoholic'>
					<div className='card'>
						<div className='card-image'>
							<img
								src='https://i.imgur.com/7ykCky6.jpg'
								alt='alcoholic-drink'
							/>
						</div>
						<h2 className='category-title'>Alcoholic</h2>
					</div>
				</Link>
				<Link to='/nonalcoholic'>
					<div className='card'>
						<div className='card-image'>
							<img
								src='https://i.imgur.com/lwnbwNb.jpg'
								alt='non-alcoholic-drink'
							/>
						</div>
						<h2 className='category-title'>Non-Alcoholic</h2>
					</div>
				</Link>
				<Link to='/optional-alcohol'>
					<div className='card'>
						<div className='card-image'>
							<img src='https://i.imgur.com/gjRVpZA.jpg' alt='eggnog' />
						</div>
						<h2 className='category-title'>Optional Alcohol</h2>
					</div>
				</Link>
			</section>
		</>
	);
};

export default Categories;
