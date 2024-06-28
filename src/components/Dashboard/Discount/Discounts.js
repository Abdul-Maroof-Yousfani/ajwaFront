import { Box, Button, Grid, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { LuUser } from "react-icons/lu";
import { Link } from 'react-router-dom';

function Discounts() {
  return (
    <Stack px={6} py={2}>
    <Stack mb={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
      <Stack display={'flex'} flexDirection={'column'} >
        <Heading fontSize={'40px'} fontWeight={'600'}>
        Discounts
        </Heading>
        <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
        Here is the all discounts...Check Now!
        </Text>
        <Text fontSize={'18px'} color={'#1B1C1D'} fontWeight={'500'}>You’ve 2 discounts</Text>
      </Stack>
      <Button padding={'10px 50px'}
      as={Link}
      to={'/dashboard/add-discount'}
        bg={
          'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
        }
        color={'#fff'}
        fontWeight={'500'}
        lineHeight={'inherit'}
        borderRadius={12}
        _hover={{
          color: '#000',
        }}>
          Add New Discounts
      </Button>
    </Stack>
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
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
            <Box>
              <Heading fontSize={'16px'} fontWeight={'700'} color={'#007341'} lineHeight={'1.6rem'}>
                Big Sale
              </Heading>
              <Text color={'#989BA2'} fontSize={'14px'} fontWeight={'400'}>2 hours ago</Text>
            </Box>
          </Stack>
          <Stack alignItems={'end'} justifyContent={'center'}>
            <Button
              as={Link}
              to={'/dashboard/discount-detail'}
              border={'2px solid #07d57c'}
              padding={'10px 25px'}
              bg={'transparent'}
              // width={'max-content'}
              width={'133px'}
              borderRadius={'10px'}
            >
              View Details
            </Button>
          </Stack>
        </Box>
        <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Stack display={'flex'} flexDirection={'column'}>
            <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>Discount</Text>
            <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>10% off</Text>
          </Stack>
          <Stack display={'flex'} flexDirection={'column'}>
            <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>No. of Users</Text>
            <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>25</Text>
          </Stack>
          <Stack display={'flex'} flexDirection={'column'}>
            <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>Availability</Text>
            <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>10 days</Text>
          </Stack>
        </Stack>
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
            <Box>
              <Heading fontSize={'16px'} fontWeight={'700'} color={'#007341'} lineHeight={'1.6rem'}>
                Grab this Deal
              </Heading>
              <Text color={'#989BA2'} fontSize={'14px'} fontWeight={'400'}>2 days ago</Text>
            </Box>
          </Stack>
          <Stack alignItems={'end'} justifyContent={'center'}>
            <Button
               as={Link}
               to={'/dashboard/discount-detail'}
              border={'2px solid #07d57c'}
              padding={'10px 25px'}
              bg={'transparent'}
              // width={'max-content'}
              width={'133px'}
              borderRadius={'10px'}
            >
              View Details
            </Button>
          </Stack>
        </Box>
        <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Stack display={'flex'} flexDirection={'column'}>
            <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>Discount</Text>
            <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>10% off</Text>
          </Stack>
          <Stack display={'flex'} flexDirection={'column'}>
            <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>No. of Users</Text>
            <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>25</Text>
          </Stack>
          <Stack display={'flex'} flexDirection={'column'}>
            <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>Availability</Text>
            <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>10 days</Text>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  </Stack>
  )
}

export default Discounts