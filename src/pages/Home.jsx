import Footer from '../components/Footer';
import Latest from '../components/Latest';
import MainImage from '../components/MainImage';
import ProductList from '../components/ProductList';

const Home = () => {
	return (
		<div className=''>
			<MainImage />
			<Latest />
			<ProductList />
		</div>
	);
};

export default Home;
