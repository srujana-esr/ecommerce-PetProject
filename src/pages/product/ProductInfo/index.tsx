import { MainHeading, SmallText } from '../../../theme/defaultStyles';
import { ProductInfoView } from './index.styles';
import Actions from './Actions';
import { FC } from 'react';

type Props = {
	id: string;
	title: string;
	price: string;
	categoryTitle: string;
	description: string;
	productId: number;
}

const ProductInfo: FC<Props> = ({
	id,
	title,
	price,
	categoryTitle,
	description,
	productId,
}) => (
	<ProductInfoView>
		<MainHeading
			weight='500'
			spacing='0.007rem'
			size='28px'>
			{title}
		</MainHeading>
		<SmallText>{categoryTitle}</SmallText>

		<div className='product_desc'>
			<SmallText>Description</SmallText>
			<p>{description}</p>
		</div>

		<p className='product_price'>
			MRP: <span>INR {price}</span>
		</p>

		<Actions
			id={id}
			price={price}
			productId={productId}
		/>
	</ProductInfoView>
);

export default ProductInfo;
