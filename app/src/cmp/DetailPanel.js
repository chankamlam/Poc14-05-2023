import React from 'react';
import { Descriptions, Divider, Steps, Tabs,Button,Space } from 'antd';

const DetailPanel = ({ store }) => {
    const stage = []
    const tap = []
    store.stage.forEach((it,idx) => {
        stage.push({
            title: it.status,
            description: it.title
        })
        tap.push({
            label:it.title,
            key:`${idx}`,
            disabled: idx<3,
            children:<div>
                
                <div>{it.status}</div>
                <Space style={{
                    float: 'right',
                    marginTop:400,
                }}>
                    <Button default htmlType="submit">Save</Button>
                    <Button danger htmlType="submit">Reject</Button>
                    <Button type="primary" primary htmlType="submit">Approve</Button>
                </Space>
            </div>
        })
    })
    return (
        <>
        <div
            style={{
                padding: 24,
                //minHeight: 360,
                background: '#ffffff',
                borderRadius: 6,
                paddingTop: 50,
            }}
        >
            <Steps
                progressDot
                current={3}
                //direction="vertical"
                items={stage}
            />
        </div>
        <div
            style={{
                padding: 24,
                //minHeight: 360,
                background: '#ffffff',
                borderRadius: 6,
                marginTop: 20,
            }}
        >
            <Tabs
                centered
                defaultActiveKey="3"
                items={tap}
                type="card"
            />
        </div>
        </>
    )
};
export default DetailPanel;