import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Stack,
  Link,
  Img,
  Text,
  Box,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { GoUpload } from 'react-icons/go';
import { POST } from '../../../utilities/ApiProvider';

export default function Signupfrom() {
  const [showpass, setshowpass] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      formData.append('role', 'customer');
      formData.append('profile_picture', uploadedImage.current.file);
      // console.log(
      //   Array.from(formData.entries())?.forEach(([key, value]) =>
      //     console.log(`${key}: ${value}`)
      //   )
      // );
      const response = await POST('/users/register', formData);
      console.log(response);
      if (response.status === 'success' && response.data) {
        setLoading(false);

        toast({
          description: 'You are now registered Successfully',
          status: 'success',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });
        navigate('/login');
      } else {
        setLoading(false);
        e.target.reset();
        uploadedImage.current.file = null;
        toast({
          description: response?.message,
          status: 'error',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error, 'while register user');
    }
  };

  return (
    <>
      <Stack px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack
            justifyItems={'center'}
            alignItems={'center'}
            px={8}
            bg={'#fff'}
            py={12}
            borderRadius={12}
            gap={8}
          >
            <Heading
              color={'#111'}
              fontSize={'25px'}
              fontWeight={700}
              textAlign={'center'}
            >
              Register
            </Heading>
            <Stack gap={3} width={{ base: '100%', xl: '40%', '2xl': '40%' }}>
              <form onSubmit={handleSubmit}>
                <Stack alignItems={'center'}>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={imageUploader}
                    display={'none'}
                  />

                  <Stack
                    position={'relative'}
                    height={'100px'}
                    width={'100px'}
                    borderRadius={'50%'}
                    border={'1px dashed #07d57c'}
                    onClick={() => imageUploader.current.click()}
                  >
                    <Img h="100%" borderRadius={'50%'} ref={uploadedImage} />
                    <Box
                      borderRadius={'50%'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      display={'flex'}
                      width={'30px'}
                      height={'30px'}
                      background={
                        'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                      }
                      bottom={0}
                      right={'0'}
                      position={'absolute'}
                    >
                      <Icon color={'#fff'} as={GoUpload} />
                    </Box>
                  </Stack>
                </Stack>
                <FormControl mt={3} w="100%">
                  <FormLabel fontSize={'15px'}>Full Name</FormLabel>
                  <Input
                    name="fullName"
                    py={6}
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel fontSize={'15px'}>Email Address</FormLabel>
                  <Input
                    name="email"
                    py={6}
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel fontSize={'15px'}>Phone No.</FormLabel>
                  <Input
                    name="phone"
                    py={6}
                    type="number"
                    placeholder="Enter Your Phone"
                  />
                </FormControl>
                <FormControl mt={3} position={'relative'}>
                  <FormLabel fontSize={'15px'}>Password</FormLabel>
                  <Input
                    py={6}
                    name="password"
                    type={showpass ? 'text' : 'password'}
                    placeholder="Enter Your Password"
                  />
                  <Button
                    position={'absolute'}
                    right={'2px'}
                    bottom={'5px'}
                    bg={'transparent'}
                    margin={'auto'}
                    _hover={{
                      bg: 'transparent',
                    }}
                    onClick={() => setshowpass(!showpass)}
                  >
                    <Icon
                      color={'#949494'}
                      as={showpass ? BsEye : BsEyeSlash}
                    />
                  </Button>
                </FormControl>

                <Button
                  mt={3}
                  w="100%"
                  isLoading={loading}
                  type="submit"
                  fontSize={'16px'}
                  padding={'20px 25px'}
                  background={
                    'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                  }
                >
                  Register
                </Button>
              </form>
            </Stack>
            <Stack textAlign={'center'}>
              <Link
                fontWeight={600}
                fontSize={'14px'}
                as={ReactLink}
                to={'/login'}
              >
                Already a member? Log In
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
