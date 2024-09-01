import React from 'react';
import { ourProduct } from '../data/outProductData';
import OurProductItems from '../components/OurProductItems';

const About = () => {
	return (
		<div className='mt-28 max-w-[1200px] mx-auto'>
			<p className='text-5xl text-center font-medium'>About Us</p>
			<hr className='my-5' />
			<p className='text-center font-thin text-lg'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere
				doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi
				facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas
				provident ipsam, veritatis nostrum velit quos recusandae est mollitia
				esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem
				praesentium, doloremque distinctio nesciunt porro tempore quis eaque
				labore voluptatibus ea necessitatibus exercitationem tempora molestias.
				Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore
				sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint
				nemo totam dolorum! Reprehenderit delectus expedita a alias nam
				recusandae illo debitis repellat libero, quasi explicabo molestiae
				saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis
				excepturi harum numquam vel nihil? Ipsum
			</p>
			<div>
				<p className='text-3xl text-center font-medium mt-10'>Our Products</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4'>
					{ourProduct.map((item, idx) => (
						<OurProductItems key={idx} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
