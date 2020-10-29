import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

const Categories = () => {
	return (
		<>
			<h1 className='title'>Categories</h1>
			<section className='container'>
				<div className='card'>
					<div className='card-image'>
						<img src='https://i.imgur.com/7ykCky6.jpg' alt='alcoholic-drink' />
					</div>
					<h2 className='category-title'>Alcoholic</h2>
				</div>
				<div className='card'>
					<div className='card-image'>
						<img
							src='https://i.imgur.com/lwnbwNb.jpg'
							alt='non-alcoholic-drink'
						/>
					</div>
					<h2 className='category-title'>Non-Alcoholic</h2>
				</div>
				<div className='card'>
					<div className='card-image'>
						<img src='https://i.imgur.com/xk103ud.jpg' alt='eggnog' />
					</div>
					<h2 className='category-title'>Optional Alcohol</h2>
				</div>
			</section>
		</>
	);
};

export default Categories;
