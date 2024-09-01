import React from 'react';
import { categoryData } from '../data/categoryData';
import CategoryData from './CategoryData';

const Latest = () => {
	return (
		<div className='mt-24 text-center max-w-[1200px] mx-auto'>
			<h1 className='text-5xl font-thin mb-6'>Latest Products</h1>
			<hr />
			<div className='flex justify-center space-x-5 mt-16 flex-wrap gap-1'>
				{categoryData.map((item, idx) => (
					<CategoryData key={idx} data={item} />
				))}
			</div>
		</div>
	);
};

export default Latest;
