import Loader from '../../Loader';
import { Container, PrimaryButton, SecondaryButton } from './index.styles';

const FormButtonContainer = ({
	loading,
	primaryButtonLabel,
	primaryButtonAction,
	secondaryButtonLabel,
	secondaryButtonAction,
}) => {
	return (
		<Container>
			<div className='sub_button_container'>
				{loading && <Loader style={{ borderRadius: '3px' }} />}
				<PrimaryButton
					label={primaryButtonLabel}
					onClick={primaryButtonAction}
					type='submit'
					disabled={loading}
				/>
			</div>
			<SecondaryButton
				label={secondaryButtonLabel}
				onClick={secondaryButtonAction}
				disabled={loading}
				className='primary_button'
			/>
		</Container>
	);
};

export default FormButtonContainer;
