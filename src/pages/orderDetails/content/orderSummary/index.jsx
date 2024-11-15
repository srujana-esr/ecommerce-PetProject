import { Container } from './index.styles';

const OrderSummary = ({ totalPrice, isExpress }) => {
	const subtotal = totalPrice + 0.18 * totalPrice;
	const shipping = isExpress ? 50 : 0;

	return (
		<Container>
			<h5>Order Summary</h5>
			<p>
				Item(s) Subtotal:&nbsp;
				<span>INR {subtotal}</span>
			</p>
			<p>
				Shipping:&nbsp;
				<span>INR {shipping}</span>
			</p>
			<p>
				Total:&nbsp;
				<span>INR {subtotal + shipping}</span>
			</p>
		</Container>
	);
};

export default OrderSummary;
