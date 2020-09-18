import React from 'react';
import "./CheckoutProduct.scss";
import { useStateValue } from "../StateProvider.js";

function CheckoutProduct({id, title, image, price, rating}) {

	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = ()=>{
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
			title: title,
			price: price,
			rating: rating,
			image: image,
		})
	}

	return (
		<div className="checkout__product">
			<img src={image} alt="" />
			<div className="checkout_product_info">
				<p className="checkout__product_title">{title}</p>
				<p className="checkout__product_price">
					<small>₹</small>
					<strong>{price}</strong>
				</p>
				<div className="checkout_product_rating">
					{Array(rating)
					.fill()
					.map((_,i)=>(
						<p key={i}>⭐</p>
					))}
				</div>
				<button onClick={removeFromBasket}>Remove from basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;