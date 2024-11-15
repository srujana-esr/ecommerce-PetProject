import { Link } from 'react-router-dom';
import { Container } from './index.styles';

const SearchResult = ({ product, setSearchResults, clearSearchInputValue }) => {
	const handleOnClick = () => {
		clearSearchInputValue();
		setSearchResults(null);
	};
	return (
		<Container onClick={handleOnClick}>
			<Link
				to={{
					pathname: `/product/${product.id}`,
					state: {
						data: product,
					},
				}}>
				{product.title}
			</Link>
		</Container>
	);
};

export default SearchResult;
