import React, { useEffect, useState } from 'react';
import Header from '../../components/Website/Header';
import Footer from '../../components/Website/Footer';
import MiniBanner from '../../components/Website/banner/MiniBanner';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  UnorderedList,
  ListItem,
  Link,
  useToast,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { GrLocation } from 'react-icons/gr';
import { MdAccessTime } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { FaSquareFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { POST } from '../../utilities/ApiProvider';

export default function ContactUs() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  }, []);
  const handleSubmit = async e => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.target);
      const response = await POST('/store/contact', formData);
      if (response.status === 'success') {
        setLoading(false);

        toast({
          title: 'Message Sent Successfully',
          status: 'success',
          duration: 5000,
          position: 'top-right',
          isClosable: true,
        });
        e.target.reset();
      } else {
        setLoading(false);

        toast({
          title: response.message,
          status: 'error',
          duration: 5000,
          position: 'top-right',
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <MiniBanner title={'Contact Us'} breadtitle={'Contact Us'} />

      <Stack>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack px={12} bg={'#fff'} py={12} borderRadius={12}>
            <SimpleGrid
              columns={{ base: '1', md: '2', xl: '2', '2xl': '2' }}
              spacing={28}
              alignItems={'center'}
            >
              <form onSubmit={handleSubmit}>
                <Stack>
                  <Heading
                    mb={6}
                    color={'#111'}
                    fontSize={'25px'}
                    fontWeight={700}
                  >
                    Get In Touch
                  </Heading>
                  <Stack gap={3}>
                    <FormControl>
                      <FormLabel fontSize={'15px'}>Full Name</FormLabel>
                      <Input
                        name="fullName"
                        py={6}
                        type="text"
                        placeholder="Enter Your Name"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={'15px'}>Email Address</FormLabel>
                      <Input
                        name="email"
                        py={6}
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={'15px'}>Phone No.</FormLabel>
                      <Input
                        py={6}
                        name="phone"
                        type="number"
                        placeholder="Enter Your Phone"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={'15px'}>Message</FormLabel>
                      <Textarea
                        py={6}
                        name="message"
                        height={'150px'}
                        placeholder="Enter Your Message"
                      ></Textarea>
                    </FormControl>
                    <Button
                      width={'max-content'}
                      fontSize={'16px'}
                      padding={'20px 25px'}
                      type="submit"
                      isLoading={loading}
                      background={
                        'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                      }
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Stack>
              </form>
              <Stack gap={6}>
                <Stack>
                  <Heading fontSize={'22px'}>Address</Heading>
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
                      as={'span'}
                    >
                      <Icon fontSize={'25px'} color={'#fff'} as={GrLocation} />
                    </Text>

                    <Text fontSize={'17px'} fontWeight={500}>
                      28C Khayaban-e-Bahria, D.H.A. Phase 4 <br />
                      Housing Authority, Karachi
                    </Text>
                  </Box>
                </Stack>
                <Stack>
                  <Heading fontSize={'22px'}>Timing</Heading>
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
                      as={'span'}
                    >
                      <Icon
                        fontSize={'25px'}
                        color={'#fff'}
                        as={MdAccessTime}
                      />
                    </Text>

                    <Text fontSize={'17px'} fontWeight={500}>
                      Mon-Fri: 10:00 - 18:00
                    </Text>
                  </Box>
                </Stack>
                <Stack>
                  <Heading fontSize={'22px'}>Phone No.</Heading>
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
                      as={'span'}
                    >
                      <Icon fontSize={'25px'} color={'#fff'} as={BiSupport} />
                    </Text>

                    <Text fontSize={'17px'} fontWeight={500}>
                      02135802592
                    </Text>
                  </Box>
                </Stack>
                <Stack>
                  <Heading fontSize={'22px'}>Follow Us</Heading>
                  <UnorderedList display={'flex'} alignItems={'center'} gap={4}>
                    <ListItem listStyleType={'none'}>
                      <Link as={ReactLink} to={''}>
                        <Icon fontSize={'20px'} as={FaSquareFacebook} />
                      </Link>
                    </ListItem>
                    <ListItem listStyleType={'none'}>
                      <Link as={ReactLink} to={''}>
                        <Icon fontSize={'20px'} as={FaInstagram} />
                      </Link>
                    </ListItem>
                    <ListItem listStyleType={'none'}>
                      <Link as={ReactLink} to={''}>
                        <Icon fontSize={'20px'} as={FaWhatsapp} />
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Container>
      </Stack>
      <Footer />
    </>
  );
}
