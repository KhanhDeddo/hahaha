import React, { useEffect, useState } from 'react'
import { Button, Col, Image, Row } from 'antd'
import facebook from '../../Assets/Images/facebook.png'
import google from '../../Assets/Images/google.png'
import twitter from '../../Assets/Images/twitter.png'
import { Link, useParams } from 'react-router-dom'
import { Header } from '../../Components/Header/header'
import axios from 'axios'


export const ProductDetail = () => {
  const {productId} = useParams();
  const [listProduct, setData] = useState([])
  useEffect(() => {
      axios.get('http://localhost:3000/listprouduct')
          .then(response => setData(response.data))
          .catch(error => console.error(error))
  }, [])
  const product = listProduct.find(product => product.id === productId);
  const productName = product ? product.name : 'None';
  const productType = product ? product.type : 'None';
  const proudctPrice = product ? product.price : 'None';
  const productContent = product ? product.content : 'None';
  const productImage = product ? product.image : 'None';
  return (
    <div>
      <Header/>
      <div style={{padding:'90px 120px 0px 120px'}}>
        <div style={{paddingTop:'20px'}}>
         <Row>
            <Col span={8} style={{height:"500px", borderRadius:'10px', marginRight:'10px'}}>
              <Image
                  style={{borderRadius:'10px',height:'500px',width:'360px'}}
                  preview={false}
                  src={productImage}
              >
              </Image>
            </Col>
            <Col span={9} style={{backgroundColor:'white', borderRadius:'10px', height:"500px", marginRight:'10px'}}>
                <h2 style={{textAlign:"center"}}>Thông tin chi tiết</h2>
                  <div>
                    <div style={{paddingLeft:'20px', display:'flex', gap:'10px'}}>
                      <p style={{fontSize:'20px', fontWeight:'bold' ,fontFamily:'cursive'}}>Tên Sách:</p>
                      <p style={{fontSize:'20px', fontFamily:'cursive' , fontWeight:'bold', textAlign:'center'}}>{productName}</p>
                    </div>
                    <div style={{paddingLeft:'20px', display:'flex', gap:'10px'}}>
                        <p style={{fontSize:'20px', fontWeight:'bold',fontFamily:'cursive'}}>Thể Loại:</p>
                        <p style={{fontSize:'20px', fontFamily:'cursive' , fontWeight:'bold', textAlign:'center'}}>{productType}</p>
                    </div>
                  </div>
                  <div>
                    <div style={{paddingLeft:'20px'}}>
                        <p style={{fontSize:'20px', fontWeight:'bold',fontFamily:'cursive'}}>Nội Dung:</p>
                    </div>
                    <div style={{margin:'5px 20px 5px 20px'}}>
                      <p style={{fontFamily:'cursive'}}>{productContent}</p>
                    </div>
                  </div>
            </Col>
            <Col span={6} style={{backgroundColor:'white', borderRadius:'10px', height:"500px"}}>
              <div>
                <h2 style={{textAlign:"center"}}>Đặt Hàng</h2>
                <div style={{display:'flex', padding:'8px 20px',gap:'10px'}}>
                  <p style={{fontSize:'20px', fontFamily:'cursive' , fontWeight:'bold'}}>Giá: </p>
                  <p style={{fontSize:'20px', fontFamily:'cursive' , fontWeight:'bold', color:'red'}}>{proudctPrice}.000 VND</p>
                </div>
                <div style={{display:'flex', padding:'0 20px',gap:'10px'}}>
                  <p style={{fontSize:'20px', fontFamily:'cursive' , fontWeight:'bold'}}>Số Lượng: </p>
                  <p style={{fontSize:'20px', fontFamily:'cursive' , fontWeight:'bold'}}>1</p>
                </div>
                <div style={{margin:'10px 10px',display:'flex',flexDirection:'column' ,gap:'5px'}}>
                  <Button type="primary" ghost style={{width:'100%'}}>Thêm Giỏ Hàng</Button>
                  <Link to={`/orderdetails/${productId}`}><Button type="primary" danger ghost style={{width:'100%' }}>Đặt Hàng</Button></Link>
                  <div style={{margin:'70px 10px', display:'flex', gap:'25px', justifyContent:'center'}}>
                    <Image src={facebook} preview={false}/>
                    <Image src={twitter} preview={false}/>
                    <Image src={google} preview={false}/>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
