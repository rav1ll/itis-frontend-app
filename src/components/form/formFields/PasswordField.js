import React from "react";
import PasswordInput from "../inputs/PasswordInput";
import BaseWrapper from "./BaseWrapper";

export default function PasswordField({ label, ...props }) {
  return (
    <BaseWrapper label={label}>
      <PasswordInput {...props} />
    </BaseWrapper>
  );
}
