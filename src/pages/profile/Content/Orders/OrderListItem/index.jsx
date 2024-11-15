import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import { Container, Content, Footer, OrderStatus } from './index.styles';
import { getDeliveryDate } from '../../../../../utils/utils';

const OrderListItem = ({
	id,
	count,
	placedOn,
	status,
	totalPrice,
	isExpress,
	isCanceled
}) => {
	return (
		<Link to={`/orders/${id}`}>
			<Container>
				<p className='order-id'>#{id}</p>
				<Content>
					<p>{count} Item(s)</p>
					<p className='order-date'>
						Ordered{' '}
						{formatDistance(new Date(placedOn * 1000), new Date(), {
							addSuffix: true,
						})}
					</p>
					<p className='order-date'>{
						isCanceled ? 'Cancelled' :
							getDeliveryDate(isExpress, placedOn)
					}</p>
				</Content>
				<Footer>
					<OrderStatus status={status}>{status}</OrderStatus>
					<p className='order-price'>{totalPrice} INR</p>
				</Footer>
			</Container>
		</Link>
	);
};

export default OrderListItem;
