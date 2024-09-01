import React from 'react';
import ProductListItem from './ProductListItem';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../state/slice/cartSlice';

const ProductList = () => {
	const filteredProducts = useSelector((state) => state.filterByCategory.value);
	const dispatch = useDispatch();
	const handleAddToCart = (data) => {
		dispatch(addProduct(data));
	};

	return (
		<div className='max-w-[1200px] mx-auto mt-14'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
				{filteredProducts.map((item, idx) => (
					<ProductListItem
						key={idx}
						data={item}
						handleAddToCart={handleAddToCart}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductList;
