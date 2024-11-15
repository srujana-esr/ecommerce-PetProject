import { useQuery } from '@apollo/client';
import OrderListItem from './OrderListItem';
import { OrdersList } from './index.styles';
import { GET_ORDERS } from '../../../../graphql/queries';
import QueryResult from '../../../../ui/molecules/QueryResult';
import { sortByDate } from '../../../../utils/utils';

const Orders = () => {
	const { loading, error, data } = useQuery(GET_ORDERS, {
		fetchPolicy: 'cache-and-network',
	});


	return (
		<>
			<h1>Orders</h1>
			<OrdersList>
				<QueryResult
					loading={loading}
					error={error}
					data={data}
					emptyDataMessage='No orders available.'>
					{data?.getOrders
						?.slice()
						?.sort(sortByDate)
						.map((order) => (
							<OrderListItem
								key={order.id}
								id={order.id}
								count={order.count}
								placedOn={order.placedOn}
								status={order.status}
								totalPrice={order.totalPrice}
								isExpress={order.isExpress}
								isCanceled={order.isCanceled}
							/>
						))}
				</QueryResult>
			</OrdersList>
		</>
	);
};

export default Orders;
