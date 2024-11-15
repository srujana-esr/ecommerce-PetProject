import * as Yup from 'yup';

export const basicInfoFormValidation = () =>
	Yup.object({
		email: Yup.string()
			.email('Invalid email')
			.required('Email cannot be empty!'),
		notificationPermission: Yup.boolean(),
	});
