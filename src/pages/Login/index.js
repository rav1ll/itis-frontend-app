import React, { useCallback, useState } from "react";

import OneFormLayout from "../../components/Layouts/OneFormLayout";
import Button from "../../components/form/inputs/Button";
import PasswordField from "../../components/form/formFields/PasswordField";
import TextField from "../../components/form/formFields/TextField";
import useHandleChangeField from "../../components/form/utils/useHandleChangeField";

export default function Index () {
  const [formState, setFormState] = useState({ login: "", password: "" });
  const [eyeState, setEyeState] = useState(true);

  const onAyeClick = useCallback(() => {
    setEyeState((state) => !state);
  }, []);

  const handleEvents = useHandleChangeField(setFormState);

  return (
    <OneFormLayout>
      <TextField
            id="login"
            label="login"
            value={formState.login}
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
