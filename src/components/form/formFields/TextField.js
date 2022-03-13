import React from "react";
import BaseWrapper from "./BaseWrapper";
import BaseInput from "../inputs/BaseInput";

export default function TextField({ label, ...props }) {
  return (
    <BaseWrapper label={label}>
      <BaseInput {...props} />
    </BaseWrapper>
  );
}
