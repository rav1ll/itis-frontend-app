import React from "react";

import Button from "../../components/inputs/Button";
import DefaultLayout from "../../components/DefaultLayout/DefaultLayout";
import PasswordField from "../../components/formFields/PasswordField";
import TextField from "../../components/formFields/TextField";

import { Form, PageWrapper } from "./components";

export default function Login() {
  return (
    <DefaultLayout title={"Login Page"}>
      <PageWrapper>
        <Form>
          <TextField label="login" />
          <PasswordField label="password" />
          <Button type="submit">Log in</Button>
        </Form>
      </PageWrapper>
    </DefaultLayout>
  );
}
