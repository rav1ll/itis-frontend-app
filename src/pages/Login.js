import React from "react";
import styled from "styled-components";

import Button from "../components/input/Button";


const LoginButton = styled(Button)`
  background-color: aqua;
`


export default function Login() {
    return <div>
        Login page
        <LoginButton />
    </div>
}
