import { useState } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { Input } from 'comp-lib';
import { FROM_CONFIG } from './index.config';
import { FormControl } from '../index.styles';
import Header from '../Header';
import ErrorMessage from '../../../../ui/atoms/FormControls/ErrorMessage';
import FormButtonContainer from '../../../../ui/atoms/FormControls/ButtonContainer';
import { selectLoggedInUser } from '../../../../redux/selectors/auth';
import { UPDATE_USER_PROFILE } from '../../../../graphql/mutations';

const template = {};

const ContactInfo = () => {
	const user = useSelector(selectLoggedInUser);
	const [ isEditMode, setIsEditMode ] = useState(false);

	const [ updateProfile, { loading, error, reset } ] = useMutation(
		UPDATE_USER_PROFILE,
		{
			onCompleted: () => {
				formik.resetForm();
				setIsEditMode(false);
			},
		},
	);

	FROM_CONFIG.forEach((item) => {
		template[ item.name ] = user[ item.value ] || '';
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			...template,
		},
		onSubmit: (values) => {
			updateProfile({ variables: { input: values } });
		},
	});

	const handleEditButtonClick = () => {
		setIsEditMode(true);
	};

	const handleEditSaveClick = () => {
		if (error) {
			reset();
		}
		formik.handleSubmit();
	};

	const handleEditCancelClick = () => {
		if (error) {
			reset();
		}
		setIsEditMode(false);
		formik.resetForm();
	};

	return (
		<>
			<Header
				text='Contact Info'
				handleEditButtonClick={handleEditButtonClick}
				showEditIcon={!isEditMode}
			/>
			{FROM_CONFIG.map((field) => (
				<FormControl key={field.id}>
					<label htmlFor={field.name}>{field.label}</label>
					{isEditMode ? (
						<Input
							name={field.name}
							type={field.type}
							required={field.isRequired}
							placeholder=''
							value={formik.values[ field.name ]}
							disabled={!field.isEditable || loading}
							onChange={formik.handleChange}
						/>
					) : (
						<p>{user[ field.value ]}</p>
					)}
				</FormControl>
			))}

			{error && <ErrorMessage />}

			{isEditMode && (
				<FormButtonContainer
					loading={loading}
					primaryButtonLabel={error ? 'Retry' : 'Save'}
					primaryButtonAction={handleEditSaveClick}
					secondaryButtonLabel='Cancel'
					secondaryButtonAction={handleEditCancelClick}
				/>
			)}
		</>
	);
};

export default ContactInfo;
