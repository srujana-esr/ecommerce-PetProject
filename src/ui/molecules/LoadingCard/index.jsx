import { StyledLoadingCard } from './index.styles';
import Skeleton from '../../atoms/Skeleton';

const LoadingCard = () => (
	<StyledLoadingCard>
		<Skeleton className='product_img' />
		<div className='product_desc'>
			<div className='product_desc_info'>
				<Skeleton className='product_title'></Skeleton>
				<Skeleton className='product_type'></Skeleton>
			</div>
			<div>
				<Skeleton className='product_desc_price' />
			</div>
		</div>
	</StyledLoadingCard>
);

export default LoadingCard;
