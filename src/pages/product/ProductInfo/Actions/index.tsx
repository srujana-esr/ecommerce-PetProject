import { FC } from 'react';
import { useSelector } from 'react-redux';
import CartButton from './CartButton';
import WishlistButton from './WishlistButton';
import { ActionContainer } from './index.styles';
import RemoveFromCartButton from './RemoveButton';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import { selectCartProductIds, selectWishlist, selectWishlistProucts } from '../../../../redux/selectors';
import RemoveFromWishlistButton from './RemoveWishlistButton';

type Props = {
	id: string;
	price: string;
	productId: number;
}

const Actions: FC<Props> = ({ id, price, productId }) => {
	const productsInCart = useSelector(selectCartProductIds) || [];
	const wishlistProducts = useAppSelector(selectWishlistProucts) || [];
	const isProductInCart = productsInCart.includes(productId);
	const isProductInAnyWishlist = wishlistProducts.includes(productId);

	console.log(isProductInAnyWishlist);

	return (
		<ActionContainer>
			{isProductInCart ? (
				<RemoveFromCartButton
					id={id}
					price={price}
					productId={productId}
				/>
			) : (
				<CartButton
					id={id}
					price={price}
					productId={productId}
				/>
			)}

			{isProductInAnyWishlist ? <RemoveFromWishlistButton productId={productId} /> : (
				<WishlistButton
					price={price}
					productId={productId}
				/>
			)}
		</ActionContainer>
	);
};

export default Actions;
