import {
  Button,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import StoreCard from './StoreCard';

const Store = () => {
  const storeData = [
    {
      storeName: 'Ajwa Store',
      storeLogo: '',
      storeId: 'dd442Qs',
      registrationDate: '2/28/24',
      totalItems: 51,
      totalCategories: 8,
      address:
        'Plot #28C Khayaban-e-Bahria, D.H.A. Phase 4 Phase 4 Defence Housing Authority, Karachi,',
    },
    {
      storeName: 'SuperMart',
      storeLogo: '',
      storeId: 'ab123Cd',
      registrationDate: '3/15/24',
      totalItems: 100,
      totalCategories: 12,
      address: '123 Main Street, Anytown, USA',
    },
    {
      storeName: 'MegaStore',
      storeLogo: '',
      storeId: 'xy789Zw',
      registrationDate: '5/10/24',
      totalItems: 75,
      totalCategories: 10,
      address: '456 Elm Avenue, Cityville, Canada',
    },
  ];
  return (
    <>
      <SimpleGrid
        columns={{ base: '1', sm: '1', md: '1', lg: '1', xl: '2', '2xl': '2' }}
        spacingX="40px"
        spacingY="20px"
      >
        <Stack className={'bread m3-h'}>
          <Heading  fontSize={'30px'} fontWeight={'700'}>
            Stores 
          </Heading>
          <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
            Here is the your stores details...Check Now!
          </Text>
        </Stack>
        <Stack
          alignItems={{ base: 'start', xl: 'end' }}
          display={'flex'}
          direction={'row'}
          justifyContent={'flex-end'}
          mr={4}
        >
          <Link
            padding={'10px 50px'}
            bg={
              'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
            }
            color={'#fff'}
            fontWeight={'500'}
            lineHeight={'inherit'}
            borderRadius={12}
            _hover={{
              color: '#000',
            }}
            w={'fit-content'}
            to={'/dashboard/store/createbranch'}
            as={ReactLink}
          >
            Create New Branch
          </Link>
        </Stack>
      </SimpleGrid>
      <Stack>
        <Stack bg={'#FBFBFB'} px={6} py={8} borderRadius={8}>
          <SimpleGrid
            columns={{
              base: '1',
              sm: '1',
              md: '1',
              lg: '2',
              xl: '2',
              '2xl': '2',
            }}
            spacingX="40px"
            spacingY="20px"
          >
            {storeData.map(val => (
              <StoreCard key={val.storeId} {...val} />
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </>
  );
};

export default Store;
