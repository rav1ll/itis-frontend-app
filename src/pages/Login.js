import React from "react";
import styled from "styled-components";

import Button from "../components/input/Button";
import DefaultLayout from "../components/DefaultLayout/DefaultLayout";

const LoginButton = styled(Button)`
  background-color: aqua;
`

export default function Login() {
    return <DefaultLayout title={'Login Page'}>Login page <LoginButton /></DefaultLayout>
}
