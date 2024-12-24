"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Form, Input, } from "antd";

interface AuthParams {
  email: string;
  password: string;
}

const LoginPage = () => {
  const handleSubmit = async (value: AuthParams) => {
    try {
      const responseJson = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const response = await responseJson.json();
      if (response) console.log(response);
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required(),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <Form onFinish={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Input
          onChange={formik.handleChange}
          id="email"
          name="email"
          value={formik.values.email}
          status={
            formik.errors.email && formik.touched.email ? "error" : undefined
          }
        ></Input>
        {formik.errors.email && formik.touched.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="email">Password</label>
        <Input
          onChange={formik.handleChange}
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          status={
            formik.errors.password && formik.touched.password
              ? "error"
              : undefined
          }
        ></Input>
        {formik.errors.password && formik.touched.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}
      </div>
      <div>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </div>
    </Form>
  );
};

export default LoginPage;
