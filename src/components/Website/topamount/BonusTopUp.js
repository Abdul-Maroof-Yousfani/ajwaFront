import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  Image
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Dollar from  '../../../assets/images/website/dollor.svg';
import Star from  '../../../assets/images/website/star1.svg';

export default function BonusTopUp() {
  return (
    <>
      <Stack>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack
            alignItems={'center'}
            px={12}
            bg={'#fff'}
            py={12}
            borderRadius={12}
            gap={12}
          >
            <Stack
              p={6}
              width={'428px'}
              height={'233px'}
              bg={
                'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
              }
              borderRadius={12}
            >
              <Heading
                fontSize={'25px'}
                color={'#fff'}
                fontWeight={'700'}
                lineHeight={'30px'}
              >
                Bonus Card
              </Heading>
              <Heading
                pb={12}
                fontSize={'25px'}
                color={'#fff'}
                fontWeight={'700'}
              >
                <Text as={'span'} verticalAlign={'middle'} fontSize={'40px'}>
                  **** **** ****
                </Text>{' '}
                1535
              </Heading>
              <Text
                textAlign={'center'}
                fontSize={'26px'}
                color={'#fff'}
                fontWeight={'400'}
                lineHeight={'30px'}
              >
                Current Balance: 00.00
              </Text>
            </Stack>
            <Stack>
              <Button
                bg={
                  'radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)'
                }
                as={Link}
                fontSize={{ base: '12px', xl: '14px' }}
                fontWeight={500}
                to={'/paymentmethods'}
                color={'#000'}
                px={'25px'}
                py={'24px'}
                gap={2}
                transition={'.3s'}
                h={{ base: '35px', xl: '45px' }}
                _hover={{
                  boxShadow: '0px 7px 20px 0px #0000003b',
                }}
              >
                Topup a Bonus Card
              </Button>
             
            </Stack>
            <SimpleGrid columns={2} spacing={10}>
                <Stack alignItems={'center'}>
                  <Image width={'50px'} src={Dollar} alt={'Top Up'}/>
                  <Text fontWeight={600} fontSize={'18px'} color={'#000'}>Top up and spend online</Text>
                </Stack>
                <Stack alignItems={'center'}>
                  <Image width={'50px'} src={Star} alt={'Top Up'}/>
                  <Text fontWeight={600} fontSize={'18px'} color={'#000'}>All your savings are safe and secure</Text>
                </Stack>
              </SimpleGrid>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
