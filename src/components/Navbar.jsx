import { FiLogIn } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { IoPersonAdd } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RxHamburgerMenu } from 'react-icons/rx';
import HeaderModal from './HeaderModal';
import { useState } from 'react';

const Navbar = () => {
	const tovarsToCart = useSelector((state) => state.cart);
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div className='bg-white fixed top-0 z-10 w-full'>
			<nav className='flex justify-between items-center max-w-[1200px] py-5 mx-auto'>
				<h1 className='text-2xl font-bold'>React Ecommerce</h1>
				<ul className='hidden md:flex space-x-5 font-thin'>
					<li>
						<NavLink to={'/'}>Home</NavLink>
					</li>
					<li>
						<NavLink to={'/products'}>Products</NavLink>
					</li>
					<li>
						<NavLink to={'/about'}>About</NavLink>
					</li>
					<li>
						<NavLink to={'/contact'}>Contact</NavLink>
					</li>
				</ul>
				<div className='hidden md:flex space-x-7'>
					<Link
						className='border flex items-center space-x-2 py-1  border-black rounded px-3 hover:bg-black transition-all hover:text-white'
						to={'/login'}
					>
						<FiLogIn />
						<button className='font-medium'>Login</button>
					</Link>
					<Link
						className='border flex items-center space-x-2 py-1  border-black rounded px-3 hover:bg-black transition-all hover:text-white'
						to={'/register'}
					>
						<IoPersonAdd />
						<button>Register</button>
					</Link>
					<Link
						className='border flex items-center space-x-2 py-1  border-black rounded px-3 hover:bg-black transition-all hover:text-white'
						to={'/cart'}
					>
						<FaShoppingCart />
						<button>
							Cart ({tovarsToCart.length == 0 ? 0 : tovarsToCart.length})
						</button>
					</Link>
				</div>
				<div className='block md:hidden'>
					<RxHamburgerMenu
						className='text-3xl cursor-pointer'
						onClick={() => setIsOpenModal(true)}
					/>
				</div>
				<HeaderModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
					<ul className='flex flex-col space-y-5 md:hidden font-thin'>
						<li onClick={() => setIsOpenModal(false)}>
							<NavLink to={'/'}>Home</NavLink>
						</li>
						<li onClick={() => setIsOpenModal(false)}>
							<NavLink to={'/products'}>Products</NavLink>
						</li>
						<li onClick={() => setIsOpenModal(false)}>
							<NavLink to={'/about'}>About</NavLink>
						</li>
						<li onClick={() => setIsOpenModal(false)}>
							<NavLink to={'/contact'}>Contact</NavLink>
						</li>
					</ul>
					<div className='flex md:hidden flex-wrap gap-3 mt-5'>
						<Link
							onClick={() => setIsOpenModal(false)}
							className='border flex items-center space-x-2 py-1  border-black rounded px-3 hover:bg-black transition-all hover:text-white'
							to={'/login'}
						>
							<FiLogIn />
							<button className='font-medium'>Login</button>
						</Link>
						<Link
							onClick={() => setIsOpenModal(false)}
							className='border flex items-center space-x-2 py-1  border-black rounded px-3 hover:bg-black transition-all hover:text-white'
							to={'/register'}
						>
							<IoPersonAdd />
							<button>Register</button>
						</Link>
						<Link
							onClick={() => setIsOpenModal(false)}
							className='border flex items-center space-x-2 py-1  border-black rounded px-3 hover:bg-black transition-all hover:text-white'
							to={'/cart'}
						>
							<FaShoppingCart />
							<button>
								Cart ({tovarsToCart.length == 0 ? 0 : tovarsToCart.length})
							</button>
						</Link>
					</div>
				</HeaderModal>
			</nav>
		</div>
	);
};

export default Navbar;
