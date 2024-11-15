import { combineReducers } from 'redux';
import authReducer from './auth';
import cartReducer from './cart';
import homeReducer from './home';
import wishlistReducer from './wishlist';

const rootReducer = combineReducers({
	auth: authReducer,
	cart: cartReducer,
	home: homeReducer,
	wishlist: wishlistReducer
});

export default rootReducer;
