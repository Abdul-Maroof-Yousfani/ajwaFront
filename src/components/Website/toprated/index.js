import React, { useEffect, useMemo, useState } from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Stack,
  Box,
  Image,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Icon,
  Flex,
  Tag,
  useToast,
} from '@chakra-ui/react';
import product1 from '../../../assets/images/website/product1.jpg';
import star from '../../../assets/images/website/star.svg';
import { FiShoppingCart } from 'react-icons/fi';
import { products } from '../../../assets/data/Data';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { GET, POST } from '../../../utilities/ApiProvider';
import { baseURL, imgUrl } from '../../../utilities/config';
import { useDispatch, useSelector } from 'react-redux';
import { selectWebsiteData } from '../../../reducers/slices/website.slice';
import { selectCartData } from '../../../reducers/slices/cart.slice';
import { addToCarts } from '../../../reducers/slices/cart.slice';

export default function TopRated() {
  const [selectedTab, setSelectedTab] = useState('popular');
  const websiteData = useSelector(selectWebsiteData);
  const cartData = useSelector(selectCartData);
  const toast = useToast();
  const dispatch = useDispatch();
  const productlist = useMemo(() => {
    return websiteData.products;
  }, [websiteData.products]);

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
          pt={12}
          mb={6}
          px={0}
          borderRadius={12}
          maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}
        >
          <Tabs variant="unstyled">
            <TabList justifyContent={'center'} mb={8}>
              <Tab
                fontSize={'22px'}
                fontWeight={'700'}
                onClick={() => setSelectedTab('popular')}
                borderBottom={'1px solid #fff'}
                _selected={{
                  fontSize: '22px',
                  fontWeight: '700',
                  bg: 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))',
                  backgroundClip: 'text',
                  borderBottom: '2px solid #E28E3C',
                }}
              >
                Popular
              </Tab>
              <Tab
                fontSize={'22px'}
                fontWeight={'700'}
                borderBottom={'1px solid #fff'}
                onClick={() => setSelectedTab('topRated')}
                _selected={{
                  fontSize: '22px',
                  fontWeight: '700',
                  bg: 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))',
                  backgroundClip: 'text',
                  borderBottom: '2px solid #E28E3C',
                }}
              >
                Top Rated
              </Tab>
            </TabList>
            <TabPanels>
              {productlist &&
                Object?.keys(productlist)?.map(item => {
                  return (
                    <TabPanel p={0}>
                      <SimpleGrid
                        columns={{ base: '2', xl: '3', '2xl': '6' }}
                        spacing={0}
                      >
                        {productlist?.[selectedTab]?.length > 0 &&
                          productlist?.[selectedTab]?.map((v, k) => {
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
                                    <Image src={`${imgUrl}${v.url}`} />
                                  </Stack>
                                  <Stack
                                    className="mh-3"
                                    px={4}
                                    py={3}
                                    spacing={2}
                                  >
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
                                      {/* <Button
                                        as={Link}
                                        to={'/wishlist'}
                                        w={'40px'}
                                        height={'40px'}
                                        borderRadius={'50%'}
                                      >
                                        <Icon
                                          fontSize={'15px'}
                                          color={'#007341'}
                                          as={FaRegHeart}
                                        />
                                      </Button> */}
                                      <Button
                                        onClick={() => addToCart(v)}
                                        // as={Link}
                                        // to={'/cart'}
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
                    </TabPanel>
                  );
                })}
            </TabPanels>
          </Tabs>
        </Container>
      </Stack>
    </>
  );
}
