import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  Image,
  FormControl,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,

} from '@chakra-ui/icons';
import Logo from '../../../assets/images/website/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { BiChevronRight, BiMenu, BiPlusCircle, BiUser } from 'react-icons/bi';
import { BsSearch, BsHeart } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartData } from '../../../reducers/slices/cart.slice';
import { selectWishlistData } from '../../../reducers/slices/website.slice';
import Cookies from 'js-cookie';
import { logout } from '../../../reducers/useReducers';

export default function TopNav() {
  const { isOpen, onToggle } = useDisclosure();
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [secondDegData, setSecondDegData] = useState(null);
  const [showingFirstDegSubNav, setShowingFirstDegSubNav] = useState(false);
  const [showingSecondDegSubNav, setShowingSecondDegSubNav] = useState(false);

  useEffect(() => {
    if (secondDegData !== null) setShowingSecondDegSubNav(true);
    return () => {};
  }, [secondDegData]);

  const cart = useSelector(selectCartData);
  const wishlist = useSelector(selectWishlistData) || [];
  const user = useSelector(state => state.user.value);
  console.log('user', user);
  
  return (
  <>
   
    <Box>
      <Container
        bg={'#fff'}
        borderRadius={6}
        maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}
      >
        <Flex
          px={{ base: 0 }}
          align={'center'}
          alignItems={'center'}
          py="12px"
          position={'relative'}
        >
          <Flex
            w="full"
            justifyContent={{ base: 'flex-start', xl: 'space-between' }}
            alignItems={'center'}
            flexWrap={{ base: 'wrap', xl: 'nowrap' }}
            gap={'15px'}
          >
            <Image
              cursor={'pointer'}
              onClick={() => navigate('/')}
              src={Logo}
              w={{ base: '60px', xl: 'initial' }}
              margin={{ base: '10px 20px 10px 0', xl: 'unset' }}
            />

            <Stack position={'relative'}>
              <Button
                onClick={() => {
                  if (showingFirstDegSubNav) {
                    setShowingFirstDegSubNav(!showingFirstDegSubNav);
                    setShowingSecondDegSubNav(false);
                    secondDegData(null);
                  } else {
                    setShowingFirstDegSubNav(!showingFirstDegSubNav);
                  }
                }}
                gap={2}
                color={'#fff'}
                bg={
                  'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                }
                padding={'24px 30px'}
                _hover={{
                  boxShadow: '0px 7px 20px 0px #0000003b',
                }}
              >
                <Text as={'span'}>
                  <Icon fontSize={'20px'} as={BiMenu} />
                </Text>
                <Text>Groceries</Text>
              </Button>
              <Stack
                w="250px"
                className={
                  showingFirstDegSubNav
                    ? 'subNavFirstDeg hideFirstDeg'
                    : 'subNavFirstDeg'
                }
              >
                {groceriesNavigation.map((val, ind) => (
                  <Box
                    key={ind}
                    onClick={() => {
                      setSecondDegData(val.children);
                    }}
                  >
                    <Text>{val.label}</Text> <Icon as={BiChevronRight} />
                  </Box>
                ))}
              </Stack>
              <Stack
                w="250px"
                className={
                  showingSecondDegSubNav
                    ? 'subNavSecondDeg hideSecondDeg'
                    : 'subNavSecondDeg'
                }
              >
                {secondDegData?.length > 0
                  ? secondDegData?.map((val, ind) => (
                      <Box>
                        <Text>{val?.label}</Text> <Icon as={BiChevronRight} />
                      </Box>
                    ))
                  : null}
              </Stack>
            </Stack>

            <Stack w={{ base: '100%', xl: '450px' }}>
              <FormControl position={'relative'}>
                <Input
                  type="text"
                  placeholder="Search here..."
                  padding={'24px 30px'}
                  bg={'#EDF5EC'}
                />
                <Button
                  bg={'transparent'}
                  top={'0'}
                  bottom={'0'}
                  margin={'auto'}
                  position={'absolute'}
                  right={0}
                  zIndex={1}
                >
                  <Icon color={'#197540'} fontSize={'20px'} as={BsSearch} />
                </Button>
              </FormControl>
            </Stack>

            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              alignItems={'center'}
              direction={'row'}
              gap="15px"
              display={{ base: 'none', xl: 'flex' }}
            >
              <Button
                bg={'transparent'}
                position={'relative'}
                as={Link}
                to={'/wishlist'}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <path
                    d="M6.71953 1.47003C7.69953 1.47003 8.60953 1.70336 9.44953 2.17003C9.86953 2.40336 10.2662 2.7067 10.6395 3.08003C11.1529 2.5667 11.7595 2.17003 12.4595 1.89003C13.1595 1.61003 13.8595 1.47003 14.5595 1.47003C15.6329 1.47003 16.6245 1.75003 17.5345 2.31003C18.4445 2.87003 19.1679 3.62836 19.7045 4.58503C20.2412 5.5417 20.5095 6.5567 20.5095 7.63003C20.5095 8.98336 20.1595 10.36 19.4595 11.76C18.8529 12.9734 18.0129 14.14 16.9395 15.26C16.0529 16.24 15.0612 17.0917 13.9645 17.815C12.8679 18.5384 11.8762 19.0634 10.9895 19.39L10.6395 19.53L10.2895 19.39C9.40286 19.0634 8.4112 18.5384 7.31453 17.815C6.21786 17.0917 5.2262 16.24 4.33953 15.26C3.2662 14.14 2.4262 12.9734 1.81953 11.76C1.11953 10.36 0.769531 8.98336 0.769531 7.63003C0.769531 6.5567 1.03786 5.5417 1.57453 4.58503C2.1112 3.62836 2.83453 2.87003 3.74453 2.31003C4.65453 1.75003 5.6462 1.47003 6.71953 1.47003ZM8.39953 4.13003C7.8862 3.85003 7.3262 3.71003 6.71953 3.71003C5.69286 3.71003 4.81786 4.08336 4.09453 4.83003C3.3712 5.5767 3.00953 6.4867 3.00953 7.56003C3.00953 8.63336 3.2662 9.7067 3.77953 10.78C4.29286 11.8067 4.99286 12.7867 5.87953 13.72C6.6262 14.5134 7.4662 15.2367 8.39953 15.89C9.19286 16.45 9.93953 16.87 10.6395 17.15C11.3395 16.87 12.0862 16.45 12.8795 15.89C13.8129 15.2367 14.6529 14.5134 15.3995 13.72C16.2862 12.7867 16.9862 11.8067 17.4995 10.78C18.0129 9.7067 18.2695 8.63336 18.2695 7.56003C18.2695 6.4867 17.9079 5.5767 17.1845 4.83003C16.4612 4.08336 15.5862 3.71003 14.5595 3.71003C13.9529 3.71003 13.3812 3.85003 12.8445 4.13003C12.3079 4.41003 11.8762 4.8067 11.5495 5.32003L10.6395 6.72003L9.72953 5.32003C9.40286 4.8067 8.95953 4.41003 8.39953 4.13003Z"
                    fill="#007341"
                  />
                </svg>
                <Stack
                  pt={'1px'}
                  top={0}
                  right={0}
                  display={'flex'}
                  borderRadius={'30px'}
                  justifyContent={'center'}
                  width={'18px'}
                  height={'18px'}
                  textAlign={'center'}
                  position={'absolute'}
                  bg={'#419D47'}
                >
                  <Text textAlign={'center'} fontSize={'11px'} color={'#fff'}>
                    {wishlist?.length}
                  </Text>
                </Stack>
              </Button>
              <Button
                bg={'transparent'}
                position={'relative'}
                as={Link}
                to={'/cart'}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                >
                  <g clip-path="url(#clip0_513_2476)">
                    <path
                      d="M8.89086 17.08C9.31086 17.08 9.67253 17.2316 9.97586 17.535C10.2792 17.8383 10.4309 18.2116 10.4309 18.655C10.4309 19.0983 10.2792 19.4716 9.97586 19.775C9.67253 20.0783 9.29919 20.23 8.85586 20.23C8.41253 20.23 8.03919 20.0783 7.73586 19.775C7.43253 19.4716 7.28086 19.0983 7.28086 18.655C7.28086 18.2116 7.43253 17.8383 7.73586 17.535C8.03919 17.2316 8.42419 17.08 8.89086 17.08ZM17.1509 17.08C17.5709 17.08 17.9325 17.2316 18.2359 17.535C18.5392 17.8383 18.6909 18.2116 18.6909 18.655C18.6909 19.0983 18.5392 19.4716 18.2359 19.775C17.9325 20.0783 17.5592 20.23 17.1159 20.23C16.6725 20.23 16.2992 20.0783 15.9959 19.775C15.6925 19.4716 15.5409 19.0983 15.5409 18.655C15.5409 18.2116 15.6925 17.8383 15.9959 17.535C16.2992 17.2316 16.6842 17.08 17.1509 17.08ZM4.55086 0.69998C5.01753 0.69998 5.42586 0.839981 5.77586 1.11998C6.12586 1.39998 6.37086 1.77331 6.51086 2.23998L9.03086 13.09H17.4309L19.1109 6.36998H10.5709C10.2909 6.36998 10.0342 6.26498 9.80086 6.05498C9.56753 5.84498 9.45086 5.58831 9.45086 5.28498C9.45086 4.98165 9.56753 4.72498 9.80086 4.51498C10.0342 4.30498 10.2909 4.19998 10.5709 4.19998H19.3909C20.0442 4.19998 20.5692 4.45665 20.9659 4.96998C21.3625 5.48331 21.4909 6.04331 21.3509 6.64998L19.5309 13.79C19.4375 14.2566 19.2042 14.63 18.8309 14.91C18.4575 15.19 18.0609 15.33 17.6409 15.33H8.89086C8.42419 15.2833 8.01586 15.12 7.66586 14.84C7.31586 14.56 7.09419 14.21 7.00086 13.79L4.41086 2.86998H1.75086C1.47086 2.86998 1.21419 2.76498 0.980859 2.55498C0.747526 2.34498 0.630859 2.08831 0.630859 1.78498C0.630859 1.48165 0.747526 1.22498 0.980859 1.01498C1.21419 0.804981 1.47086 0.69998 1.75086 0.69998H4.55086Z"
                      fill="#007341"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_513_2476">
                      <rect
                        width="21.28"
                        height="21"
                        fill="white"
                        transform="matrix(1 0 0 -1 0.28125 21)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <Stack
                  pt={'1px'}
                  top={0}
                  right={0}
                  display={'flex'}
                  borderRadius={'30px'}
                  justifyContent={'center'}
                  width={'18px'}
                  height={'18px'}
                  textAlign={'center'}
                  position={'absolute'}
                  bg={'#419D47'}
                >
                  <Text textAlign={'center'} fontSize={'11px'} color={'#fff'}>
                    {cart?.length}
                  </Text>
                </Stack>
              </Button>
              <Flex gap={2}>
                <Button
                  bg={
                    'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                  }
                  
                  fontSize={{ base: '12px', xl: '14px' }}
                  fontWeight={500}
                   
                  color={'#fff'}
                  px={'25px'}
                  py={'24px'}
                  gap={2}
                  transition={'.3s'}
                  h={{ base: '35px', xl: '45px' }}
                  _hover={{
                    boxShadow: '0px 7px 20px 0px #0000003b',
                  }}
                >
                  <Icon fontSize={'18px'} as={BiPlusCircle} />
                  Top up Amount
                </Button>
                {user === undefined || user === null ? (
                  <Button
                    bg={
                      'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                    }
                    as={Link}
                    fontSize={{ base: '12px', xl: '14px' }}
                    fontWeight={500}
                    to={'/login '}
                    color={'#fff'}
                    px={'25px'}
                    py={'24px'}
                    gap={2}
                    transition={'.3s'}
                    h={{ base: '35px', xl: '45px' }}
                    _hover={{
                      boxShadow: '0px 7px 20px 0px #0000003b',
                    }}
                  >
                    <Icon fontSize={'18px'} as={BiUser} />
                    Sign In / Register
                  </Button>
                ) : (
                  <Menu>
                    <MenuButton
                      display={'flex'}
                      backgroundColor={'transparent'}
                      padding={0}
                      _hover={{ backgroundColor: 'transparent' }}
                      _active={{ backgroundColor: 'transparent' }}
                    >
                      <Stack
                        width={'176px'}
                        as={Button}
                        gap={{ base: 1, lg: 1 }}
                        py={'24px'}
                        bg={
                          'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                        }
                        _hover={{
                          boxShadow: '0px 7px 20px 0px #0000003b',
                          bg: 'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))',
                        }}
                        direction={'row'}
                      >
                        <Avatar
                          size={{ base: 'sm', md: 'sm' }}
                          name={user?.fullName ?? 'John Doe'}
                          src=""
                          border={'2px solid #E28D3B'}
                          bg={'#F3BF59'}
                          color={'#fff'}
                          fontWeight={700}
                        />
                        <Text
                          textTransform={'capitalize'}
                          fontWeight={500}
                          fontSize={{ base: 13, md: 14 }}
                          color={'#fff'}
                        >
                          {user?.fullName ?? 'John Doe'}
                        </Text>
                      </Stack>
                    </MenuButton>
                    <MenuList
                      position={'relative'}
                      zIndex={9}
                      fontSize={14}
                      minWidth={'180px'}
                      bg={
                        'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                      }
                      color={'#fff'}
                      borderWidth={'0px'}
                    >
                      <MenuItem
                      _focus={{ bg: 'transparent' }}
                      
                        onClick={() => {
                        dispatch(logout());

                          navigate('/');
                        }}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </Menu>
                )}
              </Flex>
            </Stack>
          </Flex>
          <Box
            position={'absolute'}
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', xl: 'none' }}
            transform={'translateY(-25px)'}
            right={0}
            top={16}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Box>
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
   
  </>
  );
}

const DesktopNav = () => {

  

  return (
    <>
     
       <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as={Link}
                m={2}
                to={navItem.href ?? '#'}
                fontSize={{ base: '12px', xl: '14px' }}
                textTransform={'uppercase'}
                fontWeight={600}
                transition={'.3s'}
                _hover={{
                  color: 'primaryGreen.200',
                  _before: { width: '80%' },
                }}
                position={'relative'}
                _before={{
                  content: '""',
                  position: 'absolute',
                  transition: '.3s',
                  left: 0,
                  top: '20px',
                  width: '0%',
                  height: '2px',
                  bgGradient:
                    'linear(to-r, primaryGreen.100, primaryGreen.200)',
                }}
              >
                {navItem.label}
                {navItem.children && (
                  <Icon ml="5px" fontSize={'10px'} as={FaPlus} />
                )}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
    </>
  
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as={Link}
      to={href}
      role={'group'}
      display={'block'}
      py={'0px'}
      rounded={'md'}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} fontWeight={500}>
            {label}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ xl: 'none' }}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as={Link}
        to={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600}>{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Service',
    href: '/services',
  },
  {
    label: 'Blog',
    href: '/blogs',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
  {
    label: 'Contact',
    href: '/contact-us',
  },
];

const groceriesNavigation = [
  {
    label: 'Summer',
    children: [
      {
        label: '1 View All',
        href: '/',
      },
      {
        label: '1 BBQ',
        href: '/',
      },
      {
        label: '1 Drinks',
        href: '/',
      },
      {
        label: '1 Ice Cream',
        href: '/',
      },
      {
        label: '1 Picnic',
        href: '/',
      },
      {
        label: '1 Accessories',
        href: '/',
      },
    ],
  },
  {
    label: 'Frozen',
    children: [
      {
        label: '2 View All',
        href: '/',
      },
      {
        label: '2 BBQ',
        href: '/',
      },
      {
        label: '2 Drinks',
        href: '/',
      },
      {
        label: '2 Ice Cream',
        href: '/',
      },
      {
        label: '2 Picnic',
        href: '/',
      },
      {
        label: '2 Accessories',
        href: '/',
      },
    ],
  },
  {
    label: 'Food Cupboard',
    children: [
      {
        label: '3 View All',
        href: '/',
      },
      {
        label: '3 BBQ',
        href: '/',
      },
      {
        label: '3 Drinks',
        href: '/',
      },
      {
        label: '3 Ice Cream',
        href: '/',
      },
      {
        label: '3 Picnic',
        href: '/',
      },
      {
        label: '3 Accessories',
        href: '/',
      },
    ],
  },
  {
    label: 'Treats & Snacks',
    children: [
      {
        label: '4 View All',
        href: '/',
      },
      {
        label: '4 BBQ',
        href: '/',
      },
      {
        label: '4 Drinks',
        href: '/',
      },
      {
        label: '4 Ice Cream',
        href: '/',
      },
      {
        label: '4 Picnic',
        href: '/',
      },
      {
        label: '4 Accessories',
        href: '/',
      },
    ],
  },
  {
    label: 'Bakery',
    children: [
      {
        label: '5 View All',
        href: '/',
      },
      {
        label: '5 BBQ',
        href: '/',
      },
      {
        label: '5 Drinks',
        href: '/',
      },
      {
        label: '5 Ice Cream',
        href: '/',
      },
      {
        label: '5 Picnic',
        href: '/',
      },
      {
        label: '5 Accessories',
        href: '/',
      },
    ],
  },
  {
    label: 'Fresh',
    children: [
      {
        label: '6 View All',
        href: '/',
      },
      {
        label: '6 BBQ',
        href: '/',
      },
      {
        label: '6 Drinks',
        href: '/',
      },
      {
        label: '6 Ice Cream',
        href: '/',
      },
      {
        label: '6 Picnic',
        href: '/',
      },
      {
        label: '6 Accessories',
        href: '/',
      },
    ],
  },
  {
    label: 'Drinks',
    children: [
      {
        label: '7 View All',
        href: '/',
      },
      {
        label: '7 BBQ',
        href: '/',
      },
      {
        label: '7 Drinks',
        href: '/',
      },
      {
        label: '7 Ice Cream',
        href: '/',
      },
      {
        label: '7 Picnic',
        href: '/',
      },
      {
        label: '7 Accessories',
        href: '/',
      },
    ],
  },
  {
    label: 'Home & HouseHold',
    children: [
      {
        label: '8 View All',
        href: '/',
      },
      {
        label: '8 BBQ',
        href: '/',
      },
      {
        label: '8 Drinks',
        href: '/',
      },
      {
        label: '8 Ice Cream',
        href: '/',
      },
      {
        label: '8 Picnic',
        href: '/',
      },
      {
        label: '8 Accessories',
        href: '/',
      },
    ],
  },
  {
    label: 'Toiletries & Health',
    children: [
      {
        label: '9 View All',
        href: '/',
      },
      {
        label: '9 BBQ',
        href: '/',
      },
      {
        label: '9 Drinks',
        href: '/',
      },
      {
        label: '9 Ice Cream',
        href: '/',
      },
      {
        label: '9 Picnic',
        href: '/',
      },
      {
        label: '9 Accessories',
        href: '/',
      },
    ],
  },
  {
    label: 'Pets',
    children: [
      {
        label: '10 View All',
        href: '/',
      },
      {
        label: '10 BBQ',
        href: '/',
      },
      {
        label: '10 Drinks',
        href: '/',
      },
      {
        label: '10 Ice Cream',
        href: '/',
      },
      {
        label: '10 Picnic',
        href: '/',
      },
      {
        label: '10 Accessories',
        href: '/',
      },
    ],
  },
];
