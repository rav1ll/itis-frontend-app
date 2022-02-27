import React from "react";
import styled from "styled-components";

import Button from "../components/inputs/Button";
import DefaultLayout from "../components/DefaultLayout/DefaultLayout";
import PasswordField from "../components/formFields/PasswordField";
import TextField from "../components/formFields/TextField";

const LoginButton = styled(Button)`
  font-size: 2em;
`

export default function Login() {
    return <DefaultLayout title={'Login Page'}>
        Login page
        <TextField label={'login'}/>
        <PasswordField label={'password'}/>
        <LoginButton>Log in</LoginButton>
    </DefaultLayout>
}
