import { format } from 'date-fns';
import { Container } from './index.styles';

const Header = ({ orderId, orderDate }) => {
	const localizedOrderDate = format(new Date(orderDate * 1000), 'dd/MM/yyyy');

	return (
		<Container>
			<p>Order #{orderId}</p>
			<p>|</p>
			<p>Ordered on {localizedOrderDate}</p>
		</Container>
	);
};

export default Header;
