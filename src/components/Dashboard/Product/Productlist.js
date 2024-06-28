import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Image,
  Divider,
  Avatar,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Star from '../../../assets/images/website/star.svg';
import wishimg from '../../../assets/images/website/wishlist.jpg';
import { Link } from 'react-router-dom';

export default function Productlist() {
  const [selectedService, setSelectedService] = useState('all')
  const Categories = [
    {
      id: 1,
      title: 'All',
      slug: 'all'
    },
    {
      id: 2,
      title: 'Grocery',
      slug: 'grocery'
    },
    {
      id: 3,
      title: 'Fresh Fruits',
      slug: 'fruits'
    },
    {
      id: 4,
      title: 'Meat',
      slug: 'meat'
    },
    {
      id: 5,
      title: 'Sea Foods',
      slug: 'seaFoods'
    },
    {
      id: 6,
      title: 'Baking',
      slug: 'baking'
    },
    {
      id: 7,
      title: 'Drinks',
      slug: 'drinks'
    },
    {
      id: 8,
      title: 'Cheese',
      slug: 'cheese'
    },
    {
      id: 9,
      title: 'Milk',
      slug: 'milk'
    },

  ]
  const data = {
    'all': [
      {
        id: 1,
        productId: '64f43',
        category: 'Grocery',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      },
      {
        id: 2,
        productId: '64f43',
        category: 'Sea Foods',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      }
    ],
    'grocery': [
      {
        id: 1,
        productId: '64f43',
        category: 'Grocery',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      },
      {
        id: 2,
        productId: '64f43',
        category: 'Grocery',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      }
    ],
    'fruits': [
      {
        id: 1,
        productId: '64f43',
        category: 'Fresh Fruits',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      },
      {
        id: 2,
        productId: '64f43',
        category: 'Fresh Fruits',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      }
    ],
    'meat': [
      {
        id: 1,
        productId: '64f43',
        category: 'Meat',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      },
      {
        id: 2,
        productId: '64f43',
        category: 'Meat',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      }
    ],
    'seaFoods': [
      {
        id: 1,
        productId: '64f43',
        category: 'Sea Foods',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      },
      {
        id: 2,
        productId: '64f43',
        category: 'Sea Foods',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      }
    ],
    'baking': [
      {
        id: 1,
        productId: '64f43',
        category: 'Baking',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      },
      {
        id: 2,
        productId: '64f43',
        category: 'Baking',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      }
    ],
    'drinks': [
      {
        id: 1,
        productId: '64f43',
        category: 'Drinks',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      },
      {
        id: 2,
        productId: '64f43',
        category: 'Drinks',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      }
    ],
    'cheese': [
      {
        id: 1,
        productId: '64f43',
        category: 'Cheese',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      },
      {
        id: 2,
        productId: '64f43',
        category: 'Cheese',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      }
    ],
    'milk': [
      {
        id: 1,
        productId: '64f43',
        category: 'Milk',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      },
      {
        id: 2,
        productId: '64f43',
        category: 'Milk',
        name: ' Spring Onions 1 bunch',
        img: wishimg,
        price: '25.00',
        quantity: '50',
        threshold: '5'

      }
    ],
  }

  return (
    <Stack gap={6} px={4} pb={6} >
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
        alignItems={'center'}
      >
        <Stack>
          <Heading fontSize={'30px'} fontWeight={'700'}>
            Products
          </Heading>
          <Text fontSize={'15px'} color={'#1A1B1A'} fontWeight={'400'}>
            Here is the all user details...Check Now!
          </Text>
        </Stack>
        <Button
        as={Link}
        to={'/dashboard/addproducts'}
          bg={
            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
          }
          border={'2px solid #07d57c'}
          padding={'10px 20px'}
          fontSize={'15px'}
          width={'max-content'}
        >
          Add New Product
        </Button>
      </Stack>
      <Stack gap={2}>
        <Heading fontSize={'18px'} fontWeight={'500'}>
          Categories:
        </Heading>
        <Stack
          direction={'row'}
          alignItems={'center'}
          gap={4}
          flexWrap={'wrap'}
        >
          {Categories?.map((item) => (
            <Button
              border={selectedService === item.slug ? '2px solid #EAA13E' : '2px solid #07d57c'}
              padding={'10px 25px'}
              bg={
                selectedService === item.slug ?
                  'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                  : 'transparent'
              }
              width={'max-content'}
              _hover={{
                color: '#000',
                bg: selectedService === item.slug ? 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))' : 'transparent'

              }}
              onClick={() => setSelectedService(item.slug)}
            >
              {item.title}
            </Button>
          ))}

        </Stack>
      </Stack>
      <Stack gap={2}>
        <Heading fontSize={'18px'} fontWeight={'500'}>
          You’ve {data?.[selectedService]?.length} orders
        </Heading>
        <SimpleGrid columns={3} spacing={10}>
          {data?.[selectedService]?.map((item) => (
            <Stack borderRadius={8} gap={2} p={5} boxShadow="xl">
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexWrap={'wrap'}
                alignItems={'center'}
              >
                <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                  Item No. {item.productId}
                </Text>
                <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                  Category: {item.category}
                </Text>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexWrap={'wrap'}
                alignItems={'center'}
              >
                <Box display={'flex'} alignItems={'center'} gap={2}>
                  <Image
                    width={{
                      base: '50px',
                      md: '80px',
                      xl: '80px',
                      '2xl': '80px',
                    }}
                    src={item.img}
                  />
                  <Box>
                    <Heading color={'#111'} fontWeight={500} fontSize={'16px'}>
                      {item.name}
                    </Heading>
                    <Flex>
                      <Image src={Star} />
                      <Text color={'#989BA2'} fontSize={'14px'}>
                        (5.00)
                      </Text>
                    </Flex>
                  </Box>
                </Box>
                <Button
                  as={Link}
                  border={'2px solid #07d57c'}
                  padding={'10px 20px'}
                  bg={'transparent'}
                  width={'max-content'}
                  fontSize={'15px'}
                  to={'/dashboard/productdetails'}
                >
                  View Item
                </Button>
              </Box>

              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexWrap={'wrap'}
                alignItems={'center'}
              >
                <Box>
                  <Heading color={'#007341'} fontSize={'16px'}>
                    Price
                  </Heading>
                  <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                    ${item.price}
                  </Text>
                </Box>
                <Box>
                  <Heading color={'#007341'} fontSize={'16px'}>
                    Quantity
                  </Heading>
                  <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                    {item.quantity}
                  </Text>
                </Box>
                <Box>
                  <Heading color={'#007341'} fontSize={'16px'}>
                    Threshold
                  </Heading>
                  <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                  {item.threshold}
                  </Text>
                </Box>
              </Box>
            </Stack>
          ))}


        </SimpleGrid>

      </Stack>
    </Stack >
  );
}
