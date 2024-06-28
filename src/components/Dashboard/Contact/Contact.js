import React from 'react'
import { Box, Button, Grid, Heading, Icon, Stack, Text, } from '@chakra-ui/react'
import { LuUser } from "react-icons/lu";
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <Stack>
            <Stack display={'flex'} flexDirection={'column'} >
                <Heading fontSize={'40px'} fontWeight={'600'}>
                    Contact Inquiries
                </Heading>
                <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                    Here is the latest update...Check Now!
                </Text>
            </Stack>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} py={4}>
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
                            <Box display={'flex'} flexDirection={'column'} gap={1}>
                                <Heading fontSize={'16px'} color='#007341' fontWeight={'700'}>
                                    John Doe
                                </Heading>
                                <Text fontSize={'14px'} color='#989BA2'>johndo53@gmail.com</Text>
                            </Box>
                        </Stack>
                        <Stack alignItems={'end'} justifyContent={'center'}>
                            <Button
                                as={Link}
                                to={'/contact-detail'}
                                border={'2px solid #07d57c'}
                                padding={'10px 25px'}
                                bg={'transparent'}
                                width={'max-content'}
                            >
                                View Inquiry
                            </Button>
                        </Stack>
                    </Box>
                    <Text fontSize={'17px'} fontWeight={500}>Received Date: 4/25/2024 - 3 PM</Text>
                </Stack>

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
                            <Box display={'flex'} flexDirection={'column'} gap={1}>
                                <Heading fontSize={'16px'} color='#007341' fontWeight={'700'}>
                                    John Doe
                                </Heading>
                                <Text fontSize={'14px'} color='#989BA2'>johndo53@gmail.com</Text>
                            </Box>
                        </Stack>
                        <Stack alignItems={'end'} justifyContent={'center'}>
                            <Button
                                as={Link}
                                to={'/contact-detail'}
                                border={'2px solid #07d57c'}
                                padding={'10px 25px'}
                                bg={'transparent'}
                                width={'max-content'}
                            >
                                View Inquiry
                            </Button>
                        </Stack>
                    </Box>
                    <Text fontSize={'17px'} fontWeight={500}>Received Date: 4/25/2024 - 3 PM</Text>
                </Stack>

            </Grid>
        </Stack>
    )
}

export default Contact