import {
    Box,
    Button,
    Checkbox,
    FormLabel,
    Heading,
    FormControl,
    Radio,
    Icon,
    Input,
    Select,
    Stack,
    Text,
    Textarea,
    useToast,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Image,

} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import React from 'react'
import { FiSearch } from 'react-icons/fi';

function AddOffer() {
    const items = [
        {
            id: 1,
            name: 'Spring Onions 1 Bunch',
            price: 25.00,
            image: 'https://via.placeholder.com/50', // replace with actual image URL
            rating: 5.00,
        },
        {
            id: 2,
            name: 'Spring Onions 1 Bunch',
            price: 25.00,
            image: 'https://via.placeholder.com/50', // replace with actual image URL
            rating: 5.00,
        },
        {
            id: 3,
            name: 'Spring Onions 1 Bunch',
            price: 25.00,
            image: 'https://via.placeholder.com/50', // replace with actual image URL
            rating: 5.00,
        },
    ];
    return (
        <Stack>
            <Stack display={'flex'} flexDirection={'column'} >
                <Heading fontSize={'40px'} fontWeight={'600'}>
                    Add New Offer
                </Heading>
                <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                    Here is the latest update...Check Now!
                </Text>
            </Stack>

            <Stack direction={'row'} gap={6} justifyContent={'space-between'}>
                <Stack width={'50%'} gap={3}>
                    <Box display={'flex'} gap={3}>
                        <FormControl>
                            <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Discount Rs.</FormLabel>
                            <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                        </FormControl>

                        <FormControl>
                            <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Discount %</FormLabel>
                            <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                        </FormControl>
                    </Box>
                    <Box display={'flex'} gap={3}>
                        <FormControl>
                            <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Choose Date</FormLabel>
                            <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="date" placeholder="Enter Your Name" />
                        </FormControl>

                        <FormControl>
                            <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Choose Time</FormLabel>
                            <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="time" placeholder="Enter Your Name" />
                        </FormControl>
                    </Box>
                    <FormControl>
                        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>No. of Users</FormLabel>
                        <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                    </FormControl>
                    <Box>
                        <Text fontSize={'22px'} fontWeight={'600'} mb={3} pl={1} >Choose Category</Text>

                        <Menu w='100%' h='62px'>
                            <MenuButton  background={'#F3F3F3'} textAlign={'left'} w='100%' h='50px' as={Button} rightIcon={<ChevronDownIcon />}>
                                Select Category
                            </MenuButton>
                            <MenuList w='800px !important' px={4} >
                                <Stack className="serch" background='#E3E3E3' borderRadius={'8px'} position={'relative'} w={'100%'} px={6}>
                                    <Input
                                        color={'#fff'}
                                        border={'0'}
                                        pl={12}
                                        type="text"
                                        w={'100%'}
                                        placeholder="Search here"
                                    />
                                    <Button
                                        mt={'0 !important'}
                                        position={'absolute'}
                                        top={'0'}
                                        bottom={'0'}
                                        bg={'transparent'}
                                        _hover={{ bg: 'transparent' }}
                                    >
                                        {' '}
                                        <Icon color={'#75767A'} as={FiSearch} />
                                    </Button>
                                </Stack>
                                <MenuItem my={2} display={'flex'} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'} minH='48px'>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src='https://placekitten.com/100/100' w='54px' h='51px' />
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
                                    <Stack flex={1}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack mt={3} >
                                        <Radio colorScheme='green' value='2'></Radio>
                                    </Stack>


                                </MenuItem>
                                <MenuItem my={2} display={'flex'} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'} minH='48px'>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src='https://placekitten.com/100/100' w='54px' h='51px' />
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
                                    <Stack flex={1}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack mt={3} >
                                        <Radio colorScheme='green' value='2'></Radio>
                                    </Stack>


                                </MenuItem>
                                <MenuItem my={2} display={'flex'} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'} minH='48px'>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src='https://placekitten.com/100/100' w='54px' h='51px' />
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
                                    <Stack flex={1}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack mt={3} >
                                        <Radio colorScheme='green' value='2'></Radio>
                                    </Stack>


                                </MenuItem>

                            </MenuList>

                        </Menu>
                    </Box>
                    <Box>
                        <Text fontSize={'22px'} fontWeight={'600'} mb={3} pl={1} >Sub Category</Text>

                        <Menu w='100%' h='62px'>
                            <MenuButton  background={'#F3F3F3'} textAlign={'left'} w='100%' h='50px' as={Button} rightIcon={<ChevronDownIcon />}>
                                Select Sub Category
                            </MenuButton>
                            <MenuList w='800px !important' px={4} >
                                <Stack className="serch" background='#E3E3E3' borderRadius={'8px'} position={'relative'} w={'100%'} px={6}>
                                    <Input
                                        color={'#fff'}
                                        border={'0'}
                                        pl={12}
                                        type="text"
                                        w={'100%'}
                                        placeholder="Search here"
                                    />
                                    <Button
                                        mt={'0 !important'}
                                        position={'absolute'}
                                        top={'0'}
                                        bottom={'0'}
                                        bg={'transparent'}
                                        _hover={{ bg: 'transparent' }}
                                    >
                                        {' '}
                                        <Icon color={'#75767A'} as={FiSearch} />
                                    </Button>
                                </Stack>
                                <MenuItem my={2} display={'flex'} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'} minH='48px'>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src='https://placekitten.com/100/100' w='54px' h='51px' />
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
                                    <Stack flex={1}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack mt={3} >
                                        <Radio colorScheme='green' value='2'></Radio>
                                    </Stack>


                                </MenuItem>
                                <MenuItem my={2} display={'flex'} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'} minH='48px'>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src='https://placekitten.com/100/100' w='54px' h='51px' />
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
                                    <Stack flex={1}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack mt={3} >
                                        <Radio colorScheme='green' value='2'></Radio>
                                    </Stack>


                                </MenuItem>
                                <MenuItem my={2} display={'flex'} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'} minH='48px'>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src='https://placekitten.com/100/100' w='54px' h='51px' />
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
                                    <Stack flex={1}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack mt={3} >
                                        <Radio colorScheme='green' value='2'></Radio>
                                    </Stack>


                                </MenuItem>

                            </MenuList>

                        </Menu>
                    </Box>
                    <Box>
                        <Text fontSize={'22px'} fontWeight={'600'} mb={3} pl={1} >Child Category</Text>

                        <Menu w='100%' h='62px'>
                            <MenuButton  background={'#F3F3F3'} textAlign={'left'} w='100%' h='50px' as={Button} rightIcon={<ChevronDownIcon />}>
                                Select Child Category
                            </MenuButton>
                            <MenuList w='800px !important' px={4} >
                                <Stack className="serch" background='#E3E3E3' borderRadius={'8px'} position={'relative'} w={'100%'} px={6}>
                                    <Input
                                        color={'#fff'}
                                        border={'0'}
                                        pl={12}
                                        type="text"
                                        w={'100%'}
                                        placeholder="Search here"
                                    />
                                    <Button
                                        mt={'0 !important'}
                                        position={'absolute'}
                                        top={'0'}
                                        bottom={'0'}
                                        bg={'transparent'}
                                        _hover={{ bg: 'transparent' }}
                                    >
                                        {' '}
                                        <Icon color={'#75767A'} as={FiSearch} />
                                    </Button>
                                </Stack>
                                <MenuItem my={2} display={'flex'} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'} minH='48px'>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src='https://placekitten.com/100/100' w='54px' h='51px' />
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
                                    <Stack flex={1}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack mt={3} >
                                        <Radio colorScheme='green' value='2'></Radio>
                                    </Stack>


                                </MenuItem>
                                <MenuItem my={2} display={'flex'} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'} minH='48px'>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src='https://placekitten.com/100/100' w='54px' h='51px' />
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
                                    <Stack flex={1}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack mt={3} >
                                        <Radio colorScheme='green' value='2'></Radio>
                                    </Stack>


                                </MenuItem>
                                <MenuItem my={2} display={'flex'} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'} minH='48px'>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src='https://placekitten.com/100/100' w='54px' h='51px' />
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
                                    <Stack flex={1}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack mt={3} >
                                        <Radio colorScheme='green' value='2'></Radio>
                                    </Stack>


                                </MenuItem>

                            </MenuList>

                        </Menu>
                    </Box>
                    <Box>
                        <Text fontSize={'22px'} fontWeight={'600'} mb={3} pl={1} >Choose Item</Text>

                        <Menu w='100%' h='62px'>
                            <MenuButton  background={'#F3F3F3'} textAlign={'left'} w='100%' h='50px' as={Button} rightIcon={<ChevronDownIcon />}>
                                Select Item
                            </MenuButton>
                            <MenuList w='800px !important' px={4} >
                                <Stack className="serch" background='#E3E3E3' borderRadius={'8px'} position={'relative'} w={'100%'} px={6}>
                                    <Input
                                        color={'#fff'}
                                        border={'0'}
                                        pl={12}
                                        type="text"
                                        w={'100%'}
                                        placeholder="Search here"
                                    />
                                    <Button
                                        mt={'0 !important'}
                                        position={'absolute'}
                                        top={'0'}
                                        bottom={'0'}
                                        bg={'transparent'}
                                        _hover={{ bg: 'transparent' }}
                                    >
                                        {' '}
                                        <Icon color={'#75767A'} as={FiSearch} />
                                    </Button>
                                </Stack>
                                <MenuItem my={2} display={'flex'} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'} minH='48px'>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src='https://placekitten.com/100/100' w='54px' h='51px' />
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
                                    <Stack flex={1}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack mt={3} >
                                        <Radio colorScheme='green' value='2'></Radio>
                                    </Stack>


                                </MenuItem>
                                <MenuItem my={2} display={'flex'} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'} minH='48px'>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src='https://placekitten.com/100/100' w='54px' h='51px' />
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
                                    <Stack flex={1}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack mt={3} >
                                        <Radio colorScheme='green' value='2'></Radio>
                                    </Stack>


                                </MenuItem>
                                <MenuItem my={2} display={'flex'} flexDirection={'row'} alignItems={'start'} justifyContent={'space-between'} minH='48px'>
                                    <Stack flex={2} direction={'row'} gap={2}>
                                        <Image src='https://placekitten.com/100/100' w='54px' h='51px' />
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
                                    <Stack flex={1}>
                                        <Text fontSize='16px' fontWeight={'500'}>Price</Text>
                                        <Text fontSize='16px' fontWeight={'700'} color='#007341' lineHeight={'0px'} >$25.00</Text>
                                    </Stack>
                                    <Stack mt={3} >
                                        <Radio colorScheme='green' value='2'></Radio>
                                    </Stack>


                                </MenuItem>

                            </MenuList>

                        </Menu>
                    </Box>
                    <Box my={4}>
                        <Button mb={2} bg={
                            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                        }
                        w='176px'
                        h='49px'
                        borderRadius={'9px'}
                        >Continue</Button>
                    </Box>


                </Stack>
                <Stack display={'flex'} alignItems={'end'} width={'50%'}>
                    <FormControl>
                        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Discount Rs.</FormLabel>
                        <Button border='1px dashed #75767A' w='80%' h='89px'>
                            Attach File
                        </Button>
                    </FormControl>
                </Stack>
            </Stack>


        </Stack>
    )
}

export default AddOffer