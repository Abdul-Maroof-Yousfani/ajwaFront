import {
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  FormLabel,
  Select,
  Box,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Checkbox,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const StoreSetting = () => {
  const Params = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newBranch, setNewBranch] = useState({
    name: '',
    phone: '',
    state: '',
    uploadPicture: '',
    area: '',
    zipCode: '',
    availability: [],
  });
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const bannerData = [
    {
      name: 'Banner name here',
      uploadDate: '4/25/2024',
      bannerImage:
        'https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Banner name here',
      uploadDate: '4/25/2024',
      bannerImage:
        'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <>
      <SimpleGrid
        columns={{
          base: '1',
          sm: '1',
          md: '1',
          lg: '1',
          xl: '2',
          '2xl': '2',
        }}
        spacingX="40px"
        spacingY="20px"
      >
        <Stack className={'bread m3-h'}>
          <Heading as={'h3'} fontFamily={'Quicksand'} color={'#1B1C1D'}>
            Store Settings
          </Heading>
          <Text color={'#75767A'} fontWeight={400} fontFamily={'Quicksand'}>
            Here is your all store details...Check Now!
          </Text>
        </Stack>
      </SimpleGrid>
      <Stack>
        <Tabs variant="unstyled" py={6}>
          <TabList gap={6}>
            <Tab
              padding={'5px 30px'}
              color={'#7D7D7D'}
              fontWeight={'500'}
              lineHeight={'inherit'}
              px={8}
              bg={'transparent'}
              border={'2px solid #07d57c'}

              _hover={{
                color: '#fff',
                bg: 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))',
              }}
              textTransform={'capitalize'}
              w={'fit-content'}
              borderRadius={12}
              _selected={{
                color: 'white',
                bg: 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))',
                border: '2px solid #EAA13E',

              }}
            >
              Store Settings
            </Tab>
            <Tab
          border={'2px solid #07d57c'}

              padding={'5px 30px'}
              color={'#7D7D7D'}
              fontWeight={'500'}
              lineHeight={'inherit'}
              px={8}
              bg={'transparent'}
              // border={'1px solid #7D7D7D'}
              _hover={{
                color: '#fff',
                bg: 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))',
              }}
              textTransform={'capitalize'}
              w={'fit-content'}
              borderRadius={12}
              _selected={{
                color: 'white',
                bg: 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))',
                border: '2px solid #EAA13E',
              }}
            >
              Store Banners
            </Tab>
          </TabList>
          <TabPanels py={4}>
            <TabPanel>
              <>
                <Stack display={'flex'} direction={'row'} gap={4}>
                  <img
                    style={{
                      borderRadius: '200px',
                      height: '130px',
                      width: '130px',
                    }}
                    src="https://images.unsplash.com/photo-1604145195376-e2c8195adf29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                  />
                  <Stack alignItems={'center'} justifyContent={'center'}>
                    <Button
                      bg={
                        'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                      }
                      color={'#000'}
                      fontWeight={'500'}
                      lineHeight={'inherit'}
                      borderRadius={8}
                      _hover={{
                        color: '#000',
                      }}
                    >
                      Change Photo
                    </Button>
                    <Button
                      variant={'outline'}
                      color={'#000'}
                      fontWeight={'500'}
                      border={'1px solid #1A1B1A'}
                      _hover={{
                        color: '#000',
                      }}
                    >
                      Remove Photo
                    </Button>
                  </Stack>
                </Stack>
                <Stack bg={'#FBFBFB'} px={2} gap={6} py={6} borderRadius={8}>
                  <SimpleGrid
                    columns={{
                      base: '1',
                      sm: '1',
                      md: '1',
                      lg: '1',
                      xl: '2',
                      '2xl': '2',
                    }}
                    spacingX="40px"
                    spacingY="20px"
                  >
                    <Stack className="grid1">
                      <Stack>
                        <FormLabel
                          fontWeight={500}
                          m={0}
                          color={'#1A1B1A'}
                          fontSize={'16px'}
                        >
                          Branch Name
                        </FormLabel>
                        <Box className="Ifiled">
                          <Input
                            type="text"
                            value={newBranch.name}
                            onChange={e =>
                              setNewBranch({
                                ...newBranch,
                                name: e.target.value,
                              })
                            }
                            placeholder="Enter Branch Name"
                          />
                        </Box>
                      </Stack>
                      <Stack>
                        <FormLabel
                          fontWeight={500}
                          m={0}
                          color={'#1A1B1A'}
                          fontSize={'16px'}
                        >
                          State
                        </FormLabel>
                        <Box className="Ifiled">
                          <Select
                            value={newBranch.state}
                            onChange={e =>
                              setNewBranch({
                                ...newBranch,
                                state: e.target.value,
                              })
                            }
                            placeholder="Enter Here"
                          >
                            <option value={'sindh'}>Sindh</option>
                            <option value={'punjab'}>Punjab</option>
                            <option value={'balochistan'}>Balochistan</option>
                            <option value={'gilgit'}>Gilgit-Baltistan</option>
                          </Select>
                        </Box>
                      </Stack>
                      <Stack>
                        <FormLabel
                          fontWeight={500}
                          m={0}
                          color={'#1A1B1A'}
                          fontSize={'16px'}
                        >
                          Zip Code
                        </FormLabel>
                        <Box className="Ifiled">
                          <Input
                            type="number"
                            value={newBranch.zipCode}
                            onChange={e =>
                              setNewBranch({
                                ...newBranch,
                                zipCode: e.target.value,
                              })
                            }
                            placeholder="Enter Zip Code"
                          />
                        </Box>
                      </Stack>
                    </Stack>
                    <Stack className="grid2">
                      <Stack>
                        <FormLabel
                          fontWeight={500}
                          m={0}
                          color={'#1A1B1A'}
                          fontSize={'16px'}
                        >
                          Phone No.
                        </FormLabel>
                        <Box className="Ifiled">
                          <Input
                            type="number"
                            value={newBranch.phone}
                            onChange={e =>
                              setNewBranch({
                                ...newBranch,
                                phone: e.target.value,
                              })
                            }
                            placeholder="Enter Phone No."
                          />
                        </Box>
                      </Stack>
                      <Stack>
                        <FormLabel
                          fontWeight={500}
                          m={0}
                          color={'#1A1B1A'}
                          fontSize={'16px'}
                        >
                          Area
                        </FormLabel>
                        <Box className="Ifiled">
                          <Input
                            type="text"
                            value={newBranch.area}
                            onChange={e =>
                              setNewBranch({
                                ...newBranch,
                                area: e.target.value,
                              })
                            }
                            placeholder="Enter Area here"
                          />
                        </Box>
                      </Stack>
                      <Stack pt={10} alignItems={'end'}>
                        <Button
                          variant={'outline'}
                          padding={'10px 50px'}
                          color={'#000'}
                          fontWeight={'500'}
                          lineHeight={'inherit'}
                          borderRadius={12}
                          w={'fit-content'}
                          onClick={onOpen}
                        >
                          Change Store Availability
                        </Button>
                      </Stack>
                    </Stack>
                  </SimpleGrid>
                  <Button
                    padding={'10px 50px'}
                    bg={
                      'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                    }
                    color={'#000'}
                    fontWeight={'500'}
                    lineHeight={'inherit'}
                    borderRadius={12}
                    _hover={{
                      color: '#000',
                    }}
                    w={'fit-content'}
                    // isLoading={isLoading}
                    // onClick={onOpen}
                  >
                    Save Changes
                  </Button>
                </Stack>
              </>
            </TabPanel>
            <TabPanel>
              <>
                <Stack className="p1">
                  <Text>
                    Total Banners:{' '}
                    <Text as={'span'} fontWeight={'600'} color={'#F19938'}>
                      0
                    </Text>
                  </Text>
                </Stack>
                <Stack bg={'#FBFBFB'} px={6} py={8} borderRadius={8}>
                  <SimpleGrid
                    columns={{
                      base: '1',
                      sm: '1',
                      md: '1',
                      lg: '2',
                      xl: '2',
                      '2xl': '2',
                    }}
                    spacingX="40px"
                    spacingY="20px"
                  >
                    {bannerData && bannerData.length > 0 ? (
                      bannerData.map((val, ind) => (
                        <Stack
                          key={ind}
                          py={6}
                          px={4}
                          borderRadius={6}
                          bg={'#FFFFFF'}
                          shadow={
                            '0px 17.048px 40.488px 0px rgba(0, 0, 0, 0.06)'
                          }
                        >
                          <Stack
                            direction={'row'}
                            flexWrap={'wrap'}
                            alignItems={'center'}
                            paddingBottom={5}
                            marginBottom={4}
                            justifyContent={'space-between'}
                            position={'relative'}
                          >
                            <Stack direction={'row'} alignItems={'center'}>
                            <img
                              src={val?.bannerImage}
                              alt={val?.name}
                              style={{
                                borderRadius: '15px',
                                height: '100px',
                                width: '100px',
                              }}
                            />
                            <Text color={'#007341'} fontWeight={700} textTransform={'capitalize'}>{val?.name}</Text>
                            </Stack>
                            <Stack alignItems={'flex-end'}>
                              <Button>Remove</Button>
                            </Stack>
                          </Stack>
                          <Stack>
                            <Text>{val?.uploadDate}</Text>
                          </Stack>
                        </Stack>
                      ))
                    ) : (
                      <Text>No Banners available</Text>
                    )}
                  </SimpleGrid>
                </Stack>
              </>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={'lg'}
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent height={'fit-content'}>
          <ModalHeader>Branch Availability</ModalHeader>
          <ModalCloseButton />
          <ModalBody gap={3}>
            {daysOfWeek.map(day => (
              <Stack
                key={day}
                bg={'#F3F3F3'}
                border={'1px solid #B4B4B4'}
                borderRadius={8}
                padding={3}
                my={2}
                display={'flex'}
                direction={'row'}
                justifyContent={'space-between'}
              >
                <Checkbox
                  colorScheme="green"
                  value={day}
                  onChange={e => {
                    if (e.target.checked) {
                      setNewBranch({
                        ...newBranch,
                        availability: [...newBranch.availability, day],
                      });
                    } else {
                      setNewBranch({
                        ...newBranch,
                        availability: newBranch.availability.filter(
                          d => d !== day
                        ),
                      });
                    }
                  }}
                >
                  {day}
                </Checkbox>
                <Stack display={'flex'} direction={'row'} gap={3}>
                  <Text
                    bg={
                      newBranch.availability.includes(day)
                        ? 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                        : '#D9D5D5'
                    }
                    padding={2}
                    borderRadius={6}
                    color={'#1A1B1A'}
                    fontWeight={500}
                  >
                    08:00 AM
                  </Text>
                  <Text
                    padding={2}
                    borderRadius={6}
                    bg={
                      newBranch.availability.includes(day)
                        ? 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                        : '#D9D5D5'
                    }
                    color={'#1A1B1A'}
                    fontWeight={500}
                  >
                    10:00 PM
                  </Text>
                </Stack>
              </Stack>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button
              background={
                'radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)'
              }
              color={'#fff'}
              fontWeight={'500'}
              lineHeight={'inherit'}
              borderRadius={8}
              _hover={{
                color: '#000',
              }}
              w={'full'}
              //   onClick={handleCreate}
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StoreSetting;
