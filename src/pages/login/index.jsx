import NavBrand from '../../ui/atoms/NavBrand';
import { Container } from './index.styles';
import LoginForm from './form';

const Login = () => {
	return (
		<Container>
			<div className='dummy_nav'>
				<NavBrand />
			</div>
			<div className='form_container'>
				<LoginForm />
			</div>
		</Container>
	);
};

export default Login;
