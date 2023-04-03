import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';

import closeIcon from '@icons/icon_close.png';

const OrderItem = (props) => {
	const { initialState } = useContext(AppContext);
	const { product, index } = props;
	const handleClick = (productItem) => {
		initialState.removeFromCart(productItem);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={closeIcon} onClick={() => handleClick(index)} alt="close" />
		</div>
	);
}

export default OrderItem;
