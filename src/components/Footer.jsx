import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='max-w-[1200px] mx-auto text-center my-16'>
			<p>
				Made With ❤️ by{' '}
				<a
					href='https://abdullohfolio-3.vercel.app/'
					className='underline font-semibold
                                '
				>
					Abdulloh Qurbonov
				</a>
			</p>
			<FaGithub className='mx-auto' />
		</div>
	);
};

export default Footer;
