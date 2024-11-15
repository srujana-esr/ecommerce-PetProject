import { gql } from '@apollo/client';

export const UPDATE_USER_PROFILE = gql`
	mutation UPDATE_USER_PROFILE($input: ProfileUpdate!) {
		updateUserProfile(input: $input)
	}
`;

export const EMPTY_CART = gql`
	mutation EMPTY_CART {
		emptyCart
	}
`;

export const USER_SIGNUP = gql`
	mutation USER_SIGNUP($input: NewUserInput!) {
		signUp(input: $input) {
			email
			token
			name
			avatar
			contact {
				address1
				address2
				city
				country
				country_code
				district
				error
				errorMessage
				mobile
				postal_code
				state
			}
			createdAt
			didOptNotification
			rating
		}
	}
`;

export const ADD_TO_CART = gql`
	mutation ADD_TO_CART($input: [CartItem!]!) {
		updateCart(input: $input) {
			totalPrice
			count
			products {
				id
				productId
				price
				qty
				title
			}
		}
	}
`;

export const REMOVE_FROM_CART = gql`
	mutation REMOVE_FROM_CART($productId: Int!) {
		removeFromCart(productId: $productId) {
			totalPrice
			count
			products {
				id
				productId
				price
				qty
				title
			}
		}
	}
`;

export const CREATE_ORDER = gql`
	mutation CREATE_ORDER($orderDetails: OrderInput!) {
		createOrder(orderDetails: $orderDetails)
	}
`;

export const CANCEL_ORDER = gql`
	mutation CANCEL_ORDER($orderId: String!) {
		cancelOrder(orderId: $orderId)
	}
`;

export const UPDATE_RECENTLY_VIEWED = gql`
	mutation UPDATE_RECENTLY_VIEWED($productId: String!){
		addRecentlyViewedProduct(productId: $productId)
	}
`;

export const ADD_TO_WISHLIST = gql`
	mutation ADD_TO_WISHLIST($wishlistId: String!,$input: WishlistItem!){
		addToWishlist(input: $input, wishlistId: $wishlistId)
	}
`;

export const REMOVE_FROM_WISHLIST = gql`
	mutation REMOVE_FROM_WISHLIST($productId: Int!, $wishlistId: String!){
		removeFromWishlist(productId: $productId, wishlistId: $wishlistId)
	}
`;

export const EMPTY_WISHLIST = gql`
	mutation EMPTY_WISHLIST($wishlistId: String!){
		emptyWishlist(wishlistId: $wishlistId)
	}
`;

export const WISHLIST_ADD_COMMENT = gql`
	mutation WISHLIST_ADD_COMMENT($input: WishlistComment!){
		addComment(input: $input)
	}
`;

export const WISHLIST_DELETE_COMMENT = gql`
	mutation WISHLIST_DELETE_COMMENT($commentId: String!, $wishlistId: String!){
		deleteComment(commentId: $commentId, wishlistId: $wishlistId)
	}
`;

export const WISHLIST_UPDATE_COMMENT = gql`
	mutation WISHLIST_UPDATE_COMMENT($input: UpdateComment!){
		updateComment(input: $input)
	}
`;