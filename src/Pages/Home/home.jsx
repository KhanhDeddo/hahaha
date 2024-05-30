import React, { useEffect, useState } from 'react'
import slider2 from '../../Assets/Images/image2.jpg'
import slider3 from '../../Assets/Images/image3.jpg'
import { Pagination } from 'antd'
import { Link } from 'react-router-dom'
import { AuToSlider } from '../../Components/Slider/slider'
import { CardProduct } from '../../Components/Card/card'
import { SlideCard } from '../../Components/Slider/slideCard'
import axios from 'axios'
const Home = () => {
  const [listProduct, setData] = useState([])
  useEffect(() => {
      axios.get('http://localhost:3000/listprouduct')
          .then(response => setData(response.data))
          .catch(error => console.error(error))
  }, [])
  const listProductTop = Array.isArray(listProduct) ? listProduct.slice(0, 10) : [];

  return (
    <div style={{padding:'90px 70px 50px 80px'}}>
        <div style={{display:"flex", gap:'30px', paddingTop:'10px'}}>
          <div style={{width:'480px', height:"340px"}}>
            <AuToSlider arrImages={[slider2,slider3]}/>
          </div>
          <div style={{width:'630px', height:"280px"}}>
            <div style={{backgroundColor:'white', width:'100%', height: 'auto', borderRadius:'2px'}}>
              <p style={{fontSize:'16px', fontFamily:'fantasy', color:'blueviolet', padding:'5px'}}>Truyện Đề Cử:</p></div>
              <SlideCard arrCard={listProductTop}/>
            </div>        
        </div>
        <div style={{marginTop:"50px", marginLeft:"3px", display:"flex", alignItems:'center', gap: "20px", flexWrap:'wrap'}}>
            {listProduct.map((card) => {
                    return(
                        <Link to={`/productdetails/${card.id}`}>
                            <CardProduct    proudctId={card.id} 
                                            proudctName={card.name}
                                            productType={card.type}
                                            proudctPrice={card.price} 
                                            proudctImage={card.image}
                            />
                        </Link>
                    )
                })}
        </div>
          <div style={{ width: "100%", display: 'flex', justifyContent: 'center', marginTop:'10px'}}>
            <Pagination defaultCurrent={1} total={100} />
          </div>
    </div>
  )
}

export default Home