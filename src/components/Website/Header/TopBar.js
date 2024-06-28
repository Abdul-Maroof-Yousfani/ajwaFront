import {
  Box,
  Container,
  Icon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  Link,
} from '@chakra-ui/react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarker,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { GrLocation } from "react-icons/gr";
import { BiTime } from 'react-icons/bi';
import { Link as ReactLink } from 'react-router-dom';

export default function TopBar() {
  return (
    <Stack


      display={{ base: 'none', md: 'block' }}
    >
      <Container py="10px" bgGradient="radial-gradient(299.53% 303.74% at -27.27% -88.35%, #FFF 0%, #FBB03B 50%, #C4272E 100%)" maxW={{ base: '8xl', lg: '6xl', '2xl': '8xl' }}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={{base: 'center', xl: 'space-between'}}
        >
          <UnorderedList
            display={{ base: 'none', xl: 'flex' }}
            alignItems={'center'}
            gap={{ base: '10px', '2xl': '40px' }}
            listStyleType={'none'}
            color={'white'}
          >
            {TopNav_ITEMS.map(navItem => (
              <ListItem>
                <Link as={ReactLink} to={navItem.href} color={'#111'} fontSize={'15px'} fontWeight={600}>
                  {navItem.label}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
          <UnorderedList
            display={'flex'}
            alignItems={'center'}
            gap={{ base: '10px', '2xl': '40px' }}
            listStyleType={'none'}
            color={'white'}
          >
            <ListItem
              display={'flex'}
              alignItems={'center'}
              gap={{ base: '5px', '2xl': '15px' }}
            >
              <Box
                color={'#111'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Icon fontSize={'22px'} as={GrLocation} />
              </Box>
              <Text
                fontSize={{ base: '12px', xl: '14px' }}
                color={'#111'}
                fontWeight={600}
              >
                {' '}
                28C Khayaban-e-Bahria, D.H.A. Ph...
              </Text>
            </ListItem>
            <ListItem
              display={'flex'}
              alignItems={'center'}
              gap={{ base: '5px', '2xl': '15px' }}
            >
              <Box
                color={'#111'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Icon fontSize={'22px'} as={BiTime} />
              </Box>
              <Text
                fontSize={{ base: '12px', xl: '14px' }}
                color={'#111'}
                fontWeight={600}
              >
                {' '}
                Mon-Fri: 10:00 - 18:00
              </Text>
            </ListItem>
            <ListItem
              display={'flex'}
              alignItems={'center'}
              gap={{ base: '5px', '2xl': '15px' }}
            >
              <Box
                color={'#111'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Icon as={FaPhone} />
              </Box>
              <Text fontSize={{ base: '12px', xl: '14px' }}
                color={'#111'}
                fontWeight={600}
              >
                Phone:{' '}
                <Text as="a" href="tel:+164-654-3569">
                  02135802592
                </Text>
              </Text>
            </ListItem>
          </UnorderedList>
        </Stack>
      </Container>
    </Stack>
  );
}

const TopNav_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Store Finder',
    href: '/storefinder',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Contact Us',
    href: '/contactus',
  },
];
