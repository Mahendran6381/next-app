'use client';

import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Button, Form, Input, Select, Space, Col, Row } from "antd";

const { Option } = Select;

interface Customer {
  name: string;
  alternateMobile: string;
  country: string;
  state: string;
  mobile: string;
  city: string;
  address: string;
  pincode: string;
  gstnum: string;
}

interface CustomerPropValue {
  initialCutsomerValue: Customer;
  onSubmit: (value: Customer) => object;
}

export default function CustomerForm({
  initialCutsomerValue,
  onSubmit,
}: CustomerPropValue) {
  const formik = useFormik({
    initialValues: initialCutsomerValue,
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters long")
        .required("Required"),
      alternateMobile: Yup.string().required("Required"),
      mobile: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      pincode: Yup.string().required("Required"),
      gstnum: Yup.string().optional(),
    }),
    onSubmit: async (values) => {
      onSubmit(values);
    },
  });

  return (
    <Form
      name="complex-form"
      onFinish={formik.handleSubmit}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      style={{ maxWidth: "100%" }}
    >
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Please input"
                status={formik.errors.name && formik.touched.name ? "error" : undefined}
              />
              {formik.errors.name && formik.touched.name && (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              )}
            </div>

            <div>
              <label htmlFor="alternateMobile">Alternate Mobile</label>
              <Input
                id="alternateMobile"
                name="alternateMobile"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.alternateMobile}
                placeholder="Please input"
                status={
                  formik.errors.alternateMobile && formik.touched.alternateMobile
                    ? "error"
                    : undefined
                }
              />
              {formik.errors.alternateMobile && formik.touched.alternateMobile && (
                <div style={{ color: "red" }}>{formik.errors.alternateMobile}</div>
              )}
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <Select
                id="country"
                onChange={(value) => formik.setFieldValue("country", value)}
                value={formik.values.country}
                placeholder="Select Country"
                status={formik.errors.country && formik.touched.country ? "error" : undefined}
              >
                <Option value="India">India</Option>
                <Option value="USA">USA</Option>
                <Option value="European">European</Option>
              </Select>
              {formik.errors.country && formik.touched.country && (
                <div style={{ color: "red" }}>{formik.errors.country}</div>
              )}
            </div>

            <div>
              <label htmlFor="city">City</label>
              <Input
                id="city"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                placeholder="Please input"
                status={formik.errors.city && formik.touched.city ? "error" : undefined}
              />
              {formik.errors.city && formik.touched.city && (
                <div style={{ color: "red" }}>{formik.errors.city}</div>
              )}
            </div>

            <div>
              <label htmlFor="pincode">Pincode</label>
              <Input
                id="pincode"
                name="pincode"
                onChange={formik.handleChange}
                value={formik.values.pincode}
                placeholder="Please input"
                status={formik.errors.pincode && formik.touched.pincode ? "error" : undefined}
              />
              {formik.errors.pincode && formik.touched.pincode && (
                <div style={{ color: "red" }}>{formik.errors.pincode}</div>
              )}
            </div>
          </Space>
        </Col>

        <Col xs={24} sm={24} md={12}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <div>
              <label htmlFor="mobile">Mobile Number</label>
              <Input
                id="mobile"
                name="mobile"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.mobile}
                placeholder="Please input"
                status={formik.errors.mobile && formik.touched.mobile ? "error" : undefined}
              />
              {formik.errors.mobile && formik.touched.mobile && (
                <div style={{ color: "red" }}>{formik.errors.mobile}</div>
              )}
            </div>

            <div>
              <label htmlFor="gstnum">GST Number</label>
              <Input
                id="gstnum"
                name="gstnum"
                onChange={formik.handleChange}
                value={formik.values.gstnum}
                placeholder="Please input"
                status={formik.errors.gstnum && formik.touched.gstnum ? "error" : undefined}
              />
              {formik.errors.gstnum && formik.touched.gstnum && (
                <div style={{ color: "red" }}>{formik.errors.gstnum}</div>
              )}
            </div>

            <div>
              <label htmlFor="state">State</label>
              <Select
                id="state"
                onChange={(value) => formik.setFieldValue("state", value)}
                value={formik.values.state}
                placeholder="Select State"
                status={formik.errors.state && formik.touched.state ? "error" : undefined}
              >
                <Option value="Tamil Nadu">Tamil Nadu</Option>
                <Option value="California">California</Option>
                <Option value="Berlin">Berlin</Option>
              </Select>
              {formik.errors.state && formik.touched.state && (
                <div style={{ color: "red" }}>{formik.errors.state}</div>
              )}
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <Input.TextArea
                id="address"
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
                placeholder="Write something about yourself"
              />
            </div>

            <div>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Space>
        </Col>
      </Row>
    </Form>
  );
}
