import React, { useState } from 'react'
import { Box, Button, Grid, Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import TeamCard from './TeamCard'
import { Link } from 'react-router-dom'


function Team() {
  const [selectedService, setSelectedService] = useState('allMember')
  const [data, setData] = useState({
    'allMember': [
      {
        name: 'Ahmed Khan',
        email: "ahmedkhan53@gmail.com",
        userId: '64f43',
        storeManager: 'Ajwa Mart Grocery',
        memberSince: '28/4/2024',
        totalItems: '57',
        totalCategories: '11'
      },
      {
        name: 'Arham Khan',
        email: "arhamkhancs99@gmail.com",
        userId: '64f43',
        storeManager: 'Ajwa Mart Grocery',
        memberSince: '28/4/2024',
        totalItems: '57',
        totalCategories: '11'
      }
    ],
    'blockMember': [
      {
        name: 'Ahmed Khan',
        email: "ahmedkhan53@gmail.com",
        userId: '64f43',
        storeManager: 'Ajwa Mart Grocery',
        memberSince: '28/4/2024',
        totalItems: '57',
        totalCategories: '11'
      },
      {
        name: 'Arham Khan',
        email: "arhamkhancs99@gmail.com",
        userId: '64f43',
        storeManager: 'Ajwa Mart Grocery',
        memberSince: '28/4/2024',
        totalItems: '57',
        totalCategories: '11'
      }
    ],
  })
  return (
    <Stack px={6} py={4}>
      <Stack mb={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
        <Stack display={'flex'} flexDirection={'column'} >
          <Heading fontSize={'40px'} fontWeight={'600'}>
            Team Members
          </Heading>
          <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
            Here is the latest update...Check Now!
          </Text>
        </Stack>
        <Button padding={'10px 50px'}
          bg={
            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
          }
          as={Link}
          to={'/dashboard/add-new-member'}
          color={'#fff'}
          fontWeight={'500'}
          lineHeight={'inherit'}
          borderRadius={12}
          _hover={{
            color: '#000',
          }}>
          Add New Member
        </Button>
      </Stack>
      <Stack
        direction={'row'}
        alignItems={'center'}
        gap={4}
        flexWrap={'wrap'}
      >
        <Button
          border={selectedService === 'allMember' ? '2px solid #EAA13E' : '2px solid #07d57c'}
          padding={'10px 25px'}
          bg={
            selectedService === 'allMember' ?
              'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
              : 'transparent'
          }
          width={'max-content'}
          onClick={() => setSelectedService('allMember')}
        >
          All Team Members
        </Button>
        <Button
          border={selectedService === 'blockMember' ? '2px solid #EAA13E' : '2px solid #07d57c'}
          padding={'10px 25px'}
          bg={
            selectedService === 'blockMember' ?
              'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
              : 'transparent'
          }
          width={'max-content'}
          onClick={() => setSelectedService('blockMember')}

        >
          Block Team Members
        </Button>

      </Stack>
      <Text fontSize={'18px'} fontWeight={'500'} py={2}>You've 2 team members</Text>

      <TeamCard selectedService={selectedService} data={data?.[selectedService]} />
    </Stack>
  )
}

export default Team