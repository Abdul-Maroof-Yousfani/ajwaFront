import React, { useState } from 'react'
import {
    Stack,
    Heading,
    Text,
    HStack,
    Box, VStack, Avatar, Button, AvatarGroup, AvatarBadge,
    GridItem
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function SellingItems() {
    return (
        <Stack>
            <Stack display={'flex'} flexDirection={'column'} >
                <Heading fontSize={'40px'} fontWeight={'600'}>
                    Most Selling Items
                </Heading>
                <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                    Here is the your most selling items...Check Now!
                </Text>
            </Stack>
            <Box >

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
                            Item Sold
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            Item Name
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            Category
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            Users
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            More Info
                        </Box>
                    </HStack>
                    {[1, 2, 3, 4, 5]?.map((item, index) => (
                        <HStack
                            display={'flex'}
                            w="100%"
                            key={index}
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
                                11 Times
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
                                fontSize="18px"
                                fontWeight={'600'}
                                color="#1B1C1D"
                                flex={1}
                            >
                                Fresh Fruits
                            </Box>
                            <Box
                                fontSize="18px"
                                fontWeight={'600'}
                                color="#1B1C1D"
                                flex={1}
                            >
                                <AvatarGroup size='md' max={3}>
                                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                </AvatarGroup>
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
                    ))}


                </Stack>

            </Box>
        </Stack>
    )
}

export default SellingItems