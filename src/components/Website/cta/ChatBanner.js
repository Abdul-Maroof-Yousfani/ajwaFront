import { Stack, Container, Heading, Link, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import girlchat from '../../../assets/images/website/banner-ctn.jpg';
import { Link as ReactLink } from 'react-router-dom';
import { BiSupport } from 'react-icons/bi';
import { BsChatSquareText } from "react-icons/bs";

export default function ChatBanner() {
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
            height={{ base: '300px', md: '300px', xl: '300px', '2xl': '536px' }}
            backgroundImage={girlchat}
          >
            <Stack gap={4}>
              <Heading
                bg={
                  'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                }
                backgroundClip={'text'}
                fontSize={{ base: '25px', md: '30px', xl: '30px', '2xl': '55px' }}
                fontWeight={'700'}
              >
                <Text
                  as={'span'}
                  bg={
                    'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                  }
                  backgroundClip={'text'}
                >Chat</Text>{' '}
                with us if You've<br/>Any Questions
              </Heading>
              <Text color={'#243F2F'} fontSize={'16px'} fontWeight={700}>
                <Icon as={BsChatSquareText} verticalAlign={'middle'} /> 24/7 Everyday Free Support!
              </Text>
              <Link
                as={'a'}
                href={'tel:02135802592'}
                bg={
                  'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                }
                color={'#111'}
                fontWeight={'700'}
                fontSize={'16px'}
                w={'max-content'}
                p={'10px 20px'}
                borderRadius={'25px'}
              >
                <Icon as={BiSupport} /> 02135802592
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
