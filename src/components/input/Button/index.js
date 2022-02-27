import React from "react";
import styled from "styled-components";



const StyledButton = styled.div`
  background-color: red;
`;


export default function Button({ className }) {
    return <StyledButton className={className}  />
}
