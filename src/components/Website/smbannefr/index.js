import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import { smabanner } from '../../../assets/data/Data';
import { GET } from '../../../utilities/ApiProvider';
import { baseURL, imgUrl } from '../../../utilities/config';
import { useSelector } from 'react-redux';
import { selectWebsiteData } from '../../../reducers/slices/website.slice';

export default function SmBanner() {
  const websiteData = useSelector(selectWebsiteData);
  const smbannerlist = useMemo(() => {
    return websiteData.smabanner;
  }, [websiteData.smabanner]);

  return (
    <>
      <Stack>
        <Container
          mb={6}
          px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}
          borderRadius={12}
          maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}
        >
          <SimpleGrid
            columns={{ base: '1', md: '3', xl: '3', '2xl': '3' }}
            spacing={4}
          >
            {smbannerlist?.length > 0 &&
              smbannerlist.map((v, k) => {
                return (
                  <Stack
                    py={28}
                    borderRadius={'25px'}
                    backgroundImage={`${imgUrl}/${v.url}`}
                    backgroundRepeat={'no-repeat'}
                    backgroundSize={'cover'}
                    backgroundPosition={'center'}
                    textAlign={'center'}
                    alignItems={'center'}
                    px={16}
                    position={'relative'}
                    overflow={'hidden'}
                    zIndex={'1'}
                    _after={{
                      position: 'absolute',
                      content: '""',
                      w: '100%',
                      h: '100%',
                      bg: '#00000052',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      zIndex: '-1',
                    }}
                  >
                    <Box
                      width={'max-content'}
                      padding={'6px 15px'}
                      borderRadius={'25px'}
                      bg={
                        'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                      }
                    >
                      <Text color={'#fff'} fontWeight={'700'} fontSize={'18px'}>
                        {v.offrate}
                      </Text>
                    </Box>
                    <Heading color={'#fff'} fontSize={'23px'}>
                      {v.description}
                    </Heading>
                  </Stack>
                );
              })}
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  );
}
