import React from 'react'
import {
    Box, Button, Grid, Heading, Icon, Stack, Text, FormLabel,
    FormControl, Input,
    Textarea
} from '@chakra-ui/react'


function ContactDetail() {
    return (
        <Stack>
            <Stack display={'flex'} flexDirection={'column'} >
                <Heading fontSize={'40px'} fontWeight={'600'}>
                    Inquiry Details
                </Heading>
                <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                    Here is the all discounts...Check Now!
                </Text>
            </Stack>

            <form >
                <FormControl w='50%' py={2}>
                    <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Name</FormLabel>
                    <Input value={'John'} background={'#F3F3F3'} color={'#1A1B1A'} fontWeight={600} fontSize={'18px'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                </FormControl>
                <FormControl w='50%' py={2}>
                    <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Email</FormLabel>
                    <Input value={'johndoe534@gmail.com'} background={'#F3F3F3'} color={'#1A1B1A'} fontWeight={600} fontSize={'18px'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                </FormControl>
                <FormControl w='50%' py={2}>
                    <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Phone No.</FormLabel>
                    <Input value={'+(966) 763 282 46'} background={'#F3F3F3'} color={'#1A1B1A'} fontWeight={600} fontSize={'18px'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
                </FormControl>

                <FormControl w='50%' py={2}>
                    <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Message</FormLabel>
                    {/* <Input value={'+(966) 763 282 46'} background={'#F3F3F3'} color={'#1A1B1A'} fontWeight={600} fontSize={'18px'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" /> */}
                    <Textarea rows={3} background={'#F3F3F3'} color={'#1A1B1A'} fontWeight={600} fontSize={'18px'} border={'1px solid #B4B4B4'} resize={'none'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Textarea>
                </FormControl>



            </form>


        </Stack>
    )
}

export default ContactDetail