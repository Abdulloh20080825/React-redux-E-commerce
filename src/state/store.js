import { configureStore } from '@reduxjs/toolkit';
import filterByCategorySlice from './slice/filterByCategorySlice';
import cartSlice from './slice/cartSlice';
import getOneProductSlice from './slice/getOneProductSlice';

export const store = configureStore({
	reducer: {
		filterByCategory: filterByCategorySlice,
		cart: cartSlice,
		product: getOneProductSlice,     
	},
});
