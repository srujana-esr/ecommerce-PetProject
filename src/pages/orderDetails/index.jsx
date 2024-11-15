import { useMutation, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import Header from './header';
import Content from './content';
import { BackText, ButtonContainer, CancelButton, Container, ErrorMessage } from './index.styles';
import { selectLoggedInUserName } from '../../redux/selectors';
import { MainHeading } from '../../theme/defaultStyles';
import { GET_ORDER_BY_ID } from '../../graphql/queries';
import { getUsersFirstName } from '../../utils/modifyData';
import { CANCEL_ORDER } from '../../graphql/mutations';
import { getDeliveryDate } from '../../utils/utils';
import Loader from '../../ui/atoms/Loader';

const OrderDetails = () => {
	const { id } = useParams();
	const history = useHistory();
	const userName = useSelector(selectLoggedInUserName);

	const { loading, error, data, refetch } = useQuery(GET_ORDER_BY_ID, {
		variables: {
			orderId: id,
		},
	});

	const [ cancelOrder, { loading: cancelOrderLoading,
		error: cancelOrderError,
		data: cancelOrderData,
		reset
	} ] = useMutation(CANCEL_ORDER, {
		variables: {
			orderId: id
		},
		onCompleted: (data) => {
			if (data.cancelOrder) {
				refetch();
			}

			setTimeout(() => {
				reset()
			}, 2000);
		}
	});

	const isOrderDelivered = getDeliveryDate(data?.getOrder?.isExpress, data?.getOrder?.placedOn) === 'Delivered' || false;

	const handleOnClickBack = () => {
		history.push(`/user/${getUsersFirstName(userName)}`, {
			from: 'orderDetails'
		})
	}

	const handleOnClickCancelOrder = () => {
		cancelOrder();
	}

	if (loading) {
		return (
			<Container>
				<MainHeading>Order Details</MainHeading>
				<p>Fetching your order's details...</p>
			</Container>
		);
	}

	if (error) {
		return (
			<Container>
				<div className='title'>
					<MainHeading>
						Order Details
					</MainHeading>
					<BackText onClick={handleOnClickBack}>
						<ion-icon name="arrow-back-outline"></ion-icon>
						Go Back
					</BackText>
				</div>
				<ErrorMessage>
					Unable to fetch your order's details. Please try again later.
				</ErrorMessage>
			</Container>
		);
	}

	return (
		<Container>
			<div className='title'>
				<MainHeading>
					Order Details
				</MainHeading>
				<BackText onClick={handleOnClickBack}>
					<ion-icon name="arrow-back-outline"></ion-icon>
					Go Back
				</BackText>
			</div>
			<Header
				orderId={id}
				orderDate={data?.getOrder?.placedOn}
			/>
			<Content order={data?.getOrder} />

			{!isOrderDelivered && (
				<ButtonContainer>

					{cancelOrderLoading && (
						<Loader style={{ borderRadius: '3px' }} />
					)}

					{cancelOrderData && (
						<div className='icon_container'>
							<ion-icon
								name='checkmark-circle'
								class='login_success'></ion-icon>
						</div>
					)}

					{cancelOrderError && (
						<div className='icon_container'>
							<ion-icon
								name='close-circle'
								class='login_failed'></ion-icon>
						</div>
					)}
					<CancelButton
						onClick={handleOnClickCancelOrder}
						label='Cancel Order'
						disabled={cancelOrderLoading
							|| data?.getOrder?.isCanceled
						}
					/>
				</ButtonContainer>
			)}
		</Container>
	);
};

export default OrderDetails;
