import { Container, Heading, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { RiEBike2Line,RiHeart2Line,RiChat2Line ,RiSecurePaymentLine   } from "react-icons/ri";

export default function Support() {
  return (
    <>
      <Stack
      px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}
      >
        <Container
          bg={'#fff'}
          py={12}
          my={6}
          borderRadius={12}
          maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}
        >
          <SimpleGrid columns={{ base: '1', md: '2',xl: '2', '2xl': '4' }} spacing={2}>
            <Stack  alignItems={'center'}  >
                <Icon fontSize={'30px'} color={'#007341'} as={RiEBike2Line } />
                <Heading color={'#007341'} fontSize={'20px'} fontWeight={'600'}>Free Delivery Across the US!</Heading>
                <Text fontSize={'16px'} fontWeight={'500'}>Free delivery for all orders above $100</Text>
            </Stack>
            <Stack  alignItems={'center'}  >
                <Icon fontSize={'30px'} color={'#007341'} as={RiHeart2Line  } />
                <Heading color={'#007341'} fontSize={'20px'} fontWeight={'600'}>100% Satisfaction Guarantee!</Heading>
                <Text fontSize={'16px'} fontWeight={'500'}>Providing help in case of dissatisfaction</Text>
            </Stack>
            <Stack  alignItems={'center'}  >
                <Icon fontSize={'30px'} color={'#007341'} as={RiChat2Line  } />
                <Heading color={'#007341'} fontSize={'20px'} fontWeight={'600'}>Top-Notch Support </Heading>
                <Text fontSize={'16px'} fontWeight={'500'}>Chat with us if you’ve any questions</Text>
            </Stack>
            <Stack  alignItems={'center'}  >
                <Icon fontSize={'30px'} color={'#007341'} as={RiSecurePaymentLine  } />
                <Heading color={'#007341'} fontSize={'20px'} fontWeight={'600'}>Secure Payments</Heading>
                <Text fontSize={'16px'} fontWeight={'500'}>We use safest payment technologies</Text>
            </Stack>
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  );
}
