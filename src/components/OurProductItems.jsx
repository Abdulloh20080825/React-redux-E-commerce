import React from 'react';

const OurProductItems = ({ data }) => {
	return (
		<div className='h-[300px] border w-full rounded-lg overflow-hidden'>
			<img src={data.url} alt='' className='h-2/3 w-full' />
			<p className='text-center text-xl font-medium mt-9'>{data.title}</p>
		</div>
	);
};

export default OurProductItems;
