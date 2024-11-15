import { Summary } from './index.styles';
import ShippingAddress from './shippingAddress';
import OrderSummary from './orderSummary';
import OrderProducts from './orderProducts';
import { getDeliveryDate } from '../../../utils/utils';

const Content = ({ order }) => {
	return (
		<>
			<Summary>
				<ShippingAddress />
				<OrderSummary
					totalPrice={order?.totalPrice}
					isExpress={order?.isExpress}
				/>
			</Summary>
			<OrderProducts
				deliveryDate={getDeliveryDate(order?.isExpress, order?.placedOn)}
				products={order?.products}
				isCanceled={order?.isCanceled}
			/>
		</>
	);
};

export default Content;
