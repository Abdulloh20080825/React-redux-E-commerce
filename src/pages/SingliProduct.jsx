import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addProduct } from '../state/slice/cartSlice';
import Likes from '../components/Likes';
import { getOne } from '../state/slice/getOneProductSlice';

const SingliProduct = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector((state) =>
		state.product.find((item) => item.id === parseInt(id))
	);

	const handleBuyNow = () => {
		dispatch(getOne(product.id));
	};

	if (!product) {
		return (
			<div className='mt-28 max-w-[1200px] mx-auto'>Product not found</div>
		);
	}

	return (
		<div className='mt-28 max-w-[1200px] mx-auto px-4'>
			<div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10'>
				<img
					src={product.url}
					alt={product.title}
					className='w-full md:w-[400px] h-auto object-cover'
				/>
				<div className='mt-5'>
					<p className='text-lg text-gray-500 uppercase tracking-wide'>
						{product.categoryTitle}
					</p>
					<h1 className='text-3xl md:text-4xl font-semibold mt-2'>
						{product.title}
					</h1>
					<div className='flex items-center mt-3'>
						<p className='text-lg text-gray-700 mr-2'>{product.rating}</p>
						<span className='text-yellow-500'>★ {product.star}</span>
					</div>
					<p className='mt-3 text-xl md:text-2xl font-bold'>${product.cost}</p>
					<p className='mt-5 text-base md:text-lg text-gray-700'>
						{product.description}
					</p>
					<div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-5'>
						<button
							className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
							onClick={() => dispatch(addProduct(product))}
						>
							Add to Cart
						</button>
						<Link to={'/cart'}>
							<button className='bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition'>
								Go to Cart
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Likes category={product.category} handleBuyNow={handleBuyNow} />
		</div>
	);
};

export default SingliProduct;
