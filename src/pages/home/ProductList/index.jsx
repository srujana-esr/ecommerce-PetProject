import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { StyledProductListContainer } from './index.styles';
import QueryResult from '../../../ui/molecules/QueryResult';
import ProductCard from './Product';
import { GET_PRODUCTS } from '../../../graphql/queries';
import { replaceImgSrc } from '../../../utils/modifyData';
import { addProducts } from '../../../redux/actions';
import { selectCartProductIds } from '../../../redux/selectors';

const DATA_COUNT = 15;

const ProductList = () => {
	const productsInCart = useSelector(selectCartProductIds) || [];
	// const isProductInCart = productsInCart.includes(productId);

	const dispatch = useDispatch();
	const [ productList, setProductList ] = useState([]);

	const { data, loading, error } = useQuery(GET_PRODUCTS, {
		variables: {
			page: 1,
			limit: DATA_COUNT,
		},
	});

	useEffect(() => {
		if (data && data.getProducts) {
			const modifiedDataSet = replaceImgSrc(data.getProducts);
			setProductList([ ...productList, ...modifiedDataSet ]);
			dispatch(
				addProducts({
					products: [ ...productList, ...modifiedDataSet ],
				}),
			);
		}
	}, [ data && data.getProducts ]);

	return (
		<StyledProductListContainer id='product_container'>
			<QueryResult
				loading={loading}
				error={error}
				data={data}
				loadingParentComponent={StyledProductListContainer}>
				{productList.map(({ id, image, title, category, price, productId }) => (
					<ProductCard
						key={id}
						id={id}
						image={image}
						title={title}
						price={price}
						categoryTitle={category?.title}
						productId={productId}
						isProductInCart={productsInCart.includes(productId)}
					/>
				))}
			</QueryResult>
		</StyledProductListContainer>
	);
};

export default ProductList;
