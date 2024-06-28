import {
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Link,
  Box,
  Image,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { discount } from '../../../assets/data/Data';
import { GET } from '../../../utilities/ApiProvider';
import { baseURL, imgUrl } from '../../../utilities/config';
import { useSelector } from 'react-redux';
import { selectWebsiteData } from '../../../reducers/slices/website.slice';

export default function Discount() {
  const websiteData = useSelector(selectWebsiteData);
  const discountlist = useMemo(() => {
    return websiteData.discount;
  }, [websiteData.discount]);

  return (
    <>
      <Stack>
        <Container
          mb={4}
          px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}
          borderRadius={12}
          maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}
        >
          <Box
            mb={6}
            display={'flex'}
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            alignItems={'center'}
            className="mh-2 "
            gap={3}
          >
            <Heading as={'h2'}>Don't Miss our Discounts</Heading>
            <Link
              color={'#243F2F'}
              border={'1px solid #243F2F'}
              borderRadius={'25px'}
              fontWeight={'700'}
              fontSize={{ base: '14px', '2xl': '16px' }}
              w={'max-content'}
              p={{ base: '10px 16px', '2xl': '10px 20px' }}
              to={'/'}
              as={ReactLink}
            >
              Show All
            </Link>
          </Box>
          <SimpleGrid columns={{ base: '2', xl: '3', '2xl': '6' }} spacing={2}>
            {discountlist?.length > 0 &&
              discountlist.map((v, k) => {
                return (
                  <Stack
                    key={k}
                    bg={'#fff'}
                    borderRadius={12}
                    overflow={'hidden'}
                  >
                    <Stack>
                      <Image src={`${imgUrl}/${v.url}`} />
                    </Stack>
                    <Stack
                      className="mh-3"
                      mt={'0 !important'}
                      px={4}
                      py={4}
                      spacing={2}
                    >
                      <Heading as={'h3'}>{v.name}</Heading>
                      <Text fontSize={'13px'} color={'#212121'}>
                        {v.description}
                      </Text>
                    </Stack>
                  </Stack>
                );
              })}
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  );
}
