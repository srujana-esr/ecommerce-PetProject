import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { format } from 'date-fns';
import { useMutation } from '@apollo/client';
import { Input } from 'comp-lib';
import { FORM_CONFIG } from './index.config';
import { FormControl } from '../index.styles';
import Header from '../Header';
import FormButtonContainer from '../../../../ui/atoms/FormControls/ButtonContainer';
import ErrorMessage from '../../../../ui/atoms/FormControls/ErrorMessage';
import { selectLoggedInUser } from '../../../../redux/selectors/auth';
import { UPDATE_USER_PROFILE } from '../../../../graphql/mutations';

const BasicInfoView = () => {
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

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			didOptNotification: false,
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
				text='Your Basic Info'
				handleEditButtonClick={handleEditButtonClick}
				showEditIcon={!isEditMode}
			/>
			{FORM_CONFIG.map((field) => (
				<FormControl key={field.id}>
					<label htmlFor={field.name}>{field.label}</label>
					{isEditMode ? (
						<>
							<Input
								name={field.name}
								type={field.type}
								required={field.isRequired}
								placeholder=''
								value={user[ field.value ]}
								disabled={!field.isEditable}
							/>
						</>
					) : (
						<p>{user[ field.value ]}</p>
					)}
				</FormControl>
			))}

			<FormControl>
				<label>User Since</label>
				{user?.createdAt && (
					<p>{format(new Date(parseInt(user.createdAt)), 'dd MMMM yyyy')}</p>
				)}
			</FormControl>

			<FormControl style={{ justifyContent: isEditMode ? 'flex-start' : '' }}>
				<label>Opted for Notifications</label>
				{isEditMode ? (
					<Input
						name='didOptNotification'
						type='checkbox'
						value={formik.values.didOptNotification}
						onChange={formik.handleChange}
					/>
				) : (
					<p>{user.didOptNotification ? 'yes' : 'no'}</p>
				)}
			</FormControl>

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

export default BasicInfoView;
