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
 
  Grid,
  GridItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,

  ModalCloseButton,
  ModalBody,
  TableContainer,
} from '@chakra-ui/react';
import React from 'react';
import { RiCloseLargeLine } from 'react-icons/ri';
import wishimg from '../../../assets/images/website/wishlist.jpg';
import { RiFileList3Line } from 'react-icons/ri';
import { BsBoxSeam } from 'react-icons/bs';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { LiaDollySolid } from 'react-icons/lia';
import Cele from '../../../assets/images/website/shoper.png';

export default function SingleOrder() {

    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
     <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Stack py={4} textAlign={'center'} alignItems={'center'}>
              <Image w={'120px'} src={Cele} />
              <Heading>Are you sure?</Heading>
              <Text fontSize={'14px'}>
              You want to cancel this order
              </Text>
              <Stack>
                <Button
                  py={4}
                  fontSize={'16px'}
                  width={'200px'}
                  background={
                    'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                  }
                >
                  No
                </Button>
                <Button
                  py={4}
                  border={'2px solid #07d57c'}
                  padding={'20px 25px'}
                  bg={'transparent'}
                  width={'200px'}
                >
                 Yes
                </Button>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Stack
       px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}
      >
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack px={{ base: '4', xl: '12', '2xl': '12' }}  bg={'#fff'} py={12} borderRadius={12}>
            <Stack bg={'#fff'} py={12} borderRadius={12}>
              <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem colSpan={{ base: '5', xl: '3', '2xl': '3' }}>
                  <Stack>
                    <Heading
                      mb={6}
                      color={'#111'}
                      fontSize={'25px'}
                      fontWeight={700}
                    >
                      Orders Status
                    </Heading>
                    <SimpleGrid
                      borderBottom={'1px solid #D9D9D9'}
                      pb={4}
                      mb={'15px !important'}
                      columns={4}
                      spacing={{ base: '1', xl: '10', '2xl': '10' }} 
                    >
                      <Box textAlign={'center'}>
                        <Box
                          display={'flex'}
                          width={'60px'}
                          height={'60px'}
                          border={'1px solid  #000'}
                          borderRadius={'50%'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          margin={'auto'}
                          _hover={{
                            bg: 'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))',
                            border: '1px solid  #fff',
                          }}
                          role="group"
                        >
                          <Icon
                            _groupHover={{ color: '#fff' }}
                            fontSize={'20px'}
                            as={RiFileList3Line}
                          />
                        </Box>
                        <Text fontWeight={600} fontSize={{ base: '12px', xl: '16px', '2xl': '16px' }} >Order Received</Text>
                      </Box>
                      <Box textAlign={'center'}>
                        <Box
                          display={'flex'}
                          width={'60px'}
                          height={'60px'}
                          border={'1px solid  #000'}
                          borderRadius={'50%'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          margin={'auto'}
                          _hover={{
                            bg: 'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))',
                            border: '1px solid  #fff',
                          }}
                          role="group"
                        >
                          <Icon
                            _groupHover={{ color: '#fff' }}
                            fontSize={'20px'}
                            as={BsBoxSeam}
                          />
                        </Box>
                        <Text fontWeight={600} fontSize={{ base: '12px', xl: '16px', '2xl': '16px' }}>Order In process</Text>
                      </Box>
                      <Box textAlign={'center'}>
                        <Box
                          display={'flex'}
                          width={'60px'}
                          height={'60px'}
                          border={'1px solid  #000'}
                          borderRadius={'50%'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          margin={'auto'}
                          _hover={{
                            bg: 'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))',
                            border: '1px solid  #fff',
                          }}
                          role="group"
                        >
                          <Icon
                            _groupHover={{ color: '#fff' }}
                            fontSize={'23px'}
                            as={LiaDollySolid}
                          />
                        </Box>
                        <Text fontWeight={600} fontSize={{ base: '12px', xl: '16px', '2xl': '16px' }}>Ready for Ship</Text>
                      </Box>
                      <Box textAlign={'center'}>
                        <Box
                          display={'flex'}
                          width={'60px'}
                          height={'60px'}
                          border={'1px solid  #000'}
                          borderRadius={'50%'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          margin={'auto'}
                          _hover={{
                            bg: 'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))',
                            border: '1px solid  #fff',
                          }}
                          role="group"
                        >
                          <Icon
                            _groupHover={{ color: '#fff' }}
                            fontSize={'20px'}
                            as={LiaShippingFastSolid}
                          />
                        </Box>
                        <Text fontWeight={600} fontSize={{ base: '12px', xl: '16px', '2xl': '16px' }}>Order Shipped</Text>
                      </Box>
                    </SimpleGrid>
                    <Stack gap={4}>
                      <TableContainer>
                      <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Products</Th>
                          <Th>Price</Th>
                          <Th>Purchased Date</Th>
                          <Th>Quantity</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                            <Box alignItems={'center'} gap={2}>
                              <Image src={wishimg} />
                              <Text fontSize={'15px'}>
                                Spring Onions 1 bunch
                              </Text>
                            </Box>
                          </Td>
                          <Td>
                            <Text fontSize={'15px'}>$25.00</Text>
                          </Td>
                          <Td>
                            <Text fontSize={'15px'}>4/8/2024</Text>
                          </Td>

                          <Td>
                            <Text fontSize={'15px'}>1</Text>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                      </TableContainer>
                    
                    <Box display={'flex'} gap={2}>
                      <Button
                        border={'2px solid #07d57c'}
                        padding={'10px 25px'}
                        bg={'transparent'}
                        
                      >
                        Edit Order
                      </Button>
                      <Button onClick={onOpen}>Cancel Order</Button>
                    </Box>
                    </Stack>
                  </Stack>
                </GridItem>
                <GridItem colStart={{ base: '1', xl: '4', '2xl': '4' }} colEnd={6}>
                  <Stack px={4} py={6} bg={'#F3F3F3'} borderRadius={6}>
                    <Heading
                      mb={6}
                      color={'#111'}
                      fontSize={'25px'}
                      fontWeight={700}
                    >
                      Your Order
                    </Heading>
                    <Table className="orderTb" variant="simple">
                      <Tbody>
                        <Tr>
                          <Td>
                            <Heading fontSize={'16px'} fontWeight={700}>
                              Black Catfish Steaks  × 1
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
                              $140.00
                            </Heading>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Heading fontSize={'16px'} fontWeight={500}>
                              Carrots 1 kg  × 1
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
                              $240.00
                            </Heading>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Heading fontSize={'19px'} fontWeight={700}>
                              Subtotal
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
                              Rs. 140
                            </Heading>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Heading fontSize={'19px'} fontWeight={700}>
                              Promotional Discount
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
                              -Rs. 2.00
                            </Heading>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Heading fontSize={'19px'} fontWeight={700}>
                              Basket Total
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
                              Rs. 38
                            </Heading>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Heading fontSize={'19px'} fontWeight={700}>
                              Bags, Picking & Packing
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
                              Rs. 3
                            </Heading>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Heading fontSize={'19px'} fontWeight={700}>
                              Delivery
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
                              Rs. 10
                            </Heading>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Heading fontSize={'19px'} fontWeight={700}>
                              Small Basket Fee
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
                              Rs. 4
                            </Heading>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Heading fontSize={'19px'} fontWeight={700}>
                              Delivery Time
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
                              Tomorrow, 22 April
                            </Heading>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Heading fontSize={'22px'} fontWeight={700}>
                              Total Order
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
                              Rs. 155
                            </Heading>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                    <Button
                      fontSize={'16px'}
                      padding={'20px 35px'}
                      background={
                        'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                      }
                    >
                      Checkout
                    </Button>
                  </Stack>
                </GridItem>
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
