import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { Container } from './index.styles';
import IconContainer from '../../../../ui/atoms/IconContainer';
import Button from '../../../../ui/atoms/Button';
import { initCart } from '../../../../redux/actions';
import { REMOVE_FROM_CART } from '../../../../graphql/mutations';

const DeleteProductButton: FC<{ id: string }> = ({ id }) => {
	const dispatch = useDispatch();
	const [ isError, setIsError ] = useState(false);

	const [ removeFromCart, { loading } ] = useMutation(
		REMOVE_FROM_CART,
		{
			onCompleted: (data) => {
				dispatch(initCart(data.removeFromCart));
			},
			onError: () => {
				setIsError(true);
			},
		},
	);

	useEffect(() => {
		if (isError) {
			setTimeout(() => {
				setIsError(false);
			}, 1000);
		}
	}, [ isError ]);

	const handleRemoveFromCartClick = () => {
		removeFromCart({
			variables: { id },
		});
	};

	return (
		<Container disabled={loading}>
			{isError && (
				<IconContainer name='close-circle' />
			)}

			<Button
				className='delete-button'
				color='#969696'
				padding='5px'
				border='none'
				onClick={handleRemoveFromCartClick}
				disabled={loading}
			>
				<IconContainer
					name='trash-outline'
					iconClass='delete-icon'
				/>
				Delete
			</Button>
		</Container >
	);
};

export default DeleteProductButton;
