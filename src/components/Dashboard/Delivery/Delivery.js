import React, { useState } from 'react'
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Grid,
    Stack,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Tag,
    Icon,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Image,
    HStack,
} from '@chakra-ui/react';
import { dateTime } from '../../../assets/data/Data';
import { IoTimeOutline } from 'react-icons/io5';
import Cele from '../../../assets/images/website/cele.png';

function Delivery() {
    const [datelist, setdatelist] = useState(dateTime);
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Stack px={6} py={2}>

            <Stack mb={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                <Stack display={'flex'} flexDirection={'column'} >
                    <Heading fontSize={'40px'} fontWeight={'600'}>
                        Delivery Fee
                    </Heading>
                    <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                        Here is the all delivery options...Check Now!
                    </Text>
                </Stack>
                <Button padding={'10px 50px'}
                    bg={
                        'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                    }
                    color={'#fff'}
                    fontWeight={'500'}
                    lineHeight={'inherit'}
                    borderRadius={12}
                    _hover={{
                        color: '#000',
                    }}>
                    Add New
                </Button>
            </Stack>
            <Stack>
                <Accordion allowToggle>
                    <AccordionItem mb={3} border={'1px solid #B4B4B4'} background={'#F3F3F3'} borderRadius={'8px'}>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            py={4}
                        >
                            <Box px={4}>
                                <Heading fontSize={'22px'} fontWeight={'600'}>Monday</Heading>
                            </Box>

                            <AccordionButton width={'max-content'}>
                                <AccordionIcon />
                            </AccordionButton>
                        </Box>
                        <AccordionPanel>
                            <Grid templateColumns={'repeat(2,1fr)'} gap={4}>
                                <Stack>
                                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} borderRadius={8} border={'1px solid #B4B4B4'} height={'62px'} px={6}>
                                        <Stack>
                                            <Text fontSize={'18px'} fontWeight={500}>Select Time:</Text>
                                        </Stack>
                                        <HStack gap={1}>
                                            <Button
                                                bg={
                                                    'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                                                }
                                                w='max-content'
                                                color={'#fff'}
                                                fontWeight={'500'}
                                                lineHeight={'inherit'}
                                                borderRadius={12}
                                                _hover={{
                                                    color: '#000',
                                                }}>
                                                08:00 AM
                                            </Button>
                                            <Button
                                                bg={
                                                    'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                                                }
                                                w='max-content'
                                                color={'#fff'}
                                                fontWeight={'500'}
                                                lineHeight={'inherit'}
                                                borderRadius={12}
                                                _hover={{
                                                    color: '#000',
                                                }}>
                                                10:00 AM
                                            </Button>
                                        </HStack>
                                    </Box>
                                </Stack>
                                <Stack>
                                    <Box borderRadius={8} border={'1px solid #B4B4B4'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} px={6} height={'62px'}>
                                        <Text fontSize={'18px'} fontWeight={500}>Delivery Fee:</Text>
                                        <Text fontSize={'18px'} fontWeight={600} color={'#007341'}>Rs. 100.00</Text>
                                    </Box>
                                </Stack>

                            </Grid>
                            <Text py={4} fontSize={'22px'} fontWeight={600}>Question</Text>
                            <Grid templateColumns={'repeat(2,1fr)'} gap={4} >
                                <Box display={'flex'} flexDirection={'column'} gap={3}>
                                    <Text fontSize={'16px'} fontWeight={500}>Question / Answer (1)</Text>
                                    <Box  fontSize={'18px'} fontWeight={500} display={'flex'} alignItems={'center'} borderRadius={8} border={'1px solid #B4B4B4'} height={'62px'} px={6}>
                                        Can I cancel or amend a same day delivery?
                                    </Box>
                                    <Box py={2} fontSize={'18px'} fontWeight={500}  borderRadius={8} border={'1px solid #B4B4B4'} height={'104px'} px={6}>
                                        Once you have placed your Same Day order you won’t be able to edit it
                                    </Box>
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} gap={3}>
                                    <Text fontSize={'16px'} fontWeight={500}>Question / Answer (1)</Text>
                                    <Box  fontSize={'18px'} fontWeight={500} display={'flex'} alignItems={'center'} borderRadius={8} border={'1px solid #B4B4B4'} height={'62px'} px={6}>
                                        Can I cancel or amend a same day delivery?
                                    </Box>
                                    <Box py={2} fontSize={'18px'} fontWeight={500}  borderRadius={8} border={'1px solid #B4B4B4'} height={'104px'} px={6}>
                                        Once you have placed your Same Day order you won’t be able to edit it
                                    </Box>
                                </Box>
                            </Grid>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem mb={3} border={'1px solid #B4B4B4'} background={'#F3F3F3'} borderRadius={'8px'}>
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            py={4}
                        >
                            <Box px={4}>
                                <Heading fontSize={'22px'} fontWeight={'600'}>Tuesday</Heading>
                            </Box>

                            <AccordionButton width={'max-content'}>
                                <AccordionIcon />
                            </AccordionButton>
                        </Box>
                        <AccordionPanel>
                            <Grid templateColumns={'repeat(2,1fr)'} gap={4}>
                                <Stack>
                                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} borderRadius={8} border={'1px solid #B4B4B4'} height={'62px'} px={6}>
                                        <Stack>
                                            <Text fontSize={'18px'} fontWeight={500}>Select Time:</Text>
                                        </Stack>
                                        <HStack gap={1}>
                                            <Button
                                                bg={
                                                    'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                                                }
                                                w='max-content'
                                                color={'#fff'}
                                                fontWeight={'500'}
                                                lineHeight={'inherit'}
                                                borderRadius={12}
                                                _hover={{
                                                    color: '#000',
                                                }}>
                                                08:00 AM
                                            </Button>
                                            <Button
                                                bg={
                                                    'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
                                                }
                                                w='max-content'
                                                color={'#fff'}
                                                fontWeight={'500'}
                                                lineHeight={'inherit'}
                                                borderRadius={12}
                                                _hover={{
                                                    color: '#000',
                                                }}>
                                                10:00 AM
                                            </Button>
                                        </HStack>
                                    </Box>
                                </Stack>
                                <Stack>
                                    <Box borderRadius={8} border={'1px solid #B4B4B4'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} px={6} height={'62px'}>
                                        <Text fontSize={'18px'} fontWeight={500}>Delivery Fee:</Text>
                                        <Text fontSize={'18px'} fontWeight={600} color={'#007341'}>Rs. 100.00</Text>
                                    </Box>
                                </Stack>

                            </Grid>
                            <Text py={4} fontSize={'22px'} fontWeight={600}>Question</Text>
                            <Grid templateColumns={'repeat(2,1fr)'} gap={4} >
                                <Box display={'flex'} flexDirection={'column'} gap={3}>
                                    <Text fontSize={'16px'} fontWeight={500}>Question / Answer (1)</Text>
                                    <Box  fontSize={'18px'} fontWeight={500} display={'flex'} alignItems={'center'} borderRadius={8} border={'1px solid #B4B4B4'} height={'62px'} px={6}>
                                        Can I cancel or amend a same day delivery?
                                    </Box>
                                    <Box py={2} fontSize={'18px'} fontWeight={500}  borderRadius={8} border={'1px solid #B4B4B4'} height={'104px'} px={6}>
                                        Once you have placed your Same Day order you won’t be able to edit it
                                    </Box>
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} gap={3}>
                                    <Text fontSize={'16px'} fontWeight={500}>Question / Answer (1)</Text>
                                    <Box  fontSize={'18px'} fontWeight={500} display={'flex'} alignItems={'center'} borderRadius={8} border={'1px solid #B4B4B4'} height={'62px'} px={6}>
                                        Can I cancel or amend a same day delivery?
                                    </Box>
                                    <Box py={2} fontSize={'18px'} fontWeight={500}  borderRadius={8} border={'1px solid #B4B4B4'} height={'104px'} px={6}>
                                        Once you have placed your Same Day order you won’t be able to edit it
                                    </Box>
                                </Box>
                            </Grid>
                        </AccordionPanel>
                    </AccordionItem>
                    {/* <AccordionItem>
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    py={4}
                  >
                    <Box
                      width={'90%'}
                      display={'flex'}
                      flexWrap={'wrap'}
                      alignItems={'center'}
                      justifyContent={'space-between'}
                      gap={2}
                    >
                      <Text>10:00 - 12:00</Text>
                      <Tag
                        bg={
                          'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                        }
                        color={'#fff'}
                        px={3}
                        py={2}
                      >
                        First available delivery time!
                      </Tag>
                      <Text>
                        <Icon
                          mr={2}
                          verticalAlign={'middle'}
                          as={IoTimeOutline}
                        />
                        Book before 11:15am
                      </Text>
                      <Button
                        width={'max-content'}
                        fontSize={'16px'}
                        padding={'10px 25px'}
                        background={
                          'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                        }
                        onClick={onOpen}
                      >
                        $10.00
                      </Button>
                    </Box>
                    <AccordionButton bg={'#e7e0e0'} width={'max-content'}>
                      <AccordionIcon />
                    </AccordionButton>
                  </Box>
                  <AccordionPanel py={6} px={0}>
                    <SimpleGrid columns={{ base: '1', xl: '2', '2xl': '2' }} spacing={2}>
                      <Stack gap={1}>
                        <Heading fontSize={'17px'}>
                          Can I cancel or amend a same day delivery?
                        </Heading>
                        <Text fontSize={'16px'}>
                          Once you have placed your Same Day order you won’t be
                          able to edit it
                        </Text>
                      </Stack>
                      <Stack gap={1}>
                        <Heading fontSize={'17px'}>
                          How much is same day delivery?
                        </Heading>
                        <Text fontSize={'16px'}>
                          £3.00*, £25 min order value
                        </Text>
                      </Stack>
                    </SimpleGrid>
                  </AccordionPanel>
                </AccordionItem> */}
                </Accordion>
            </Stack>
        </Stack>
    )
}

export default Delivery