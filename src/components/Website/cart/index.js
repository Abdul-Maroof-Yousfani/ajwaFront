import {
  Stack,
  Container,
  Heading,
  Box,
  Image,
  Text,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  SimpleGrid,
  HStack,
  Input,
  useNumberInput,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  TableContainer,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiCloseLargeLine } from 'react-icons/ri';
import Cart from '../../../assets/images/website/carts.svg';
import wishimg from '../../../assets/images/website/wishlist.jpg';
import { LuUserX, LuUserCheck } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartData,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  setCarts,
} from '../../../reducers/slices/cart.slice';
import { imgUrl } from '../../../utilities/config';
import { DELETE, GET, POST } from '../../../utilities/ApiProvider';
import { selectProductData } from '../../../reducers/slices/website.slice';

export default function AddCart() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
    });
  const toast = useToast();
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const [cartId, setCartId] = useState(null);
  const input = getInputProps();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useSelector(selectCartData);
  const product = useSelector(selectProductData);

  useEffect(() => {
    async function getCart() {
      try {
        const response = await GET('/store/cart');
        if (response.status === 'success') {
          setCartId(response.data._id);
          if (!product) {
            dispatch(setCarts(response.data.cartItems || []));
          }
        } else {
          console.log('Error while fetching cart');
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCart();
  }, []);

  const handleRemove = async item => {
    if (cartId) {
      const response = await DELETE(`/store/cart/${cartId}?productId=${item}`);
      if (response.status === 'success') {
        dispatch(removeFromCart(item));

        toast({
          description: 'Product removed from cart successfully',
          status: 'success',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };
  const updateCart = async () => {
    try {
      const response = await POST('/store/cart', {
        storeId: localStorage.getItem('storeId'),
        cartItems: cart,
      });
      console.log(response);
      // if (response.status === 'success' && response.data) {
      //   toast({
      //     description: 'Product added to cart successfully',
      //     status: 'success',
      //     position: 'top-right',
      //     duration: 5000,
      //     isClosable: true,
      //   });
      // } else {
      //   toast({
      //     description: response?.message,
      //     status: 'error',
      //     position: 'top-right',
      //     duration: 5000,
      //     isClosable: true,
      //   });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'}>Choose an option</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap={4} pb={2}>
              <SimpleGrid columns={2} spacing={6}>
                <Stack
                  cursor={'pointer'}
                  borderRadius={6}
                  p={6}
                  border={'1px solid #59AA43'}
                  textAlign={'center'}
                  alignItems={'center'}
                >
                  <Icon fontSize={'40px'} color={'#59AA43'} as={LuUserX} />
                  <Text color={'#59AA43'} fontSize={'17px'} fontWeight={700}>
                    As Guest
                  </Text>
                </Stack>
                <Stack
                  cursor={'pointer'}
                  borderRadius={6}
                  p={6}
                  border={'1px solid #000'}
                  textAlign={'center'}
                  alignItems={'center'}
                >
                  <Icon fontSize={'40px'} color={'#111'} as={LuUserCheck} />
                  <Text color={'#111'} fontSize={'17px'} fontWeight={700}>
                    As User
                  </Text>
                </Stack>
              </SimpleGrid>

              <Stack alignItems={'center'}>
                <Button
                  as={Link}
                  to={'/checkout'}
                  fontSize={'16px'}
                  padding={'20px 35px'}
                  background={
                    'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                  }
                >
                  Continue
                </Button>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Stack px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack gap={6}>
            {cart?.length > 0 ? (
              <Stack px={8} bg={'#fff'} py={12} borderRadius={12}>
                <SimpleGrid
                  alignItems={'center'}
                  columns={{ base: '1', xl: '2', '2xl': '2' }}
                  spacing={10}
                >
                  <Stack>
                    <Heading
                      mb={6}
                      color={'#111'}
                      fontSize={'25px'}
                      fontWeight={700}
                    >
                      Items
                    </Heading>
                    <TableContainer>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Products</Th>
                            <Th>Quantity</Th>
                            <Th>Subtotal</Th>
                            <Th>Cancel</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {cart?.map((item, index) => (
                            <Tr>
                              <Td>
                                <Box alignItems={'center'} gap={2}>
                                  <Image
                                    w="130px"
                                    h="100px"
                                    src={`${imgUrl}/${item?.productImage}`}
                                  />
                                  <Text fontSize={'15px'}>
                                    {item?.productName}
                                  </Text>
                                </Box>
                              </Td>
                              <Td>
                                <HStack maxW="180px">
                                  <Button
                                    onClick={() =>
                                      dispatch(
                                        incrementQuantity(item.productId)
                                      )
                                    }
                                    {...inc}
                                  >
                                    +
                                  </Button>
                                  <Input
                                    value={item.quantity}
                                    textAlign={'center'}
                                  />
                                  <Button
                                    onClick={() =>
                                      dispatch(
                                        decrementQuantity(item.productId)
                                      )
                                    }
                                    {...dec}
                                  >
                                    -
                                  </Button>
                                </HStack>
                              </Td>
                              <Td>
                                <Text fontSize={'15px'}>In Stock</Text>
                              </Td>

                              <Td>
                                <Button
                                  onClick={() =>
                                    // dispatch(removeFromCart(item.productId))
                                    handleRemove(item?.productId)
                                  }
                                >
                                  <Icon as={RiCloseLargeLine} />
                                </Button>
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Stack>
                  <Stack px={4} py={6} bg={'#F3F3F3'} borderRadius={6}>
                    <Table variant="simple">
                      <Tbody>
                        <Tr>
                          <Td>
                            <Heading fontSize={'20px'} fontWeight={700}>
                              Subtotal
                            </Heading>
                          </Td>
                          <Td>
                            <Heading
                              fontSize={'20px'}
                              fontWeight={700}
                              bg={
                                'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                              }
                              backgroundClip={'text'}
                            >
                              $
                              {cart?.reduce((total, sum) => {
                                total += sum.price * sum.quantity;
                                return total;
                              }, 0)}
                            </Heading>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Heading fontSize={'20px'} fontWeight={700}>
                              Total
                            </Heading>
                          </Td>
                          <Td>
                            <Heading
                              fontSize={'20px'}
                              fontWeight={700}
                              bg={
                                'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                              }
                              backgroundClip={'text'}
                            >
                              ${' '}
                              {cart?.reduce((total, sum) => {
                                total += sum.price * sum.quantity;
                                return total;
                              }, 0)}
                            </Heading>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                    <Button
                      onClick={() => {
                        updateCart();
                        navigate('/checkout');
                        // onOpen();
                      }}
                      fontSize={'16px'}
                      padding={'20px 35px'}
                      background={
                        'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                      }
                    >
                      Checkout
                    </Button>
                  </Stack>
                </SimpleGrid>
              </Stack>
            ) : (
              <Stack
                px={24}
                bg={'#fff'}
                py={12}
                borderRadius={12}
                alignItems={'center'}
                textAlign={'center'}
                gap={4}
              >
                <Image margin={'auto'} w={'80px'} src={Cart} />
                <Heading
                  color={'#007341'}
                  fontSize={{ base: '20px', xl: '25px', '2xl': '30px' }}
                  fontWeight={'700'}
                >
                  Your cart is currently empty
                </Heading>

                <Button
                  border={'2px solid #07d57c'}
                  padding={'10px 25px'}
                  bg={'transparent'}
                  width={'max-content'}
                  onClick={() => navigate('/')}
                >
                  Return to shop
                </Button>
              </Stack>
            )}
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
