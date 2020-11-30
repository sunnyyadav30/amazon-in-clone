import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider.js'

function Header() {
	const [{basket}] = useStateValue();

	return(
		<nav className="header">
			<Link to="/">
				<img className="header__logo" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
			</Link>
			<div className="header_search">
				<input type="text" className="header_searchInput"/>
				<SearchIcon className="header_searchIcon" />
			</div>
			<div className="header__nav">
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Hello</span>
						<span className="header__optionLineTwo">Sign In</span>
					</div>
				</Link>
				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
				<Link to="/checkout" className="header__link">
					<div className="header__option">
						<div className="header_optionBasket">
							<ShoppingBasketIcon />
							<span className="header__optionLineTwo header__optionBasketCount">{basket?.length}</span>
						</div>
					</div>
				</Link>
			</div>
		</nav>
	)
}

export default Header