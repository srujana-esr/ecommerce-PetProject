import PRODUCT_IMAGE from '../../../../assets/images/nike.webp';
import {
	Container,
	DeliveryDate,
	ProductList,
	ProductListItem,
} from './index.styles';

const OrderProducts = ({ deliveryDate, products, isCanceled }) => {
	return (
		<Container>
			<DeliveryDate>{
				isCanceled ? 'Order Cancelled' : deliveryDate
			}</DeliveryDate>

			<ProductList>
				{products?.map((product) => (
					<ProductListItem key={product.productId}>
						<img
							src={PRODUCT_IMAGE}
							alt={product.title}
						/>
						<div className='product_details'>
							<p className='product_title'>{product.title}</p>
							<p className='details'>INR {product.price}</p>
							<p className='details'>{product.qty} unit(s)</p>
							<p className='details'>Total INR {product.totalPrice}</p>
						</div>
					</ProductListItem>
				))}
			</ProductList>
		</Container>
	);
};

export default OrderProducts;
