import React, {useCallback, useState} from 'react';

import OneFormLayout from "../../components/Layouts/OneFormLayout";
import useHandleChangeField from "../../components/form/utils/useHandleChangeField";
import TextField from "../../components/form/formFields/TextField";
import PasswordField from "../../components/form/formFields/PasswordField";
import Button from "../../components/form/inputs/Button";
import emailValidator from "../../validators/emailValidator";
import useSharedValidation from "../../validators/useSharedValidation";
import getFirstError from "../../validators/getFirstError";
import emptyValidator from "../../validators/emptyValidator";
import latinNumbersValidator from "../../validators/latinNumbersValidator";
import minLengthValidatorBuilder from "../../validators/minLengthValidatorBuilder";
import maxLengthValidatorBuilder from "../../validators/maxLengthValidatorBuilder";

const INITIAL_FORM_STATE = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
};

const VALIDATION_CONFIG = {
    email: (value) => getFirstError([emptyValidator, emailValidator], value),
    firstName: (value) => getFirstError([
        emptyValidator,
        minLengthValidatorBuilder(2),
        maxLengthValidatorBuilder(10),
        latinNumbersValidator
    ], value),
    lastName: (value) => getFirstError([
        emptyValidator,
        minLengthValidatorBuilder(2),
        maxLengthValidatorBuilder(10),
        latinNumbersValidator
    ], value),
    password: (value) => getFirstError([
        emptyValidator,
        minLengthValidatorBuilder(8),
    ], value),
}

export default function Registration() {
    const [formState, setFormState] = useState(INITIAL_FORM_STATE);
    const errorsState = useSharedValidation(formState, VALIDATION_CONFIG);

    const [eyeState, setEyeState] = useState(true);

    const onAyeClick = useCallback(() => {
        setEyeState((state) => !state);
    }, []);

    const handleEvents = useHandleChangeField(setFormState);

    return <OneFormLayout>
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
        />
        <TextField
            label={'Last name'}
            id={'lastName'}
            onChange={handleEvents}
            onBlur={handleEvents}
            value={formState.lastName}
        />
        <PasswordField
            label={'Password'}
            id={'password'}
            onChange={handleEvents}
            onBlur={handleEvents}
            value={formState.password}
            onEyeClick={onAyeClick}
            isHidden={eyeState}
        />
        <Button type="submit">Register</Button>
    </OneFormLayout>
}