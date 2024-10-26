import { Box} from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import './GlobalSwiper.css';

const CompanySwiper = ({ companyItems }) => {

    return (
        <Grid2 container sx={{width: "100%", margin: "auto", height: "auto" }}>
            <Grid2 item className="swiper-container" xs={12}>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={9} 
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        loop={true}
                        // navigation={{
                        //     nextEl: '.swiper-button-next',
                        //     prevEl: '.swiper-button-prev',
                        // }}
                        modules={[Autoplay, Navigation, Pagination]}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            480: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 9,
                                spaceBetween: 40,
                            },
                        }}
                        style={{
                            margin: "8%",
                        }}
                    >
                        {companyItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                    <img src={item.image} height="150px" width="150px" alt="swiper-slide" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                {/* <Box className="swiper-button-prev"></Box>
                <Box className="swiper-button-next"></Box> */}
            </Grid2>
        </Grid2>
    );
};

export default CompanySwiper;

