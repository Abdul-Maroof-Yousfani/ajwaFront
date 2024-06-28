import { Box, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import bottel from '../../../assets/images/website/bottel.jpg';
import waterbottel from '../../../assets/images/website/waterbottel.jpg';
import { TbArrowBackUp } from 'react-icons/tb';
import { imgUrl } from '../../../utilities/config';
import { Link, useNavigate } from 'react-router-dom';

export default function CategoryBanner({ categories }) {
  console.log('cat ', categories);
  return (
    <>
      <Stack textAlign={'center'} alignItems={'center'}>
        <Heading
          mb={6}
          color={'#409D47'}
          fontSize={{ base: '20px', md: '25px', xl: '30px', '2xl': '40px' }}
          fontWeight={700}
        >
          Drinks
        </Heading>
        <Stack direction={'row'} px={4} flexWrap={'wrap'} gap={6}>
          <Stack as={Link} to={'/'} w={'max-content'}>
            <Box
              alignItems={'center'}
              display={'flex'}
              justifyContent={'center'}
              width={'100px'}
              height={'100px'}
              boxShadow="md"
              borderRadius={8}
            >
              <Icon color={'#409D47'} fontSize={'40px'} as={TbArrowBackUp} />
            </Box>
            <Text color={'#007341'} fontWeight={700} fontSize={'17px'}>
              Home
            </Text>
          </Stack>
          {categories.map((v, k) => {
            return (
              <Stack w={'max-content'} as={Link} to={`/shop/${v?._id}`} key={k}>
                <Box
                  width={'100px'}
                  height={'100px'}
                  boxShadow="md"
                  borderRadius={8}
                >
                  <Image borderRadius={8} src={`${imgUrl}/${v?.picture}`} />
                </Box>

                <Text color={'#007341'} fontWeight={700} fontSize={'17px'}>
                  {v?.name}
                </Text>
              </Stack>
            );
          })}

        
        </Stack>
      </Stack>
    </>
  );
}
