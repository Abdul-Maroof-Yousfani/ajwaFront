import React from 'react'
import {
    Stack,
    Heading,
    Text,
    Box,
    Grid,
    GridItem,
    IconButton,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Button,

    VStack,

    useDisclosure,

    Divider,
    Avatar,
    Image, Radio
} from '@chakra-ui/react';
import Permission from './Permission'

function AddNewMember() {
    return (
        <Stack px={6} display={'flex'} flexDirection={'column'} gap={4}>

            <Stack display={'flex'} flexDirection={'column'} >
                <Heading fontSize={'40px'} fontWeight={'600'}>
                    Add New Team Member
                </Heading>
                <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                    Here is the details to add new manager...Check Now!
                </Text>
            </Stack>
            <Stack display={'flex'} flexDirection={'row'} gap={4} alignItems={'center'}>
                <Avatar w='121px' h='121px' src='https://bit.ly/broken-link' />

                <Button padding={'10px 50px'}
                    bg={
                        'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                    }
                    color={'#fff'}
                    fontWeight={'500'}
                    lineHeight={'inherit'}
                    borderRadius={12}
                    w='140px'
                    _hover={{
                        color: '#000',
                    }}>
                    Uplaod Photo
                </Button>


            </Stack>
            <Stack>
                <Box display={'flex'} gap={4}>
                    <FormControl>
                        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Full Name</FormLabel>
                        <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                    </FormControl>

                    <FormControl>
                        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Email Address</FormLabel>
                        <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                    </FormControl>
                </Box>
                <Box display={'flex'} gap={4}>
                    <FormControl>
                        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Phone No.</FormLabel>
                        <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                    </FormControl>

                    <FormControl>
                        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Choose Store</FormLabel>
                        <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                    </FormControl>
                </Box>
                <Box display={'flex'} w='49.5%' gap={4}>
                    <FormControl>
                        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Password</FormLabel>
                        <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                    </FormControl>


                </Box>

            </Stack>
            <Stack py={4}>
                <Permission />

            </Stack>
        </Stack>
    )
}

export default AddNewMember