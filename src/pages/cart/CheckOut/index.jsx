import { Button } from 'comp-lib';
import { useState } from 'react';
import Loader from '../../../ui/atoms/Loader';
import DeliveryTypecontrol from './DeliveryTypeControl';
import {
	ButtonContainer,
	CancelButton,
	CheckoutButtonContainer,
	CheckoutContainer,
	StyledCheckoutAmountInfoContainer,
} from './index.styles';

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 5);

const CheckOut = ({
	totalPrice,
	history,
	isCartEmpty,
	onCheckout,
	isCreateOrderInProgress,
}) => {
	const [ deliveryDate, setDeliveryDate ] = useState(new Date(currentDate));
	const [ deliveryAmount, setDeliveryAmount ] = useState(0);
	const [ isExpress, setIsExpress ] = useState(false);

	const taxAmount = (0.18 * totalPrice).toFixed(2);

	const handleOnChangeDeliveryType = ({ target: { checked } }) => {
		if (checked) {
			setIsExpress(true);
			currentDate.setDate(currentDate.getDate() - 3);
			setDeliveryAmount(50);
		} else {
			setIsExpress(false);
			currentDate.setDate(currentDate.getDate() + 3);
			setDeliveryAmount(0);
		}
		setDeliveryDate(new Date(currentDate));
	};

	const handleOnCancelClick = () => {
		history.push('/');
	};

	const handleOnCheckoutClick = () => {
		onCheckout(isExpress);
	};

	return (
		<CheckoutContainer>
			<div className='header'>
				<p>Summary</p>
			</div>
			<DeliveryTypecontrol
				isCartEmpty={isCartEmpty}
				handleOnChangeDeliveryType={handleOnChangeDeliveryType}
			/>
			<p className='delivery-date'>
				Delivery date: {totalPrice ? deliveryDate.toLocaleDateString() : '--'}
			</p>
			<StyledCheckoutAmountInfoContainer>
				<div className='amount_type'>
					<label htmlFor='subtotal'>Subtotal</label>
					<p
						className='amount_subtotal'
						name='subtotal'>
						INR {totalPrice}
					</p>
				</div>

				<div className='amount_type'>
					<label htmlFor='delivery'>Delivery</label>
					<p
						className='amount_delivery'
						name='delivery'>
						INR {deliveryAmount}
					</p>
				</div>

				<div className='amount_type'>
					<label htmlFor='tax'>Tax</label>
					<p
						className='amount_tax'
						name='tax'>
						(18%) INR {taxAmount}
					</p>
				</div>
			</StyledCheckoutAmountInfoContainer>

			<div className='total_amount'>
				<label htmlFor='total'>Total</label>
				<p>INR {totalPrice + deliveryAmount + parseFloat(taxAmount)}</p>
			</div>
			<ButtonContainer>
				<CheckoutButtonContainer>
					{isCreateOrderInProgress && <Loader />}
					<Button
						label='Checkout'
						onClick={handleOnCheckoutClick}
						disabled={!totalPrice || isCreateOrderInProgress}
					/>
				</CheckoutButtonContainer>
				<CancelButton
					label='Continue shopping'
					onClick={handleOnCancelClick}
					disabled={isCreateOrderInProgress}
				/>
			</ButtonContainer>
		</CheckoutContainer>
	);
};

export default CheckOut;
