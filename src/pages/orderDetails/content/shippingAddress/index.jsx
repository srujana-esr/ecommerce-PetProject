import { useSelector } from 'react-redux';
import { selectContactDetails } from '../../../../redux/selectors';
import { Container } from './index.styles';

const ShippingAddress = () => {
	const userContactDetails = useSelector(selectContactDetails);
	return (
		<Container>
			<h5>Shipping Address</h5>
			<p>
				{userContactDetails.name}
				<br />
				{userContactDetails.mobile}
				<br />
				{userContactDetails.address1}
				<br />
				{userContactDetails.address2}
				<br />
				{userContactDetails.district}, {userContactDetails.city}
				<br />
				{userContactDetails.state}, {userContactDetails.postal_code}
				<br />
				{userContactDetails.country}
			</p>
		</Container>
	);
};

export default ShippingAddress;
