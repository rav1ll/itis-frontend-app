import React from "react";
import {LabelWrapper} from "./components";

export default function BaseWrapper({label, children}) {
    return <label>
        <LabelWrapper>{label}</LabelWrapper>
        <div>{children}</div>
    </label>
}
