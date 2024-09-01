import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../state/slice/filterByCategorySlice';
import { Link } from 'react-router-dom';
import { getOne } from '../state/slice/getOneProductSlice';
import { addProduct } from '../state/slice/cartSlice';

const Likes = ({ category, handleBuyNow }) => {
	const filteredProducts = useSelector((state) => state.filterByCategory.value);
	console.log(filteredProducts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changeCategory(category));
	}, []);
	const handleAddToCart = (data) => {
		dispatch(addProduct(data));
	};

	return (
		<div className='max-w-[1200px] mx-auto mt-44'>
			<h1 className='text-4xl'>You may also Like</h1>
			<div className='flex space-x-10 mt-5 overflow-scroll '>
				{filteredProducts.map((item, idx) => (
					<div key={idx} className='border rounded-lg min-w-[300px] p-4'>
						<img src={item.url} alt='' className='w-full h-2/3' />
						<div className='flex flex-col justify-between h-1/3'>
							<p className='text-xl font-semibold'>
								{item.title.length >= 16
									? `${item.title.slice(0, 16)}...`
									: item.title}
							</p>
							<div className='px-4 py-3 flex justify-between items-center bg-gray-100'>
								<Link to={`/product/${item.id}`} onClick={handleBuyNow}>
									<button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
										Buy Now
									</button>
								</Link>
								<button
									className='bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition'
									onClick={() => handleAddToCart(item)}
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Likes;
