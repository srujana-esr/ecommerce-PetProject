import { Container } from './index.styles';

const DeliveryTypecontrol = ({ handleOnChangeDeliveryType, isCartEmpty }) => {
	return (
		<Container>
			<label className='switch'>
				<input
					type='checkbox'
					onChange={handleOnChangeDeliveryType}
					disabled={isCartEmpty}
				/>
				<span className='slider' />
			</label>
		</Container>
	);
};

export default DeliveryTypecontrol;
