import React from 'react';
import './Home.scss';
import Product from './Product.js'
import Header from './Header'
import { useStateValue } from '../StateProvider.js';
import {indianCurrencyFormat} from '../reducer'

function Home(){
	const [{ products }, dispatch] = useStateValue();
	return(
		<>
			<Header />
			<div className="home">
				<img className="home__image" src={require('../assets/home.jpg')} />
				<div className="home__row">
					{
						products.map(item=>(
							<Product 
								
								key={item.id}
								id={item.id}
								title= {item.title}
								price={indianCurrencyFormat(item.price)}
								rating={item.rating}
								image={require(`../assets/${item.image}.jpg`)}
							/>
						))
					}
				</div>
			</div>
		</>
	)
}

export default Home;