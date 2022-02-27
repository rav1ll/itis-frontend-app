import React from "react";
import styled from "styled-components";

import Button from "../components/inputs/Button";
import DefaultLayout from "../components/DefaultLayout/DefaultLayout";
import BaseInput from "../components/inputs/BaseInput";

const LoginButton = styled(Button)`
  font-size: 2em;
`

export default function Login() {
    return <DefaultLayout title={'Login Page'}>
        Login page
        <BaseInput/>
        <LoginButton >Log in</LoginButton>
    </DefaultLayout>
}
