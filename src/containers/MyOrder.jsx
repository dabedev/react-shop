import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';

import arrowSign from '@icons/flechita.svg';

const MyOrder = ({ setToggleOrders }) => {
	const { initialState, cartTotal } = useContext(AppContext);
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrowSign} alt="arrow" onClick={() => setToggleOrders(prevToggleOrders => !prevToggleOrders)} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<div className='my-order-list'>
					{initialState.state.cart.map((product, index) => (
						<OrderItem index={index} key={product.id} product={product} />
					))}
				</div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${cartTotal.updateValue(initialState.state.cart)}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
