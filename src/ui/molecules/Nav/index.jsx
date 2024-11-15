import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StyledNav from './index.styles';
import NavUserOptions from './navUserOptions';
import SearchBar from '../SearchBar';
import NavBrand from '../../atoms/NavBrand';
import Badge from '../../atoms/Badge';
import { selectCartCount } from '../../../redux/selectors';

const Nav = () => {
	const cartCount = useSelector(selectCartCount);
	// const wishlistCount = 0;

	return (
		<StyledNav>
			<div className='nav-container'>
				<NavBrand />
				<div className='nav-search-bar'>
					<SearchBar />
				</div>
				<div className='nav-content'>
					<div className='nav-option'>
						<Link to='/cart'>
							<ion-icon name='cart-outline'></ion-icon>
							<Badge count={cartCount} />
						</Link>
					</div>
					{/* <div className="nav-option">
						<ion-icon name='heart-outline'></ion-icon>
						<Badge count={wishlistCount} />
					</div> */}
					<NavUserOptions />
				</div>
			</div>
		</StyledNav>
	);
};

export default Nav;
