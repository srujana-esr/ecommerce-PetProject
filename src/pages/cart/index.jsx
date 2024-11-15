import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import CheckOut from './CheckOut';
import Header from './Header';
import EmptyCartMessage from './EmptyCartMessage';
import OrderPlaced from './OrderSuccess';
import CartProduct from './CartProduct';
import { CartContainer, CartView, Container } from './index.styles';
import {
	selectCartProducts,
	selectCartTotalPrice,
	selectIsCartEmpty,
} from '../../redux/selectors/cart';
import { CREATE_ORDER, EMPTY_CART } from '../../graphql/mutations';
import { emptyCart as emptyUserCart } from '../../redux/actions';

const Cart = ({ history }) => {
	const dispatch = useDispatch();
	const isCartEmpty = useSelector(selectIsCartEmpty);
	const products = useSelector(selectCartProducts);
	const totalPrice = useSelector(selectCartTotalPrice);
	const [ isOrderPlaced, setIsOrderPlaced ] = useState(false);

	const [ emptyCart ] = useMutation(EMPTY_CART, {
		onCompleted: (response) => {
			dispatch(emptyUserCart());
		},
	});

	const [ createOrder, { loading, error, data } ] = useMutation(CREATE_ORDER, {
		onCompleted: (response) => {
			emptyCart();
			setIsOrderPlaced(true);
		},
		onError: (error) => {
			console.log('CREATE ORDER error ===== ', error);
		},
	});

	const handleOnCheckoutClick = (isExpress) => {
		createOrder({
			variables: {
				orderDetails: {
					isExpress,
					placedOn: (Date.now() / 1000).toString(),
					totalPrice,
					products: products.map((product) => ({
						id: product.id,
						productId: product.productId,
						qty: product.qty,
						price: parseFloat(product.price),
						totalPrice: parseFloat(product.price * product.qty),
						title: product.title,
					})),
				},
			},
		});
	};

	if (isOrderPlaced) {
		return <OrderPlaced orderId={data?.createOrder} />;
	}

	return (
		<Container>
			<CartContainer>
				<CartView>
					<Header isCartEmpty={isCartEmpty} />
					<>
						{products.length ? (
							products.map((product) => (
								<CartProduct
									{...product}
									key={product.id}
								/>
							))
						) : (
							<EmptyCartMessage isCartEmpty={isCartEmpty} />
						)}
					</>
				</CartView>
				<CheckOut
					totalPrice={totalPrice}
					history={history}
					isCartEmpty={isCartEmpty}
					onCheckout={handleOnCheckoutClick}
					isCreateOrderInProgress={loading}
				/>
			</CartContainer>
			{/* 
				TODO: Add wishlisht here
			*/}
		</Container>
	);
};

export default Cart;
