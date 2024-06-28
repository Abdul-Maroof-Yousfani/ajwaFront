import {
  Box,
  Container,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import AboutImg from '../../../assets/images/website/about.jpg';
import { GoTrophy } from 'react-icons/go';
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";

export default function About() {
  return (
    <>
      <Stack>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack px={12} bg={'#fff'} py={12} borderRadius={12}>
            <SimpleGrid columns={{ base: '1', md: '2', xl: '2', '2xl': '2' }} spacing={10}>
              <Stack>
                <Image src={AboutImg} />
              </Stack>
              <Stack gap={12}>
                <Stack gap={6}>
                  <Text fontSize={'17px'} fontWeight={500}>
                    At Ajwa Mart, we are committed to providing you with the
                    freshest and highest-quality groceries at affordable prices.
                    Our mission is to simplify your shopping experience, save
                    you time, and ensure you have access to a wide range of
                    products to meet all your household needs.
                  </Text>
                  <Text fontSize={'17px'} fontWeight={500}>
                    Ajwa Mart is a leading online grocery store that brings
                    convenience to your doorstep. We understand the importance
                    of fresh and nutritious food for a healthy lifestyle, and we
                    strive to make it easy for you to access a diverse selection
                    of groceries.
                  </Text>
                  <Text fontSize={'17px'} fontWeight={500}>
                    To be the go-to destination for customers seeking the
                    freshest produce, pantry staples, and household essentials
                    while delivering exceptional customer service and an
                    effortless online shopping experience.
                  </Text>
                </Stack>
                <Stack gap={6}>
                  <Stack>
                    <Box display={'flex'} alignItems={'center'} gap={2}>
                      <Text
                        alignItems={'center'}
                        display={'flex'}
                        justifyContent={'center'}
                        width={'40px'}
                        height={'40px'}
                        background={
                          'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                        }
                        borderRadius={'50%'}
                      >
                        <Icon fontSize={'25px'} color={'#fff'} as={GoTrophy} />
                      </Text>
                      <Heading fontSize={'22px'}>Quality</Heading>
                    </Box>
                    <Text fontSize={'17px'} fontWeight={500}>
                      We source our products from reputable suppliers to ensure
                      you receive only the best quality items.
                    </Text>
                  </Stack>
                  <Stack>
                    <Box display={'flex'} alignItems={'center'} gap={2}>
                      <Text
                        alignItems={'center'}
                        display={'flex'}
                        justifyContent={'center'}
                        width={'40px'}
                        height={'40px'}
                        background={
                          'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                        }
                        borderRadius={'50%'}
                      >
                        <Icon fontSize={'25px'} color={'#fff'} as={IoHelpBuoyOutline} />
                      </Text>
                      <Heading fontSize={'22px'}>Customer Support</Heading>
                    </Box>
                    <Text fontSize={'17px'} fontWeight={500}>
                    Our friendly and knowledgeable customer support team is available to assist you with any inquiries or concerns.
                    </Text>
                  </Stack>
                  <Stack>
                    <Box display={'flex'} alignItems={'center'} gap={2}>
                      <Text
                        alignItems={'center'}
                        display={'flex'}
                        justifyContent={'center'}
                        width={'40px'}
                        height={'40px'}
                        background={
                          'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                        }
                        borderRadius={'50%'}
                      >
                        <Icon fontSize={'25px'} color={'#fff'} as={BsBoxSeam} />
                      </Text>
                      <Heading fontSize={'22px'}>Fast and Reliable Delivery</Heading>
                    </Box>
                    <Text fontSize={'17px'} fontWeight={500}>
                    We ensure your order reaches your doorstep promptly and in pristine condition.
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
