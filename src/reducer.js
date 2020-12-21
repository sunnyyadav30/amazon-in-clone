export const initialState = {
	basket: [],
	user: [
		{
			name: 'sunny',
			email: 'sunny@jubi.ai',
			mobile: '9892927287',
			password: 'Test@123'
		}
	],
	isAuthenticated: false,
	loggedInUser : [],
	products:[
		{
			id: '4321',
			title: 'Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)',
			image: '71-Su4Wr0HL._SY550_',
			price: 22999,
			rating: 4,
			category: 'mobile',
			brand: 'samsung'
		},
		{
			id: '4322',
			title: 'Redmi 9A (Midnight Black, 3GB Ram, 32GB Storage)',
			image: '712Ex7xDndL._SX569_',
			price: 7499,
			rating: 3,
			category: 'mobile',
			brand: 'xiaomi'
		},
		{
			id: '4323',
			title: 'New Apple iPhone 11 (64GB) - Black',
			image: '71i2XhHU3pL._SX569_',
			price: 51999,
			rating: 5,
			category: 'mobile',
			brand : 'apple'
		},
		{
			id: '4324',
			title: 'New Apple iPhone 11 (128GB) - Black',
			image: '71i2XhHU3pL._SX5690_',
			price: 58999,
			rating: 5,
			category: 'mobile',
			brand: 'apple'
		},
		{
			id: '4325',
			title: 'Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)',
			image: '710weRkP-nL._SY550_',
			price: 22999,
			rating: 4,
			category: 'mobile',
			brand : 'samsung'
		},
		{
			id: '4326',
			title: 'Apple iPhone 7 (32GB) - Black',
			image: '41D9NDiSzjL._SY550_',
			price: 23999,
			rating: 4,
			category: 'mobile',
			brand: 'apple'
		},
		{
			id: '4327',
			title: 'New Apple MacBook Air (13-inch, 1.1GHz Dual-core 10th-Generation Intel Core i3 Processor, 8GB RAM, 256GB Storage) - Space Grey',
			image: '811AygnQ-TL._SX569_',
			price: 79999,
			rating: 5,
			category: 'laptop',
			brand: 'apple'
		},
		{
			id: '4328',
			title: 'Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver',
			image: '51TdkJSqeQL._SX679_',
			price: 67999,
			rating: 4,
			category: 'laptop',
			brand: 'apple'
		},
		{
			id: '4329',
			title: 'New Apple MacBook Pro (13-inch, 8GB RAM, 512GB SSD, 1.4GHz Quad-core 8th-Generation Intel Core i5 Processor, Magic Keyboard) - Space Grey',
			image: '71YRSVXhgQL._SX569_',
			price: 142990,
			rating: 5,
			category: 'laptop',
			brand: 'apple'
		},
		{
			id: '4320',
			title: 'Dell Inspiron 7306 2in1 Touch Laptop 13.3" FHD / TGL-U i5 / 8GB / 512 SSD / Integrated Graphics/ 1 Yr NBD / Win 10 + MS Office H&S / Black) D560370WIN9B',
			image: '61NL89hfBkL._SX425_',
			price: 87490,
			rating: 4,
			category: 'laptop',
			brand: 'dell'
		},
		{
			id: '43221',
			title: 'ASUS VivoBook 15 Intel Core i5-1035G1 10th Gen 15.6-inch FHD Thin and Light Laptop (8GB RAM/1TB HDD + 256GB SSD/Windows 10/Integrated Graphics/Slate Grey/1.70 kg), X512JA-EJ851T',
			image: '81mZ4eDWYkL._SX522_',
			price: 56990,
			rating: 5,
			category: 'laptop',
			brand : 'asus'
		},
		{
			id: '43212',
			title: 'HP Pavilion x360 Touchscreen 2-in-1 FHD 14-inch Laptop 14-inch Laptop (10th Gen Core i5-10210U/8GB/512GB SSD/Win 10/MS Office/Mineral Silver/1.58 kg), 14-dh1179tu',
			image: '617clKqAqiL._SX425_',
			price: 63590,
			rating: 4,
			category: 'laptop',
			brand: 'hp'
		},
		{
			id: '43213',
			title: 'HP Pavilion Gaming DK0268TX 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics), Shadow Black',
			image: '617clKqAqiL._SX425_',
			price: 64490,
			rating: 4,
			category: 'laptop',
			brand : 'hp'
		},
		{
			id: '432114',
			title: 'MSI GL65 Leopard, Intel 9th Gen. i5-9300H, 15.6" FHD Gaming Laptop (8GB/512GB NVMe SSD/Windows 10 Home/Nvidia GTX 1650Ti/ Black/2.3Kg), 9SCSK-078IN',
			image: '81cBdLyWiGL._SX522_',
			price: 64990,
			rating: 4,
			category: 'laptop',
			brand : 'msi'
		},
		{
			id: '432124',
			title: 'Lenovo GXD0T69863 Legion H300 Stereo Gaming Headset',
			image: '61+8Nwmi2VL._SX679_',
			price: 1999,
			rating: 4,
			category: 'headphone',
			brand: 'lenovo'
		},
		{
			id: '432116',
			title: 'SanDisk Ultra Dual Drive Luxe Type C Flash Drive 128GB, 5Y - SDDDC4-128G-I35',
			image: '81gqM6ouEcL._SX522_',
			price: 1599,
			rating: 4,
			category: 'pendrive',
			brand : 'sandisk'
		},

		{
			id: '432117',
			title: 'Samsung Galaxy Tab A7 (10.4 inch, RAM 3 GB, ROM 32 GB, Wi-Fi-only), Grey',
			image: '71g9138yHKL._SY550_',
			price: 16999,
			rating: 4,
			category: 'tablet',
			brand: 'samsung'
		},{
			id: '432118',
			title: 'Lenovo Tab M10 FHD Plus Tablet (10.3-inch, 4GB, 128GB, Wi-Fi + LTE, Volte Calling), Platinum Grey',
			image: '81o5b7QHITL._SX569_',
			price: 19990,
			rating: 4,
			category: 'tablet',
			brand: 'lenovo'
		},
		{
			id: '432119',
			title: 'New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Silver (Latest Model, 8th Generation)',
			image: '7100EIwVWvL._SX569_',
			price: 29990,
			rating: 4,
			category: 'tablet',
			brand: 'apple'
		},
		{
			id: '432110',
			title: 'Apple iPad Mini (Wi-Fi, 64GB) - Space Grey',
			image: '81kzAlgOAIL._SY606_',
			price: 33660,
			rating: 4,
			category: 'mobile'
		}
	]
}

export const getBasketTotal = (basket) => basket?.reduce((amount , item)=> item.price + amount, 0)

export const indianCurrencyFormat = (number)=>{
	let lastThree = number.toString().substring(number.toString().length-3);
    let otherNumbers = number.toString().substring(0,number.toString().length-3);
    if(otherNumbers !== ''){
        lastThree = ',' + lastThree;
    }
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}

export const checkCredentials = (userName,password)=>{
	let obj = {} 
	initialState.user.filter(element=>{
		console.log(element)
		if((element.email === userName || element.mobile === userName) && element.password === password){
			obj = {
				...initialState,
				isAuthenticated: true,
				loggedInUser: element
			}
		}
		else{
			obj = {
				isAuthenticated: false
			}
		}
	})
	console.log(obj)
	return obj
}

export const isEmailExist= (email)=>{
	let obj = false
	initialState.user.filter(element=>{
		console.log(element)
		if(element.email === email){
			obj = true
		}
		else{
			obj = false
		}
	})
	return obj
}

export const isMobileExist = (mobile)=>{
	let obj = false
	initialState.user.filter(element=>{
		if(element.mobile === mobile){
			obj = true
		}
		else{
			obj = false
		}
	})
	return obj
}
export const checkExistedUserName = (mobile,email)=>{
	let obj ={}
	initialState.user.filter(element=>{
		console.log(element)
		if(element.email === email){
			obj = {
				isUserNameExist: true,
				message: ""
			}
		}
		else if(element.mobile === mobile){
			obj = {
				isUserNameExist: true,
			}
		}
		else{
			obj = {
				isUserNameExist: false,
			}
		}
	})
	return obj
}

function reducer(state,action) {
	console.log(action)
	console.log(state)
	switch(action.type){
		case 'ADD_USER':
			return {
				...state,
				user: [...state.user, action.user]
			}
			break;
		case 'ADD_TO_BASKET':
			//logic for adding item to basket
			return {
				...state,
				basket: [...state.basket, action.item]
			}
			break;
		case 'REMOVE_FROM_BASKET':
			//Logic for removing item from basket
			let newBasket = [...state.basket]
			const index = state.basket.findIndex((basketItem) => basketItem.id = action.id)
			if(index >= 0){
				console.log('remove')
				//item exist in basket
				newBasket.splice(index, 1);
			}
			else{
				console.warn(`Cant remove product (id: ${action.id}) as it its not in basket`)
			}
			return { 
				...state,
				basket: newBasket
			}
			break;
		default:
			return state;
	}
}

export default reducer;