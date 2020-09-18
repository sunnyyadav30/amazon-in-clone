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
					title="The lean startup: How constant innovation creates"
					price={2000}
					rating={3}
					image={require('../assets/products_images/mobiles/c2-32-b-rmx1941-realme-2-original-imaffnumygt8wgfx.jpeg')}
				/>
				<Product 
					id="1212132323"
					title="The lean startup: How constant innovation creates"
					price={2000}
					rating={3}
					image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/WFH/ProHomeOffice/Monitors_188x250._SY250_CB430606367_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product 
					id="1212132323"
					title="The lean startup: How constant innovation creates"
					price={2000}
					rating={3}
					image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/WFH/ProHomeOffice/Monitors_188x250._SY250_CB430606367_.jpg"
				/>
				<Product 
					id="1212132323"
					title="The lean startup: How constant innovation creates"
					price={2000}
					rating={3}
					image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/WFH/ProHomeOffice/Monitors_188x250._SY250_CB430606367_.jpg"
				/>
				<Product 
					id="1212132323"
					title="The lean startup: How constant innovation creates"
					price={2000}
					rating={3}
					image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/WFH/ProHomeOffice/Monitors_188x250._SY250_CB430606367_.jpg"
				/>
			</div>
		</div>
	)
}

export default Home;