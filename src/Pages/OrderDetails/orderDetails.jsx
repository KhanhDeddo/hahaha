import { Col, Input, Row, Form, Button, Image } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const OrderDetails = () => {
  const {productId} = useParams();
  const [listProduct, setData] = useState([])
  useEffect(() => {
      axios.get('http://localhost:3000/listprouduct')
          .then(response => setData(response.data))
          .catch(error => console.error(error))
  }, [])
  const product = listProduct.find(product => product.id === productId);
  const productImage = product ? product.image : 'None';
  return (
    <>
      <Row style={{ padding: "50px", height: '600px', backgroundColor: '#f0f2f5',}}>
        <Col span={3}></Col>
        <Col span={18} style={{ backgroundColor: 'white', borderRadius: '5px', padding: '0px 20px' }}>
            <Col span={8} style={{height:"40px", borderRadius:'10px', marginRight:'10px', paddingTop:'40px'}}>
              <Image
                  style={{borderRadius:'10px',height:'420px',width:'300px'}}
                  preview={false}
                  src={productImage}
              >
              </Image>
            </Col>
            <Col style={{ paddingLeft:'30%'}}>
                <h2 style={{ textAlign: "center", color: 'rebeccapurple', fontSize: '25px' }}>Chi Tiết Đặt Hàng</h2>
                <Form layout="vertical" style={{ padding: '10px 100px'}}>
                    <Form.Item label="Tên Người Nhận" required>
                        <Input placeholder="Nhập tên người nhận" />
                    </Form.Item>
                    <Form.Item label="Số Điện Thoại" required>
                        <Input placeholder="Nhập số điện thoại" />
                    </Form.Item>
                    <Form.Item label="Địa Chỉ Nhận Hàng" required>
                        <Input placeholder="Nhập địa chỉ nhận hàng" />
                    </Form.Item>
                        <div style={{margin:'10px 10px',display:"flex" ,gap:'5px', paddingLeft:'60%'}}>
                            <Link to={'/'}><Button type="primary" ghost style={{width:'100%'}}>Cancer</Button></Link>
                            <Link to={'/'}><Button type="primary" danger ghost style={{width:'100%' }}>OK</Button></Link>
                        </div>
                </Form>
            </Col>
        </Col>
        <Col span={3}></Col>
      </Row>
    </>
  );
}
