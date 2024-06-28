import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Img,
  Icon,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
  Text,
  TableContainer,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { GoUpload } from 'react-icons/go';
import { RiCloseLargeLine } from 'react-icons/ri';
import wishimg from '../../../assets/images/website/wishlist.jpg';

export default function UserAcountDetails() {
  const [showpass, setshowpass] = useState(false);
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Stack>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack px={12} bg={'#fff'} py={12} borderRadius={12}>
            <Tabs variant="unstyled">
              <TabList justifyContent={'center'} mb={8} gap={2}>
                <Tab
                  bg={'#D9D9D9'}
                  borderRadius={'8px'}
                  _selected={{
                    color: 'white',
                    padding: '10px 25px',
                    bg: 'radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)',
                  }}
                >
                  Account Details
                </Tab>
                <Tab
                  bg={'#D9D9D9'}
                  borderRadius={'8px'}
                  _selected={{
                    color: 'white',
                    padding: '10px 25px',
                    bg: 'radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)',
                  }}
                >
                  Order History
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Stack gap={4}>
                    <Heading
                      mb={6}
                      color={'#111'}
                      fontSize={'25px'}
                      fontWeight={700}
                    >
                      Account Details
                    </Heading>
                    <Stack>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={imageUploader}
                        display={'none'}
                      />

                      <Stack
                        position={'relative'}
                        height={'100px'}
                        width={'100px'}
                        borderRadius={'50%'}
                        border={'1px dashed #07d57c'}
                        onClick={() => imageUploader.current.click()}
                      >
                        <Img borderRadius={'50%'} ref={uploadedImage} />
                        <Box
                          borderRadius={'50%'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          display={'flex'}
                          width={'30px'}
                          height={'30px'}
                          background={
                            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                          }
                          bottom={0}
                          right={'0'}
                          position={'absolute'}
                        >
                          <Icon color={'#fff'} as={GoUpload} />
                        </Box>
                      </Stack>
                    </Stack>
                    <Stack>
                      <SimpleGrid columns={{ base: '1', xl: '2', '2xl': '2' }}  spacing={10}>
                        <FormControl>
                          <FormLabel fontSize={'15px'}>Full Name</FormLabel>
                          <Input
                            py={6}
                            type="text"
                            placeholder="Enter Your Name"
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel fontSize={'15px'}>Email Address</FormLabel>
                          <Input
                            py={6}
                            type="text"
                            placeholder="Enter Your Email"
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel fontSize={'15px'}>Phone No</FormLabel>
                          <Input
                            py={6}
                            type="text"
                            placeholder="Enter Your Phone"
                          />
                        </FormControl>
                      </SimpleGrid>
                    </Stack>
                    <Stack>
                      <Heading
                        mb={6}
                        color={'#111'}
                        fontSize={'20px'}
                        fontWeight={700}
                      >
                        Change Password
                      </Heading>
                      <SimpleGrid columns={{ base: '1', xl: '2', '2xl': '2' }}  spacing={10}>
                        <FormControl>
                          <FormLabel fontSize={'15px'}>New Password</FormLabel>
                          <Input
                            py={6}
                            type="text"
                            placeholder="Enter Password"
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel fontSize={'15px'}>
                            Confirm Password
                          </FormLabel>
                          <Input
                            py={6}
                            type="text"
                            placeholder="Confirm Password"
                          />
                        </FormControl>
                      </SimpleGrid>
                    </Stack>
                    <Button
                      width={'max-content'}
                      fontSize={'16px'}
                      padding={'20px 25px'}
                      background={
                        'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                      }
                    >
                      Save Changes
                    </Button>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <Stack gap={8}>
                    <Stack>
                      <Heading
                        mb={6}
                        color={'#111'}
                        fontSize={'20px'}
                        fontWeight={700}
                      >
                        My Orders
                      </Heading>
                      <TableContainer>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Products</Th>
                            <Th>Price</Th>
                            <Th>Stock Status</Th>
                            <Th>Quantity</Th>
                            <Th>Action</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>
                              <Box
                                alignItems={'center'}
                                gap={2}
                                display={'flex'}
                                flexWrap={'wrap'}
                              >
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
                              <Text fontSize={'15px'}>In Stock</Text>
                            </Td>
                            <Td>
                              <Text fontSize={'15px'}>1</Text>
                            </Td>
                            <Td>
                              <Box display={'flex'} gap={2}>
                                <Button
                                  border={'2px solid #07d57c'}
                                  padding={'10px 25px'}
                                  bg={'transparent'}
                                >
                                  Edit Order
                                </Button>
                                <Button>Order Details</Button>
                              </Box>
                            </Td>
                            <Td></Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <Box
                                alignItems={'center'}
                                gap={2}
                                display={'flex'}
                                flexWrap={'wrap'}
                              >
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
                              <Text fontSize={'15px'}>In Stock</Text>
                            </Td>
                            <Td>
                              <Text fontSize={'15px'}>1</Text>
                            </Td>
                            <Td>
                              <Box display={'flex'} gap={2}>
                                <Button
                                  border={'2px solid #07d57c'}
                                  padding={'10px 25px'}
                                  bg={'transparent'}
                                >
                                  Edit Order
                                </Button>
                                <Button>Order Details</Button>
                              </Box>
                            </Td>
                            <Td></Td>
                          </Tr>
                        </Tbody>
                      </Table>
                      </TableContainer>
                     
                    </Stack>
                    <Stack>
                      <Heading
                        mb={6}
                        color={'#111'}
                        fontSize={'20px'}
                        fontWeight={700}
                      >
                        Order History
                      </Heading>
                      <TableContainer>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th>Products</Th>
                            <Th>Price</Th>
                            <Th>Purchased Date</Th>
                            <Th>Quantity</Th>
                            <Th>Action</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>
                              <Box
                                alignItems={'center'}
                                gap={2}
                                display={'flex'}
                                flexWrap={'wrap'}
                              >
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
                            <Td>1</Td>
                            <Td>
                              <Button
                                border={'2px solid #07d57c'}
                                padding={'10px 25px'}
                                bg={'transparent'}
                              >
                                Order Again
                              </Button>
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <Box
                                alignItems={'center'}
                                gap={2}
                                display={'flex'}
                                flexWrap={'wrap'}
                              >
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
                            <Td>1</Td>
                            <Td>
                              <Button
                                border={'2px solid #07d57c'}
                                padding={'10px 25px'}
                                bg={'transparent'}
                              >
                                Order Again
                              </Button>
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                      </TableContainer>
                    
                    </Stack>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
