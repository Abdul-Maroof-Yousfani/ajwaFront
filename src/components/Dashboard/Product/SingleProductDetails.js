import {
  Container,
  Heading,
  Stack,
  Text,
  Link,
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
} from '@chakra-ui/react';
import React from 'react';
import P1 from '../../../assets/images/website/p1.jpg';
import P2 from '../../../assets/images/website/p2.jpg';
import Product from '../../../assets/images/website/singleproduct.jpg';

import Star from '../../../assets/images/website/star.svg';
import wishimg from '../../../assets/images/website/wishlist.jpg';

export default function SingleProductDetails() {
  return (
    <Stack gap={6} px={4} pb={6}>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
        alignItems={'center'}
      >
        <Stack>
          <Heading fontSize={'30px'} fontWeight={'700'}>
            Products Details
          </Heading>
          <Text fontSize={'15px'} color={'#1A1B1A'} fontWeight={'400'}>
            Here is the all user details...Check Now!
          </Text>
        </Stack>
        <Button
          bg={
            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
          }
          border={'2px solid #07d57c'}
          padding={'10px 20px'}
          fontSize={'15px'}
          width={'max-content'}
        >
          Edit Item
        </Button>
      </Stack>
      <Box display={'flex'} flexWrap={'wrap'} gap={6} alignItems={'center'}>
        <Stack width={'30%'} gap={3}>
          <Stack>
            <Image src={Product} />
            <Box display={'flex'} gap={3}>
              <Box>
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
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack width={'60%'} gap={3} pr={4}>
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
      </Box>
      <Stack>
        <Heading fontSize={'20px'} fontWeight={'700'}>
          Item Reviews:
        </Heading>
        <SimpleGrid columns={3} spacing={10}>
          <Stack borderRadius={8} gap={2} p={5} boxShadow="xl">
            <Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexWrap={'wrap'}
                alignItems={'center'}
              >
                <Box display={'flex'} gap={2} alignItems={'center'}>
                  <Avatar
                    size="lg"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Box>
                    <Heading color={'#111'} fontWeight={700} fontSize={'16px'}>
                      John Doe
                    </Heading>
                    <Flex>
                      <Image src={Star} />
                    </Flex>
                  </Box>
                </Box>
                <Button
                  border={'2px solid #07d57c'}
                  padding={'10px 20px'}
                  bg={'transparent'}
                  width={'max-content'}
                  fontSize={'15px'}
                >
                  Remove Review
                </Button>
              </Box>
            </Box>
            <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Stack>
          <Stack borderRadius={8} gap={2} p={5} boxShadow="xl">
            <Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexWrap={'wrap'}
                alignItems={'center'}
              >
                <Box display={'flex'} gap={2} alignItems={'center'}>
                  <Avatar
                    size="lg"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Box>
                    <Heading color={'#111'} fontWeight={700} fontSize={'16px'}>
                      John Doe
                    </Heading>
                    <Flex>
                      <Image src={Star} />
                    </Flex>
                  </Box>
                </Box>
                <Button
                  border={'2px solid #07d57c'}
                  padding={'10px 20px'}
                  bg={'transparent'}
                  width={'max-content'}
                  fontSize={'15px'}
                >
                  Remove Review
                </Button>
              </Box>
            </Box>
            <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Stack>
          <Stack borderRadius={8} gap={2} p={5} boxShadow="xl">
            <Box>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                flexWrap={'wrap'}
                alignItems={'center'}
              >
                <Box display={'flex'} gap={2} alignItems={'center'}>
                  <Avatar
                    size="lg"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Box>
                    <Heading color={'#111'} fontWeight={700} fontSize={'16px'}>
                      John Doe
                    </Heading>
                    <Flex>
                      <Image src={Star} />
                    </Flex>
                  </Box>
                </Box>
                <Button
                  border={'2px solid #07d57c'}
                  padding={'10px 20px'}
                  bg={'transparent'}
                  width={'max-content'}
                  fontSize={'15px'}
                >
                  Remove Review
                </Button>
              </Box>
            </Box>
            <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
