import { CartActions } from './index.styles';
import DeleteProductButton from './DeleteProductButton';
import QuantityControl from './QuantityControl';
import ImageContainer from '../../../ui/atoms/ImageContainer';
import ProductCardSmall, {
	ProductInfo,
	Title,
	Price,
	Actions
} from '../../../ui/atoms/ProductCardSmall';
import CustomImage from '../../../assets/images/nike.webp';
import { FC } from 'react';

type Props = {
	id: string;
	title: string;
	qty: number;
	price: number;
	productId: string;
}

const CartProduct: FC<Props> = ({ id, title, qty, price, productId }) => (
	<ProductCardSmall>
		<ImageContainer
			height='150px'
			width='150px'
			showBorder
			isRenderedInFlex
		>
			<img
				src={CustomImage}
				alt={title}
			/>
		</ImageContainer>

		<ProductInfo>
			<Title>{title}</Title>
			<Price>INR {price}</Price>
			<Actions>
				<QuantityControl
					id={id}
					qty={qty}
					price={price}
					productId={productId}
				/>
			</Actions>
		</ProductInfo>

		<CartActions>
			<Price>sub total - INR {price * qty}</Price>
			<div className='actions'>
				{/* <div className="cart-action-container">
						<ion-icon name="heart"></ion-icon>
						<p>Save</p>
					</div> */}

				<DeleteProductButton id={productId} />
			</div>
		</CartActions>
	</ProductCardSmall>
);

export default CartProduct;
