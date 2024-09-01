import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOne } from '../state/slice/getOneProductSlice';

const ProductListItem = ({ data, handleAddToCart }) => {
	const dispatch = useDispatch();

	const handleBuyNow = () => {
		dispatch(getOne(data.id));
	};

	return (
		<div className='border rounded-lg shadow-lg overflow-hidden flex flex-col'>
			<div className='px-4 py-6 flex-1 flex justify-center items-center bg-white'>
				<img
					src={data.url}
					alt={data.title}
					className='h-full w-auto max-h-40 object-contain'
				/>
			</div>
			<div className='px-4 py-3 flex-1 flex flex-col justify-between'>
				<div className='mb-3'>
					<h3 className='text-lg font-semibold text-gray-800 truncate'>
						{data.title}
					</h3>
					<p className='text-sm text-gray-600 truncate'>{data.description}</p>
				</div>
				<div className='mt-auto'>
					<hr className='my-3' />
					<p className='text-xl font-bold text-gray-800'>${data.cost}</p>
				</div>
			</div>
			<div className='px-4 py-3 flex justify-between items-center bg-gray-100'>
				<Link to={`/product/${data.id}`} onClick={handleBuyNow}>
					<button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>
						Buy Now
					</button>
				</Link>
				<button
					className='bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition'
					onClick={() => handleAddToCart(data)}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductListItem;
