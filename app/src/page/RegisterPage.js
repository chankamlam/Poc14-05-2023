import React, { useState } from 'react';
import { Button, Checkbox, Form, Input,Card,Upload,message,Modal } from 'antd';
import {
  PlusOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { Navigate } from "react-router-dom";
import url from "../common/url"
import { observer } from "mobx-react-lite"

const { Dragger } = Upload;
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const RegisterPage = observer(({store}) => {
  const [validated, setValidated] = useState(false);
  const onFinish = (values) => {
    values.cardImg = values.cardImg.file.response.data.fileName
    console.log('Success:', values);

    
    fetch(url.REGISTER_URL, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        store.loadData();
        if (data.status === "SUCESS") {
          setValidated(true);
        } 
      });
    });

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [isUploaded,setIsUploaded] = useState(false)

  const handleUploadChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
        setIsModalOpen(true)
        setIsUploaded(true)
      });
    }
  };
  const handleModalOk = ()=>{
    setIsModalOpen(false)
  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (<div
    style={{
      // padding: 24,
      position: 'fixed',
      top: '20%',
      left: '20%',
    }}
  >
    {
      validated && <Navigate to="/" replace={true} />
    }
    <Card title="Card title" >

    <Form
      style={{padding:20}}
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 14,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="userName"
        
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        label="ID Card Numer"
        name="cardNum"
        placeholder="ID Card Number"
        rules={[
          {
            required: true,
            message: 'Please input your id card number!',
          },
        ]}
      >
        <Input placeholder="ID Card Number" />
      </Form.Item>

      <Form.Item
        label="ID Card Image"
        name="cardImg"
        rules={[
          {
            required: true,
            message: 'Please upload your id card image!',
          },
        ]}
      >
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="http://localhost:4000/upload"
        beforeUpload={beforeUpload}
        onChange={handleUploadChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>

      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" disabled={!isUploaded}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Card>
    <Modal title="System" open={isModalOpen} onCancel={handleModalOk} onOk={handleModalOk} closable={false}>
        <p>Upload file completed!</p>
      </Modal>
  </div>

  );
});
export default RegisterPage;