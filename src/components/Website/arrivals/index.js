import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import star from '../../../assets/images/website/star.svg';
import { FiShoppingCart } from 'react-icons/fi';
import { arrproducts } from '../../../assets/data/Data';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { baseURL, imgUrl } from '../../../utilities/config';
import { GET, POST } from '../../../utilities/ApiProvider';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectWebsiteData,
  addWishlist,
  setWebsiteData,
} from '../../../reducers/slices/website.slice';
import { addToCarts } from '../../../reducers/slices/cart.slice';

export default function Arrivals() {
  const websiteData = useSelector(selectWebsiteData);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const arrproductlist = useMemo(() => {
    return websiteData.arrproducts;
  }, [websiteData.arrproducts]);

  const handleFavourite = async product => {
    try {
      let { arrproducts } = websiteData;
      arrproducts = arrproducts.map(item => {
        if (item._id === product._id) {
          return { ...item, is_favourite: !item.is_favourite };
        }
        return item;
      });
      let temp = { ...websiteData };
      temp['arrproducts'] = arrproducts;
      dispatch(setWebsiteData(temp));

      const formData = new FormData();
      dispatch(addWishlist(product));
      formData.append('productId', product._id);
      formData.append('storeId', product.storeId);
      const response = await POST('/store/favourite', formData);
      if (response.status === 'success' && response.data) {
        toast({
          description: 'Product favourite successfully',
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
  const addToCart = async product => {
    try {
      let itemInCart = {
        productId: product._id,
        quantity: 1,
        price: product.price,
        salePrice: product.sale_price,
        discount: product.off,
        productName: product.name,
        productImage: product.url,
      };
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

  return (
    <>
      <Stack px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}>
        <Container
          bg={'#fff'}
          p={0}
          my={6}
          borderRadius={12}
          maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}
        >
          <Stack className="mh-2 " py={8} textAlign={'center'}>
            <Heading as={'h2'}>New Arrivals</Heading>
          </Stack>
          <SimpleGrid columns={{ base: '2', xl: '3', '2xl': '6' }} spacing={0}>
            {arrproductlist?.length > 0 &&
              arrproductlist.map((v, k) => {
                return (
                  <Stack key={k} border={'1px solid #D9E8D6'}>
                    <Stack as={Link} to={`/productdetail/${v._id}`}>
                      <Stack position={'relative'}>
                        {(v.off || v.stock) && (
                          <Box
                            display={'flex'}
                            gap={2}
                            position={'absolute'}
                            top={'5px'}
                            left={'5px'}
                          >
                            {v.off && (
                              <Tag
                                bg={'#007341'}
                                lineHeight={'base'}
                                color={'#fff'}
                                fontSize={'12px'}
                                fontWeight={600}
                              >
                                {v.off}
                              </Tag>
                            )}
                            {v.stock && (
                              <Tag
                                bg={'#C5262F'}
                                lineHeight={'base'}
                                color={'#fff'}
                                fontSize={'12px'}
                                fontWeight={600}
                              >
                                {v.stock}
                              </Tag>
                            )}
                          </Box>
                        )}
                        <Image src={`${imgUrl}/${v.url}`} />
                      </Stack>
                      <Stack className="mh-3" px={4} py={3} spacing={2}>
                        <Stack>
                          <Heading as={'h3'}>{v.name}</Heading>
                          <Text
                            fontSize={'13px'}
                            minH={'60px'}
                            color={'#212121'}
                          >
                            {v.description}
                          </Text>
                        </Stack>
                        <Box display={'flex'} gap={2}>
                          <Image src={star} alt="star" />
                          <Text fontSize={'12px'} color={'#989BA2'}>
                            ({v.rating})
                          </Text>
                        </Box>
                      </Stack>
                    </Stack>
                    <Stack px={4} pb={4} spacing={2}>
                      <Text fontSize={'13px'} color={'#212121'}>
                        {v.tagName}
                      </Text>
                      <Box
                        className="mh-3"
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                      >
                        <Heading as={'h3'}>{v.rate}</Heading>
                        <Flex gap={2}>
                          <Button
                            onClick={() => {
                              handleFavourite(v);
                            }}
                            // as={Link}
                            // to={'/wishlist'}
                            w={'40px'}
                            height={'40px'}
                            borderRadius={'50%'}
                          >
                            <Icon
                              fontSize={'15px'}
                              color={'#007341'}
                              as={v?.is_favourite ? FaHeart : FaRegHeart}
                            />
                          </Button>
                          <Button
                          onClick={() => addToCart(v)}
                            w={'40px'}
                            height={'40px'}
                            borderRadius={'50%'}
                          >
                            <Icon
                              fontSize={'15px'}
                              color={'#007341'}
                              as={FiShoppingCart}
                            />
                          </Button>
                        </Flex>
                      </Box>
                    </Stack>
                  </Stack>
                );
              })}
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  );
}
