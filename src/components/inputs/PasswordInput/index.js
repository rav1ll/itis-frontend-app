import React from "react";
import BaseInput from "../BaseInput";
import VisibilityButton from "./components/VisibilityButton";

export function PasswordInput({isHidden, leftSlot, ...props}) {
    return <BaseInput {...props} rightSlot={<VisibilityButton isHidden={isHidden}/>}/>
}
