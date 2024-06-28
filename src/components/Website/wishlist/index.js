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
  TableContainer,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import wishimg from '../../../assets/images/website/wishlist.jpg';
import heart from '../../../assets/images/website/heart.svg';
import { RiCloseLargeLine } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';
import { GET, POST } from '../../../utilities/ApiProvider';
import { imgUrl } from '../../../utilities/config';
import {
  selectWishlistData,
  setWishlist,
  selectWebsiteData,
  setWebsiteData,
} from '../../../reducers/slices/website.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Wishlistitems() {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlistData);
  const websiteData = useSelector(selectWebsiteData);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    async function fetchWishlist() {
      try {
        const storeId = localStorage.getItem('storeId');
        if (!storeId) {
          console.error('Store ID not found in localStorage');
          dispatch(setWishlist([]));
          return;
        }

        const response = await GET(`/store/favourite?storeId=${storeId}`);

        if (response.status === 'success' && response.data) {
          dispatch(setWishlist(response.data));
        } else {
          console.error(
            'Error while fetching wishlist:',
            response.message || 'Unknown error'
          );
          dispatch(setWishlist([]));
        }
      } catch (error) {
        console.error('Error while fetching wishlist:', error);
        dispatch(setWishlist([]));
      }
    }

    fetchWishlist();
  }, [dispatch]);

  const handleRemove = async (id, storeId) => {
    try {
      let { arrproducts } = websiteData;
      arrproducts = arrproducts.map(item => {
        if (item._id === id) {
          return { ...item, is_favourite: !item.is_favourite };
        }
        return item;
      });
      let temp = { ...websiteData };
      temp['arrproducts'] = arrproducts;
      dispatch(setWebsiteData(temp));
      const formData = new FormData();
      formData.append('productId', id);
      formData.append('storeId', storeId);
      const response = await POST(`/store/favourite`, formData);
      if (response.status === 'success' && response.data) {
        dispatch(setWishlist(wishlist.filter(v => v._id !== id)));
        toast({
          description: 'Product removed from wishlist',
          status: 'success',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });
      } else {
        console.error(
          'Error while removing item from wishlist:',
          response.message || 'Unknown error'
        );
      }
    } catch (error) {
      console.error('Error while removing item from wishlist:', error);
    }
  };
  return (
    <>
      <Stack px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack gap={6}>
            {!wishlist ? (
              <Stack h="400px" justifyContent="center" alignItems="center">
                <Spinner />
              </Stack>
            ) : wishlist.length === 0 ? (
              <Stack
                px={24}
                bg={'#fff'}
                py={12}
                borderRadius={12}
                alignItems={'center'}
                textAlign={'center'}
                gap={4}
              >
                <Image margin={'auto'} w={'100px'} src={heart} />
                <Heading color={'#007341'} fontSize={'30px'} fontWeight={'700'}>
                  Your wishlist is currently empty
                </Heading>
                <Text>
                  Click the{' '}
                  <Icon
                    verticalAlign={'middle'}
                    color={'#007341'}
                    as={FaRegHeart}
                  />{' '}
                  icons to add products
                </Text>
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
            ) : (
              <Stack
                px={{ base: '15px', md: '15px', xl: '24', '2xl': '24' }}
                bg={'#fff'}
                py={12}
                borderRadius={12}
              >
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
                        <Th>Price</Th>
                        <Th>Stock Status</Th>
                        <Th>Action</Th>
                        <Th>Cancel</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {wishlist?.map(v => (
                        <Tr key={v._id}>
                          <Td>
                            <Box
                              alignItems={'center'}
                              gap={2}
                              display={{
                                base: 'block',
                                md: 'flex',
                                xl: 'flex',
                                '2xl': 'flex',
                              }}
                            >
                              <Image
                                width={{
                                  base: '50px',
                                  md: '80px',
                                  xl: '80px',
                                  '2xl': '80px',
                                }}
                                src={`${imgUrl}/${v?.url}`}
                              />
                              <Text fontSize={'15px'}>{v.name}</Text>
                            </Box>
                          </Td>
                          <Td>
                            <Text fontSize={'15px'}>$ {v.price}</Text>
                          </Td>
                          <Td>
                            <Text
                              fontSize={'15px'}
                              textTransform={'capitalize'}
                            >
                              {v.stock}
                            </Text>
                          </Td>
                          <Td>
                            <Button
                              border={'2px solid #07d57c'}
                              padding={{ base: '8px 10px', '2xl': '10px 25px' }}
                              bg={'transparent'}
                              fontSize={{
                                base: '12px',
                                md: '16px',
                                xl: '16px',
                                '2xl': '16px',
                              }}
                            >
                              Add To Cart
                            </Button>
                          </Td>
                          <Td>
                            <Button
                              onClick={() => handleRemove(v._id, v.storeId)}
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
            )}
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
