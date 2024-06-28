import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Button,
  Icon,
  MenuGroup,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import { FaRegBell } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

export default function LoggedInPic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.value);

  useEffect(() => {
    console.log('User', user);
    if (user) {
    }
  }, [user]);

  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      gap={{ base: 1, lg: 2, xl: 12 }}
      py={4}
    >
      <Menu display={'flex'} direction={'row'} justifyContent={'space-between'}>
        <MenuButton
          textAlign={'center'}
          rounded={'full'}
          as={Button}
          bg={
            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
          }
          padding={0}
          _hover={{
            bg: 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))',
          }}
          _active={{
            bg: 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))',
          }}
        >
          <Icon as={FaRegBell} color={'#1B1C1D'} fontSize={'19px'} />
        </MenuButton>
        <MenuList fontSize={14}>
          <MenuItem>
            <FaCircle size={6} color={'#f79e22'} />
            <Text ml={2}>Notification Number One.</Text>
          </MenuItem>
          <MenuItem>
            <FaCircle size={6} color={'#f79e22'} />
            <Text ml={2}>Notification Number Two.</Text>
          </MenuItem>
          <MenuItem>
            <FaCircle size={6} color={'#f79e22'} />
            <Text ml={2}>Notification Number Three.</Text>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          display={'flex'}
          direction={'row'}
          className="loggedBtn"
          as={Button}
          backgroundColor={'transparent'}
          padding={0}
          _hover={{ backgroundColor: 'transparent' }}
          _active={{ backgroundColor: 'transparent' }}
        >
          <VStack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            gap={2}
          >
            <Avatar
              size={{ base: 'sm', md: 'md' }}
              fontSize={'12px'}
              src="https://bit.ly/kent-c-dodds"
              border={'2px solid #3B3D44'}
              bg={'#3B3D44;'}
              color={'#F2F2F2'}
              name={user?.fullName ?? 'John Anderson'}
            />
            <Text
              color={'#1B1C1D'}
              textTransform={'capitalize'}
              fontWeight={500}
              fontSize={{ base: 13, md: 14 }}
            >
              {user?.fullName ?? 'John Anderson'}
            </Text>
            <Icon color={'#1B1C1D'} as={FiChevronDown} />
          </VStack>
        </MenuButton>
        <MenuList border={'1px solid #3B3D44'} color={'#1B1C1D'} fontSize={14}>
          <MenuGroup title="Store Settings">
            <MenuItem
              as={Button}
              justifyContent={'left'}
              bg={'#FFFFFF'}
              _hover={{
                bg: 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))',
              }}
              to={'/dashboard/store/storesetting/'}
            >
              AJWA Mart
            </MenuItem>
            <MenuItem
              as={Button}
              justifyContent={'left'}
              bg={'#FFFFFF'}
              _hover={{
                bg: 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))',
              }}
            >
              AJWA Mart Grocery{' '}
            </MenuItem>
          </MenuGroup>
          {/* <MenuItem
            onClick={() => {
              localStorage.setItem('LiqteqUser', null);
              Cookies.set('LiqteqUser', null);
              localStorage.clear();

              navigate('/');
            }}
          >
            Logout
          </MenuItem> */}
        </MenuList>
      </Menu>
      <Menu>
        {/* <MenuButton textAlign={'center'} as={Button} backgroundColor={'transparent'} padding={0} _hover={{ backgroundColor: 'transparent' }} _active={{ backgroundColor: 'transparent' }}>
                    <FaBell size={24} color={'#666e82'} />
                </MenuButton>
                <MenuList fontSize={14}>
                    <MenuItem><FaCircle size={6} color={'#f79e22'} /><Text ml={2}>Dummy Notification to fill up some space.</Text></MenuItem>
                    <MenuItem><FaCircle size={6} color={'#f79e22'} /><Text ml={2}>Dummy Notification to fill up some space.</Text></MenuItem>
                </MenuList> */}
      </Menu>
    </Stack>
  );
}
