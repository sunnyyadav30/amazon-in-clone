import React, {useRef} from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider.js'
import {initialState} from '../reducer'

function Header() {
	const [{basket}] = useStateValue();
	const signOutButton = useRef(null)
	const cartButton = useRef(null)
	const showSignOut = ()=>{
		signOutButton.current.style.display = "block"
	}
	const hideSignOut = ()=>{
		// signOutButton.current.style.display = "none"
	}
	const showCartButton = ()=>{
		cartButton.current.style.display = "flex"
	}
	const hideCartButton = ()=>{
		// cartButton.current.style.display = "none"
	}
	return(
		<nav className="header">
			<Link to="/">
				<h2>Shop Now</h2>
			</Link>
			<div className="header_search">
				<input type="text" className="header_searchInput"/>
				<SearchIcon className="header_searchIcon" />
			</div>
			<div className="header__nav">
				<div className="header__link">
					<div className="header__option" onMouseEnter={showSignOut} onMouseLeave={hideSignOut}>
						<span className="header__optionLineOne">Hello</span>
						{/* <span className="header__optionLineTwo">{initialState.loggedInUser[0].name}</span> */}
						<div className="header__signOut" ref={signOutButton}>
							<button>Sign out</button>
						</div>
					</div>
				</div>
				<div className="header__link">
					<div className="header__option">
						<div className="header_optionBasket" onMouseEnter={showCartButton} onMouseLeave={hideCartButton}>
							<ShoppingBasketIcon />
							<span className="header__optionLineTwo header__optionBasketCount">{basket?.length}</span>
						</div>
						<div className="header__cart" ref={cartButton}>
							<Link to="/checkout" className="header__link">View Cart</Link>
							<button>Empty Cart</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header