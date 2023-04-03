import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

const ProductItem = (props) => {
	const { initialState } = useContext(AppContext);
	const { addToCart, removeFromCart, state } = initialState;
	const { product } = props;

	const isOnCart = (payload) => state.cart.some(product => product.id == payload.id) ? true : false;

	const handleClick = payload => {
		isOnCart(payload) ? removeFromCart(payload) : addToCart(payload);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={isOnCart(product) ? addedToCartImage : addToCartImage} alt="" />
				</figure>
			</div>
		</div >
	);
}

export default ProductItem;
