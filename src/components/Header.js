import React, { useRef, useState } from 'react'
import './Header.scss'
import {Link,useHistory} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../StateProvider.js'
import Dropdown from '@material-ui/icons/ArrowDropDown'
import {initialState} from '../reducer'

function Header() {
	const [{basket},dispatch] = useStateValue();
	const signOutButton = useRef(null)
	const cartButton = useRef(null)
	const [search,setSearch] = useState('')
	const history = useHistory();
	const logout = ()=>{
		initialState.isAuthenticated = false
		initialState.loggedInUser.length = 0
		history.push('/login')
	}
	const emptyCart = ()=>{
		dispatch({
			type: "EMPTY_CART"
		})
	}
	const showSignOut = ()=>{
		signOutButton.current.style.display = "flex"
	}
	const showCartButton = ()=>{
		cartButton.current.style.display = "flex"
	}
	const hideDropDown = ()=>{
		cartButton.current.style.display = "none"
		signOutButton.current.style.display = "none"
	}
	const searchProduct = ()=>{

	}

	return(
		<nav className="header" onMouseLeave={hideDropDown}>
			<Link to="/">
				<h2>Shop Now</h2>
			</Link>
			<div className="header_search">
				<div className="header__searchBox">
					<input type="text" className="header_searchInput" value={search} onChange={(e)=>setSearch(e.target.value)}/>
					<div className="header__dropdownList">

					</div>
				</div>
				<SearchIcon className="header_searchIcon" onClick={searchProduct}/>
			</div>
			<div className="header__nav">
				<div className="header__link header__link__sm">
					<div className="header__option" onMouseEnter={showSignOut}>
						<span className="header__optionLineOne">Hello
							<Dropdown />
						</span>
						<span className="header__optionLineTwo">{initialState.loggedInUser[0].name}</span>
						<div className="header__signOut" ref={signOutButton}>
							<Link to="/profile">View profile</Link>
							<button onClick={logout}>Sign out</button>
						</div>
					</div>
				</div>
				<div className="header__link">
					<div className="header__option">
						<div className="header_optionBasket" onMouseEnter={showCartButton}>
							<ShoppingBasketIcon />
							<span className="header__optionLineTwo header__optionBasketCount">{basket?.length}</span>
						</div>
						<div className="header__cart" ref={cartButton}>
							<Link to="/checkout" className="header__link">View Cart</Link>
							<button onClick={emptyCart}>Empty Cart</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header