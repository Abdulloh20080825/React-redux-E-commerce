import { createSlice } from '@reduxjs/toolkit';
import { productData } from '../../data/productData';

const initialState = {
	category: 'all',
	value: [...productData],
};

const filterByCategorySlice = createSlice({
	name: 'filterByCategory',
	initialState,
	reducers: {
		changeCategory: (state, action) => {
			state.category = action.payload;
			if (action.payload === 'all') {
				state.value = [...productData];
			} else {
				state.value = productData.filter(
					(product) => product.category === action.payload
				);
			}
		},
	},
});

export const { changeCategory } = filterByCategorySlice.actions;

export default filterByCategorySlice.reducer;
