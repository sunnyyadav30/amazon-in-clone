import React from 'react';
import './Home.scss';
import Product from './Product.js'

function Home(){
	return(
		<div className="home">
			<img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
			<div className="home__row">
				<Product 
					id="1212132323"
					title="Samsung Galaxy M01 (Black, 3GB RAM, 32GB Storage)"
					price={9999}
					rating={4}
					image={require('../assets/products_images/mobiles/c2-32-b-rmx1941-realme-2-original-imaffnumygt8wgfx.jpeg')}
				/>
				<Product 
					id="1212132324"
					title="OnePlus 7T Glacier Blue (8GB RAM+256GB Storage)"
					price={37999}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SX679_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product 
					id="1212132323"
					title="Lenovo IdeaCentre AIO 3 21.5-inch Full HD All in One Desktop (AMD Ryzen 3/8GB/1TB HDD/Windows 10/MS Office 2019/Integrated AMD Radeon Graphics)"
					price={36990}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/81XxfD6a3PL._SX522_.jpg"
				/>
				<Product 
					id="1212132323"
					title="Lenovo IdeaCentre AIO 330 19.5-inch All-in-One Desktop (Intel Celeron J4025/4GB/1TB HDD/DOS/Integrated Intel UHD Graphics), Black (F0D7008DIN)"
					price={21490}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/712NGnu3beL._SX569_.jpg"
				/>
				<Product 
					id="1212132323"
					title="HP All-in-One PC 20-c406il Desktop (Celeron J4005/4GB/1TB HDD/DOS/Intel UHD 600 Graphics), Jet Black"
					price={22990}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/81rd0nGDq3L._SX679_.jpg"
				/>
			</div>
		</div>
	)
}

export default Home;