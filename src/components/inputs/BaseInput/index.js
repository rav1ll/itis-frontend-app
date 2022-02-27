import React from "react";

import {Container, SlotContainer, StyledInput} from "./components";


export default function BaseInput({className, leftSlot, rightSlot, ...props}) {
    return <Container className={className}>
        {leftSlot && <SlotContainer>{leftSlot}</SlotContainer>}
        <StyledInput {...props}/>
        {rightSlot && <SlotContainer>{rightSlot}</SlotContainer>}
    </Container>
}
