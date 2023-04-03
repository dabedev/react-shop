import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import icon from '@icons/icon_menu.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import yardSale from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';

const Header = () => {

	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { initialState } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(prevToggle => !prevToggle);
	}

	const handleToggleOrders = () => {
		setToggleOrders(prevToggleOrders => !prevToggleOrders)
	}

	return (
		<nav>
			<img src={icon} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={yardSale} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
					<li className="navbar-shopping-cart" onClick={handleToggleOrders}>
						<img src={shoppingCart} alt="shopping cart" />
						{initialState.state.cart.length > 0 ? <div>{initialState.state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder setToggleOrders={setToggleOrders} />}
		</nav>
	);
}

export default Header;
