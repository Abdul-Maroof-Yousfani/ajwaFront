import {
  Box,
  Container,
  Heading,
  SimpleGrid,
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
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { dateTime } from '../../../assets/data/Data';
import { IoTimeOutline } from 'react-icons/io5';
import Cele from '../../../assets/images/website/cele.png';
import { Link } from 'react-router-dom';
import { GET, POST } from '../../../utilities/ApiProvider';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCheckoutDetails,
  setCarts,
  setCheckoutDetails,
} from '../../../reducers/slices/cart.slice';
export default function Delivery() {
  const [datelist, setdatelist] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();
  const [selectedService, setSelectedService] = useState(null);
  const details = useSelector(selectCheckoutDetails);
  useEffect(() => {
    async function fetchDeliveryOptions() {
      try {
        const response = await GET(
          `/store/delivery/${localStorage.getItem(
            'storeId'
          )}?currentDate=${moment().format('YYYY-MM-DD')}`
        );
        console.log(response);
        setdatelist(response?.data[0]?.deliveryFee);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDeliveryOptions();
  }, []);
  const placeOrder = async () => {
    try {
      const temp = { ...details };
      temp['deliveryId'] = selectedService;
      const response = await POST(`/store/order`, temp);
      console.log(response);
      if (response.status === 'success') {
        onOpen();
        dispatch(setCarts([]));
        dispatch(setCheckoutDetails({}));
      } else {
        toast({
          description: response?.message,
          status: 'error',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Stack py={4} textAlign={'center'} alignItems={'center'}>
              <Image w={'120px'} src={Cele} />
              <Heading>Thank You!</Heading>
              <Text fontSize={'14px'}>
                Your order has been placed, and it will be delivered shortly.
              </Text>
              <Stack>
                <Button
                  as={Link}
                  to={'/'}
                  py={4}
                  fontSize={'16px'}
                  width={'200px'}
                  background={
                    'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                  }
                >
                  Continue Shopping
                </Button>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Stack>
        <Container p={0} mb={6} maxW={{ base: '8xl', xl: '6xl', '2xl': '8xl' }}>
          <Stack px={16} bg={'#fff'} py={12} borderRadius={12} gap={8}>
            <Stack>
              <Heading color={'#111'} fontSize={'22px'} fontWeight={700}>
                Delivery Options
              </Heading>
              <Text>Available times: 22nd April - 28th April</Text>
            </Stack>
            <Stack>
              <SimpleGrid
                columns={{ base: '3', xl: '7', '2xl': '7' }}
                spacing={2}
              >
                {datelist?.length > 0 &&
                  datelist.map((v, k) => {
                    return (
                      <Stack
                        onClick={() => setSelectedService(v?._id)}
                        borderRadius={4}
                        cursor={'pointer'}
                        border={
                          selectedService === v?._id
                            ? '1px solid #007341'
                            : 'none'
                        }
                      >
                        <Box
                          bg={
                            selectedService === v?._id
                              ? 'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                              : 'rgba(0, 115, 65, 0.2)'
                          }
                        >
                          <Text
                            textAlign={'center'}
                            py={2}
                            color={'#fff'}
                            fontSize={'16px'}
                            fontWeight={600}
                          >
                            {v.day}
                          </Text>
                        </Box>
                        <Text pb={3} textAlign={'center'}>
                          {moment(v.date).format('DD MMMM ')}
                        </Text>
                      </Stack>
                    );
                  })}
              </SimpleGrid>
            </Stack>
            <Stack>
              <Accordion>
                {datelist
                  ?.filter(item => item._id === selectedService)[0]
                  ?.time?.map((v, k) => {
                    console.log(v);
                    return (
                      <AccordionItem>
                        <Box
                          display={'flex'}
                          alignItems={'center'}
                          justifyContent={'space-between'}
                          py={4}
                        >
                          <Box
                            width={'90%'}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            flexWrap={'wrap'}
                            gap={2}
                          >
                            <Text>
                              {v?.start} - {v?.end}
                            </Text>
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
                            {/* <Text>
                              <Icon
                                mr={2}
                                verticalAlign={'middle'}
                                as={IoTimeOutline}
                              />
                              Book before 11:15am
                            </Text> */}
                            <Button
                              width={'max-content'}
                              fontSize={'16px'}
                              padding={'10px 25px'}
                              background={
                                'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                              }
                              onClick={() => placeOrder()}
                            >
                              ${v?.fee}
                            </Button>
                          </Box>
                          {/* <AccordionButton bg={'#e7e0e0'} width={'max-content'}>
                            <AccordionIcon />
                          </AccordionButton> */}
                        </Box>
                        <AccordionPanel py={6} px={0}>
                          <SimpleGrid
                            columns={{ base: '1', xl: '2', '2xl': '2' }}
                            spacing={2}
                          >
                            <Stack gap={1}>
                              <Heading fontSize={'17px'}>
                                Can I cancel or amend a same day delivery?
                              </Heading>
                              <Text fontSize={'16px'}>
                                Once you have placed your Same Day order you
                                won’t be able to edit it
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
                      </AccordionItem>
                    );
                  })}
              </Accordion>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
