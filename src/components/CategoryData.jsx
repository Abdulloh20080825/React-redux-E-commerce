import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../state/slice/filterByCategorySlice';

const CategoryData = ({ data }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(changeCategory(data.query));
	};

	return (
		<div
			className='border border-black rounded-md hover:bg-black transition-all cursor-pointer hover:text-white py-1 px-2'
			onClick={handleClick}
		>
			<p>{data.title}</p>
		</div>
	);
};

export default CategoryData;
