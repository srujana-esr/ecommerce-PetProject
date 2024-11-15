import * as Yup from 'yup';

export const singupFormValidation = () =>
	Yup.object({
		email: Yup.string()
			.email('Invalid email')
			.required('Email cannot be empty!'),
		password: Yup.string().required('Password cannot be empty!'),
		name: Yup.string().required('Name cannot be empty!'),
	});
