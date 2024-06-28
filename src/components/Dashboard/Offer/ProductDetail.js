import {
    Container,
    Heading,
    Stack,
    Text,
    Link,
    SimpleGrid,
    Box,
    useNumberInput,
    HStack,
    Button,
    Input,
    Icon,
    Tag,
    TagLeftIcon,
    TagLabel,
    UnorderedList,
    ListItem,
    Image,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Avatar,
    Flex,
    FormControl,
    FormLabel,
    Textarea,
    Checkbox,
} from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { BiTimer } from 'react-icons/bi';
import Product from '../../../assets/images/website/singleproduct.jpg';
import P1 from '../../../assets/images/website/p1.jpg';
import P2 from '../../../assets/images/website/p2.jpg';
import Star from '../../../assets/images/website/star.svg';

export default function SingleProduct() {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 0.01,
            defaultValue: 1.53,
            min: 1,
            max: 6,
            precision: 2,
        });
    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();

    return (
        <>
            <Stack py={4} display={'flex'} flexDirection={'column'} >
                <Heading fontSize={'40px'} fontWeight={'600'}>
                    Product Details
                </Heading>
                <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                    Here is the latest update...Check Now!
                </Text>
            </Stack>
            <Box display={'flex'} flexWrap={'wrap'} gap={6} alignItems={'center'}>
                <Stack width={'30%'} gap={3}>
                    <Stack>
                        <Image src={Product} />
                        <Box display={'flex'} gap={3}>
                            <Box py={4}>
                                <Image
                                    border={'2px solid #007341'}
                                    borderRadius={6}
                                    width={'100px'}
                                    src={P1}
                                />
                            </Box>
                            <Box py={4}>
                                <Image
                                    border={'2px solid #10e789'}
                                    borderRadius={6}
                                    width={'100px'}
                                    src={P2}
                                />
                            </Box>
                        </Box>
                    </Stack>

                </Stack>
                <Stack width={'55%'} gap={4}>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Stack>
                            <Heading
                                color={'#007341'}
                                fontSize={{ base: '20px', xl: '25px', '2xl': '30px' }}
                            >
                                Red Radish 1 pack
                            </Heading>
                            <Flex gap={4}>
                                <Text>
                                    <Text as={'span'} fontWeight={600}>
                                        SKU:
                                    </Text>
                                    654321234564
                                </Text>
                                <Text>
                                    <Text as={'span'} fontWeight={600}>
                                        Category:
                                    </Text>
                                    Grocery
                                </Text>
                            </Flex>
                        </Stack>
                        <Heading color={'#007341'} fontSize={'25px'}>
                            Rs. 20
                        </Heading>
                    </Box>
                    <Stack>
                        <Heading color={'#04ab62'} fontSize={'20px'}>
                            Description
                        </Heading>
                        <Text>
                            The color of a radish is a strong indicator of its taste. Pick the
                            ones that are a rich, full red. Red Radishes contains potassium,
                            folate, riboflavin, vitamin B6 and K, calcium, magnesium and many
                            more! Also with its fiber it will support your healthy digestive
                            system.
                        </Text>
                    </Stack>
                    <Stack>

                        <Text fontSize={'16px'} fontWeight={400}>100% Money Back Warranty</Text>
                        <Text fontSize={'16px'} fontWeight={400}>Free and Fast Delivery</Text>
                        <Text fontSize={'16px'} fontWeight={400}>All Items Top Best Quality</Text>
                        <Text fontSize={'16px'} fontWeight={400}>24/7 Support</Text>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}
