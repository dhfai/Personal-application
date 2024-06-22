import React from  'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {certificatesData} from "../../data/CertiData";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 	960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


export const Certificate: React.FC = () => {
    return (
        <div className="p-6">
            <Slider {...settings}>
                {certificatesData.map((cert, index) => (
                    <img className='rounded-md w-full' alt={cert.title} src={cert.certfile_url} key={index} loading='lazy'/>
                ))}
            </Slider>
        </div>
    )
}