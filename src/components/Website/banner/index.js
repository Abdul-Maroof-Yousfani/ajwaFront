import { Container, Stack, Box } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import bannerBg from '../../../assets/images/website/banner.jpg';
import { useRef } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { imgUrl } from '../../../utilities/config';
import { selectWebsiteData } from '../../../reducers/slices/website.slice';

export default function Banner() {
  const websiteData = useSelector(selectWebsiteData);
  const banners = useMemo(() => {
    return websiteData?.banners?.webBanner;
  }, [websiteData.banners]);

  // 1st Swiper
  const swiperRef = useRef(null);
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <Stack mt={4} px={{ base: '10px', '2xl': '0' }}>
      <Container p={0} maxW={{ base: '1366px', xl: '6xl', '2xl': '1440px' }}>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={'20px'}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1366: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
        >
          {banners && banners.length > 0 ? (
            banners.map(item => (
              <SwiperSlide key={item?._id} className="desktopView">
                <Box
                  key={item?._id}
                  bg={'#28551A'}
                  bgImage={`${imgUrl}/${item?.url}`}
                  borderRadius={12}
                  bgPosition={'center'}
                  bgRepeat={'no-repeat'}
                  bgSize={'cover'}
                  height={{ base: '240px', xl: '280px', '2xl': '590px' }}
                ></Box>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide className="desktopView">
              <Box
                bg={'#28551A'}
                bgImage={bannerBg}
                bgPosition={'center'}
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                height={{ base: '240px', xl: '280px', '2xl': '590px' }}
              ></Box>
            </SwiperSlide>
          )}
        </Swiper>
      </Container>
    </Stack>
  );
}
