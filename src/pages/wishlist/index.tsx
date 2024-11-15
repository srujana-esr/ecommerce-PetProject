import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { GET_WISHLIST } from "../../graphql/queries";
import QueryResult from "../../ui/molecules/QueryResult";
import { selectLoggedInUserId } from "../../redux/selectors/auth";
import { MainHeading, SmallText } from "../../theme/defaultStyles";
import { hasWishlistEditAccess } from "../../utils/utils";
import CommentSection from "./CommentSection";
import { Wishlist as WishlistType } from "../../types/wishlist";
import CustomImage from '../../assets/images/nike.webp';
import {
	Container,
	Content,
	CustomLink,
	EmptyWishlistMessage,
	Header,
	ProductSection
} from "./index.styles";
import ProductCardSmall, { Actions, Price, ProductInfo, Title } from "../../ui/atoms/ProductCardSmall";
import ImageContainer from "../../ui/atoms/ImageContainer";
import MoveToCartButton from "./MoveToCartButton";

const Wishlist = () => {
	const { id } = useParams();
	const loggedInUserId = useSelector(selectLoggedInUserId);
	const [ wishlistDetails, setWishlistDetails ] = useState<WishlistType>(null)
	const canAddComments = hasWishlistEditAccess(wishlistDetails, loggedInUserId);
	const { data, error, loading } = useQuery(GET_WISHLIST, {
		variables: {
			wishlistId: id
		},
		fetchPolicy: 'cache-first',
		onCompleted: data => {
			setWishlistDetails({
				...data?.getWishlist[ 0 ]
			});
		}
	});

	useEffect(() => {
		console.log('wishlistDetails ====== ', wishlistDetails)
		if (data?.getWishlist.length) {
			setWishlistDetails(data?.getWishlist[ 0 ]);
		}
	}, [ data ])

	return (
		<Container>
			<QueryResult
				data={data}
				error={error}
				loading={loading}
				emptyDataMessage="Unable to load the selected Wishlist. Please try again later"
			>
				{wishlistDetails && (
					<>
						<Header>
							<SmallText size="0.75rem">Wish list</SmallText>
							<MainHeading>
								{wishlistDetails.title}
							</MainHeading>
						</Header>

						<Content>
							<ProductSection>
								<small className="title">
									Products
								</small>
								{wishlistDetails.count === 0 ? (
									<EmptyWishlistMessage>
										<h3>
											Your wish list is empty.
											<ion-icon name="rainy"></ion-icon>
										</h3>

										<div className="link-text-container">
											<CustomLink to='/'>
												Add Products now!
											</CustomLink>
										</div>

									</EmptyWishlistMessage>
								) : (
									wishlistDetails.products.map(product => (
										<ProductCardSmall key={product.productId}>
											<ImageContainer
												height='150px'
												width='150px'
												showBorder
												isRenderedInFlex
											>
												<img
													src={CustomImage}
													alt={product.title}
												/>
											</ImageContainer>
											<ProductInfo>
												<Title>{product.title}</Title>
												<Price>INR {product.price}</Price>
												<Actions>
													{/* TODO: Add quantity control? */}
													<MoveToCartButton
														price={product?.price}
														productId={product?.productId}
														wishlistId={id}
													/>
												</Actions>
											</ProductInfo>
										</ProductCardSmall>
									))
								)}
							</ProductSection>
							<CommentSection
								canAddComments={canAddComments}
								comments={wishlistDetails.comments}
								loggedInUserId={loggedInUserId}
								wishlistId={id}
							/>
						</Content>
					</>
				)}
			</QueryResult>


		</Container>
	);
}

export default Wishlist;