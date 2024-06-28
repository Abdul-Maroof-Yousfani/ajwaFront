import React, { useEffect, useState } from 'react';
import Coupons from '../Coupon/Coupons';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  ListItem,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  UnorderedList,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartData,
  setCarts,
  setCheckoutDetails,
} from '../../reducers/slices/cart.slice';
import { GET } from '../../utilities/ApiProvider';

export default function CheckOutfrom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector(selectCartData || []);
  const [cartId, setCartId] = useState(null);
  useEffect(() => {
    async function getCart() {
      try {
        const response = await GET('/store/cart');
        if (response.status === 'success') {
          setCartId(response.data._id);

          dispatch(setCarts(response.data.cartItems || []));
        } else {
          console.log('Error while fetching cart');
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCart();
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    try {
      let storeId = localStorage.getItem('storeId');
      let userId = JSON.parse(localStorage.getItem('ajwaUser'))?._id;
      const formData = new FormData(e.target);
      formData.append('storeId', storeId);
      formData.append('userId', userId);
      formData.append('cartId', cartId);
      formData.append('paymentMethod', 'cod');
      formData.append('isGuest', 'false');

      let data = Array.from(formData.entries()).map(([key, value]) => ({
        [key]: value,
      }));
      let itemToSend = Object.assign({}, ...data);
      dispatch(setCheckoutDetails(itemToSend));
      navigate('/deliveryoption');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Coupons /> */}
      <Stack>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack px={8} bg={'#fff'} py={12} borderRadius={12} gap={8}>
            <form onSubmit={handleSubmit}>
              <SimpleGrid
                columns={{ base: '1', xl: '2', '2xl': '2' }}
                px={4}
                spacing={12}
                alignItems={'center'}
              >
                <Stack gap={6}>
                  <Heading color={'#111'} fontSize={'25px'} fontWeight={700}>
                    Billing Details
                  </Heading>

                  <Stack gap={3}>
                    <FormControl>
                      <FormLabel fontSize={'15px'}>Full Name *</FormLabel>
                      <Input
                        name="name"
                        py={6}
                        type="text"
                        placeholder="Enter Your Name"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={'15px'}>Street address *</FormLabel>
                      <Input
                        py={6}
                        name="streetAddress"
                        type="text"
                        placeholder="Enter Your Addresss"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={'15px'}>Town / City *</FormLabel>
                      <Input
                        py={6}
                        name="town"
                        type="text"
                        placeholder="Enter Your Phone"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={'15px'}>State *</FormLabel>
                      <Input
                        py={6}
                        name="state"
                        type="text"
                        placeholder="Enter Your State "
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={'15px'}>ZIP Code *</FormLabel>
                      <Input
                        py={6}
                        type="text"
                        name="zip"
                        placeholder="Enter Your ZIP Code"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={'15px'}>Phone *</FormLabel>
                      <Input
                        py={6}
                        name="phone"
                        type="number"
                        placeholder="Enter Your Phone "
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize={'15px'}>Email address *</FormLabel>
                      <Input
                        py={6}
                        name="email"
                        type="email"
                        placeholder="Enter Your ZIP Code"
                      />
                    </FormControl>
                    <FormControl>
                      <Radio value="1">Save address?</Radio>
                    </FormControl>
                    <Text fontWeight={600} fontSize={'15px'}>
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </Text>
                  </Stack>
                </Stack>
                <Stack
                  bg="#F3F3F3"
                  borderRadius={6}
                  border={'1px solid #B4B4B4'}
                  py={6}
                  px={4}
                >
                  <Stack pb={5} mb={4} borderBottom={'1px solid #B4B4B4'}>
                    <Heading color={'#111'} fontSize={'20px'} fontWeight={700}>
                      Coupon code
                    </Heading>
                    <Box
                      display={'flex'}
                      gap={3}
                      justifyContent={'space-between'}
                      alignItems={'flex-end'}
                    >
                      <Stack width={'100%'}>
                        <FormLabel fontSize={'15px'}>code*</FormLabel>
                        <Input
                          py={6}
                          type="number"
                          placeholder="Enter Your Phone "
                        />
                      </Stack>
                      <Button
                        fontSize={'16px'}
                        padding={'25px 40px'}
                        background={
                          'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                        }
                      >
                        Apply
                      </Button>
                    </Box>
                  </Stack>
                  <Stack pb={5} borderBottom={'1px solid #B4B4B4'} gap={4}>
                    <Heading color={'#111'} fontSize={'20px'} fontWeight={700}>
                      Your order
                    </Heading>
                    <Table variant="simple">
                      <Tbody>
                        {cart.map((item, index) => (
                          <Tr key={index} p={'0 !important'}>
                            <Td>
                              <Text fontSize={'17px'} fontWeight={400}>
                                {item.productName}  × {item.quantity}
                              </Text>
                            </Td>
                            <Td>
                              <Heading
                                fontSize={'17px'}
                                fontWeight={700}
                                bg={
                                  'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                                }
                                backgroundClip={'text'}
                              >
                                Rs {item.price * item.quantity}
                              </Heading>
                            </Td>
                          </Tr>
                        ))}

                        <Tr>
                          <Td>
                            <Heading fontSize={'17px'} fontWeight={700}>
                              Subtotal
                            </Heading>
                          </Td>
                          <Td>
                            <Heading
                              fontSize={'17px'}
                              fontWeight={700}
                              bg={
                                'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                              }
                              backgroundClip={'text'}
                            >
                              Rs {''}
                              {cart?.reduce((total, sum) => {
                                total += sum.price * sum.quantity;
                                return total;
                              }, 0)}
                            </Heading>
                          </Td>
                        </Tr>
                        {/* <Tr>
                          <Td>
                            <Heading fontSize={'17px'} fontWeight={700}>
                              Promotional Discount
                            </Heading>
                          </Td>
                          <Td>
                            <Heading
                              fontSize={'17px'}
                              fontWeight={700}
                              bg={
                                'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                              }
                              backgroundClip={'text'}
                            >
                              $ -2.00
                            </Heading>
                          </Td>
                        </Tr> */}

                        {/* <Tr>
                          <Td>
                            <Heading fontSize={'17px'} fontWeight={700}>
                              Delivery
                            </Heading>
                          </Td>
                          <Td>
                            <Heading
                              fontSize={'17px'}
                              fontWeight={700}
                              bg={
                                'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                              }
                              backgroundClip={'text'}
                            >
                              $ 10.00
                            </Heading>
                          </Td>
                        </Tr> */}

                        <Tr>
                          <Td>
                            <Heading fontSize={'17px'} fontWeight={700}>
                              Total
                            </Heading>
                          </Td>
                          <Td>
                            <Heading
                              fontSize={'17px'}
                              fontWeight={700}
                              bg={
                                'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                              }
                              backgroundClip={'text'}
                            >
                              Rs {''}
                              {cart?.reduce((total, sum) => {
                                total += sum.price * sum.quantity;
                                return total;
                              }, 0)}
                            </Heading>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Stack>
                  <Stack p={'10px 0'} gap={4}>
                    <Heading color={'#111'} fontSize={'20px'} fontWeight={700}>
                      Payment Method
                    </Heading>
                    <RadioGroup defaultValue="1">
                      <UnorderedList listStyleType={'none'} spacing={4}>
                        <ListItem>
                          <Stack
                            bg={'#fff'}
                            px={4}
                            py={6}
                            borderRadius={4}
                            border={'1px solid #B4B4B4'}
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                          >
                            <Text>Cash on delivery</Text>
                            <Radio colorScheme="red" value="1"></Radio>
                          </Stack>
                        </ListItem>
                        {/* <ListItem>
                          <Stack
                            bg={'#fff'}
                            px={4}
                            py={6}
                            borderRadius={4}
                            border={'1px solid #B4B4B4'}
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                          >
                            <Text>VISA /Jazz Cash / Easypaisa</Text>
                            <Radio colorScheme="red" value="2"></Radio>
                          </Stack>
                        </ListItem>
                        <ListItem>
                          <Stack
                            bg={'#fff'}
                            px={4}
                            py={6}
                            borderRadius={4}
                            border={'1px solid #B4B4B4'}
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                          >
                            <Stack gap={2}>
                              <Text>Bonus Card</Text>
                              <Heading
                                fontSize={'20px'}
                                fontWeight={700}
                                bg={
                                  'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                                }
                                backgroundClip={'text'}
                              >
                                $140.00
                              </Heading>
                              <Text>
                                Note: If your purchase is above 10k, you will
                                receive free delivery!
                              </Text>
                            </Stack>

                            <Radio colorScheme="red" value="3"></Radio>
                          </Stack>
                        </ListItem> */}
                      </UnorderedList>
                    </RadioGroup>
                  </Stack>
                  <Button
                    fontSize={'16px'}
                    padding={'25px 40px'}
                    background={
                      'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                    }
                    type="submit"
                    // as={Link}
                    // to={'/deliveryoption'}
                  >
                    Continue
                  </Button>
                </Stack>
              </SimpleGrid>
            </form>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
