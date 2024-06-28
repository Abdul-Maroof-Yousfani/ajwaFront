import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function InquiriesUserDetails() {
  return (
    <Stack gap={6} px={4} pb={6}>
      <Stack>
        <Heading fontSize={'30px'} fontWeight={'700'}>
        Inquiry Details
        </Heading>
        <Text fontSize={'15px'} color={'#1A1B1A'} fontWeight={'400'}>
          Here is the all user details...Check Now!
        </Text>
      </Stack>
      <Stack gap={4}>
        <Stack  width={'30%'}>
          <Heading fontSize={'16px'}>Name</Heading>
          <Box borderRadius={6} py={4} px={3} border={'1px solid #e5e4e4'} bg={'#F8F8F8'}>
            <Text>John</Text>
          </Box>
        </Stack>
        <Stack  width={'30%'}>
          <Heading fontSize={'16px'}>Email Address</Heading>
          <Box borderRadius={6} py={4} px={3} border={'1px solid #e5e4e4'} bg={'#F8F8F8'}>
            <Text>johndoe534@gmail.com</Text>
          </Box>
        </Stack>
        <Stack  width={'30%'}>
          <Heading fontSize={'16px'}>Phone No.</Heading>
          <Box borderRadius={6} py={4} px={3} border={'1px solid #e5e4e4'} bg={'#F8F8F8'}>
            <Text>+(966) 763 282 46</Text>
          </Box>
        </Stack>
        <Stack  width={'30%'}>
          <Heading fontSize={'16px'}>Message</Heading>
          <Box borderRadius={6} py={4} px={3} border={'1px solid #e5e4e4'} bg={'#F8F8F8'}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
          </Box>
        </Stack>
      </Stack>
      </Stack>
  )
}
