import React, { useState } from 'react';
import TablePanel from "../cmp/TablePanel"
import SearchPanel from "../cmp/SearchPanel"
import DetailPanel from '../cmp/DetailPanel';
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom";
import {
  SolutionOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  NodeExpandOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Avatar,Badge,Space,Tag } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('User', '3', <UserOutlined />, [
    getItem(<Link to="/user/list">User List</Link>, '3-2'),
  ]),
];


const MainPanel = observer(({store}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" defaultOpenKeys={['2']} items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            style: {
              padding: '0 24px',
              fontSize: '18px',
              lineHeight: '64px',
              cursor: 'pointer',
              transition: 'color 0.3s',
            },
            onClick: () => setCollapsed(!collapsed),
          })}
          {/* <div style={{float:'right',display:'flex'}}>
            <div>Ken Chan</div>
            <Avatar shape="square" icon={<UserOutlined />} />
          </div> */}
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>XXXX</Breadcrumb.Item>
            <Breadcrumb.Item>XXXXX</Breadcrumb.Item>
          </Breadcrumb>

            {
              store.index == 0 && (<div>
                <SearchPanel store={store}/>
                <TablePanel store={store}/>
              </div>)
            }
            {

              store.index == 1 && (<div>
                <DetailPanel store={store}/>
              </div>)
            }


        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          
        </Footer>
      </Layout>
    </Layout>
  );
});
export default MainPanel;