import React from "react";

import {Container, SlotContainer, StyledInput} from "./components";

export default function BaseInput({
                                      className,
                                      leftSlot,
                                      rightSlot,
                                      error,
                                      ...props
                                  }) {
    return (
        <Container className={className} $isError={!!error}>
            {leftSlot && <SlotContainer>{leftSlot}</SlotContainer>}
            <StyledInput {...props} />
            {rightSlot && <SlotContainer>{rightSlot}</SlotContainer>}
        </Container>
    );
}
