import NavBrand from '../../ui/atoms/NavBrand';
import { Container } from './index.styles';
import SignUpForm from './form';

const SignUp = (props) => {
	return (
		<Container>
			<div className='dummy_nav'>
				<NavBrand />
			</div>
			<div className='form_container'>
				<SignUpForm />
			</div>
		</Container>
	);
};

export default SignUp;
