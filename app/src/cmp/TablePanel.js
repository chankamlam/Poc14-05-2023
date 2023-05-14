import React, { useState } from 'react';
import { Table, Space, Button, theme } from 'antd';
import { observer } from "mobx-react-lite"
import { toJS } from 'mobx';
import url from "../common/url"

const TablePanel = observer(({store}) => {
 
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      //Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
    ],
  };
  return (
    <div
      style={{
        padding: 24,
        //minHeight: 360,
        background: '#ffffff',
        borderRadius: 6,
      }}
    >
      <Space style={{
        float: 'right',
        marginBottom: 20,
        marginTop: 10,
      }}>
        {
          store.operations.map((o)=>{
            return(<Button key={o.key} type="primary" size="default">{o.text}</Button>)
          })
        }
      </Space>
      <Table rowSelection={rowSelection} columns={store.columns} dataSource={store.data} />
    </div>)
});
export default TablePanel;