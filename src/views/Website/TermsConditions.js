import React, { useEffect } from 'react';
import Footer from '../../components/Website/Footer';
import Header from '../../components/Website/Header';
import MiniBanner from '../../components/Website/banner/MiniBanner';
import AboutImg from '../../assets/images/website/terms.jpg';
import {
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function TermsConditions() {

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
}, []);


  return (
    <>
      <Header />
      <MiniBanner
        title={'Terms and Conditions'}
        breadtitle={'Terms and Conditions'}
      />
      <Stack>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack px={12} bg={'#fff'} py={12} borderRadius={12}>
            <SimpleGrid columns={{ base: '1', md: '2', xl: '2', '2xl': '2' }} spacing={10}>
              <Stack>
                <Stack gap={6}>
                  <Heading color={'#111'} fontSize={'25px'} fontWeight={700}>
                  Maecenas sed enim ut sem
                  </Heading>
                  <Text fontSize={'17px'} fontWeight={500}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mi in nulla posuere sollicitudin. Proin nibh nisl
                    condimentum id. Maecenas sed enim ut sem. Auctor augue
                    mauris augue neque gravida in fermentum et. Pretium viverra
                    suspendisse potenti nullam ac tortor. Maecenas pharetra
                    convallis posuere morbi leo. Facilisis volutpat est velit
                    egestas dui id ornare. Odio ut enim blandit volutpat
                    maecenas volutpat blandit. In massa tempor nec feugiat.
                    Volutpat lacus laoreet non curabitur gravida arcu ac tortor
                    dignissim. Sit amet consectetur adipiscing elit ut aliquam.
                    Amet purus gravida quis blandit turpis cursus in. Adipiscing
                    bibendum est ultricies integer quis. Volutpat commodo sed
                    egestas egestas. Scelerisque felis imperdiet proin fermentum
                    leo.
                  </Text>
                  <Text fontSize={'17px'} fontWeight={500}>
                    Vestibulum sed arcu non odio. Aliquam ut porttitor leo a
                    diam sollicitudin tempor id. Interdum posuere lorem ipsum
                    dolor sit amet consectetur adipiscing. Convallis convallis
                    tellus id interdum velit laoreet.
                  </Text>
                  <Heading color={'#111'} fontSize={'25px'} fontWeight={700}>
                  Dictum at tempor commodo ullamcorper a lacus vestibulum
                  </Heading>
                  <Text fontSize={'17px'} fontWeight={500}>
                    Risus nullam eget felis eget nunc lobortis. Sit amet
                    consectetur adipiscing elit. Velit dignissim sodales ut eu
                    sem integer vitae justo. Egestas sed tempus urna et pharetra
                    pharetra massa. Dictum at tempor commodo ullamcorper a lacus
                    vestibulum sed. At risus viverra adipiscing at. Orci
                    sagittis eu volutpat odio facilisis. Massa eget egestas
                    purus viverra accumsan in nisl. Quis hendrerit dolor magna
                    eget est lorem ipsum. Turpis egestas maecenas pharetra
                    convallis posuere morbi. Pellentesque id nibh tortor id. Mi
                    tempus imperdiet nulla malesuada pellentesque elit eget.
                    Integer enim neque volutpat ac tincidunt vitae semper quis
                    lectus. Donec ultrices tincidunt arcu non. Lectus nulla at
                    volutpat diam ut venenatis tellus in. Aliquet enim tortor at
                    auctor urna nunc id.
                  </Text>
                </Stack>
              </Stack>
              <Stack>
                <Image borderRadius={24} src={AboutImg} />
              </Stack>
            </SimpleGrid>
          </Stack>
        </Container>
      </Stack>
      <Footer />
    </>
  );
}
