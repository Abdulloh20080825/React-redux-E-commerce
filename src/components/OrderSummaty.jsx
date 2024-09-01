import { Link, useLocation } from 'react-router-dom';

const OrderSummaty = ({ carts }) => {
	const location = useLocation();
	return (
		<>
			<p className='bg-gray-200 px-5 py-3 font-medium text-xl'>Order Summary</p>
			<div className='px-5 py-3'>
				<div className='flex items-center justify-between mb-4'>
					<p>Products({carts.length})</p>
					<p>
						$
						{carts
							.reduce((acc, item) => acc + item.total * item.cost, 0)
							.toFixed(2)}
					</p>
				</div>
				<div className='flex items-center justify-between mb-4'>
					<p>Shipping</p>
					<p>$30</p>
				</div>
				<div className='flex items-center justify-between mb-4 font-bold'>
					<p>Total amount</p>
					<p>
						$
						{(
							carts.reduce((acc, item) => acc + item.total * item.cost, 0) + 30
						).toFixed(2)}
					</p>
				</div>
				{location.pathname === '/cart' ? (
					<Link to={'/checkout'}>
						<button className='bg-black text-white w-full py-3 rounded-xl text-xl font-medium'>
							Go To checkout
						</button>
					</Link>
				) : null}
			</div>
		</>
	);
};

export default OrderSummaty;
