import React from 'react';
import { input } from '../style/inputStyle';

const Contact = () => {
	return (
		<div className='mt-28 max-w-[1200px] mx-auto'>
			<p className='text-5xl text-center font-medium'>Contact Us</p>
			<hr className='my-5' />
			<form action='' className='w-1/3 mx-auto'>
				<div className='flex flex-col space-y-2 mb-5'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						placeholder='Enter Your Name'
						id='name'
						name='name'
						className={input}
					/>
				</div>
				<div className='flex flex-col space-y-2 mb-5'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						placeholder='example@gmail.com'
						id='email'
						name='email'
						className={input}
					/>
				</div>
				<div className='flex flex-col space-y-2'>
					<label htmlFor='message'>Message</label>
					<textarea
						type='text'
						placeholder='Enter Your Message'
						id='message'
						name='message'
						rows={4}
						className={input}
					></textarea>
				</div>

				<button
					type='submit'
					className='bg-gray-600 rounded py-1 px-4 mt-2 text-white'
					disabled
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
