import { FC, useState } from "react";
import ButtonContainer from "../../../ui/molecules/ButtonContainer";
import { useLazyQuery, useMutation } from "@apollo/client";
import { ADD_TO_CART, REMOVE_FROM_WISHLIST } from "../../../graphql/mutations";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { initCart, removeFromWishlist as removeFromWishlistRedux } from "../../../redux/actions";
import { PrimaryButton } from "../../../ui/atoms/FormControls/ButtonContainer/index.styles";
import { GET_WISHLIST } from "../../../graphql/queries";

type Props = {
	price: number;
	productId: number;
	wishlistId: string;
}

const MoveToCartButton: FC<Props> = ({
	price,
	productId,
	wishlistId
}) => {
	const dispatch = useAppDispatch();
	const [ isError, setIsError ] = useState<boolean>(false);
	const [ removeFromWishlist, { loading: removeFromWishListLoading } ] = useMutation(REMOVE_FROM_WISHLIST, {
		onCompleted: () => {
			dispatch(removeFromWishlistRedux({
				id: wishlistId,
				productId,
			}));
		},
		onError: () => {
			setIsError(true);
		},
		refetchQueries: [ {
			query: GET_WISHLIST,
			variables: {
				id: wishlistId
			}
		} ]
	})
	const [ addToCart, { loading, data, error } ] = useMutation(ADD_TO_CART, {
		onCompleted: (data) => {
			console.log('MOVE TO CART result = ', { data });
			dispatch(initCart(data.updateCart));
			removeFromWishlist({
				variables: {
					productId,
					wishlistId
				}
			});
		},
		onError: () => {
			setIsError(true);
		},
	});

	const handleOnClickMoveToCart = () => {
		addToCart({
			variables: {
				input: [
					{
						productId,
						price: parseFloat(price),
						qty: 1,
					},
				],
			}
		})
	}

	const handleOnResetFeedback = () => {
		setIsError(false);
	}

	return (
		<ButtonContainer
			isError={isError}
			isLoading={loading || removeFromWishListLoading}
			isSuccess={data?.updateCart}
			onResetFeedback={handleOnResetFeedback}
		>
			<PrimaryButton
				onClick={handleOnClickMoveToCart}
				label="Move to Cart"
			/>
		</ButtonContainer>
	);
}

export default MoveToCartButton;