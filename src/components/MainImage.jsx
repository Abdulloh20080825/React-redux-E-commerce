import React from 'react';

const MainImage = () => {
	return (
		<div className='px-4 sm:px-6 lg:px-10'>
			<div className='ormon-img w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] mt-5 sm:mt-10 flex items-center px-6 sm:px-10 lg:px-16'>
				<div className='max-w-[1200px] mx-auto text-center sm:text-left'>
					<p className='text-white font-thin text-lg sm:text-xl lg:text-2xl'>
						<span className='text-2xl sm:text-3xl lg:text-5xl'>
							New Season Arrivals
						</span>
						<br />
						<span className='hidden sm:block mt-4'>
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default MainImage;
