import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Heading,
  Stack,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  SimpleGrid,
  Box,
  Image,
  Icon,
  Select,
} from '@chakra-ui/react';
import CategoryBanner from '../banner/CategoryBanner';
import { FiShoppingCart } from 'react-icons/fi';
import { GET } from '../../../utilities/ApiProvider';
import { imgUrl } from '../../../utilities/config';
import star from '../../../assets/images/website/star.svg';

export default function ProductShop({ id }) {
  const [productlist, setProductlist] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [priceRange, setPriceRange] = useState([0, 30]); // Default price range
  const storeId = localStorage.getItem('storeId');

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
    fetchProducts(); // Fetch products on component mount
  }, [id, storeId]); // Dependencies: id and storeId

  // Function to fetch products based on filters
  async function fetchProducts() {
    try {
      const response = await GET(
        `/store/product/category/${id}?storeId=${storeId}&sortBy=${sortBy}&startPrice=${priceRange[0]}&endPrice=${priceRange[1]}`
      );
      console.log(response);
      if (response.status === 'success') {
        setProductlist(response?.data?.product || []);
      } else {
        setProductlist([]);
        console.log('Error while fetching products');
      }
    } catch (error) {
      console.log(error, 'error while fetching products');
      setProductlist([]);
    }
  }

  // Function to fetch categories
  async function fetchCategories() {
    try {
      const response = await GET(`/store/category/${id}?storeId=${storeId}`);
      console.log('Categories fetch response:', response);
      if (response.status === 'success') {
        setCategories(response?.data || []);
      } else {
        setCategories([]);
        console.log('Error while fetching categories');
      }
    } catch (error) {
      console.log(error, 'error while fetching categories');
      setCategories([]);
    }
  }

  // Function to handle sorting change
  const handleSortChange = (event) => {
    const value = event.target.value;
    if (value === 'Price, low to high') {
      setSortBy('price-asc');
    } else if (value === 'Price, high to low') {
      setSortBy('price-desc');
    } else {
      setSortBy('');
    }
  };

  // Function to handle price range change
  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  // Function to apply filters
  const applyFilter = () => {
    fetchProducts(); // Fetch products when filters are applied
  };
  return (
    <>
      <Stack>
        <Container
          p={0}
          mt={4}
          mb={6}
          maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}
        >
          <Stack px={4} bg={'#fff'} py={12} borderRadius={12} gap={8}>
            <CategoryBanner categories={categories} />
            <Stack
              direction={'row'}
              flexWrap={'wrap'}
              alignItems={'start'}
              gap={4}
            >
              <Stack
                width={{ base: '100%', md: '20%', xl: '20%', '2xl': '20%' }}
                gap={4}
                px={3}
                boxShadow="xl"
                borderRadius={8}
                py={6}
              >
                <Stack>
                  <Heading color={'#409D47'} fontSize={'18px'} fontWeight={700}>
                    Price
                  </Heading>
                  <RangeSlider
                    aria-label={['min', 'max']}
                    defaultValue={[10, 30]}
                    onChange={handlePriceChange}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack bg="#409D47" />
                    </RangeSliderTrack>
                    <RangeSliderThumb bg="#409D47" index={0} />
                    <RangeSliderThumb bg="#409D47" index={1} />
                  </RangeSlider>
                  <Text fontWeight={500} fontSize={'15px'}>
                    Price: ${priceRange[0]} — ${priceRange[1]}
                  </Text>
                </Stack>
                <Stack>
                  <Heading
                    color={'#409D47;'}
                    fontSize={'18px'}
                    fontWeight={700}
                  >
                    Item Type
                  </Heading>
                  <Stack>
                    <Checkbox colorScheme="green">Top Rated</Checkbox>
                    <Checkbox colorScheme="green">Best Sellers</Checkbox>
                  </Stack>
                </Stack>
                <Stack>
                  <Heading
                    color={'#409D47;'}
                    fontSize={'18px'}
                    fontWeight={700}
                  >
                    Sub Categories
                  </Heading>
                  <Stack>
                    {categories.map((v, k) => (
                      <Checkbox key={k} colorScheme="green">
                        {v.name}
                      </Checkbox>
                    ))}
                  </Stack>
                </Stack>
                <Button
                  bg={'transparent'}
                  color={'#409D47'}
                  border={'2px solid #409D47'}
                  borderRadius={'25px'}
                  onClick={applyFilter}
                >
                  Apply Filter
                </Button>
              </Stack>
              <Stack
                borderRadius={8}
                boxShadow="xl"
                p={4}
                width={{ base: '100%', md: '75%', xl: '75%', '2xl': '75%' }}
                gap={4}
              >
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  flexWrap={'wrap'}
                  borderRadius={8}
                  boxShadow="xl"
                  p={4}
                >
                  <Text fontSize={'14px'}>Showing {productlist?.length ?? 0} results</Text>
                  <Select width={'max'} placeholder="Default sorting" size="sm" onChange={handleSortChange}>
                    <option>Price, low to high</option>
                    <option>Price, high to low</option>
                  </Select>
                </Stack>
                <SimpleGrid
                  columns={{ base: '2', xl: '4', '2xl': '4' }}
                  spacing={0}
                >
                  {productlist.length > 0 ? (
                    productlist.map((v, k) => (
                      <Stack key={k} border={'1px solid #D9E8D6'}>
                        <Stack>
                          <Image src={`${imgUrl}/${v.url}`} />
                        </Stack>
                        <Stack className="mh-3" px={4} py={3} spacing={2}>
                          <Heading as={'h3'}>{v.name}</Heading>
                          <Text
                            fontSize={'13px'}
                            minH={'60px'}
                            color={'#212121'}
                          >
                            {v.description}
                          </Text>
                          <Box display={'flex'} gap={2}>
                            <Image src={star} alt="star" />
                            <Text fontSize={'12px'} color={'#989BA2'}>
                              ({v.rating})
                            </Text>
                          </Box>
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
                            <Button
                              w={'40px'}
                              height={'40px'}
                              borderRadius={'50%'}
                            >
                              <Icon
                                fontSize={'17px'}
                                color={'#007341'}
                                as={FiShoppingCart}
                              />
                            </Button>
                          </Box>
                        </Stack>
                      </Stack>
                    ))
                  ) : (
                    <Text>No products available</Text>
                  )}
                </SimpleGrid>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
