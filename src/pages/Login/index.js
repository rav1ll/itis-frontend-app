import React, {useCallback, useState} from "react";

import OneFormLayout from "../../components/Layouts/OneFormLayout";
import Button from "../../components/form/inputs/Button";
import PasswordField from "../../components/form/formFields/PasswordField";
import TextField from "../../components/form/formFields/TextField";
import useHandleChangeField from "../../components/form/utils/useHandleChangeField";
import emailValidator from "../../validators/emailValidator";
import useSharedValidation from "../../validators/useSharedValidation";
import getFirstError from "../../validators/getFirstError";
import emptyValidator from "../../validators/emptyValidator";
import minLengthValidatorBuilder from "../../validators/minLengthValidatorBuilder";

const INITIAL_FORM_STATE = { login: "", password: "" };
const VALIDATION_CONFIG = {
    login: (value)=> getFirstError([emptyValidator,emailValidator],value),
    password: (value) => getFirstError([
        emptyValidator,
        minLengthValidatorBuilder(8),
    ], value),
}

export default function Index () {
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const errorsState = useSharedValidation(formState, VALIDATION_CONFIG);

  const [eyeState, setEyeState] = useState(true);
  const onAyeClick = useCallback(() => {
    setEyeState((state) => !state);
  }, []);

  const handleEvents = useHandleChangeField(setFormState);

  return (
    <OneFormLayout>
      <TextField
            id="login"
            label="email"
            value={formState.login}
            error={errorsState.login}
            onChange={handleEvents}
            onBlur={handleEvents}
          />
          <PasswordField
            id="password"
            label="password"
            value={formState.password}
            onChange={handleEvents}
            onBlur={handleEvents}
            onEyeClick={onAyeClick}
            isHidden={eyeState}
          />
          <Button type="submit">Log in</Button>
    </OneFormLayout>
  );
}
