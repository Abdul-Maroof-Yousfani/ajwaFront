import {
  Container,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import Timebanner from '../../../assets/images/website/timebanner.jpg';
import bike from '../../../assets/images/website/bike.png';
import { Link as ReactLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectWebsiteData } from '../../../reducers/slices/website.slice';
import { imgUrl } from '../../../utilities/config';
export default function TimeBanner() {
  const websiteData = useSelector(selectWebsiteData);
  const Timebanner = useMemo(() => {
    return websiteData.timeBanner;
  }, [websiteData.timeBanner]);
  return (
    <>
      <Stack>
        <Container
          mb={6}
          px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}
          borderRadius={12}
          maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}
        >
          <Stack
            px={{ base: '6', md: '20', xl: '20', '2xl': '20' }}
            borderRadius={12}
            display={'flex'}
            justifyContent={'center'}
            position={'relative'}
            height={'409px'}
            backgroundImage={`${imgUrl}/${Timebanner?.url}`}
          >
            <Stack gap={4}>
              <Heading
                color={'#fff'}
                fontSize={{
                  base: '20px',
                  md: '20px',
                  xl: '30px',
                  '2xl': '55px',
                }}
                fontWeight={'700'}
              >
                We deliver the next day
                <br />
                from {Timebanner?.start || '10:00 AM '} to{' '}
                {Timebanner?.end || '8:00 PM'}.
              </Heading>
              <Text color={'#fff'} fontSize={'16px'}>
                * For Orders starts from {Timebanner?.price || '$100'}
              </Text>
              <Link
                to={'/'}
                as={ReactLink}
                bg={'#fff'}
                color={'#DD6634'}
                fontWeight={'700'}
                fontSize={'16px'}
                w={'max-content'}
                p={'10px 20px'}
                borderRadius={'25px'}
              >
                Read More
              </Link>
            </Stack>
            <Image
              position={'absolute'}
              top={'-15px'}
              right={'7%'}
              src={bike}
              display={{ base: 'none', xl: 'block', '2xl': 'block' }}
            />
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
