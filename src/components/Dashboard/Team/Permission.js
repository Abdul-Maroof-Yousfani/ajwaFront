import React, { useState } from 'react'
import {
    Box, Button, Grid, HStack, Heading, Avatar, Icon, Stack, Input, Text, FormLabel,
    FormControl, Checkbox, VStack
} from '@chakra-ui/react'

function Permission() {
    const data = ['Home', 'Stores', 'Products', 'Users', 'Discounts', 'Delivery Fee', 'Offers', 'Report Analytics', 'Contact Inquires']
    return (
        <Stack display={'flex'} flexDirection={'column'} gap={3}>
            <Text fontSize={'18px'} fontWeight={500}>Permission Settings</Text>
            <Stack display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={4} justifyContent={'space-between'} alignItems={'center'}>
                {data?.map((item) => (
                    <Box w='30% ' h='62px' border={'1px solid #B4B4B4'} borderRadius={'8px'} background={'#F3F3F3'} >
                        <Stack direction={'row'} justifyContent={'space-between'} p={4}>
                            <Text color={'#007341'} fontSize={'18px'} fontWeight={500}>{item}</Text>
                            <Checkbox colorScheme='green' defaultChecked></Checkbox>
                        </Stack>
                    </Box>
                ))}

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

    )
}

export default Permission