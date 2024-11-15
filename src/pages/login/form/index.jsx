import { useHistory, useLocation } from 'react-router';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useLazyQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { Button, Input } from '@comp-lib';
import { StyledForm } from './index.styles';
import Loader from '../../../ui/atoms/Loader';
import { loginFormValidation } from './util';
import { MainHeading, SmallText } from '../../../theme/defaultStyles';
import { USER_LOGIN } from '../../../graphql/queries';
import { userLogin } from '../../../redux/actions/auth';
import { storeUserTokenInStorage } from '../../../utils/auth.helpers';
import { Link } from 'react-router-dom';
import { initCart, initWishlist } from '../../../redux/actions';
import { BORDER_COLORS, FONT_COLOR } from '../../../theme/defaultConstants';
import { useAppDispatch } from '../../../hooks/reduxHooks';

const LoginForm = () => {
	const { state } = useLocation();
	const dispatch = useAppDispatch();
	const history = useHistory();
	const [ loginFailed, setLoginFailed ] = useState(false);

	const [ userSignIn, { loading, data } ] = useLazyQuery(USER_LOGIN, {
		onCompleted: (data) => {
			storeUserTokenInStorage(data.signIn.token);
			dispatch(
				userLogin({
					...data.signIn,
					isCartEmpty: data?.signIn?.userCart?.count === 0 ? true : false,
				}),
			);
			dispatch(initCart(data.signIn.userCart));
			dispatch(initWishlist({
				data: data.signIn.wishlist
			}))
			setTimeout(() => {
				history.replace(state?.from || '/');
			}, 500);
		},
		onError: (err) => {
			// TODO Add error feedback
			setLoginFailed(true);

			setTimeout(() => {
				setLoginFailed(false);
			}, 500);
		},
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: loginFormValidation,
		onSubmit: (values) => {
			userSignIn({
				variables: {
					email: values.email,
					password: values.password,
				},
			});
		},
	});

	return (
		<StyledForm>
			<MainHeading>SignIn</MainHeading>
			<div className='formControl'>
				<Input
					type='email'
					name='email'
					className='form_input'
					placeholder='email'
					onChange={formik.handleChange}
					value={formik.values.email}
					style={{
						borderColor: formik.errors.email
							? BORDER_COLORS.formElement.error
							: BORDER_COLORS.formElement.primary,
					}}
				/>
				{formik.errors.email && (
					<SmallText
						size='0.75rem'
						color={FONT_COLOR.error}>
						{formik.errors.email}
					</SmallText>
				)}
			</div>
			<div className='formControl'>
				<Input
					type='password'
					name='password'
					className='form_input'
					placeholder='password'
					onChange={formik.handleChange}
					value={formik.values.password}
					style={{
						borderColor: formik.errors.password
							? BORDER_COLORS.formElement.error
							: BORDER_COLORS.formElement.primary,
					}}
				/>
				{formik.errors.password && (
					<SmallText
						size='0.75rem'
						color={FONT_COLOR.error}>
						{formik.errors.password}
					</SmallText>
				)}
			</div>
			{/* TODO: for later implementation */}
			{/* <div className="form_options">
				<SmallText
					size='0.75rem'
					color='#bcbcbc'
				>Forgot your password?
				</SmallText>
			</div> */}
			<div className='button_container'>
				{loading && <Loader style={{ borderRadius: '3px' }} />}
				{data && (
					<div className='icon_container'>
						<ion-icon
							name='checkmark-circle'
							class='login_success'></ion-icon>
					</div>
				)}

				{loginFailed && (
					<div className='icon_container'>
						<ion-icon
							name='close-circle'
							class='login_failed'></ion-icon>
					</div>
				)}
				<Button
					type='submit'
					label='Sign In'
					onClick={formik.handleSubmit}
					disabled={!formik.dirty ? !formik.dirty : !formik.isValid}
				/>
			</div>

			<div className='signup_option'>
				<SmallText size='0.75rem'>
					Not a member?
					<Link to='/signup'>
						<span>Sign up.</span>
					</Link>
				</SmallText>
			</div>
		</StyledForm>
	);
};

export default LoginForm;
