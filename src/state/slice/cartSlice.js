import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addProduct: (state, action) => {
			const existingProduct = state.find(
				(product) => product.id === action.payload.id
			);
			if (existingProduct) {
				existingProduct.total += 1;
			} else {
				state.push({ ...action.payload, total: 1 });
			}
		},

		incrementProduct: (state, action) => {
			const product = state.find((product) => product.id === action.payload.id);
			if (product) {
				product.total += 1;
			}
		},
		decrementProduct: (state, action) => {
			const product = state.find((product) => product.id === action.payload.id);
			if (product.total > 1) {
				product.total -= 1;
			} else {
				return state.filter((product) => product.id !== action.payload.id);
			}
		},
	},
});

export const { addProduct, incrementProduct, decrementProduct } =
	cartSlice.actions;

export default cartSlice.reducer;
