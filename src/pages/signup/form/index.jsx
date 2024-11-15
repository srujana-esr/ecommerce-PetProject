import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { Button, Input } from 'comp-lib';
import { singupFormValidation } from './util';
import { ErrorMessageContainer, StyledForm } from './index.styles';
import Loader from '../../../ui/atoms/Loader';
import { USER_SIGNUP } from '../../../graphql/mutations';
import { userLogin } from '../../../redux/actions/auth';
import { MainHeading, SmallText } from '../../../theme/defaultStyles';
import { storeUserTokenInStorage } from '../../../utils/auth.helpers';
import { BORDER_COLORS, FONT_COLOR } from '../../../theme/defaultConstants';

const SignUpForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [ emailError, setEmailError ] = useState(false);

	const [ signUpUser, { data, error, loading, reset } ] = useMutation(
		USER_SIGNUP,
		{
			onCompleted: (data) => {
				storeUserTokenInStorage(data.signUp.token);
				dispatch(userLogin(data.signUp));

				setTimeout(() => {
					history.replace('/');
				}, 500);
			},
			onError: (err) => {
				if (err.message === 'Email is taken') {
					setEmailError(true);
				}
			},
		},
	);

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
		},
		validationSchema: singupFormValidation,
		validateOnMount: false,
		onSubmit: (values) => {
			if (error) {
				reset();
			}

			if (emailError) {
				setEmailError(false);
			}
			signUpUser({
				variables: { input: values },
			});
		},
	});

	return (
		<StyledForm>
			<MainHeading>Sign Up</MainHeading>
			<div className='formControl'>
				<Input
					type='name'
					name='name'
					className='form_input'
					placeholder='user name'
					onChange={formik.handleChange}
					value={formik.values.name}
					style={{
						borderColor: formik.errors.name
							? BORDER_COLORS.formElement.error
							: BORDER_COLORS.formElement.primary,
					}}
				/>
				{formik.errors.name && (
					<SmallText
						size='0.75rem'
						color={FONT_COLOR.error}>
						{formik.errors.name}
					</SmallText>
				)}
			</div>
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

			{error && (
				<ErrorMessageContainer>
					<SmallText color='red'>
						{emailError
							? 'An account with this email already exists.'
							: 'Unable to Sign you up! Click on Retry or try again later.'}
					</SmallText>
				</ErrorMessageContainer>
			)}
			<div className='button_container'>
				{loading && <Loader style={{ borderRadius: '3px' }} />}
				{data && (
					<div className='icon_container'>
						<ion-icon
							name='checkmark-circle'
							class='login_success'></ion-icon>
					</div>
				)}
				<Button
					type='submit'
					label={error ? 'Retry' : 'Sign Up'}
					onClick={formik.handleSubmit}
					disabled={!formik.dirty ? !formik.dirty : !formik.isValid}
				/>
			</div>
			<div className='signup_option'>
				<SmallText size='0.75rem'>
					Already a member?
					<Link to='/login'>
						<span>Sign In.</span>
					</Link>
				</SmallText>
			</div>
		</StyledForm>
	);
};

export default SignUpForm;
