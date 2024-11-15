import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import Loader from '../../../ui/atoms/Loader';
import { EmptyCartIcon, StyledHeader } from './index.styles';
import { EMPTY_CART } from '../../../graphql/mutations';
import { emptyCart, updateIsCartEmpty } from '../../../redux/actions';
import { FONT_COLOR } from '../../../theme/defaultConstants';
import { Link } from 'react-router-dom';

const Header = ({ isCartEmpty }) => {
	const dispatch = useDispatch();
	const [ callEmptyCartMutation, { loading } ] = useMutation(EMPTY_CART, {
		onCompleted: (data) => {
			dispatch(updateIsCartEmpty(true));
			dispatch(emptyCart());
		},
		onError: (err) => {
			console.log({ err });
		},
	});

	const handleOnCartEmptyClick = () => {
		callEmptyCartMutation();
	};

	return (
		<StyledHeader>
			<p>Bag</p>
			<div className='icon-container'>
				<Link to='/'>
					<ion-icon
						name='home'
						disabled></ion-icon>
				</Link>
				<EmptyCartIcon
					title='Empty Cart'
					onClick={!isCartEmpty ? handleOnCartEmptyClick : () => { }}
					disabled={isCartEmpty}>
					{loading ? (
						<div className='loader-container'>
							<Loader
								parentBgColor='none'
								beforeAfterWidth='10px'
								beforeAfterHeight='10px'
								beforeAfterColor={FONT_COLOR.base}
								afterMarginLeft='-15px'
							/>
						</div>
					) : (
						<ion-icon
							name='trash'
							disabled></ion-icon>
					)}
				</EmptyCartIcon>
			</div>
		</StyledHeader>
	);
};

export default Header;
