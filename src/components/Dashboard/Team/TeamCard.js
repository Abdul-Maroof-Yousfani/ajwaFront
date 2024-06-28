import { Box, Button, Grid, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { LuUser } from "react-icons/lu";
import { Link } from 'react-router-dom';
function TeamCard({ data, selectedService }) {
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {data?.length > 0 ? data?.map((item) => (
                <Stack gap={2}

                    shadow={'0px 16.32px 38.75px 0px #0000000F'}
                    borderRadius={'17px'}
                    p={{ base: '15px 20px', xl: '25px 40px' }}
                    role="group"
                    transition={'0.3s'}
                    _hover={{
                        borderColor: 'primaryGreen.200',
                    }}
                >
                    <Stack display={'flex'} justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'}>
                        <Text fontSize={'17px'} fontWeight={500}>User ID. {item?.userId}</Text>
                        {(selectedService == 'allUsers' || selectedService !== 'blockUsers') && (
                            <Text margin={'0 !important'} fontSize={'17px'} fontWeight={500}>Store Manager: <span textDecoration='underline'>{item?.storeManager}</span> </Text>
                        )}
                    </Stack>
                    <Box display={'flex'} justifyContent={'space-between'}>

                        <Stack direction={'row'} gap={2} alignItems={'center'}>
                            <Box
                                w={'67px'}
                                h={'67px'}
                                bg={'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '}
                                display={'flex'}
                                alignItems={'center'}
                                transition={'0.3s'}
                                borderRadius={'12px'}
                                mb="5px"
                                justifyContent={'center'}
                                _groupHover={{
                                    bgColor: 'primaryGreen.200',
                                }}
                            >
                                <Icon
                                    _groupHover={{
                                        color: '#fff',
                                    }}
                                    transition={'0.3s'}
                                    fontSize={'30px'}
                                    as={LuUser}
                                />
                            </Box>
                            <Box>
                                <Heading fontSize={'16px'} fontWeight={'700'} color={'#007341'} lineHeight={'1.6rem'}>
                                    {item?.name}
                                </Heading>
                                <Text color={'#989BA2'} fontSize={'14px'} fontWeight={'400'}>{item?.email}</Text>
                            </Box>
                        </Stack>
                        <HStack >
                            <Button
                                as={Link}
                                to={`/dashboard/${selectedService === 'allUsers' || selectedService === 'blockUsers' ? 'userDetails' : 'team-detail'}`}
                                // to={'/dashboard/userDetails'}
                                border={'2px solid #07d57c'}
                                padding={'10px 25px'}
                                bg={'transparent'}
                                // width={'max-content'}
                                width={'133px'}
                                borderRadius={'10px'}
                            >
                                View Details
                            </Button>
                            {((selectedService === 'blockMember') || (selectedService === 'blockUsers')) ? (
                                <Button
                                    // as={Link}
                                    // to={'/dashboard/userDetails'}
                                    border={'2px solid #E94646'}
                                    padding={'10px 25px'}
                                    bg={'#E94646'}
                                    // width={'max-content'}
                                    width={'133px'}
                                    borderRadius={'10px'}
                                >
                                    Unblock
                                </Button>


                            ) : null}

                        </HStack>
                    </Box>
                    {selectedService === 'allUsers' || selectedService === 'blockUsers' ?


                        <Text fontSize={'17px'} fontWeight={500}>Registered Date: 4/25/2024</Text>
                        :
                        <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                            <Stack display={'flex'} flexDirection={'column'}>
                                <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>Member Since</Text>
                                <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>{item?.memberSince}</Text>
                            </Stack>
                            <Stack display={'flex'} flexDirection={'column'}>
                                <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>Total Items</Text>
                                <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>{item?.totalItems}</Text>
                            </Stack>
                            <Stack display={'flex'} flexDirection={'column'}>
                                <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>Total Categories</Text>
                                <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>{item?.totalCategories}</Text>
                            </Stack>
                        </Stack>
                    }

                </Stack>
            )) : <Heading>No Data Available</Heading>}

        </Grid>
    )
}

export default TeamCard