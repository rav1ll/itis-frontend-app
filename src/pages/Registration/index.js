import React, {useCallback, useState} from 'react';

import OneFormLayout from "../../components/Layouts/OneFormLayout";
import useHandleChangeField from "../../components/form/utils/useHandleChangeField";
import TextField from "../../components/form/formFields/TextField";
import PasswordField from "../../components/form/formFields/PasswordField";
import Button from "../../components/form/inputs/Button";

export default function Registration() {
    const [formState, setFormState] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });

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