import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd';
export const ButtonInputSearch = (props) => {
    const {size, placeholder, txtbnt} = props;
  return (
    <div style={{display:'flex'}}>
        <Input size={size} placeholder={placeholder}/>
        <Button size={size} txtbnt={txtbnt} icon={<SearchOutlined/> }></Button>
    </div>
  )
}
