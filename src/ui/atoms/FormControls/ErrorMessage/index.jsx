import { SmallText } from '../../../../theme/defaultStyles';
import { Container } from './index.styles';

const DEFAULT_MESSAGE =
	'Unable to save the changes. Click on Retry or try again later.';

const ErrorMessage = ({ message }) => {
	return (
		<Container>
			<SmallText color='red'>{message ?? DEFAULT_MESSAGE}</SmallText>
		</Container>
	);
};

export default ErrorMessage;
