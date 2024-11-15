import { Link } from 'react-router-dom';
import { StyledProductCard } from './index.styles';
import ImageContainer from '../../../../ui/atoms/ImageContainer';

const ProductCard = ({
	id,
	image,
	title,
	categoryTitle,
	price,
	productId,
	isProductInCart,
}) => {
	return (
		<StyledProductCard>
			<Link to={`/product/${id}`}>
				<ImageContainer>
					<img
						src={image}
						alt={title}
					/>
				</ImageContainer>
				<div className='product_desc'>
					<div className='product_desc_info'>
						<p className='product_title'>{title}</p>
						<small className='product_type'>{categoryTitle}</small>
					</div>
					<div className='product_desc_price'>
						<p>INR {price}</p>
					</div>
				</div>
			</Link>
		</StyledProductCard>
	);
};

export default ProductCard;
