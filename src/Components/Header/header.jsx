import React from 'react'
import { Badge, Col} from 'antd'
import { UserAddOutlined, CaretDownOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { AccountHeader, CartHeader, RowHeader, TextHeader } from './style'
import { Link } from 'react-router-dom';
import { ButtonInputSearch } from '../ButtonInputSearch/buttonInputSearch.jsx';

export const Header = () => {
    const ids = "-1";
    const arr = [
        { name: "Trang Chủ",
            path: "/" 
        },
        { name: "ManHwa",
            path: "/type/manhwa" 
        },
        { name: "Manga", 
            path: "/type/manga" 
        },
        { name: "ManHua",
            path: "/type/manhua" 
        }
    ]
    const Menu = ({name,path}) => {
        return <Link to={path} style={{fontSize:'19px', textDecoration:'none'}}><div>{name}</div></Link>
    }
  const User =({id = '-1'}) =>{
    if(id !== '-1'){
        return(
            <AccountHeader>
                <UserAddOutlined style={{fontSize:"30px"}} />
                <Link to={'/login'} style={{color:'white'}}><span>Log Out</span></Link>
            </AccountHeader>
        )
    }
    return(
        <AccountHeader>
              <UserAddOutlined style={{fontSize:"30px"}} />
              <div>
                  <Link to={'/login'} style={{color:'white'}}>
                      <span>Đăng Nhập/Đăng Ký</span>
                      <div>
                        <span>Tài Khoản</span>
                        <CaretDownOutlined/>
                      </div>
                  </Link>
              </div>
            </AccountHeader>
    )
  }
  return (
    <div style={{position:'fixed', width:'100%', zIndex:'1000', height:'200px'}}>
        <RowHeader gutter={20}>
          <Col span={6}>
              <Link to={'/'}><TextHeader>ComicStore</TextHeader></Link></Col>
          <Col span={11}>
              <ButtonInputSearch 
                size={"large"}
                txtbnt = "Search"
                placeholder = "Input search text"
              />
          </Col>
          <Col span={7} style={{display:'flex',gap:'20px'}}>
            <User id={ids}/>
            <CartHeader>
                <Link to={'/cart'} style={{color:'white'}}>
                  <Badge count={5} >
                      <ShoppingCartOutlined style={{fontSize:"30px", color:'white'}}/>
                  </Badge>
                  <span>Giỏ Hàng</span>
                </Link>
            </CartHeader>
          </Col>
        </RowHeader>
        <div style={{background:'#ffffff', padding:'5px'}}>
            <div style={{padding:'2px 60px', display:'flex', gap:20}}>
                {arr.map((item) => {
                      return <Menu name = {item.name} path={item.path} />
                })}
            </div>
        </div>
    </div>
  )
}
