import {
    Avatar,
    Button,
    ListItem,
    Menu,
    MenuItem,
    MenuList,
    Stack,
    Text,
    UnorderedList,
    MenuButton,
    Box,
    Input,
    Icon,
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
  import { Link as ReactLink } from 'react-router-dom';
  import { useSelector } from 'react-redux';
  import LoggedInPic from './LoggedInPic';
  import { FiSearch } from 'react-icons/fi';
  
  export default function Topnav() {
    const user = useSelector(state => state);
  
    return (
      <>
        <Stack
          position={'relative'}
          mb={'6'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          bg={'#F2F2F2'}
          // bg={'#fff'}
          borderRadius={'0px 0px 0px 19px'}
          px={3}
          pl={6}
        >
          <Stack className="serch" position={'relative'} w={'400px'}>
            <Input
              color={'#fff'}
              border={'0'}
              pl={12}
              type="text"
              placeholder="Search here"
            />
            <Button
              mt={'0 !important'}
              position={'absolute'}
              top={'0'}
              bottom={'0'}
              bg={'transparent'}
              _hover={{ bg: 'transparent' }}
            >
              {' '}
              <Icon color={'#75767A'} as={FiSearch} />
            </Button>
          </Stack>
  
          <Stack>
            <LoggedInPic />
          </Stack>
        </Stack>
      </>
    );
  }
  