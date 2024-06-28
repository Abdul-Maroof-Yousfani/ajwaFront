import {
  Avatar,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Link,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function StoreCard({
  _id,
  storeName,
  storeLogo,
  storeId,
  registrationDate,
  totalItems,
  totalCategories,
  address,
}) {
  const user = useSelector(state => state.value);
  const toast = useToast();

  return (
    <Stack key={_id} py={6} px={4} borderRadius={10} bg={'#FFFFFF'} boxShadow={'0px 16px 38px 0px rgba(0, 0, 0, 0.06)'}>
      <Stack
        direction={'row'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
        borderBottom={'1px solid #FFFFFF'}
        paddingBottom={5}

        marginBottom={4}
        position={'relative'}
      >
        <Box display={'flex'} gap={3}>
          <Avatar
            name={storeName}
            bgColor={'primaryGreen.100'}
            color="#1a1a1a"
            src={storeLogo}
          />
          <Box className="venbox p1 m3-h">
            <Heading color={'#1B1C1D'} fontSize={22} fontWeight={500}>{storeName}</Heading>
            <Text fontSize={16} color={'#75767A'} fontWeight={400}>ID: {storeId ?? '0'}</Text>
          </Box>
        </Box>
        <Stack className="venbox p1 m3-h">
          <Button
            padding={{ md: '10px 15px', '2xl': '10px 50px' }}
            variant='outline'
            color={'#1A1B1A'}
            border={'2px solid #1A1B1A'}
            fontWeight={'500'}
            borderRadius={12}
            _hover={{
              color: '#000',
            }}
            w={'100%'}
            textAlign={'center'}
            as={ReactLink}
            to={`/dashboard/store/storesetting`}
          >
            View Store
          </Button>
        </Stack>
      </Stack>
      <Stack className="m5-h">
        <Heading fontSize={16} color={'#1B1C1D'} fontWeight={500}>Branch Info:</Heading>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Box className="venbox p1 m3-h">
            <Text fontSize={16} color={'#75767A'} fontWeight={400}>Registration Date</Text>
            <Heading fontSize={16} color={'#1B1C1D'} fontWeight={600} textTransform={'capitalize'}>
              {registrationDate}
            </Heading>
          </Box>
          <Box className="venbox p1 m3-h">
            <Text fontSize={16} color={'#75767A'} fontWeight={400}>Total Items</Text>
            <Heading fontSize={16} color={'#1B1C1D'} fontWeight={600}>{totalItems}</Heading>
          </Box>
          <Box className="venbox p1 m3-h">
            <Text fontSize={16} color={'#75767A'} fontWeight={400}>Total Categories</Text>
            <Heading fontSize={16} color={'#1B1C1D'} fontWeight={600}>{totalCategories}</Heading>
          </Box>
        </Box>
        <Box className="venbox p1 m3-h">
          <Text fontSize={16} color={'#75767A'} fontWeight={400}>Location</Text>
          <Heading fontSize={16} color={'#1B1C1D'} fontWeight={600}>
            {address}
          </Heading>
        </Box>
      </Stack>
    </Stack>
  );
}
