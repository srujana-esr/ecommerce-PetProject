import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import { Container, Content, Footer } from './index.styles';

const WishlistItem = ({
	id,
	title,
	productCount,
	createdAt,
	commentCount,
	sharedUsers
}) => {
	return (
		<Link to={`/wishlist/${id}`}>
			<Container>
				<p className='wishlist-id'>{title}</p>
				<Content>
					<p className='created-date'>
						Created{' '}
						{formatDistance(new Date(parseInt(createdAt)), new Date(), {
							addSuffix: true,
						})}
					</p>
					&nbsp;
					<p className='user-count'>
						{sharedUsers}
						<ion-icon name="people-circle-outline"></ion-icon>
					</p>
				</Content>
				<Footer>
					<p className='footer-item'>{productCount} product(s)</p>
					<p className='footer-item'>{commentCount} comment(s)</p>
				</Footer>
			</Container>
		</Link>
	);
};

export default WishlistItem;
