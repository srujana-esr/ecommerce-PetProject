import { Button } from '@comp-lib';
import { useHistory } from 'react-router';
import { MainHeading } from '../../../theme/defaultStyles';
import { Container } from './index.styles';

const OrderPlaced = ({ orderId = 'test' }) => {
	const history = useHistory();

	const handleOnCancelClick = () => {
		history.push('/');
	};

	return (
		<Container>
			<MainHeading size='32px'>
				Wohoo! Your order has been pleaced.
				<span>🎉</span>
			</MainHeading>
			{orderId && <p>Your order Id is {orderId}</p>}
			<Button
				label='Continue Shopping'
				onClick={handleOnCancelClick}
			/>
		</Container>
	);
};

export default OrderPlaced;
