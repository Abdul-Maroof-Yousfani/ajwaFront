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
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { POST } from '../../../utilities/ApiProvider';
import { useDispatch } from 'react-redux';
import { loadUser } from '../../../reducers/useReducers';

export default function LoginFrom() {
  const [showpass, setshowpass] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [loading, setLoading] = useState(false);


  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const response = await POST('/users/login', formData);
      if (response.status === 'success' && response.data) {
        setLoading(false);
        localStorage.setItem('ajwaUser', JSON.stringify(response.data));
        console.log(response.data);
        dispatch(loadUser(response?.data))
        toast({
          description: 'You are now logged in Successfully',
          status: 'success',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });
        navigate('/')
        
      } else {
        setLoading(false);

        toast({
          description: response?.message,
          status: 'error',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error, 'while login user');
    }

    // console.log(
    //   Array.from(formData.entries())?.forEach(([key, value]) =>
    //     console.log(`${key}: ${value}`)
    //   )
    // );
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
              Log In
            </Heading>
            <Stack gap={3} width={{ base: '100%', xl: '40%', '2xl': '40%' }}>
              <form onSubmit={handleSubmit}>
                <FormControl mt={3}>
                  <FormLabel fontSize={'15px'}>Email Address</FormLabel>
                  <Input
                    name="email"
                    py={6}
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </FormControl>
                <FormControl position={'relative'} mt={3}>
                  <FormLabel fontSize={'15px'}>Password</FormLabel>
                  <Input
                    name="password"
                    py={6}
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
                <Stack textAlign={'right'} mt={3}>
                  <Link
                    fontWeight={600}
                    fontSize={'14px'}
                    as={ReactLink}
                    to={'/'}
                  >
                    Forgot Password?
                  </Link>
                </Stack>
                <Button
                  isLoading={loading}
                  w="100%"
                  mt={3}
                  type="submit"
                  fontSize={'16px'}
                  padding={'20px 25px'}
                  background={
                    'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                  }
                >
                  Log In
                </Button>
              </form>
            </Stack>
            <Stack textAlign={'center'}>
              <Link
                fontWeight={600}
                fontSize={'14px'}
                as={ReactLink}
                to={'/signup'}
              >
                Not a member? Register
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
