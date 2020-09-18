export const initialState = {
	basket: [],
	user: null
}

export const getBasketTotal = (basket) => basket?.reduce((amount , item)=> item.price + amount, 0)

function reducer(state,action) {
	console.log(action)
	switch(action.type){
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