import React from 'react'
import Slider from 'react-slick';
import { Image } from 'antd';

export const AuToSlider = ({arrImages }) => {
    var setttings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000,
    };
    return (
        <Slider {...setttings}>
            {arrImages.map((image) => {
                return(
                    <Image src={image} alt="slider" preview={false} width="480px" height="340px" />
                )
            })}
        </Slider>
    )
}
