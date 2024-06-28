import React, { useState } from 'react'
import {
    Box, Button, Grid, HStack, Heading, Avatar, Icon, Stack, Input, Text, FormLabel,
    FormControl, Checkbox, VStack, useDisclosure
} from '@chakra-ui/react'
import ModalWrapper from '../../Modal'


function ChangePassword() {
    return (
        <Stack display={'flex'} flexDirection={'column'} gap={3}>
            <FormControl>
                <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>New Password</FormLabel>
                <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
            </FormControl>
            <FormControl>
                <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Confirm Password</FormLabel>
                <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
            </FormControl>
            <Stack py={3} >
                <Button padding={'10px 50px'}
                    bg={
                        'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                    }
                    color={'#fff'}
                    fontWeight={'500'}
                    lineHeight={'inherit'}
                    borderRadius={12}
                    h='45px'
                    _hover={{
                        color: '#000',
                    }}>
                    Continue
                </Button>
            </Stack>


        </Stack>
    )

}
function Account() {
    const { onClose, isOpen, onOpen } = useDisclosure()
    return (
        <>
            <ModalWrapper
                isOpen={isOpen}
                onClose={onClose}
                title={'Change Password'}
                // subTitle={'You want to “Unblock” this user?'}
                children={
                    // <RemoveService
                    //     idToUnblock={idToUnblock}
                    //     onClose={onClose}
                    //     fetchBlockUsers={fetchBlockUsers}
                    // />
                    <ChangePassword />
                }
                size={'lg'}
                isCentered={true}
            />s

            <Text fontSize={'18px'} fontWeight={500}>Account Settings</Text>
            <Stack >
                <HStack gap={2}>
                    <Avatar w='121px' h='121px' name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                    <VStack>
                        <Button bg={
                            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                        }
                            color={'#fff'}
                            fontWeight={'500'}
                            lineHeight={'inherit'}
                            borderRadius={12}
                            w='142px'

                            _hover={{
                                color: '#000',
                            }}>Change Photo</Button>
                        <Button
                            border={'2px solid #07d57c'}
                            bg={'transparent'}
                            borderRadius={12}
                            w='142px'
                            _hover={{
                                color: '#000',
                            }}>Remove Photo</Button>
                    </VStack>
                </HStack>
                <Stack width={'100%'} gap={6} pt={4}>
                    <Box display={'flex'} gap={3}>
                        <FormControl>
                            <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Full Name</FormLabel>
                            <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                        </FormControl>

                        <FormControl>
                            <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Email Address</FormLabel>
                            <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                        </FormControl>
                    </Box>
                    <Box display={'flex'} gap={3}>
                        <FormControl>
                            <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Phone No.</FormLabel>
                            <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                        </FormControl>

                        <FormControl>
                            <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Store Branch</FormLabel>
                            <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                        </FormControl>
                    </Box>
                    <Box display={'flex'} gap={3} alignItems={'end'}>
                        <Stack w='50%'>

                            <Box h='60px' border={'1px solid #B4B4B4'} borderRadius={'8px'} background={'#F3F3F3'} >
                                <Stack px={4} h='60px' direction={'row'} alignItems={'center'} justifyContent={'space-between'} >
                                    <HStack >
                                        <Avatar w='39px' h='39px' name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                                        <Text fontSize={'18px'} fontWeight={500}>Hammad Hussain</Text>
                                    </HStack>
                                    <Button
                                        border={'1px solid #1A1B1A'}
                                        padding={'10px 25px'}
                                        bg={'transparent'}
                                        width={'max-content'}
                                    >
                                        Remove
                                    </Button>
                                </Stack>

                            </Box>
                        </Stack>

                        <Stack w='50%' display={'flex'} justifyContent={'end'} alignItems={'end'}>
                            <Button
                                w='max-content'

                                border={'2px solid #1A1B1A'}
                                bg={'transparent'}
                                borderRadius={8}
                                onClick={onOpen}

                                _hover={{
                                    color: '#000',
                                }}>Change Password</Button>

                        </Stack>

                    </Box>

                    <Button padding={'10px 50px'}
                        bg={
                            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                        }
                        color={'#fff'}
                        fontWeight={'500'}
                        lineHeight={'inherit'}
                        borderRadius={12}
                        w='176px'
                        _hover={{
                            color: '#000',
                        }}>
                        Save Changes
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}

export default Account