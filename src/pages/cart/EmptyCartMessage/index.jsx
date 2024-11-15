import { useSelector } from 'react-redux';
import { selectIsUserDataLoading } from '../../../redux/selectors/auth';
import { Message } from './index.styles';

const EmptyCartMessage = ({ isCartEmpty }) => {
	const isCartLoading = useSelector(selectIsUserDataLoading);

	if (isCartLoading) {
		return <Message>Loading your bag...</Message>;
	} else if (isCartEmpty) {
		return <Message>There are no items in your bag.</Message>;
	}

	return (
		<Message>
			Something wrong happened. We couldn't get your bag. Please try again
			later.
		</Message>
	);
};

export default EmptyCartMessage;
