import { Box, Button, Grid, Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react'
import React,{useState} from 'react'
import TeamCard from '../Team/TeamCard'


export default function Userlist() {
  const [selectedService, setSelectedService] = useState('allUsers')
  const [data, setData] = useState({
    'allUsers': [
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
    'blockUsers': [
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
      <Stack display={'flex'} flexDirection={'column'} >
        <Heading fontSize={'40px'} fontWeight={'600'}>
          Users
        </Heading>
        <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
          Here is the latest update...Check Now!
        </Text>
      </Stack>

      <Stack
        direction={'row'}
        alignItems={'center'}
        gap={4}
        flexWrap={'wrap'}
      >
        <Button
          border={selectedService === 'allUsers' ? '2px solid #EAA13E' : '2px solid #07d57c'}
          padding={'10px 25px'}
          bg={
            selectedService === 'allUsers' ?
              'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
              : 'transparent'
          }
          width={'max-content'}
          onClick={() => setSelectedService('allUsers')}
        >
          All Users
        </Button>
        <Button
          border={selectedService === 'blockUsers' ? '2px solid #EAA13E' : '2px solid #07d57c'}
          padding={'10px 25px'}
          bg={
            selectedService === 'blockUsers' ?
              'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
              : 'transparent'
          }
          width={'max-content'}
          onClick={() => setSelectedService('blockUsers')}

        >
          Block Users
        </Button>

      </Stack>
      <Text fontSize={'18px'} fontWeight={'500'} py={2}>You've {data?.[selectedService]?.length} users</Text>

      <TeamCard selectedService={selectedService} data={data?.[selectedService]} />
    </Stack>
  )
}
