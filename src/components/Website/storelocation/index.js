import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Storelocation } from '../../../assets/data/Data';
import { GET } from '../../../utilities/ApiProvider';
import map from '../../../assets/images/website/map.jpg';
import location from '../../../assets/images/website/location.svg';

export default function StoreLocation() {
  const [mapstore, setmapstore] = useState(Storelocation);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchArea() {
      try {
        const response = await GET('/store');
        console.log(response);
        if (response.status === 'success') {
          setData(response.data);
        } else {
          console.log('Error while fetching area');
        }
      } catch (error) {
        console.log(error, 'error while fetching area');
      }
    }
    fetchArea();
  }, []);
  return (
    <Stack>
      <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
        <Stack px={12} bg={'#fff'} py={12} borderRadius={12}>
          <SimpleGrid
            columns={{ base: '1', md: '2', xl: '2', '2xl': '2' }}
            spacing={10}
          >
            {data?.length > 0 &&
              data.map((v, k) => {
                return (
                  <Stack
                    bg="rgba(0, 0, 0, 0.04)"
                    px={4}
                    py={8}
                    borderRadius={12}
                    alignItems={'center'}
                    gap={3}
                  >
                    <Image w={'80px'} src={location} />
                    <Text fontSize={'16px'} fontWeight={600}>
                      {v.area} {v.state}
                    </Text>
                    <Stack width={'100%'}>
                      <iframe
                        width="100%"
                        height="500"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=gulshan%20karachi%20pakistan+(Ajwa%20Mart)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      >
                        <a href="https://www.gps.ie/">gps devices</a>
                      </iframe>
                    </Stack>
                  </Stack>
                );
              })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Stack>
  );
}
