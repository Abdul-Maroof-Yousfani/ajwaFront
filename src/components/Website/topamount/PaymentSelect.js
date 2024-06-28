import { Button, Container, Heading, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import visa from '../../../assets/images/website/s-visa.png';
import jazz from '../../../assets/images/website/jazzcash.png';
import easy from '../../../assets/images/website/easypaisa.png';
import { Link } from 'react-router-dom';

export default function PaymentSelect() {
  return (
    <>
      <Stack>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack px={12} bg={'#fff'} py={12} borderRadius={12}>
            <Heading
              mb={{ base: '4', md: '8', xl: '10', '2xl': '12' }}
              color={'#111'}
              fontSize={'25px'}
              fontWeight={700}
              textAlign={'center'}
            >
              Select an option
            </Heading>
            <SimpleGrid pb={{ base: '4', md: '8', xl: '10', '2xl': '12' }}  columns={{ base: '1', md: '3', xl: '3', '2xl': '3' }} spacing={{ base: '2', md: '12', xl: '12', '2xl': '12' }}>
              <Stack
              as={Link}
              to={'/topupamount'}
                py={12}
                borderRadius={8}
                border={'2px solid #cbcbcbb8'}
                textAlign={'center'}
                alignItems={'center'}
                bg={'#0000000a'}
              >
                <Image w={'120px'} src={visa} />
                <Heading color={'#111'} fontWeight={700} fontSize={'20px'}>
                  Visa
                </Heading>
              </Stack>
              <Stack
                 as={Link}
                 to={'/topupamount'}
                py={12}
                borderRadius={8}
                border={'2px solid #cbcbcbb8'}
                textAlign={'center'}
                alignItems={'center'}
                bg={'#0000000a'}
              >
                <Image w={'120px'} src={jazz} />
                <Heading color={'#111'} fontWeight={700} fontSize={'20px'}>
                JazzCash
                </Heading>
              </Stack>
              <Stack
                 as={Link}
                 to={'/topupamount'}
                py={12}
                borderRadius={8}
                border={'2px solid #cbcbcbb8'}
                textAlign={'center'}
                alignItems={'center'}
                bg={'#0000000a'}
              >
                <Image w={'150px'}  src={easy} />
                <Heading color={'#111'} fontWeight={700} fontSize={'20px'}>
                EasyPaisa
                </Heading>
              </Stack>
            </SimpleGrid>
            <Stack alignItems={'center'}>
            <Button width={'max-content'} fontSize={'16px'} padding={'20px 25px'} background={'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'}>Continue</Button>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
