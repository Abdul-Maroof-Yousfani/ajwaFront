import { Stack } from '@chakra-ui/react';
import { useEffect, React } from 'react';
import { useLocation } from 'react-router';
import Sidenav from './Sidenav';
import Topnav from './Topnav';

export default function MainDashboard({ children }) {
  return (
    <>
      <Stack
        bg={'#FBFBFB'}
        direction={'row'}
        gap={{ base: '3', md: '12' }}
        overflow={{ base: 'hidden', md: 'initial' }}
      >
        <Stack>
          <Sidenav />
        </Stack>
        <Stack  w={'100%'}>
          <Topnav />
          {children}
        </Stack>
      </Stack>
    </>
  );
}
