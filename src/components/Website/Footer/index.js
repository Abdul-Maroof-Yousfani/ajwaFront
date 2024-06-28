import {
  Box,
  Container,
  ListItem,
  Stack,
  UnorderedList,
  Link,
  Image,
  Text,
  Icon,
  Heading,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import Ftlogo from '../../../assets/images/website/ft-logo.svg';
import google from '../../../assets/images/website/google.jpg';
import apple from '../../../assets/images/website/apple.jpg';
import visa from '../../../assets/images/website/visa.jpg';
import jazz from '../../../assets/images/website/jazz.jpg';
import easy from '../../../assets/images/website/easy.jpg';
import { FaSquareFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { GrLocation } from 'react-icons/gr';
import { BiSupport, BiTime } from 'react-icons/bi';
import { IoCheckmarkSharp } from 'react-icons/io5';

export default function Footer() {
  const ftlink = [
    {
      name: 'About Us',
      url: '/about',
    },
    {
      name: 'Contact Us',
      url: '/contactus',
    },
    {
      name: 'Store Finder',
      url: '/storefinder',
    },
    {
      name: 'Terms and Conditions',
      url: '/termsconditions',
    },
  ];

  return (
    <Stack>
      <Container
        bg={'#fff'}
        py={16}
        borderRadius={'12px 12px 0 0 '}
        maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}
        background={
          'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
        }
      >
        <Stack
          
          px={{ base: '0', md: '12', xl: '12', '2xl': '12' }}
          direction={'row'}
          flexWrap={'wrap'}
          spacing={6}
          alignItems={'center'}
        >
          <Stack w="20%" spacing={2} display={{ base: 'none', md: 'block', xl: 'block', '2xl': 'block' }}>
            <Heading fontSize={'22px'}>Useful Links</Heading>
            <UnorderedList spacing={3} m={0}>
              {ftlink?.length > 0 &&
                ftlink.map((v, k) => {
                  return (
                    <ListItem listStyleType={'none'}>
                      <Link
                        display={'flex'}
                        alignItems={'center'}
                        gap={2}
                        key={k}
                        as={ReactLink}
                        to={v.url}
                      >
                        <Icon as={IoCheckmarkSharp} />
                        <Text fontWeight={600}>{v.name}</Text>
                      </Link>
                    </ListItem>
                  );
                })}
            </UnorderedList>
          </Stack>
          <Stack w={{ base: '100%', md: '53%', xl: '53%', '2xl': '53%' }} pb={{ base: '8', '2xl': '0' }}px={{ base: '0', md: '6', xl: '6', '2xl': '6' }}>
            <Stack textAlign={{base:'left',md:'center',xl:'center','2xl':'center'}} alignItems={{base:'start',md:'center',xl:'center','2xl':'center'}} spacing={4}>
              <Image w={'90px'} src={Ftlogo} />
              <Text fontWeight={600}>
                We're Ajwa Mart Shop, an innovative team of food engineers. Our
                unique model minimizes fresh food handling by upto 90%, sourcing
                locally and dispatching within hours through cold chain
                logistics in eco-friendly containers.
              </Text>
              <UnorderedList display={'flex'} alignItems={'center'} gap={4}>
                <ListItem listStyleType={'none'}>
                  <Link as={ReactLink} to={''}>
                    <Icon fontSize={'20px'} as={FaSquareFacebook} />
                  </Link>
                </ListItem>
                <ListItem listStyleType={'none'}>
                  <Link as={ReactLink} to={''}>
                    <Icon fontSize={'20px'} as={FaInstagram} />
                  </Link>
                </ListItem>
                <ListItem listStyleType={'none'}>
                  <Link as={ReactLink} to={''}>
                    <Icon fontSize={'20px'} as={FaWhatsapp} />
                  </Link>
                </ListItem>
              </UnorderedList>
              <Stack spacing={2}>
                <Heading fontSize={'20px'}>Download App on Mobile</Heading>
                <Text>15% discount on your first purchase</Text>
                <UnorderedList display={'flex'} alignItems={'center'} gap={4}>
                  <ListItem listStyleType={'none'}>
                    <Link as={ReactLink} to={''}>
                      <Image borderRadius={6} src={google} />
                    </Link>
                  </ListItem>
                  <ListItem listStyleType={'none'}>
                    <Link as={ReactLink} to={''}>
                      <Image borderRadius={6} src={apple} />
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Stack>
            </Stack>
          </Stack>
          <Stack   w={{ base: '100%', md: '20%', xl: '20%', '2xl': '20%' }} spacing={4}>
            <Stack>
              <Heading fontSize={'22px'}>Contact Us</Heading>
              <UnorderedList alignItems={'center'} spacing={2}>
                <ListItem display={'flex'} gap={2} listStyleType={'none'}>
                  <Icon fontSize={'20px'} as={GrLocation} />
                  <Text fontWeight={'600'}>
                    28C Khayaban-e-Bahria, D.H.A. Phase 4 Housing Authority,
                    Karachi
                  </Text>
                </ListItem>
                <ListItem gap={2} display={'flex'} listStyleType={'none'}>
                  <Icon fontSize={'20px'} as={BiTime} />
                  <Text fontWeight={'600'}>Mon-Fri: 10:00 - 18:00</Text>
                </ListItem>
                <ListItem gap={2} display={'flex'} listStyleType={'none'}>
                  <Icon fontSize={'20px'} as={BiSupport} />
                  <Text fontWeight={'600'}>02135802592</Text>
                </ListItem>
              </UnorderedList>
            </Stack>
            <Stack>
              <UnorderedList display={'flex'} alignItems={'center'} gap={2}>
                <ListItem listStyleType={'none'}>
                  <Image src={visa} />
                </ListItem>
                <ListItem listStyleType={'none'}>
                  <Image src={jazz} />
                </ListItem>
                <ListItem listStyleType={'none'}>
                  <Image src={easy} />
                </ListItem>
              </UnorderedList>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
