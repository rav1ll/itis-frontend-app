import React, { useEffect, useState } from 'react';

import OneFormLayout from '../../components/Layouts/OneFormLayout';
import useHandleChangeField from '../../components/form/utils/useHandleChangeField';
import TextField from '../../components/form/formFields/TextField';
import PasswordField from '../../components/form/formFields/PasswordField';
import Button from '../../components/form/inputs/Button';
import emailValidator from '../../validators/stringValidators/emailValidator';
import useSharedValidation from '../../validators/useSharedValidation';
import getFirstError from '../../validators/helpers/getFirstError';
import emptyValidator from '../../validators/stringValidators/emptyValidator';
import latinNumbersValidator from '../../validators/stringValidators/latinNumbersValidator';
import minLengthValidatorBuilder from '../../validators/stringValidators/minLengthValidatorBuilder';
import maxLengthValidatorBuilder from '../../validators/stringValidators/maxLengthValidatorBuilder';
import useRequiredFieldsFilled from '../../validators/useRequiredFieldsFilled';
import { useNavigate } from 'react-router-dom';
import useAuthUser from '../../globals/AuthUser';

const INITIAL_FORM_STATE = {
	email: '',
	firstName: '',
	lastName: '',
	password: ''
};

const VALIDATION_CONFIG = {
	email: (value) => getFirstError([emptyValidator, emailValidator], value),
	firstName: (value) =>
		getFirstError([emptyValidator, minLengthValidatorBuilder(2), maxLengthValidatorBuilder(10), latinNumbersValidator], value),
	lastName: (value) =>
		getFirstError([emptyValidator, minLengthValidatorBuilder(2), maxLengthValidatorBuilder(10), latinNumbersValidator], value),
	password: (value) => getFirstError([emptyValidator, minLengthValidatorBuilder(8)], value)
};

export default function Registration() {
	const [formState, setFormState] = useState(INITIAL_FORM_STATE);
	const [errorsState, isHasError] = useSharedValidation(formState, VALIDATION_CONFIG);

	const isRequiredFieldFilled = useRequiredFieldsFilled(formState, Object.keys(INITIAL_FORM_STATE));

	const handleEvents = useHandleChangeField(setFormState);

	const { state: AuthUser } = useAuthUser();
	const navigate = useNavigate();
	useEffect(() => {
		if (AuthUser.user) {
			navigate('/', { replace: true });
		}
	}, [AuthUser.user]);

	return (
		<OneFormLayout>
			<TextField
				label={'email'}
				id={'email'}
				onChange={handleEvents}
				onBlur={handleEvents}
				value={formState.email}
				error={errorsState.email}
			/>
			<TextField
				label={'First name'}
				id={'firstName'}
				onChange={handleEvents}
				onBlur={handleEvents}
				value={formState.firstName}
				error={errorsState.firstName}
			/>
			<TextField
				label={'Last name'}
				id={'lastName'}
				onChange={handleEvents}
				onBlur={handleEvents}
				value={formState.lastName}
				error={errorsState.lastName}
			/>
			<PasswordField
				label={'Password'}
				id={'password'}
				onChange={handleEvents}
				onBlur={handleEvents}
				value={formState.password}
				error={errorsState.password}
			/>
			<Button type="submit" disabled={isHasError || !isRequiredFieldFilled}>
				Register
			</Button>
		</OneFormLayout>
	);
}
