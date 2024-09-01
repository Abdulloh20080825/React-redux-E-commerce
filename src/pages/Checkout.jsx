import { useRef } from 'react';
import OrderSummaty from '../components/OrderSummaty';
import { useSelector } from 'react-redux';
import { countries } from '../data/countryData';
import { regions } from '../data/stateCountryData';
import { input } from '../style/inputStyle';

const Checkout = () => {
	const carts = useSelector((state) => state.cart);
	const refExpiration = useRef();

	const cartNumberChangeHandler = (e) => {
		const value = e.target.value;
		if (value.length === 16) {
			refExpiration.current.focus();
		}
	};

	return (
		<div className='max-w-[1200px] mx-auto mt-28 px-4 sm:px-6 lg:px-8'>
			<p className='text-3xl sm:text-4xl lg:text-5xl text-center font-medium'>
				Checkout
			</p>
			<hr className='my-5' />
			<div className='flex flex-col lg:flex-row mt-24 space-x-0 lg:space-x-5'>
				<form className='w-full lg:w-2/3 rounded-xl overflow-hidden border p-5'>
					<p className='bg-gray-200 px-5 py-3 font-medium text-xl border'>
						Billing address
					</p>
					<div className='px-5 py-2'>
						<div className='flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-3 mb-5'>
							<div className='flex flex-col space-y-2 w-full lg:w-1/2'>
								<label htmlFor='firstName'>First name</label>
								<input
									type='text'
									placeholder='First Name'
									className={input}
									autoComplete='off'
									name='firstName'
									id='firstName'
								/>
							</div>
							<div className='flex flex-col space-y-2 w-full lg:w-1/2'>
								<label htmlFor='lastName'>Last Name</label>
								<input
									type='text'
									placeholder='Last Name'
									className={input}
									autoComplete='off'
									name='lastName'
									id='lastName'
								/>
							</div>
						</div>
						<div className='flex flex-col space-y-2 mb-4'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								placeholder='example@gmail.com'
								className={input}
								autoComplete='off'
								name='email'
								id='email'
							/>
						</div>

						<div className='flex flex-col space-y-2 mb-4'>
							<label htmlFor='address'>Address</label>
							<input
								type='text'
								placeholder='1234 Main St'
								className={input}
								autoComplete='off'
								name='address'
								id='address'
							/>
						</div>
						<div className='flex flex-col space-y-2 mb-4'>
							<label htmlFor='address2'>
								Address 2 <span className='text-gray-500'>(optional)</span>
							</label>
							<input
								type='text'
								placeholder='Apartment or suite'
								className={input}
								autoComplete='off'
								name='address2'
								id='address2'
							/>
						</div>
						<div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4'>
							<div className='flex flex-col space-y-2 w-full lg:w-1/3'>
								<label htmlFor='country'>Country</label>
								<select name='country' id='country' className={`p-2 ${input}`}>
									{countries.map((country, index) => (
										<option key={index} value={country}>
											{country}
										</option>
									))}
								</select>
							</div>
							<div className='flex flex-col space-y-2 w-full lg:w-1/3'>
								<label htmlFor='state'>State</label>
								<select name='state' id='state' className={`p-2 ${input}`}>
									{regions.map((region, index) => (
										<option key={index} value={region}>
											{region}
										</option>
									))}
								</select>
							</div>
							<div className='flex flex-col space-y-2 w-full lg:w-1/3'>
								<label htmlFor='zip'>Zip</label>
								<input
									type='text'
									id='zip'
									name='zip'
									placeholder='Zip'
									className={input}
								/>
							</div>
						</div>
						<hr className='my-4' />
						<div>
							<h1 className='text-2xl'>Payment</h1>
							<div className='flex flex-col lg:flex-row space-y-4 lg:space-x-3'>
								<div className='w-full lg:w-1/2 mt-6 flex flex-col space-y-2'>
									<label htmlFor='cardname'>Name on Card</label>
									<input
										type='text'
										id='cardname'
										name='cardname'
										placeholder='Name on Card'
										className={input}
									/>
								</div>
								<div className='w-full lg:w-1/2 mt-6 flex flex-col space-y-2'>
									<label htmlFor='creditnumber'>Credit card number</label>
									<input
										type='number'
										id='creditnumber'
										name='creditnumber'
										onChange={(e) => cartNumberChangeHandler(e)}
										placeholder='1234 1234 1234 1234'
										className={input}
									/>
								</div>
							</div>
							<div className='flex flex-col lg:flex-row space-y-4 lg:space-x-3'>
								<div className='w-full lg:w-1/2 mt-6 flex flex-col space-y-2'>
									<label htmlFor='Expiration'>Expiration</label>
									<input
										ref={refExpiration}
										type='text'
										id='Expiration'
										name='Expiration'
										placeholder='MM/YY'
										className={input}
									/>
								</div>
								<div className='w-full lg:w-1/2 mt-6 flex flex-col space-y-2'>
									<label htmlFor='CVV'>CVV</label>
									<input
										type='number'
										id='CVV'
										name='CVV'
										placeholder='123'
										className={input}
									/>
								</div>
							</div>
						</div>
						<button className='mt-6 w-full py-2 bg-sky-500 rounded opacity-80 text-white'>
							Continue to Checkout
						</button>
					</div>
				</form>
				<div className='w-full lg:w-1/3 mt-8 lg:mt-0 rounded-xl overflow-hidden border max-h-[200px]'>
					<OrderSummaty carts={carts} />
				</div>
			</div>
		</div>
	);
};

export default Checkout;
