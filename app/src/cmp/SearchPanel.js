import React, { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select,DatePicker } from 'antd';
const { Option } = Select;
const { RangePicker } = DatePicker;
const SearchPanel = ({store}) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const getFields = () => {
    // const count = expand ? 10 : 6;
    const children = [];
    if(!store.query) {
      return children;
    }
    for (let i = 0; i < store.query.length; i++) {
      const type = store.query[i].type
      if(type=="RANGEPICKER") {
        children.push(
          <Col span={24} key={i}>
          <Form.Item
            name={`${store.query[i].name}`}
            label={`${store.query[i].title}`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <RangePicker style={{
              // width: 400,
            }}/>
          </Form.Item>
          </Col>,
        )
        continue;
      }
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`${store.query[i].name}`}
            label={`${store.query[i].title}`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            {
              type=="INPUT" && (<Input placeholder="placeholder" />)
            }
            {
              type=="SELECT" && (
                <Select defaultValue="1">
                  {
                    store.query[i].option.map((o)=>{
                      return (<Option value={o.value}>{o.name}</Option>)
                    })
                  }
                </Select>
                )  
            }
            
          </Form.Item>
        </Col>,
      );
    }
    return children;
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div
      style={{
        padding: 24,
        paddingTop: 40,
        //minHeight: 360,
        background: '#ffffff',
        borderRadius: 6,
        marginBottom: 20,
      }}
    >
      <Form
        form={form}
        onFinish={onFinish}
      >
        <Row gutter={24}>{getFields()}</Row>
        <Row>
          <Col
            span={24}
            style={{
              textAlign: 'right',
            }}
          >
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button
              style={{
                margin: '0 8px',
              }}
              onClick={() => {
                form.resetFields();
              }}
            >
              Clear
            </Button>
            {/* <a
              style={{
                fontSize: 12,
              }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? <UpOutlined /> : <DownOutlined />} Collapse
            </a> */}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchPanel;