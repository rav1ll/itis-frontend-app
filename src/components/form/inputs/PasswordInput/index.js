import React from "react";
import BaseInput from "../BaseInput";
import VisibilityButton from "./components/VisibilityButton";

export default function PasswordInput({
  isHidden = true,
  leftSlot,
  type,
  onEyeClick,
  ...props
}) {
  return (
    <BaseInput
      type={isHidden ? "password" : "text"}
      rightSlot={<VisibilityButton isHidden={isHidden} onClick={onEyeClick} />}
      {...props}
    />
  );
}
