import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import SearchResult from './SearchResult';
import SearchContainer, { SearchInput } from './index.styles';
import { SEARCH_PRODUCT_BY_NAME } from '../../../graphql/queries';
import { debounce } from '../../../utils/utils';
import Loader from '../../atoms/Loader';
import { BACKGROUND_COLORS } from '../../../theme/defaultConstants';

const SearchBar = () => {
	const [ searchResults, setSearchResults ] = useState();
	const [ searchProduct, { loading } ] = useLazyQuery(SEARCH_PRODUCT_BY_NAME, {
		onCompleted: (data) => {
			if (data?.searchProduct) {
				setSearchResults([ ...data.searchProduct ].splice(0, 10));
			}
		},
	});

	const handleSearchTextOnChange = ({ target }) => {
		const text = target.value;

		if (text.trim() !== '') {
			searchProduct({
				variables: {
					name: target.value,
				},
			});
		} else {
			setSearchResults(null);
		}
	};

	const clearSearchInputValue = () => {
		document.getElementById('searchInput').value = '';
	};

	return (
		<SearchContainer>
			<SearchInput
				type='text'
				placeholder='Search anything'
				border='none'
				onChange={debounce(handleSearchTextOnChange)}
				disabled={loading}
				id='searchInput'
			/>
			{(loading || searchResults) && (
				<div className='search-results'>
					{loading && (
						<Loader
							parentBgColor={BACKGROUND_COLORS.white}
							beforeAfterColor={BACKGROUND_COLORS.darkLight}
							className='loader'
						/>
					)}

					{searchResults?.map((product) => (
						<SearchResult
							key={product.id + Date.now()}
							product={product}
							setSearchResults={setSearchResults}
							clearSearchInputValue={clearSearchInputValue}
						/>
					))}
				</div>
			)}
		</SearchContainer>
	);
};

export default SearchBar;
