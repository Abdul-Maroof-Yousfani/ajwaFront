import { Container, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom';

export default function ProductBreadCrumb({ProductTitel}) {
  return (
    <>
       <Stack
        px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}
       >
        <Container
          p={0}
          mt={4}
          
          maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}
        >
          <Stack px={4} bg={'#fff'} py={8} textAlign={'center'} borderRadius={12} gap={8}>
          <Text ml="10px" fontSize={{ base: '14px', xl: '16px' }} fontWeight={700} color={'#007341'}> <Link color={'#000'} as={ReactLink} to={'/'}>Home /</Link> {ProductTitel}</Text>
                      
          </Stack>
        </Container>
      </Stack>
    </>
  )
}
