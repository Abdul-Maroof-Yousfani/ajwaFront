import {
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function SelectTopUp() {
  return (
    <>
      <Stack>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack
            textAlign={'center'}
            alignItems={'center'}
            px={12}
            bg={'#fff'}
            py={12}
            borderRadius={12}
            gap={4}
          >
            <Text fontWeight={600} fontSize={'16px'}>Your top up is:</Text>
            <Flex justifyContent={'center'} gap={6} alignItems={'center'}>
              <Button>
                <FiMinusCircle />
              </Button>
              <Heading fontSize={{ base: '16px', md: '22px', xl: '22px', '2xl': '22px' }}>20k</Heading>
              <Button>
                <FiPlusCircle />
              </Button>
            </Flex>
         <Stack width={'50%'}>
         <SimpleGrid   columns={2} spacing={6}>
              <Button>
                10k
              </Button>
              <Button>
                20k
              </Button>
              <Button>
                40k
              </Button>
              <Button>
                80k
              </Button>
            </SimpleGrid>
         </Stack>
         <Text fontWeight={600} fontSize={'16px'}>Every 10k top up you will get 500 cash back</Text>
         <Heading fontSize={'20px'}>Current Balance: <Text color={'#07d57c'} as={'span'}>7,200</Text></Heading>
         <Heading fontSize={'20px'}>Your New Balance will be: <Text color={'#07d57c'} as={'span'}>10,200</Text></Heading>
         <Button as={Link} to={'/paymentdetails'} width={'max-content'} fontSize={'16px'} padding={'20px 25px'} background={'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'}>Top up</Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
