import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  useDisclosure,
  DrawerContent,
  BoxProps,
  FlexProps,
  Image,
  UnorderedList,
  ListItem,
  Collapse,
  Button,
  Text,
  Stack,
  Heading,
} from '@chakra-ui/react';
import {
  FiHome,
  FiCalendar,
  FiCompass,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { BsChat, BsPieChart, BsShop, BsCalendar2Event } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { AiOutlineShop } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlineSpeakerphone, HiOutlineUserGroup } from 'react-icons/hi';
import { Link as ReactLink } from 'react-router-dom';
// import shapeb from '../../assets/images/icon/black.png'
import { IconType } from 'react-icons';
import { ReactText, useState } from 'react';
// import logo from '../../assets/images/logo/logo.svg';
import { useNavigate } from 'react-router';
import { RiHome3Line, RiShoppingCartLine, RiTeamLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import {
  FaRegChartBar,
  FaBloggerB,
  FaRegUser,
  FaShapes,
  FaStore,
  FaShoppingCart,
  FaUsers,
} from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { FiPlusCircle, FiHelpCircle } from 'react-icons/fi';
import { GrCircleQuestion } from 'react-icons/gr';
import { LuStore, LuUsers2  } from "react-icons/lu";
import { IoCartOutline, IoBagOutline, IoAnalyticsOutline   } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbShoppingBagDiscount, TbSpeakerphone   } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";

// import yellowBtnTexture from '../../assets/images/yellowBtnTexture.svg'
// import greenBtnTexture from '../../assets/images/greenBtnTexture.svg'
// import Logo from '../../../assets/images/website/logo.svg'
import Logo from '../../assets/images/website/logo.png';
import { useSelector } from 'react-redux';

export default function Sidenav({ children, type }) {
  const user = useSelector(state => state?.value);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [navigationList, setNavigationList] = useState([
    {
      label: 'Home',
      icon: RiHome3Line,
      url: '/dashboard',
    },
    {
      label: 'Store',
      icon: LuStore,
      url: '/dashboard/store',
    },
    {
      label: 'Products',
      icon: IoCartOutline,
      url: '/dashboard/product',
    },
    {
      label: 'Users',
      icon: LuUsers2,
      url: '/dashboard/users',
    },
    {
      label: 'Orders',
      icon: IoBagOutline,
      url: '/dashboard/orders',
    },
    {
      label: 'Discounts',
      icon: TbShoppingBagDiscount,
      url: '/dashboard/discounts',
    },
    {
      label: 'Delivery Fee',
      icon: CiDeliveryTruck,
      url: '/dashboard/delivery',
    },
    {
      label: 'Offers',
      icon: TbSpeakerphone,
      url: '/dashboard/offers',
    },
    {
      label: 'Team Members',
      icon: RiTeamLine,
      url: '/dashboard/team',
    },
    {
      label: 'My Profile',
      icon: CgProfile,
      url: '/dashboard/profile',
    },
    {
      label: 'Report Analytics',
      icon: IoAnalyticsOutline,
      url: '/dashboard/analytics',
    },
    {
      label: 'Contact Inquiries',
      icon: AiOutlineQuestionCircle,
      url: '/dashboard/inquiries',
 
    },
  ]);

  return (
    <>
      <Box
        minH={{ base: 'fit-content', lg: '100vh' }}
        bg={'primaryYellow.100'}
        position={{ base: 'absolute', lg: 'initial' }}
        zIndex={'1'}
        w={{ base: '0px', lg: 'auto' }}
        
      >
        <SidebarContent
          navigationList={navigationList}
          onClose={() => onClose}
          display={{ base: 'none', lg: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent navigationList={navigationList} onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav display={{ base: 'flex', lg: 'none' }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p={{ base: '0', md: '4' }}>
          {children}
        </Box>
      </Box>
    </>
  );
}

const SidebarContent = ({ navigationList, onClose, ...rest }) => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Box
      bg={'primaryYellow.100'}
      w={{ base: 'full', lg: 72 }}
      pos="fixed"
      // backgroundImage={shapeb}
      h="full"
      {...rest}
    >

      <Stack pl={4} pt={'40px'}>
       <Stack py={3} display={'flex'} flexDirection={'row'} justifyContent={'start'} pl={6} >
        <Image  src={Logo} />
       </Stack>
        <UnorderedList className="sidemenu" listStyleType={'none'}>
          {navigationList.map(val => (
            <ListItem key={val.label} mb={'5px !important'}>
              <Stack gap={'5px'}>
                <Button
                  onClick={() => navigate(val.url)}
                  w={'188px'}
                  padding={'10px 20px'}
                  borderRadius={'21.5px'}
                  bg={
                    location.pathname === `${val.url}`
                      ? 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                      : 'none'
                  }
                  justifyContent={'flex-start'}
                  color={location.pathname === `${val.url}` ? '#000' : '#000'}
                  fontWeight={'400'}
                  
                >
                  <Text as={'span'}>
                    <Icon as={val.icon} mr={'10px'} mb="-3px" />
                  </Text>
                  <Text as={'span'}>{val.label}</Text>
                </Button>
              </Stack>
            </ListItem>
          ))}
        </UnorderedList>
    
      </Stack>
    </Box>
  );
};

const NavItem = ({ icon, url, children, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Link
      onClick={() => navigate(url)}
      style={{ textDecoration: 'none', color: '#000' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#FFC728',
          color: '#000',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: '#000',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: '35px' }}
      px={{ base: 0, md: 0 }}
      height="auto"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="0px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};
