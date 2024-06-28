import { Box, Flex, Heading, Image, Stack, Text,Link, Avatar, Button, Divider } from '@chakra-ui/react';
import React from 'react';
import Product from '../../../assets/images/website/singleproduct.jpg';
import { Link as ReactLink } from 'react-router-dom';

export default function OrderDetails() {
  return (
    <Stack gap={6} px={4} pb={6}>
      <Stack>
        <Heading fontSize={'30px'} fontWeight={'700'}>
          Orders Details
        </Heading>
        <Text fontSize={'15px'} color={'#1A1B1A'} fontWeight={'400'}>
          Here is the all user details...Check Now!
        </Text>
      </Stack>
      <Box display={'flex'} flexWrap={'wrap'} gap={6} alignItems={'center'}>
        <Stack width={'30%'}>
          <Image src={Product} />
        </Stack>
        <Stack width={'60%'} gap={4}>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Stack>
              <Heading
                color={'#007341'}
                fontSize={{ base: '20px', xl: '25px', '2xl': '30px' }}
              >
                Red Radish 1 pack
              </Heading>
              <Flex gap={4}>
                <Text>
                  <Text as={'span'} fontWeight={600}>
                    SKU:
                  </Text>
                  654321234564
                </Text>
                <Text>
                  <Text as={'span'} fontWeight={600}>
                    Category:
                  </Text>
                  Grocery
                </Text>
              </Flex>
            </Stack>
            <Heading color={'#007341'} fontSize={'25px'}>
              Rs. 20
            </Heading>
          </Box>
          <Stack>
            <Heading color={'#04ab62'} fontSize={'20px'}>
              Description
            </Heading>
            <Text>
              The color of a radish is a strong indicator of its taste. Pick the
              ones that are a rich, full red. Red Radishes contains potassium,
              folate, riboflavin, vitamin B6 and K, calcium, magnesium and many
              more! Also with its fiber it will support your healthy digestive
              system.
            </Text>
          </Stack>
          <Link
            padding={'10px 50px'}
            bg={
              'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
            }
            color={'#000'}
            fontWeight={'500'}
            lineHeight={'inherit'}
            borderRadius={12}
            _hover={{
              color: '#fff',
            }}
            w={'fit-content'}
            to={'/dashboard/store/createbranch'}
            as={ReactLink}
          >
            Create New Branch
          </Link>
        </Stack>
      </Box>
     <Stack gap={3}>
     <Heading fontSize={'18px'} fontWeight={'700'}>
        Customer Info:
        </Heading>
     <Stack direction={'row'} alignItems={'center'} gap={24} flexWrap={'wrap'}>
        <Box display={'flex'} gap={2} alignItems={'center'}>
          <Avatar
            size="lg"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Box>
            <Heading color={'#007341'} fontSize={'16px'}>
              John Doe
            </Heading>
            <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
              #545061
            </Text>
          </Box>
        </Box>
        <Box>
          <Heading color={'#007341'} fontSize={'16px'}>
          Price
          </Heading>
          <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
          Rs. 25.00
          </Text>
        </Box>
        <Box>
          <Heading color={'#007341'} fontSize={'16px'}>
          Quantity
          </Heading>
          <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
            1
          </Text>
        </Box>
        <Box>
          <Heading color={'#007341'} fontSize={'16px'}>
          Purchased Date
          </Heading>
          <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
          28/4/2024
          </Text>
        </Box>
        <Box>
          <Heading color={'#007341'} fontSize={'16px'}>
          Purchased Time
          </Heading>
          <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
          3:54 PM
          </Text>
        </Box>
        <Box>
          <Heading color={'#007341'} fontSize={'16px'}>
          Payment Method
          </Heading>
          <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
          Cash on Delivery
          </Text>
        </Box>
      </Stack>
     </Stack>
     <Stack >
     <Heading fontSize={'18px'} fontWeight={'700'}>
     Delivery Details:
        </Heading>
        <Heading fontSize={'20px'} color={'#007341'} fontWeight={'700'}>
        3 May, 3:00 PM - Rs. 100.00
        </Heading>
     </Stack>
     <Divider />
     <Text fontSize={'15px'} color={'#1A1B1A'} fontWeight={'400'}>
     Note: Once you delivered the order, please mark this “Order Completed” to complete the order.
        </Text>
        <Button bg={
              'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
            } color={'#000'} padding={'15px 45px'} width={'max-content'}>
          Order Completed
        </Button>
    </Stack>
  );
}
