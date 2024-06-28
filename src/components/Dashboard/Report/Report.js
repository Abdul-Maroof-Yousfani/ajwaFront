import React, { useState } from 'react'
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

    Button,

    VStack,

    useDisclosure,

    Divider,
    Image, Radio
} from '@chakra-ui/react';
import wishimg from '../../../assets/images/website/wishlist.jpg';

import { FiDollarSign } from 'react-icons/fi';
import { FaUsers, FaShoppingCart } from 'react-icons/fa';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
Chart.register(CategoryScale);

function Report() {
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
        <Stack>
            <Stack display={'flex'} flexDirection={'column'} >
                <Heading fontSize={'40px'} fontWeight={'600'}>
                    Report Analytics
                </Heading>
                <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                    Here is the latest update...Check Now!
                </Text>
            </Stack>
            <Stack py={4} px={4}>
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
                                        as={Link}
                                        to={'/dashboard/most-selling-items'}
                                        color={'#1A1B1A'}
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
                        <Heading fontWeight={'600'} fontSize={'28px'} mb={2}>
                            Best Selling Items
                        </Heading>

                        <Box py={4} borderRadius={'17px'} shadow={'0px 17.048px 40.488px 0px rgba(0, 0, 0, 0.06)'} >
                            <Box px={4}>
                                <Stack display={'flex'} flexDirection={'row'} gap={3} justifyContent={'space-between'} alignItems={'start'}>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src={wishimg} w='66px' h='64px' />
                                        <Stack direction={'column'}>
                                            <Text color='#007341' fontSize='16px' fontWeight={'700'}>Spring Onions 1 bunch</Text>
                                            <Stack direction={'row'} alignItems={'center'} lineHeight={'0px'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="13" viewBox="0 0 82 13" fill="none">
                                                    <g clip-path="url(#clip0_356_94)">
                                                        <path d="M8.27052 10.353L12.098 12.7808L11.0823 8.19766L14.4639 5.11336L10.0171 4.71699L8.27052 0.394012L6.53638 4.71699L2.07715 5.11336L5.45873 8.19766L4.44302 12.7808L8.27052 10.353Z" fill="#F8C519" />
                                                        <path d="M24.7813 10.353L28.6088 12.7808L27.5931 8.19766L30.9746 5.11336L26.5278 4.71699L24.7813 0.394012L23.0471 4.71699L18.5879 5.11336L21.9695 8.19766L20.9538 12.7808L24.7813 10.353Z" fill="#F8C519" />
                                                        <path d="M41.2998 10.353L45.1273 12.7808L44.1116 8.19766L47.4932 5.11336L43.0464 4.71699L41.2998 0.394012L39.5657 4.71699L35.1064 5.11336L38.488 8.19766L37.4723 12.7808L41.2998 10.353Z" fill="#F8C519" />
                                                        <path d="M57.8154 10.353L61.643 12.7808L60.6272 8.19766L64.0088 5.11336L59.562 4.71699L57.8154 0.394012L56.0813 4.71699L51.6221 5.11336L55.0037 8.19766L53.9879 12.7808L57.8154 10.353Z" fill="#F8C519" />
                                                        <path d="M74.3301 10.353L78.1576 12.7808L77.1419 8.19766L80.5235 5.11336L76.0766 4.71699L74.3301 0.394012L72.5959 4.71699L68.1367 5.11336L71.5183 8.19766L70.5026 12.7808L74.3301 10.353Z" fill="#F8C519" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_356_94">
                                                            <rect width="82.599" height="12.3867" fill="white" transform="matrix(1 0 0 -1 0 12.781)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>(5.00)</span>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack m='0 !important' flex={1} direction={'column'} gap={2}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack m='0 !important' flex={1} direction={'column'} gap={2}>
                                        <Text fontSize='16px' fontWeight={'500'}>Quantity</Text>
                                        <Text fontSize='16px' fontWeight={'700'} lineHeight={'0px'} >50</Text>
                                    </Stack>
                                    <Stack m='0 !important' flex={1} direction={'column'} gap={2}>
                                        <Text fontSize='16px' fontWeight={'500'}>Threshold</Text>
                                        <Text fontSize='16px' fontWeight={'700'} lineHeight={'0px'} >5</Text>
                                    </Stack>

                                    <Stack>
                                        <Button
                                            fontSize={{ md: '13px', '2xl': '16px' }}
                                            bg={'transparent'}
                                            color={'#1A1B1A'}
                                            fontWeight={'500'}
                                            lineHeight={'inherit'}
                                            borderRadius={9}
                                            border={'1px solid #1A1B1A'}
                                            width={'max-content'}
                                            _hover={{
                                                color: '#000',
                                            }}
                                            as={Link}
                                            to={'/dashboard/productdetails'}
                                            textAlign={'center'}
                                        >
                                            View Items
                                        </Button>
                                    </Stack>


                                </Stack>
                                <Divider w='95%' display={'flex'} justifyContent={'center'} my={6} color='#B4B4B4' px={6} />
                            </Box>
                            <Box px={4}>
                                <Stack display={'flex'} flexDirection={'row'} gap={3} justifyContent={'space-between'} alignItems={'start'}>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src={wishimg} w='66px' h='64px' />
                                        <Stack direction={'column'}>
                                            <Text color='#007341' fontSize='16px' fontWeight={'700'}>Spring Onions 1 bunch</Text>
                                            <Stack direction={'row'} alignItems={'center'} lineHeight={'0px'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="13" viewBox="0 0 82 13" fill="none">
                                                    <g clip-path="url(#clip0_356_94)">
                                                        <path d="M8.27052 10.353L12.098 12.7808L11.0823 8.19766L14.4639 5.11336L10.0171 4.71699L8.27052 0.394012L6.53638 4.71699L2.07715 5.11336L5.45873 8.19766L4.44302 12.7808L8.27052 10.353Z" fill="#F8C519" />
                                                        <path d="M24.7813 10.353L28.6088 12.7808L27.5931 8.19766L30.9746 5.11336L26.5278 4.71699L24.7813 0.394012L23.0471 4.71699L18.5879 5.11336L21.9695 8.19766L20.9538 12.7808L24.7813 10.353Z" fill="#F8C519" />
                                                        <path d="M41.2998 10.353L45.1273 12.7808L44.1116 8.19766L47.4932 5.11336L43.0464 4.71699L41.2998 0.394012L39.5657 4.71699L35.1064 5.11336L38.488 8.19766L37.4723 12.7808L41.2998 10.353Z" fill="#F8C519" />
                                                        <path d="M57.8154 10.353L61.643 12.7808L60.6272 8.19766L64.0088 5.11336L59.562 4.71699L57.8154 0.394012L56.0813 4.71699L51.6221 5.11336L55.0037 8.19766L53.9879 12.7808L57.8154 10.353Z" fill="#F8C519" />
                                                        <path d="M74.3301 10.353L78.1576 12.7808L77.1419 8.19766L80.5235 5.11336L76.0766 4.71699L74.3301 0.394012L72.5959 4.71699L68.1367 5.11336L71.5183 8.19766L70.5026 12.7808L74.3301 10.353Z" fill="#F8C519" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_356_94">
                                                            <rect width="82.599" height="12.3867" fill="white" transform="matrix(1 0 0 -1 0 12.781)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>(5.00)</span>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack m='0 !important' flex={1} direction={'column'} gap={2}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack m='0 !important' flex={1} direction={'column'} gap={2}>
                                        <Text fontSize='16px' fontWeight={'500'}>Quantity</Text>
                                        <Text fontSize='16px' fontWeight={'700'} lineHeight={'0px'} >50</Text>
                                    </Stack>
                                    <Stack m='0 !important' flex={1} direction={'column'} gap={2}>
                                        <Text fontSize='16px' fontWeight={'500'}>Threshold</Text>
                                        <Text fontSize='16px' fontWeight={'700'} lineHeight={'0px'} >5</Text>
                                    </Stack>

                                    <Stack>
                                        <Button
                                            fontSize={{ md: '13px', '2xl': '16px' }}
                                            bg={'transparent'}
                                            color={'#1A1B1A'}
                                            fontWeight={'500'}
                                            lineHeight={'inherit'}
                                            borderRadius={9}
                                            border={'1px solid #1A1B1A'}
                                            width={'max-content'}
                                            as={Link}
                                            to={'/dashboard/productdetails'}
                                            _hover={{
                                                color: '#000',
                                            }}
                                            textAlign={'center'}
                                        >
                                            View Items
                                        </Button>
                                    </Stack>


                                </Stack>
                                <Divider w='95%' display={'flex'} justifyContent={'center'} mt={6} color='#B4B4B4' px={6} />
                            </Box>
                            <Box px={4}>
                                <Stack display={'flex'} flexDirection={'row'} gap={3} justifyContent={'space-between'} alignItems={'start'}>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src={wishimg} w='66px' h='64px' />
                                        <Stack direction={'column'}>
                                            <Text color='#007341' fontSize='16px' fontWeight={'700'}>Spring Onions 1 bunch</Text>
                                            <Stack direction={'row'} alignItems={'center'} lineHeight={'0px'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="13" viewBox="0 0 82 13" fill="none">
                                                    <g clip-path="url(#clip0_356_94)">
                                                        <path d="M8.27052 10.353L12.098 12.7808L11.0823 8.19766L14.4639 5.11336L10.0171 4.71699L8.27052 0.394012L6.53638 4.71699L2.07715 5.11336L5.45873 8.19766L4.44302 12.7808L8.27052 10.353Z" fill="#F8C519" />
                                                        <path d="M24.7813 10.353L28.6088 12.7808L27.5931 8.19766L30.9746 5.11336L26.5278 4.71699L24.7813 0.394012L23.0471 4.71699L18.5879 5.11336L21.9695 8.19766L20.9538 12.7808L24.7813 10.353Z" fill="#F8C519" />
                                                        <path d="M41.2998 10.353L45.1273 12.7808L44.1116 8.19766L47.4932 5.11336L43.0464 4.71699L41.2998 0.394012L39.5657 4.71699L35.1064 5.11336L38.488 8.19766L37.4723 12.7808L41.2998 10.353Z" fill="#F8C519" />
                                                        <path d="M57.8154 10.353L61.643 12.7808L60.6272 8.19766L64.0088 5.11336L59.562 4.71699L57.8154 0.394012L56.0813 4.71699L51.6221 5.11336L55.0037 8.19766L53.9879 12.7808L57.8154 10.353Z" fill="#F8C519" />
                                                        <path d="M74.3301 10.353L78.1576 12.7808L77.1419 8.19766L80.5235 5.11336L76.0766 4.71699L74.3301 0.394012L72.5959 4.71699L68.1367 5.11336L71.5183 8.19766L70.5026 12.7808L74.3301 10.353Z" fill="#F8C519" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_356_94">
                                                            <rect width="82.599" height="12.3867" fill="white" transform="matrix(1 0 0 -1 0 12.781)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>(5.00)</span>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack m='0 !important' flex={1} direction={'column'} gap={2}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack m='0 !important' flex={1} direction={'column'} gap={2}>
                                        <Text fontSize='16px' fontWeight={'500'}>Quantity</Text>
                                        <Text fontSize='16px' fontWeight={'700'} lineHeight={'0px'} >50</Text>
                                    </Stack>
                                    <Stack m='0 !important' flex={1} direction={'column'} gap={2}>
                                        <Text fontSize='16px' fontWeight={'500'}>Threshold</Text>
                                        <Text fontSize='16px' fontWeight={'700'} lineHeight={'0px'} >5</Text>
                                    </Stack>

                                    <Stack>
                                        <Button
                                            fontSize={{ md: '13px', '2xl': '16px' }}
                                            bg={'transparent'}
                                            color={'#1A1B1A'}
                                            fontWeight={'500'}
                                            lineHeight={'inherit'}
                                            borderRadius={9}
                                            border={'1px solid #1A1B1A'}
                                            width={'max-content'}
                                            as={Link}
                                            to={'/dashboard/productdetails'}
                                            _hover={{
                                                color: '#000',
                                            }}
                                            textAlign={'center'}
                                        >
                                            View Items
                                        </Button>
                                    </Stack>


                                </Stack>
                            </Box>




                        </Box>

                    </GridItem>
                    <GridItem >
                        <Heading fontWeight={'600'} fontSize={'25px'} gap={3} mb={2}>
                            Top Rated Categories
                        </Heading>
                        <Box
                            bg={'#fff'}
                            shadow={'0px 17.048px 40.488px 0px rgba(0, 0, 0, 0.06)'}
                            borderRadius="16px"
                            h="295px"
                            display={'flex'}
                            flexDirection={'column'}
                        >
                            <Doughnut data={doughnutData} />
                        </Box>
                    </GridItem>
                    {/* <Stack
                        py={4}
                        height={'284px'}
                        display={'flex'}
                        w='100%'
                        alignItems={'center'}
                    >
                        <Heading fontWeight={'500'} fontSize={'25px'}>
                            Top Rated Categories
                        </Heading>
                        <Box
                            bg={'#fff'}
                            shadow={'0px 17.048px 40.488px 0px rgba(0, 0, 0, 0.06)'}
                            h="275px"
                            borderRadius="16px"
                            display={'flex'}
                            flexDirection={'column'}
                        >
                            <Doughnut data={doughnutData} />
                        </Box>
                    </Stack> */}
                </Grid>
            </Stack>
            <Box py={4}>
                <Heading fontSize={'28px'} fontWeight={'600'}>
                    Users Activities
                </Heading>

                <Stack display={'flex'} flexDirection={'column'} gap={2}>
                    <HStack mt={6} display={'flex'} w="100%" px={4}>
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
                            Registration Date
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            Purchased Items
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            Info
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
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                            01
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                            #d44vdsQ
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
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
                                <Text>John Doe</Text>
                            </VStack>
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                            2/27/2024
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
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
                                <Text>Kiwi</Text>
                            </VStack>
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
                                as={Link}
                                to={'/dashboard/userDetails'}
                                _hover={{
                                    color: '#000',
                                }}
                                w={'fit-content'}
                            >
                                View Details
                            </Button>
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
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                            01
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                            #d44vdsQ
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
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
                                <Text>John Doe</Text>
                            </VStack>
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                            2/27/2024
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
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
                                <Text>Kiwi</Text>
                            </VStack>
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
                                as={Link}
                                to={'/dashboard/userDetails'}
                                borderRadius={12}
                                _hover={{
                                    color: '#000',
                                }}
                                w={'fit-content'}
                            >
                                View Details
                            </Button>
                        </Box>
                    </HStack>

                </Stack>

            </Box>
        </Stack>
    )
}

export default Report