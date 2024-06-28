import React, { useState } from 'react'
import {
    Box, Button, Grid, HStack, Heading, Avatar, Icon, Stack, Input, Text, FormLabel,
    FormControl, Checkbox, VStack
} from '@chakra-ui/react'
import Account from './Account'
import Permission from './Permission'
import Activity from './Activity'



function MemberDetail() {
    const [selectedService, setSelectedService] = useState('permission')
    return (
        <Stack px={6} display={'flex'} flexDirection={'column'} gap={1}>
            <Stack mb={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                <Stack display={'flex'} flexDirection={'column'} >
                    <Heading fontSize={'40px'} fontWeight={'600'}>
                        Team Member Details
                    </Heading>
                    <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                        Here is the latest update...Check Now!
                    </Text>
                </Stack>
               
            </Stack>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Stack>
                    <HStack>
                        <Avatar w='87px' h='87px' name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                        <Stack>
                            <Text color={'#007341'} fontSize={'24px'} fontWeight={'700'}>Hammad Hussain</Text>
                            <Text lineHeight={'0'} fontSize={'18px'} color='#989BA2'>#545061</Text>
                        </Stack>
                    </HStack>
                </Stack>
                <Stack>
                    <Text fontSize={'16px'} fontWeight={500}>Email Address</Text>
                    <Text lineHeight={'0.6'} fontSize={'17px'} fontWeight={700}>hammadhh1@gmail.com</Text>
                </Stack>
                <Stack>
                    <Text fontSize={'16px'} fontWeight={500}>Store Manager</Text>
                    <Text lineHeight={'0.6'} fontSize={'17px'} fontWeight={700}>AJWA Mart Grocery</Text>
                </Stack>
                <Stack>
                    <Text fontSize={'16px'} fontWeight={500}>Member Since</Text>
                    <Text lineHeight={'0.6'} fontSize={'17px'} fontWeight={700}>3/19/2024</Text>
                </Stack>
                <Stack>
                    <Button background={'#E94646'} w='135px' h='40px' borderRadius={'9px'}>Block</Button>
                </Stack>
            </Stack>

            <Stack
                direction={'row'}
                alignItems={'center'}
                gap={4}
                flexWrap={'wrap'}
                py={4}
            >

                <Button
                    border={selectedService === 'permission' ? '2px solid #EAA13E' : '2px solid #07d57c'}
                    padding={'10px 25px'}
                    bg={
                        selectedService === 'permission' ?
                            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                            : 'transparent'
                    }
                    width={'max-content'}
                    onClick={() => setSelectedService('permission')}
                >
                    Permission Settings
                </Button>
                <Button
                    border={selectedService === 'account' ? '2px solid #EAA13E' : '2px solid #07d57c'}
                    padding={'10px 25px'}
                    bg={
                        selectedService === 'account' ?
                            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                            : 'transparent'
                    }
                    width={'max-content'}
                    onClick={() => setSelectedService('account')}
                >
                    Account Settings
                </Button>

                <Button
                    border={selectedService === 'activity' ? '2px solid #EAA13E' : '2px solid #07d57c'}
                    padding={'10px 25px'}
                    bg={
                        selectedService === 'activity' ?
                            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                            : 'transparent'
                    }
                    width={'max-content'}
                    onClick={() => setSelectedService('activity')}
                >
                    Activity Logs
                </Button>


            </Stack>

            {selectedService === 'permission' ? <Permission /> : selectedService === 'account' ? <Account /> : <Activity />}



        </Stack>
    )
}

export default MemberDetail