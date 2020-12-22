import React from 'react';
import './Checkout.scss';
import { useStateValue } from '../StateProvider.js';
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal.js'
import Header from './Header'
import {indianCurrencyFormat} from '../reducer'

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();

	return(
		<>
			<Header />
			<div className="checkout">
				<div className="checkout_left">
				{
					basket?.length === 0 ? (
						<div>
							<h2 className="checkout_title">Your shopping basket is empty</h2>
							<p>
								You have no items in your basket. To buy one or more click on "Add to basket" next to the item.
							</p>
						</div>
					):(
						<div>
							<Subtotal />
							<h2 className="checkout_title">Your shopping basket</h2>
							{
								basket?.map(item=>(
									<CheckoutProduct key={item.id}
										id = {item.id}
										title = {item.title}
										image = {item.image}
										price = {indianCurrencyFormat(item.price)}
										rating = {item.rating}
									/>
								))
							}
							<Subtotal />
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Checkout;