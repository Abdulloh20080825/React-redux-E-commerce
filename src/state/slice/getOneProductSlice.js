import { createSlice } from '@reduxjs/toolkit';
import { productData } from '../../data/productData';

const getOneProductSlice = createSlice({
	name: 'getOneProductSlice',
	initialState: [],
	reducers: {
		getOne: (state, action) => {
			return (state = productData.filter((x) => x.id === action.payload));
		},
	},
});

export const { getOne } = getOneProductSlice.actions;

export default getOneProductSlice.reducer;
