import {
  Box,
  Button,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { LuUser } from 'react-icons/lu';

export default function InquiriesList() {
  return (
    <Stack gap={6} px={4} pb={6}>
      <Stack>
        <Heading fontSize={'30px'} fontWeight={'700'}>
          Contact Inquiries
        </Heading>
        <Text fontSize={'15px'} color={'#1A1B1A'} fontWeight={'400'}>
          Here is the all user details...Check Now!
        </Text>
      </Stack>
      <Stack>
        <Text fontSize={'15px'} color={'#1A1B1A'} fontWeight={'600'}>
          You’ve 7 inquiries
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <Stack
            gap={2}
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
                  w={'54px'}
                  h={'54px'}
                  bg={
                    'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                  }
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
                  <Heading fontSize={'18px'} fontWeight={'500'}>
                    John Doe
                  </Heading>
                  <Text>johndo53@gmail.com</Text>
                </Box>
              </Stack>
              <Stack alignItems={'end'} justifyContent={'center'}>
                <Button
                  as={Link}
                  to={'/dashboard/inquiriesdetails'}
                  border={'2px solid #07d57c'}
                  padding={'10px 25px'}
                  bg={'transparent'}
                  width={'max-content'}
                >
                  View Inquiry
                </Button>
              </Stack>
            </Box>
            <Text>Registered Date: 4/25/2024</Text>
          </Stack>
          <Stack
            gap={2}
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
                  w={'54px'}
                  h={'54px'}
                  bg={
                    'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                  }
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
                  <Heading fontSize={'18px'} fontWeight={'500'}>
                    John Doe
                  </Heading>
                  <Text>johndo53@gmail.com</Text>
                </Box>
              </Stack>
              <Stack alignItems={'end'} justifyContent={'center'}>
                <Button
                  as={Link}
                  to={'/dashboard/inquiriesdetails'}
                  border={'2px solid #07d57c'}
                  padding={'10px 25px'}
                  bg={'transparent'}
                  width={'max-content'}
                >
                  View Inquiry
                </Button>
              </Stack>
            </Box>
            <Text>Registered Date: 4/25/2024</Text>
          </Stack>
        </Grid>
      </Stack>
    </Stack>
  );
}
