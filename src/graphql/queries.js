import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
	query GET_PRODUCTS($page: Int, $limit: Int) {
		getProducts(limit: $limit, page: $page) {
			id
			image
			title
			price
			productId
			description
			category {
				title
			}
		}
	}
`;

export const USER_LOGIN = gql`
	query USER_LOGIN($email: String!, $password: String!) {
		signIn(input: { email: $email, password: $password }) {
			email
			token
			name
			avatar
			isCartEmpty
			userCart {
				count
				totalPrice
				products {
					id
					productId
					image
					price
					qty
					title
				}
			}
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
			wishlist {
				id
				count
				title
				createdAt
				owner
				comments {
					id
					comment
					likes
					likedBy
					createdAt
					user {
						name
					}
				}
				products {
					title
					price
					productId
				}

				users {
					name
					id 
					canEdit
				}
			}
		}
	}
`;

export const GET_USER_BY_ID = gql`
	query GET_USER_BY_ID($id: String!) {
		getUserById(id: $id) {
			email
			name
			avatar
			gender
			isCartEmpty
			userCart {
				count
				totalPrice
				products {
					id
					productId
					image
					price
					qty
					title
				}
			}
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
			wishlist {
				id
				count
				title
				createdAt
				owner
				comments {
					id
					comment
					likes
					likedBy
					createdAt
					user {
						name
					}
				}
				products {
					title
					price
					productId
				}

				users {
					name
					id 
					canEdit
				}
			}
		}
	}
`;
export const GET_USERS_BASIC_INFO = gql`
	query GET_USERS_BASIC_INFO {
		getUserProfile {
			email
			name
			avatar
			gender
			createdAt
			didOptNotification
			rating
		}
	}
`;

export const SEARCH_PRODUCT_BY_NAME = gql`
	query SEARCH_PRODUCT_BY_NAME($name: String!) {
		searchProduct(name: $name) {
			id
			image
			title
			price
			productId
			description
			category {
				title
			}
		}
	}
`;

export const GET_ORDERS = gql`
	query GET_ORDERS {
		getOrders {
			count
			id
			isCanceled
			isExpress
			placedOn
			totalPrice
			userId
			status
			products {
				productId
				title
				qty
				price
				totalPrice
			}
		}
	}
`;

export const GET_ORDER_BY_ID = gql`
	query getOrder($orderId: String!) {
		getOrder(orderId: $orderId) {
			count
			id
			isCanceled
			isExpress
			placedOn
			totalPrice
			userId
			products {
				title
				qty
				price
				productId
				totalPrice
			}
		}
	}
`;

export const GET_WISHLIST = gql`
	query getWishlist($id: String) {
    getWishlist(wishlistId: $id) {
			id
			count
			title
			createdAt
			owner
			comments {
				id
				comment
				likes
				likedBy
				createdAt
				user {
					name
				}
			}
			products {
				productId
				title
				price
			}

			users {
				name
				id 
				canEdit
			}
		}
  }
`;