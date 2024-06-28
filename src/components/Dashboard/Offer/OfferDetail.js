import React from 'react'
import { Box, Button, Grid, Heading,VStack, Avatar,HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { LuUser } from "react-icons/lu";
import { Link } from 'react-router-dom';

const OfferDetail = () => {
    return (
        <Stack px={6} py={2}>
            <Stack mb={2} display={'flex'} gap={2} flexDirection={'row'} justifyContent={'space-between'}>
                <Stack display={'flex'} flexDirection={'column'} >
                    <Heading fontSize={'40px'} fontWeight={'600'}>
                        Offer Details
                    </Heading>
                    <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                        Here is the latest update...Check Now!
                    </Text>
                </Stack>
               
            </Stack>
            <Stack gap={2}

                shadow={'0px 16.32px 38.75px 0px #0000000F'}
                borderRadius={'17px'}
                p={{ base: '15px 20px', xl: '25px 40px' }}
                role="group"
                transition={'0.3s'}
                _hover={{
                    borderColor: 'primaryGreen.200',
                }}
            >
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Stack direction={'row'} gap={2} alignItems={'center'}>
                        <Box
                            w={'67px'}
                            h={'67px'}
                            bg={'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '}
                            display={'flex'}
                            alignItems={'center'}
                            transition={'0.3s'}
                            borderRadius={'12px'}
                            mb="5px"
                            justifyContent={'center'}
                            _groupHover={{
                                bgColor: 'primaryGreen.200',
                            }}
                        >
                            <Icon
                                _groupHover={{
                                    color: '#fff',
                                }}
                                transition={'0.3s'}
                                fontSize={'30px'}
                                as={LuUser}
                            />
                        </Box>
                        <Box>
                            <Heading fontSize={'20px'} fontWeight={'700'} color={'#007341'} lineHeight={'1.6rem'}>
                                Big Sale
                            </Heading>
                            <Text color={'#989BA2'} fontSize={'16px'} fontWeight={'400'}>2 hours ago</Text>
                        </Box>
                    </Stack>
                    <Stack alignItems={'end'} justifyContent={'center'}>
                        <Button
                            // as={Link}
                            // to={'/dashboard/userDetails'}
                            border={'2px solid #07d57c'}
                            padding={'10px 25px'}
                            bg={'transparent'}
                            // width={'max-content'}
                            width={'133px'}
                            borderRadius={'10px'}
                        >
                            Remove
                        </Button>
                    </Stack>
                </Box>
                <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack display={'flex'} flexDirection={'column'}>
                        <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>Discount</Text>
                        <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>10% off</Text>
                    </Stack>
                    <Stack display={'flex'} flexDirection={'column'}>
                        <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>No. of Users</Text>
                        <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>25</Text>
                    </Stack>
                    <Stack display={'flex'} flexDirection={'column'}>
                        <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>Availability</Text>
                        <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>10 days</Text>
                    </Stack>
                    <Stack display={'flex'} flexDirection={'column'}>
                        <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>User Avail</Text>
                        <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>13 Users</Text>
                    </Stack>
                    <Stack display={'flex'} flexDirection={'column'}>
                        <Text fontSize={'17px'} fontWeight={'500'} color={'#1A1B1A'}>Discount Category</Text>
                        <Text fontSize={'18px'} fontWeight={'700'} color={'#1A1B1A'} margin={'0 !important'}>Grocery</Text>
                    </Stack>
                </Stack>
            </Stack>


          <Box py={4}>
          <Stack mt={6} display={'flex'} flexDirection={'column'} >
                <Heading fontSize={'18px'} fontWeight={'500'}>
                    All Users
                </Heading>
                <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                    Here is the latest update...Check Now!
                </Text>
            </Stack>

            <Stack display={'flex'} flexDirection={'column'} gap={2}>
                <HStack mt={6} display={'flex'} w="100%" px={4}>
                    <Box
                        fontSize="15px"
                        fontWeight={'400'}
                        color="#75767A"
                        flex={1}
                    >
                        NO.
                    </Box>
                    <Box
                        fontSize="15px"
                        fontWeight={'400'}
                        color="#75767A"
                        flex={1}
                    >
                        ID
                    </Box>
                    <Box
                        fontSize="15px"
                        fontWeight={'400'}
                        color="#75767A"
                        flex={1}
                    >
                        Name
                    </Box>
                    <Box
                        fontSize="15px"
                        fontWeight={'400'}
                        color="#75767A"
                        flex={1}
                    >
                      Avail Offer Date
                    </Box>
                    <Box
                        fontSize="15px"
                        fontWeight={'400'}
                        color="#75767A"
                        flex={1}
                    >
                        Purchased Items
                    </Box>
                    <Box
                        fontSize="15px"
                        fontWeight={'400'}
                        color="#75767A"
                        flex={1}
                    >
                        View Items
                    </Box>
                </HStack>
                <HStack
                    display={'flex'}
                    w="100%"
                    h="70px"
                    bg={'#fff'}
                    shadow={'0px 16px 38px 0px #0000000F'}
                    px={4}
                    borderRadius={'16px'}
                  >
                    <Box
                      fontSize="18px"
                      fontWeight={'600'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      01
                    </Box>
                    <Box
                    fontSize="18px"
                    fontWeight={'600'}
                    color="#1B1C1D"
                    flex={1}
                    >
                    #d44vdsQ
                    </Box>
                    <Box
                      fontSize="18px"
                      fontWeight={'600'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      <VStack
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        gap={2}
                      >
                        <Avatar
                          size="sm"
                          name="Kent Dodds"
                          src="https://bit.ly/kent-c-dodds"
                        />
                        <Text>John Doe</Text>
                      </VStack>
                    </Box>
                    <Box
                      fontSize="18px"
                      fontWeight={'600'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      2/27/2024
                    </Box>
                    <Box
                      fontSize="18px"
                      fontWeight={'600'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      <VStack
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        gap={2}
                      >
                        <Avatar
                          size="sm"
                          name="Kent Dodds"
                          src="https://bit.ly/kent-c-dodds"
                        />
                        <Text>Kiwi</Text>
                      </VStack>
                    </Box>
                    <Box
                      fontSize="15px"
                      fontWeight={'500'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      <Button
                        padding={'10px 50px'}
                        bg={
                          'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                        }
                        color={'#fff'}
                        fontWeight={'500'}
                        lineHeight={'inherit'}
                        borderRadius={12}
                        as={Link}
                        to={'/dashboard/userDetails'}
                        _hover={{
                          color: '#000',
                        }}
                        w={'fit-content'}
                      >
                        View Details
                      </Button>
                    </Box>
                  </HStack>
                  <HStack
                    display={'flex'}
                    w="100%"
                    h="70px"
                    bg={'#fff'}
                    shadow={'0px 16px 38px 0px #0000000F'}
                    px={4}
                    borderRadius={'16px'}
                  >
                    <Box
                      fontSize="18px"
                      fontWeight={'600'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      01
                    </Box>
                    <Box
                    fontSize="18px"
                    fontWeight={'600'}
                    color="#1B1C1D"
                    flex={1}
                    >
                    #d44vdsQ
                    </Box>
                    <Box
                      fontSize="18px"
                      fontWeight={'600'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      <VStack
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        gap={2}
                      >
                        <Avatar
                          size="sm"
                          name="Kent Dodds"
                          src="https://bit.ly/kent-c-dodds"
                        />
                        <Text>John Doe</Text>
                      </VStack>
                    </Box>
                    <Box
                      fontSize="18px"
                      fontWeight={'600'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      2/27/2024
                    </Box>
                    <Box
                      fontSize="18px"
                      fontWeight={'600'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      <VStack
                        flexDirection={'row'}
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        gap={2}
                      >
                        <Avatar
                          size="sm"
                          name="Kent Dodds"
                          src="https://bit.ly/kent-c-dodds"
                        />
                        <Text>Kiwi</Text>
                      </VStack>
                    </Box>
                    <Box
                      fontSize="15px"
                      fontWeight={'500'}
                      color="#1B1C1D"
                      flex={1}
                    >
                      <Button
                        padding={'10px 50px'}
                        bg={
                          'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                        }
                        color={'#fff'}
                        fontWeight={'500'}
                        lineHeight={'inherit'}
                        borderRadius={12}
                        as={Link}
                        to={'/dashboard/userDetails'}
                        _hover={{
                          color: '#000',
                        }}
                        w={'fit-content'}
                      >
                        View Details
                      </Button>
                    </Box>
                  </HStack>

            </Stack>

          </Box>
        </Stack>
    )
}

export default OfferDetail