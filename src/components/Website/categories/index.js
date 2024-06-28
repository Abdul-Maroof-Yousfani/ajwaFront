import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import { categories } from '../../../assets/data/Data';
import { Link } from 'react-router-dom';
import { GET } from '../../../utilities/ApiProvider';
import { baseURL, imgUrl } from '../../../utilities/config';
import { useSelector } from 'react-redux';
import { selectWebsiteData } from '../../../reducers/slices/website.slice';

export default function Categories() {
  const websiteData = useSelector(selectWebsiteData);
  const categorieslist = useMemo(() => {
    return websiteData.categories;
  }, [websiteData.categories]);
  return (
    <>
      <Stack px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}>
        <Container
          bg={'#fff'}
          py={12}
          my={6}
          borderRadius={12}
          maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}
        >
          <Stack className="mh-2 " textAlign={'center'} mb={8}>
            <Heading as={'h2'}>Featured Categories</Heading>
          </Stack>
          <Stack
            direction={'row'}
            px={{ base: '2', md: '2', xl: '4', '2xl': '4' }}
            justifyContent={'space-between'}
            flexWrap={'wrap'}
            gap={3}
          >
            {categorieslist?.length > 0 &&
              categorieslist.map((v, k) => {
                console.log(v);
                return (
                  <Stack
                    as={Link}
                    to={`/shop/${v?._id}`}
                    key={k}
                    w={'max-content'}
                    textAlign={'center'}
                  >
                    <Image src={`${imgUrl}${v.url}`} alt={v.name} />
                    <Text color={'#007341'} fontWeight={700} fontSize={'17px'}>
                      {v.name}
                    </Text>
                  </Stack>
                );
              })}
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
