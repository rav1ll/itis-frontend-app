import React from "react";
import {Container} from "./components";

export default function ShowError({error}) {
    return error ? <Container>{error}</Container> : null;
}