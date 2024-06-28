import {
  Container,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  Box,
  useNumberInput,
  HStack,
  Button,
  Input,
  Icon,
  Tag,
  TagLeftIcon,
  TagLabel,
  UnorderedList,
  ListItem,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Avatar,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  Checkbox,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductBreadCrumb from '../banner/ProductBreadCrumb';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { BiTimer } from 'react-icons/bi';
import Product from '../../../assets/images/website/singleproduct.jpg';
import P1 from '../../../assets/images/website/p1.jpg';
import P2 from '../../../assets/images/website/p2.jpg';
import Star from '../../../assets/images/website/star.svg';
import { GET, POST } from '../../../utilities/ApiProvider';
import { addToCarts } from '../../../reducers/slices/cart.slice';

import {
  setProductDetail,
  selectProductData,
} from '../../../reducers/slices/website.slice';
import { useDispatch, useSelector } from 'react-redux';
import { imgUrl } from '../../../utilities/config';
import {
  incrementQuantity,
  decrementQuantity,
} from '../../../reducers/slices/cart.slice';

export default function SingleProduct({ id }) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      // max: 6,
      // precision: 2,
    });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  const toast = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState([]);
  const data = useSelector(selectProductData);

  const dispatch = useDispatch();
  async function fetchProduct() {
    try {
      const storeId = localStorage.getItem('storeId');
      if (!storeId) {
        console.error('Store ID not found in localStorage');
        dispatch(setProductDetail({}));
        return;
      }

      const response = await GET(`/store/product/${id}?storeId=${storeId}`);
      console.log(response);
      if (response.status === 'success' && response.data) {
        dispatch(setProductDetail(response.data));
      } else {
        console.error(
          'Error while fetching product:',
          response.message || 'Unknown error'
        );
        dispatch(setProductDetail({}));
      }
    } catch (error) {
      console.error('Error while fetching product:', error);
      dispatch(setProductDetail({}));
    }
  }
  useEffect(() => {
    fetchProduct();
    return () => {
      dispatch(setProductDetail(null));
    };
  }, [dispatch, id]);
  const addToCart = async product => {
    console.log(product);
    try {
      let itemInCart = {
        productId: product._id,
        quantity: 1,
        price: product.price,
        salePrice: product.saleprice,
        discount: product.off,
        productName: product.name,
        productImage: product.images[0]?.path,
      };
      console.log(itemInCart, 'abcdef');
      dispatch(addToCarts(itemInCart));
      const response = await POST('/store/cart', {
        storeId: product.storeId,
        cartItems: itemInCart,
      });

      if (response.status === 'success' && response.data) {
        toast({
          description: 'Product added to cart successfully',
          status: 'success',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          description: response?.message,
          status: 'error',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      formData.append('storeId', localStorage.getItem('storeId'));
      formData.append('productId', id);
      formData.append('rating', '5');
      setLoading(true);
      const response = await POST('/store/review', formData);
      if (response.status === 'success') {
        setLoading(false);
        fetchProduct();
        toast({
          description: 'Review added successfully',
          status: 'success',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });
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
      console.log(error);
    }
  };

  if (!data) {
    return (
      <Stack display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Spinner />
      </Stack>
    );
  }
  return (
    <>
      <ProductBreadCrumb ProductTitel={data?.name} />{' '}
      <Stack px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}>
        <Container
          p={0}
          mt={4}
          mb={6}
          maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}
        >
          <Stack
            px={{ base: '5', md: '16', xl: '20', '2xl': '20' }}
            bg={'#fff'}
            py={12}
            borderRadius={12}
            gap={8}
          >
            <Stack>
              <SimpleGrid
                columns={{ base: '1', xl: '2', '2xl': '2' }}
                alignItems={'center'}
                spacing={6}
              >
                <Stack gap={3}>
                  <Stack>
                    <Image
                      src={`${imgUrl}/${data?.images[selectedImage].path}`}
                    />
                    <Box display={'flex'} gap={3}>
                      {data?.images?.map((image, ind) => (
                        <Box cursor={'pointer'}>
                          <Image
                            onClick={() => setSelectedImage(ind)}
                            border={'2px solid #007341'}
                            borderRadius={6}
                            width={'100px'}
                            src={`${imgUrl}/${image.path}`}
                          />
                        </Box>
                      ))}
                      {/* <Box>
                        <Image
                          border={'2px solid #007341'}
                          borderRadius={6}
                          width={'100px'}
                          src={P1}
                        />
                      </Box>
                      <Box>
                        <Image
                          border={'2px solid #10e789'}
                          borderRadius={6}
                          width={'100px'}
                          src={P2}
                        />
                      </Box> */}
                    </Box>
                  </Stack>
                  <TableContainer>
                    <Table variant="simple">
                      <Tbody>
                        <Tr>
                          <Td>
                            <Text>
                              <Text as={'span'} fontWeight={600}>
                                SKU:
                              </Text>
                              {data?.sku}
                            </Text>
                          </Td>
                          <Td>
                            <Text>
                              <Text as={'span'} fontWeight={600}>
                                Tags:
                              </Text>
                              {data?.tags.join(', ')}
                            </Text>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Text>
                              <Text as={'span'} fontWeight={600}>
                                Category:
                              </Text>
                              {/* {data?.categories?.[0]?.name} */}
                              {data?.categories?.map(category => category.name)}
                            </Text>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Stack>
                <Stack gap={3}>
                  <Heading
                    color={'#007341'}
                    fontSize={{ base: '25px', xl: '30px', '2xl': '35px' }}
                  >
                    {data?.name}
                  </Heading>
                  <Text>
                    <Text as={'span'} fontWeight={600}>
                      SKU:
                    </Text>{' '}
                    {data?.sku}
                  </Text>
                  <Heading color={'#007341'} fontSize={'25px'}>
                    {data?.price}
                  </Heading>
                  <Box display={'flex'} flexWrap={'wrap'} gap={6}>
                    <HStack maxW="180px">
                      <Button
                        onClick={() => dispatch(incrementQuantity(data._id))}
                        {...inc}
                      >
                        +
                      </Button>
                      <Input textAlign={'center'} {...input} />
                      <Button
                        // onClick={() => dispatch(decrementQuantity(data._id))}
                        {...dec}
                      >
                        -
                      </Button>
                    </HStack>
                    <Stack>
                      <Button
                        width={'max-content'}
                        fontSize={'16px'}
                        padding={'20px 25px'}
                        color={'#fff'}
                        background={
                          'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                        }
                        onClick={() => addToCart(data)}
                      >
                        <Icon mr={2} as={MdOutlineShoppingCart} /> Add to cart
                      </Button>
                    </Stack>
                    {/* <Stack>
                      <Button as={Link} to={'/wishlist'} width={'max-content'}>
                        <Icon color={'#007341'} as={FaRegHeart} />{' '}
                      </Button>
                    </Stack> */}
                  </Box>
                  <Button
                    onClick={() => addToCart(data)}
                    bg={'transparent'}
                    color={'#409D47'}
                    border={'2px solid #409D47'}
                    borderRadius={'12px'}
                    padding={'20px 15px'}
                    width={{
                      base: 'max-content',
                      md: '220px',
                      xl: '420px',
                      '2xl': '420px',
                    }}
                  >
                    Buy now
                  </Button>
                  <Tag
                    width={'420px'}
                    variant="subtle"
                    bg={'#EFF5EE'}
                    py={4}
                    border={'2px dashed #D9E7D6'}
                  >
                    <TagLeftIcon
                      color={'#007341'}
                      boxSize="20px"
                      as={BiTimer}
                    />
                    <TagLabel>
                      We Delivery on Next Day from 10:00 AM to 08:00 PM
                    </TagLabel>
                  </Tag>
                  <UnorderedList listStyleType={'none'}>
                    <ListItem>
                      <Text>100% Money Back Warranty</Text>
                    </ListItem>
                    <ListItem>
                      <Text>Free and Fast Delivery</Text>
                    </ListItem>
                    <ListItem>
                      <Text>All Items Top Best Quality</Text>
                    </ListItem>
                    <ListItem>
                      <Text>24/7 Support</Text>
                    </ListItem>
                  </UnorderedList>
                </Stack>
              </SimpleGrid>
            </Stack>
            <Stack>
              <SimpleGrid
                columns={{ base: '1', xl: '2', '2xl': '2' }}
                spacing={6}
              >
                <Stack py={12} borderRight={'1px solid #D9E7D6'}>
                  <Stack gap={3}>
                    <Stack>
                      <Heading color={'#04ab62'} fontSize={'20px'}>
                        Description
                      </Heading>
                      <Text>{data?.description}</Text>
                    </Stack>
                    <Stack gap={2}>
                      <Heading color={'#04ab62'} fontSize={'20px'}>
                        Reviews ({data?.reviewCount})
                      </Heading>
                      {data?.reviews.map(review => (
                        <Stack>
                          <Box display={'flex'} alignItems={'center'} gap={2}>
                            <Avatar name={review?.name} src={review?.image} />
                            <Box>
                              <Heading color={'#111'} fontSize={'16px'}>
                                {review?.name}
                              </Heading>
                              <Flex>
                                <Image src={Star} />
                                <Text color={'#989BA2'} fontSize={'14px'}>
                                  ({review?.rating}.00)
                                </Text>
                              </Flex>
                            </Box>
                          </Box>
                          <Text>{review?.feedback}</Text>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Stack>
                <Stack py={12}>
                  <Stack>
                    <Heading color={'#04ab62'} fontSize={'20px'}>
                      Reviews
                    </Heading>
                    <Text>There are no reviews yet.</Text>
                    <Heading color={'#04ab62'} fontSize={'25px'}>
                      Be the first to review “Red Radish 1 pack”
                    </Heading>
                    <Text>
                      Your email address will not be published. Required fields
                      are marked *
                    </Text>
                    <Flex gap={2}>
                      <Image src={Star} />
                      <Text color={'#989BA2'} fontSize={'14px'}>
                        Your rating *
                      </Text>
                    </Flex>
                  </Stack>
                  <form onSubmit={handleSubmit}>
                    <Stack gap={3}>
                      <FormControl>
                        <FormLabel fontSize={'15px'}>Message</FormLabel>
                        <Textarea
                          py={6}
                          name="feedback"
                          height={'150px'}
                          placeholder="Enter Your Message"
                        ></Textarea>
                      </FormControl>
                      <Box display={'flex'} gap={4}>
                        <FormControl>
                          <FormLabel fontSize={'15px'}>Full Name</FormLabel>
                          <Input
                            py={6}
                            name="name"
                            type="text"
                            placeholder="Enter Your Name"
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel fontSize={'15px'}>Email Address</FormLabel>
                          <Input
                            py={6}
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                          />
                        </FormControl>
                      </Box>
                      <Checkbox colorScheme="green">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </Checkbox>

                      <Button
                        isLoading={loading}
                        bg={'transparent'}
                        color={'#409D47'}
                        border={'2px solid #409D47'}
                        borderRadius={'12px'}
                        padding={'20px 15px'}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              </SimpleGrid>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
