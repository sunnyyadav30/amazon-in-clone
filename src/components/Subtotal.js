import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider.js';
import { getBasketTotal } from '../reducer.js';
import './Subtotal.scss'

function Subtotal(){
	const [{ basket }, dispatch] = useStateValue();

	return(
		<div className="subtotal">
			<CurrencyFormat
				renderText = {(value) => (
					<>
					<p>
						Subtotal ({basket.length} items): <strong>₹ {getBasketTotal(basket)}</strong>
					</p>
					<small className="subtotal_gifts">	
						<input type="checkbox"  />
						This order contains gift
					</small>
					</>
				)}
				decimalState = {2}
				value = {getBasketTotal(basket)}
				displayType = {"text"}
				thousandSeparator = {true}
				prefix = {"₹"}
			/>
			<button>Proceed to checkout</button>
		</div>
	)
}

export default Subtotal;