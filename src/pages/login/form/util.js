import * as Yup from 'yup';

export const loginFormValidation = () =>
	Yup.object({
		email: Yup.string()
			.email('Invalid email')
			.required('Email cannot be empty!'),
		password: Yup.string().required('Password cannot be empty!'),
	});
