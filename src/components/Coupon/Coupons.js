import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDiscountPercentLine } from 'react-icons/ri';
import { coupon } from '../../assets/data/Data';

export default function Coupons() {

    const [couponlist, setcouponlist] = useState(coupon)

  return (
    <>
      <Stack>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack px={8} bg={'#fff'} py={12} borderRadius={12} gap={8}>
            <Heading color={'#111'} fontSize={'25px'} fontWeight={700}>
              Select Coupon
            </Heading>
            <SimpleGrid columns={{ base: '2', xl: '4', '2xl': '4' }} spacing={6}>
            {couponlist?.length > 0 &&
              couponlist.map((v, k) => {
                return (
                    <Stack
                    border={'1px solid #B4B4B4'}
                    borderRadius={6}
                    px={3}
                    py={4}
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                  >
                    <Stack direction={'row'} alignItems={'center'} gap={2}>
                      <Box
                        height={'60px'}
                        width={'60px'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        display={'flex'}
                        borderRadius={6}
                        bg={
                          'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                        }
                      >
                        <Icon fontSize={'40px'} as={RiDiscountPercentLine} />
                      </Box>
                      <Box>
                        <Text
                          color={'#007341'}
                          fontSize={'15px'}
                          fontWeight={'700'}
                        >
                          {v.name}
                        </Text>
                        <Heading
                          color={'#111'}
                          fontSize={'20px'}
                          fontWeight={'700'}
                        >
                          {v.off}
                        </Heading>
                      </Box>
                    </Stack>
                    <Button
                      border={'2px solid #07d57c'}
                      padding={'10px 25px'}
                      bg={'transparent'}
                      width={'max-content'}
                    >
                      Copy
                    </Button>
                  </Stack>
                );
              })}
            
            
            </SimpleGrid>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
