import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,

} from '@chakra-ui/react';
import React from 'react';
import Star from '../../../assets/images/website/star.svg';
import wishimg from '../../../assets/images/website/wishlist.jpg';
import Product from '../../../assets/images/website/singleproduct.jpg';
import P1 from '../../../assets/images/website/p1.jpg';
import P2 from '../../../assets/images/website/p2.jpg';
import ModalWrapper from '../../Modal';
import { Link } from 'react-router-dom';

function ProductDetail() {
  return (
    <>
     
      <Box display={'flex'} flexWrap={'wrap'} gap={6} alignItems={'center'}>
        <Stack width={'30%'} gap={3}>
          <Stack>
            <Image src={Product} />
          
          </Stack>

        </Stack>
        <Stack width={'45%'} gap={4}>
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
            The color of a radish is a strong indicator of its taste. Pick the ones that are a rich, full red. Red Radishes contains potassium, folate, riboflavin, vitamin B6 and K, calcium, magnesium and many more!
            </Text>
          </Stack>
         
        </Stack>
      </Box>
    </>
  )
}
function PurchasedHistory() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack gap={4}>
      <ModalWrapper
        isOpen={isOpen}
        onClose={onClose}
        title={'View Item'}
        children={
          <ProductDetail />
        }
        size={'xl'}
        isCentered={true}
      />
      <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
        Purchased Items: (12)
      </Text>
      <SimpleGrid columns={3} spacing={10}>
        <Stack borderRadius={8} gap={4} p={5} boxShadow="xl">
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            flexWrap={'wrap'}
            alignItems={'center'}
          >
            <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
              Item No. 64f43
            </Text>
            <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
              Category: Grocery
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
                src={wishimg}
              />
              <Box>
                <Heading color={'#111'} fontSize={'16px'}>
                  John Doe
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
              border={'2px solid #07d57c'}
              padding={'10px 25px'}
              bg={'transparent'}
              width={'max-content'}
              as={Link}
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
                $25.00
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
          </Box>
        </Stack>
      </SimpleGrid>
    </Stack>
  )
}

export default PurchasedHistory