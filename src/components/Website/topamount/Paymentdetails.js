import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function Paymentdetails() {
  return (
    <Stack>
      <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
        <Stack px={12} bg={'#fff'} py={12} borderRadius={12} gap={6}>
          <Heading fontSize={'22px'} fontWeight={700} textAlign={'center'}>
            Enter your card details
          </Heading>
          <SimpleGrid
            columns={{ base: '1', md: '2', xl: '2', '2xl': '2' }}
            spacing={6}
          >
            <FormControl>
              <FormLabel fontSize={'15px'}>Card Holder Name</FormLabel>
              <Input py={6} type="text" placeholder="Enter Your Name" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'15px'}>Card Number</FormLabel>
              <Input py={6} type="number" placeholder="Enter Card Number" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'15px'}>Expiry Date</FormLabel>
              <Input py={6} type="number" placeholder="Enter Expiry Date" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'15px'}>CVC Code</FormLabel>
              <Input py={6} type="number" placeholder="Enter CVC Code" />
            </FormControl>
            <Stack>
              <Checkbox size="lg" colorScheme="orange" defaultChecked>
                <Text
                  fontSize={{
                    base: '14px',
                    md: '16px',
                    xl: '16px',
                    '2xl': '16px',
                  }}
                >
                  {' '}
                  Save this card for your future top-up?
                </Text>
              </Checkbox>
            </Stack>
          </SimpleGrid>
          <Stack alignItems={'center'}>
            <Button
              width={'max-content'}
              fontSize={'16px'}
              padding={'20px 25px'}
              background={
                'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
              }
            >
              Proceed
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
