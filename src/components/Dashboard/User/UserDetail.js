import {
  Avatar,
  Box,
  Button,
  Heading,

  Stack,
  Text,

} from '@chakra-ui/react';
import React, { useState } from 'react';
import PurchasedHistory from './PurchasedHistory';
import Bounus from './Bounus';
import Activity from './Activity';


export default function UserDetail() {
  const [selectedService, setSelectedService] = useState('history')
  return (
    <Stack gap={6} pb={6}>
      <Stack>
        <Heading fontSize={'30px'} fontWeight={'700'}>
          Users Details
        </Heading>
        <Text fontSize={'15px'} color={'#1A1B1A'} fontWeight={'400'}>
          Here is the all user details...Check Now!
        </Text>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} gap={24} flexWrap={'wrap'}>
        <Box display={'flex'} gap={2} alignItems={'center'}>
          <Avatar
            size="lg"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Box>
            <Heading color={'#007341'} fontSize={'20px'}>
              John Doe
            </Heading>
            <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
              #545061
            </Text>
          </Box>
        </Box>
        <Box>
          <Heading color={'#007341'} fontSize={'16px'}>
            Email Address
          </Heading>
          <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
            johndoe423@gmail.com
          </Text>
        </Box>
        <Box>
          <Heading color={'#007341'} fontSize={'16px'}>
            Phone No.
          </Heading>
          <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
            +92 3312457180
          </Text>
        </Box>
        <Box>
          <Heading color={'#007341'} fontSize={'16px'}>
            Member Since
          </Heading>
          <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
            3/19/2024
          </Text>
        </Box>
        <Button bg={'#E94646'} color={'#fff'} padding={'15px 45px'}>
          Block
        </Button>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} gap={4} flexWrap={'wrap'}>
        <Button
          border={selectedService === 'history' ? '2px solid #EAA13E' : '2px solid #07d57c'}
          padding={'10px 25px'}
          bg={
            selectedService === 'history' ?
              'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
              : 'transparent'
          }
          width={'max-content'}
          onClick={() => setSelectedService('history')}
        >
          Purchased History
        </Button>
        <Button
          border={selectedService === 'bonus' ? '2px solid #EAA13E' : '2px solid #07d57c'}
          padding={'10px 25px'}
          bg={
            selectedService === 'bonus' ?
              'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
              : 'transparent'
          }
          width={'max-content'}
          onClick={() => setSelectedService('bonus')}
        >
          Bonus Card
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

      {selectedService === 'history' ? <PurchasedHistory /> : selectedService === 'bonus' ? <Bounus /> : <Activity />}


    </Stack>
  );
}
