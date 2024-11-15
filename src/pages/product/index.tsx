import { useSelector } from 'react-redux';
import { Redirect, useLocation, useParams } from 'react-router-dom';
import PhotoView from './PhotoView';
import ProductInfo from './ProductInfo';
import { Container } from './index.styles';
import CustomImage from '../../assets/images/nike.webp';
import { selectProductFromList } from '../../redux/selectors/home';

const ProductPage = () => {
	const { id } = useParams();
	const location = useLocation();
	const product = useSelector((state) => selectProductFromList(state, id));

	const productFromSearch = {
		...location?.state?.data,
		...(location?.state?.data && { image: CustomImage }),
	};

	const data = product || productFromSearch;

	if (!data || Object.keys(data).length === 0) {
		return <Redirect to='/' />;
	}
	return (
		<Container>
			<PhotoView
				image={data.image}
				title={data.title}
			/>
			<ProductInfo
				id={id}
				productId={data.productId}
				title={data.title}
				price={data.price}
				description={data.description}
				categoryTitle={data.category.title}
			/>
		</Container>
	);
};

export default ProductPage;
