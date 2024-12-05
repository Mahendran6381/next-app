'use client'
import { useFormik  } from "formik";
import * as Yup from 'yup'
import React from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Col,
  Row,
} from "antd";

const { Option } = Select;

export default function CustomerForm(){
    const formik = useFormik({
        initialValues: {
          name: '',
          alternatemobile: '',
          country:'',
          state:'',
          mobile:'',
          city:'',
          address:'',
          pincode:'',
          gstnum:'',
        },
        validationSchema: Yup.object().shape({
          name: Yup.string()
            .min(3, 'name must be at least 3 characters long')
            .required('Required'),
            alternatemobile : Yup.number().required("Required"),  
            mobile : Yup.number().required("Required"),  
            city: Yup.string()
            .required('Required'),
            state: Yup.string()
            .required('Required'),
            country: Yup.string()
            .required('Required'),
            address: Yup.string()
            .required('Required'),
            pincode: Yup.string()
            .required('Required'),
            gstnum: Yup.string().optional(),

          
        }),
        onSubmit: values => {
          console.log(values);
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
                id="Name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Please input"
                status={formik.errors.name && formik.touched.name ? "error" : ""}
              />
              {formik.errors.name && formik.touched.name && (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              )}
            </div>

            <div>
              <label htmlFor="alternatemobile">Alternate Mobile</label>
              <Input
                id="alternatemobile"
                name="alternatemobile"
                onChange={formik.handleChange}
                value={formik.values.alternatemobile}
                placeholder="Please input"
                status={
                  formik.errors.alternatemobile && formik.touched.alternatemobile
                    ? "error"
                    : ""
                }
              />
              {formik.errors.alternatemobile && formik.touched.alternatemobile && (
                <div style={{ color: "red" }}>{formik.errors.alternatemobile}</div>
              )}
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <Select
                id="country"
                onChange={(value) => formik.setFieldValue("country", value)}
                value={formik.values.country}
                placeholder="Select Country"
                status={formik.errors.country && formik.touched.country ? "error" : ""}
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
                id="City"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                placeholder="Please input"
                status={formik.errors.city && formik.touched.city ? "error" : ""}
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
                status={formik.errors.pincode && formik.touched.pincode ? "error" : ""}
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
                onChange={formik.handleChange}
                value={formik.values.mobile}
                placeholder="Please input"
                status={formik.errors.mobile && formik.touched.mobile ? "error" : ""}
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
                status={formik.errors.gstnum && formik.touched.gstnum ? "error" : ""}
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
                status={formik.errors.state && formik.touched.state ? "error" : ""}
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
         )

}