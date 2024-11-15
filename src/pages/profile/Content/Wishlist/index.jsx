import { useQuery } from "@apollo/client";
import { GET_WISHLIST } from "../../../../graphql/queries";
import QueryResult from "../../../../ui/molecules/QueryResult";
import { WishListContainer } from "./index.styles";
import WishlistItem from "./WishListItem";

const Wishlist = () => {

	const { loading, error, data } = useQuery(GET_WISHLIST, {
		fetchPolicy: 'cache-and-network',
	});

	console.log('WISHLIST = ', {
		data,
		loading,
		error
	})

	return (
		<>
			<h1>Wishlist</h1>
			<WishListContainer>
				<QueryResult
					loading={loading}
					error={error}
					data={data}
					emptyDataMessage='No orders available.'
				>
					{
						data?.getWishlist?.map(wishlist => (
							<WishlistItem
								id={wishlist.id}
								key={wishlist.id}
								title={wishlist.title}
								productCount={wishlist.count}
								commentCount={wishlist.comments.length}
								createdAt={wishlist.createdAt}
								sharedUsers={wishlist.users.length}
							/>
						))
					}
				</QueryResult>
			</WishListContainer>
		</>
	);
}

export default Wishlist;