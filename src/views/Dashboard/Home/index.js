import React, { useState } from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
// import HomeWrap from '../../../components/Dashboard/Home/HomeWrap';
import {
  Stack,
  Heading,
  Text,
  Box,
  Grid,
  GridItem,
  IconButton,
  HStack,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Button,
  Badge,
  WrapItem,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  List,
  ListItem,
} from '@chakra-ui/react';
import { CalendarIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import { FiDollarSign } from 'react-icons/fi';
import { FaUsers, FaShoppingCart } from 'react-icons/fa';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
// import shapeb from '../../../assets/images/icon/black.png'
Chart.register(CategoryScale);
export default function DashboardHome() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState(null);
  const Data = [
    {
      id: 1,
      year: 'Mon',
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 'Tues',
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 'Wed',
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 'Thurs',
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 'Fri',
      userGain: 4300,
      userLost: 234,
    },
    {
      id: 5,
      year: 'Sat',
      userGain: 4300,
      userLost: 234,
    },
    {
      id: 5,
      year: 'Sun',
      userGain: 4300,
      userLost: 234,
    },
  ];
  const [chartData, setChartData] = useState({
    labels: Data.map(data => data.year),
    title: 'Sales Analytics',
    datasets: [
      {
        label: 'As Users',
        data: [650, 590, 800, 810, 560, 550, 400],
        backgroundColor: '#5EAA43',
        borderColor: '#5EAA43',
        borderWidth: 0,
        borderRadius: 7,
      },
      {
        label: 'As Guest',
        data: [450, 390, 600, 710, 260, 250, 200],
        backgroundColor: '#F9C74F',
        borderColor: '#F9C74F',
        borderWidth: 0,
        borderRadius: 7,
      },
    ],
  });

  const tableData = [
    {
      id: '19932014',
      name: 'Snow',
      registerDate: '19/12/24',
      purchasedItem: [
        { itemName: 'Kiwi', itemPrice: 30, id: '200321' },
        { itemName: 'Bread', itemPrice: 12, id: '230123' },
        { itemName: 'Cheese', itemPrice: 18, id: '230126' },
      ],
    },
    {
      id: '19932015',
      name: 'John',
      registerDate: '20/01/15',
      purchasedItem: [
        { itemName: 'Apple', itemPrice: 25, id: '200322' },
        { itemName: 'Milk', itemPrice: 15, id: '230124' },
        { itemName: 'Orange', itemPrice: 35, id: '200324' },
      ],
    },
    {
      id: '19932016',
      name: 'Sarah',
      registerDate: '20/02/10',
      purchasedItem: [
        { itemName: 'Banana', itemPrice: 20, id: '200323' },
        { itemName: 'Eggs', itemPrice: 8, id: '230125' },
        { itemName: 'Kiwi', itemPrice: 30, id: '200321' },
        { itemName: 'Cheese', itemPrice: 18, id: '230126' },
      ],
    },
    {
      id: '19932017',
      name: 'Mike',
      registerDate: '20/03/05',
      purchasedItem: [
        { itemName: 'Orange', itemPrice: 35, id: '200324' },
        { itemName: 'Cheese', itemPrice: 18, id: '230126' },
      ],
    },
  ];

  function handleOpen(modalData) {
    setModalData(modalData);
    onOpen();
  }
  const doughnutData = {
    labels: ['Grocery', 'Sea Foods', 'Meat', 'Baking'],
    datasets: [
      {
        label: '% of sales',
        data: [42, 20, 26, 12],
        backgroundColor: ['#F94144', '#F3722C', '#F8961E', '#F9C74F'],
        borderColor: ['#F94144', '#F3722C', '#F8961E', '#F9C74F'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack overflowY="hidden">
      <MainDashboard>
        <Stack
          overflowY="auto"
          margin={'0 !important'}
          gap={8}
          borderRadius={'30px 0 0 0'}
          py={10}
          px={6}
          bg={'#FBFBFB'}
          height={'100%'}
          bgPos={'-32px -100px'}
        >
          {/*Heading  */}
          <Stack display={'flex'} flexDirection={'column'} >
            <Heading fontSize={'40px'} fontWeight={'600'}>
              Dashboard
            </Heading>
            <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
              Here is the discount details...Check Now!
            </Text>
          </Stack>
          {/*Heading  */}
          {/* Stats */}
          <Stack mt={'10px'}>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} mb={6}>
              <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                height={'219px'}
                borderRadius="16px"
                bg={
                  'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                }
                display={'flex'}
                flexDirection={'column'}
                gap={'15px'}
              >
                <HStack>
                  <IconButton
                    isRound={true}
                    variant="solid"
                    colorScheme="#F2F2F2"
                    bg={'#F2F2F2'}
                    aria-label="Done"
                    fontSize="20px"
                    icon={<FiDollarSign color="#8ABD3D" />}
                  />
                  <Text fontSize={'16px'} color={'#F2F2F2'}>
                    Total Revenue
                  </Text>
                </HStack>
                <Stack>
                  <Heading
                    as="h1"
                    fontWeight={'500'}
                    fontSize={'40px'}
                    color={'#F2F2F2'}
                  >
                    $9,251.00
                  </Heading>
                  <Text fontSize={'15px'} color={'#F2F2F2'} fontWeight={'400'}>
                    Here is the latest update...Check Now!
                  </Text>
                </Stack>
              </Box>
              <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                display={'flex'}
                flexDirection={'column'}
                gap={'15px'}
                borderRadius="16px"
              >
                <HStack>
                  <IconButton
                    isRound={true}
                    variant="solid"
                    colorScheme="#F2F2F2"
                    bg={
                      'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                    }
                    aria-label="Done"
                    fontSize="20px"
                    icon={<FiDollarSign color="#1A1B1A" />}
                  />
                  <Text fontSize={'16px'} fontWeight={'500'} color="#75767A">
                    Today’s Revenue
                  </Text>
                </HStack>
                <Stack>
                  <Heading as="h1" fontWeight={'500'} fontSize={'40px'}>
                    $5,715
                  </Heading>
                  <Text fontSize={'15px'} color="#75767A" fontWeight={'500'}>
                    Here is the latest update...Check Now!
                  </Text>
                </Stack>
              </Box>
              <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                display={'flex'}
                flexDirection={'column'}
                gap={'15px'}
                borderRadius="16px"
              >
                <HStack>
                  <IconButton
                    isRound={true}
                    variant="solid"
                    colorScheme="#F2F2F2"
                    bg={
                      'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                    }
                    aria-label="Done"
                    fontSize="20px"
                    icon={<FaUsers color="#1A1B1A" />}
                  />
                  <Text fontSize={'16px'} fontWeight={'500'} color="#75767A">
                    Total Users
                  </Text>
                </HStack>
                <Stack>
                  <Heading as="h1" fontWeight={'500'} fontSize={'40px'}>
                    74
                  </Heading>
                  <Text fontSize={'15px'} color="#75767A" fontWeight={'500'}>
                    Here is the latest update...Check Now!
                  </Text>
                </Stack>
              </Box>
              <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                display={'flex'}
                height={'219px'}
                flexDirection={'column'}
                gap={'15px'}
                borderRadius="16px"
              >
                <HStack>
                  <IconButton
                    isRound={true}
                    variant="solid"
                    colorScheme="#F2F2F2"
                    bg={
                      'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                    }
                    aria-label="Done"
                    fontSize="20px"
                    icon={<FaShoppingCart color="#1A1B1A" />}
                  />
                  <Text fontSize={'16px'} fontWeight={'500'} color="#75767A">
                    Most Selling Items
                  </Text>
                </HStack>
                <Stack>
                  <Heading as="h1" fontWeight={'500'} fontSize={'40px'}>
                    31
                  </Heading>
                  <Stack flexDirection={'column'}>
                    <HStack>
                      <Button
                        padding={{ md: '10px 15px', '2xl': '10px 50px' }}
                        fontSize={{ md: '13px', '2xl': '16px' }}
                        bg={'transparent'}
                        color={'#1A1B1A'}
                        as={Link}
                        to={'/dashboard/most-selling-items'}
                        fontWeight={'500'}
                        lineHeight={'inherit'}
                        borderRadius={12}
                        border={'1px solid #1A1B1A'}
                        _hover={{
                          color: '#000',
                        }}
                        w={'100%'}
                        textAlign={'center'}
                      >
                        View Items
                      </Button>
                    </HStack>
                  </Stack>
                </Stack>
              </Box>
            </Grid>

            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              <GridItem
                colSpan={3}
                className="chart-container"
                position={'relative'}
              >
                <Heading fontWeight={'500'} fontSize={'25px'}>
                  User Statistics
                </Heading>
                <Bar
                  options={{
                    plugins: {
                      legend: {
                        display: true,
                        position: 'top',
                        labels: {
                          font: {
                            size: 14,
                            weight: 'italic',
                            padding: 10,
                          },
                        },
                      },
                    },
                    scales: {
                      x: {
                        grid: {
                          display: false,
                        },
                      },
                      y: {
                        grid: {
                          display: false,
                        },
                      },
                    },
                  }}
                  height={'100%'}
                  data={chartData}
                />
              </GridItem>

              <Stack
                py={4}
                height={'284px'}
                display={'flex'}
                alignItems={'center'}
              >
                <Heading fontWeight={'500'} fontSize={'25px'}>
                  Top Rated Categories
                </Heading>
                <Box
                  bg={'#fff'}
                  h="275px"
                  borderRadius="16px"
                  display={'flex'}
                  flexDirection={'column'}
                >
                  <Doughnut data={doughnutData} />
                </Box>
              </Stack>
            </Grid>
          </Stack>
          {/* Table */}
          <Stack>
            <Stack
              flexDirection={'row'}
              justifyContent={'space-between'}
              my={'15px'}
            >
              <Heading fontWeight={'500'} fontSize={'25px'}>
                Users Activities
              </Heading>
              <Text
                cursor={'pointer'}
                fontSize={'16px'}
                fontWeight={'400'}
                color={'#75767A'}
              >
                View All
              </Text>
            </Stack>
            <Stack display={'flex'} flexDirection={'column'} gap={2}>
              <HStack display={'flex'} w="100%" px={4}>
                <Box
                  fontSize="15px"
                  fontWeight={'400'}
                  color="#75767A"
                  flex={1}
                >
                  NO.
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'400'}
                  color="#75767A"
                  flex={1}
                >
                  ID
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'400'}
                  color="#75767A"
                  flex={1}
                >
                  Name
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'400'}
                  color="#75767A"
                  flex={1}
                >
                  Purchasing Date
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'400'}
                  color="#75767A"
                  flex={1}
                >
                  Purchased Items
                </Box>
              </HStack>
              {tableData && tableData.length > 0 ? (
                tableData.map((val, ind) => (
                  <HStack
                    key={ind}
                    display={'flex'}
                    w="100%"
                    h="70px"
                    bg={'#fff'}
                    shadow={'0px 16px 38px 0px #0000000F'}
                    px={4}
                    borderRadius={'16px'}
                  >
                    <Box
                      fontSize="15px"
                      fontWeight={'500'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      {ind}
                    </Box>
                    <Box
                      fontSize="15px"
                      fontWeight={'500'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      {val?.id}
                    </Box>
                    <Box
                      fontSize="15px"
                      fontWeight={'500'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      <VStack
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        gap={2}
                      >
                        <Avatar
                          size="sm"
                          name="Kent Dodds"
                          src="https://bit.ly/kent-c-dodds"
                        />
                        <Text>{val?.name}</Text>
                      </VStack>
                    </Box>
                    <Box
                      fontSize="15px"
                      fontWeight={'500'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      {val?.registerDate}
                    </Box>
                    <Box
                      fontSize="15px"
                      fontWeight={'500'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      <Button
                        padding={'10px 50px'}
                        bg={
                          'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                        }
                        color={'#fff'}
                        fontWeight={'500'}
                        lineHeight={'inherit'}
                        borderRadius={12}
                        _hover={{
                          color: '#000',
                        }}
                        w={'fit-content'}
                        onClick={() => handleOpen(val?.purchasedItem)}
                      >
                        View Details
                      </Button>
                    </Box>
                  </HStack>
                ))
              ) : (
                <Stack className={'bread m5-h'}>
                  <Heading as={'h5'}>No Activities Found </Heading>
                </Stack>
              )}

              {/* <HStack
                display={'flex'}
                w="100%"
                h="70px"
                bg={'#fff'}
                shadow={'0px 16px 38px 0px #0000000F'}
                px={4}
                borderRadius={'16px'}
              >
                <Box
                  fontSize="15px"
                  fontWeight={'500'}
                  color="#1B1C1D"
                  flex={1}
                >
                  01
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'500'}
                  color="#1B1C1D"
                  flex={1}
                >
                  #d44vdsQ
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'500'}
                  color="#1B1C1D"
                  flex={2}
                >
                  <VStack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                    gap={2}
                  >
                    <Avatar
                      size="sm"
                      name="Kent Dodds"
                      src="https://bit.ly/kent-c-dodds"
                    />
                    <Text> Adam Knight</Text>
                  </VStack>
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'500'}
                  color="#1B1C1D"
                  flex={1}
                >
                  27
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'500'}
                  color="#1B1C1D"
                  flex={2}
                >
                  2/27/2024
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'500'}
                  color="#1B1C1D"
                  flex={1}
                >
                  <Badge
                    w="81px"
                    height="28px"
                    display={'flex'}
                    alignItems={'center'}
                    borderRadius={'50px'}
                    justifyContent={'center'}
                    bg="#F3D893"
                    color={'#C79209'}
                  >
                    Pending
                  </Badge>
                </Box>
              </HStack>

              <HStack
                display={'flex'}
                w="100%"
                h="70px"
                bg={'#fff'}
                shadow={'0px 16px 38px 0px #0000000F'}
                px={4}
                borderRadius={'16px'}
              >
                <Box
                  fontSize="15px"
                  fontWeight={'500'}
                  color="#1B1C1D"
                  flex={1}
                >
                  01
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'500'}
                  color="#1B1C1D"
                  flex={1}
                >
                  #d44vdsQ
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'500'}
                  color="#1B1C1D"
                  flex={2}
                >
                  <VStack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                    gap={2}
                  >
                    <Avatar
                      size="sm"
                      name="Kent Dodds"
                      src="https://bit.ly/kent-c-dodds"
                    />
                    <Text> Adam Knight</Text>
                  </VStack>
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'500'}
                  color="#1B1C1D"
                  flex={1}
                >
                  27
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'500'}
                  color="#1B1C1D"
                  flex={2}
                >
                  2/27/2024
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight={'500'}
                  color="#1B1C1D"
                  flex={1}
                >
                  <Badge
                    w="81px"
                    height="28px"
                    display={'flex'}
                    alignItems={'center'}
                    borderRadius={'50px'}
                    justifyContent={'center'}
                    bg="#F3D893"
                    color={'#C79209'}
                  >
                    Pending
                  </Badge>
                </Box>
              </HStack> */}
            </Stack>
          </Stack>
          {/* Table */}
        </Stack>
      </MainDashboard>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Purchased Items</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List>
              {modalData && modalData?.map((val, ind) => (
                <ListItem>
                  {val?.itemName}
                </ListItem>
              ))}
            </List>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
}
