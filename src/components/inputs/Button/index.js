import React from "react";
import styled from "styled-components";


const StyledButton = styled.button`
  border: 3px solid #379683;
  border-radius: 6px;

  color: #484f4f;
  background-color: inherit;
`;


export default function Button({className, children, onClick}) {
    return <StyledButton className={className} onClick={onClick}>{children}</StyledButton>
}
