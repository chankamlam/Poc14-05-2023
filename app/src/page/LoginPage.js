import React, { useState } from "react";
import { Button, Checkbox, Form, Input,Alert } from "antd";
import { Navigate } from "react-router-dom";
import url from "../common/url"
const LoginPage = () => {
  const [validated, setValidated] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    fetch(url.LOGIN_URL, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        if (data.status === "SUCESS") {
          setValidated(true);
        } else {
          setDisplayAlert(true)
        }
      });
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onCloseAlert = ()=>{
    setDisplayAlert(false)
  }
  return (
    <div
      style={{
        padding: 24,
        position: "fixed",
        top: "20%",
        left: "30%",
      }}
    >
      {validated && <Navigate to="/user/list" replace={true} />}
      <div style={{
            height:60,
            width:400,
            // backgroundColor:'red',
            marginBottom:40
          }}>
      {displayAlert && (
        <Alert
          // message="Warning"
          description="Username or Password is incorrect."
          type="error"
          showIcon
          closable
          afterClose = {onCloseAlert}
        />
      )}
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="pwd"
          placeholder="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginPage;
