import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 3px solid #bb7db2;
  border-radius: 6px;
  font-size: 1em;

  color: #484f4f;
  background-color: white;
  cursor: pointer;
`;

export default function Button({ className, children, onClick }) {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
