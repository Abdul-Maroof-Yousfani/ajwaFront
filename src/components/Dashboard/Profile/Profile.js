import React from 'react'
import { Box, Button, Grid, Heading, Icon, Stack, Text, HStack, Avatar, VStack, FormControl, Input, FormLabel, useDisclosure } from '@chakra-ui/react'
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

function Profile() {
    const { onClose, isOpen, onOpen } = useDisclosure()
    return (
        <Stack px={6} display={'flex'} flexDirection={'column'} gap={3}>


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
            />
            <Stack display={'flex'} flexDirection={'column'} >
                <Heading fontSize={'40px'} fontWeight={'600'}>
                    My Profile
                </Heading>
                <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                    Here is the latest update...Check Now!
                </Text>
            </Stack>
            <HStack pt={4} gap={2}>
                <Avatar w='121px' h='121px' name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <VStack>
                    <Button bg={
                        'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                    }
                        color={'#fff'}
                        fontWeight={'500'}
                        lineHeight={'inherit'}
                        borderRadius={8}
                        w='142px'

                        _hover={{
                            color: '#000',
                        }}>Change Photo</Button>
                    <Button
                        w='142px'

                        border={'2px solid #07d57c'}
                        bg={'transparent'}
                        borderRadius={8}

                        _hover={{
                            color: '#000',
                        }}>Remove Photo</Button>
                </VStack>
            </HStack>

            <Box>
                <form>
                    <Box display={'flex'} gap={6} pb={3}>
                        <FormControl>
                            <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Full Name</FormLabel>
                            <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                        </FormControl>

                        <FormControl>
                            <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Email Address</FormLabel>
                            <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                        </FormControl>
                    </Box>
                    <Box display={'flex'} gap={6}>
                        <FormControl>
                            <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Phone No.</FormLabel>
                            <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                        </FormControl>

                        <FormControl display={'flex'} justifyContent={'flex-end'} alignItems={'end'}>
                            <Button
                                w='max-content'

                                border={'2px solid #1A1B1A'}
                                bg={'transparent'}
                                borderRadius={8}
                                onClick={onOpen}

                                _hover={{
                                    color: '#000',
                                }}>Change Password</Button>

                        </FormControl>
                    </Box>

                </form>
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
    )
}

export default Profile