import React from 'react'
import {
    Stack,
    Heading,
    Text,
    Box,
    Grid,
    GridItem,
    IconButton,
    HStack,
    Avatar,
    AvatarBadge,
    AvatarGroup,
    Button,
    Badge,
    WrapItem,
    VStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    List,
    ListItem,
    Divider,
    Image, Radio
} from '@chakra-ui/react';

function Activity() {
    return (
        <Stack display={'flex'} flexDirection={'column'} gap={4}>
             <Box>
                <Text fontSize={'18px'} fontWeight={500}>Activity Logs</Text>

                <Stack display={'flex'} flexDirection={'column'} gap={2}>
                    <HStack mt={3} display={'flex'} w="100%" px={4}>
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
                            Date
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            Time
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            Activity Type
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
                            2/27/2024
                        </Box>

                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                           2:41 PM
                        </Box>
                        
                        
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                          Log In
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
                            2/27/2024
                        </Box>

                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                           2:41 PM
                        </Box>
                        
                        
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                          Log In
                        </Box>
                        
                       
                    </HStack>
                  

                </Stack>
            </Box>
            <Box>
                <Text fontSize={'18px'} fontWeight={500}>New Product</Text>

                <Stack display={'flex'} flexDirection={'column'} gap={2}>
                    <HStack mt={3} display={'flex'} w="100%" px={4}>
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
                            Date
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            Time
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            Activity Type
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                           Item Name
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            Category
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            Price
                        </Box>
                        <Box
                            fontSize="15px"
                            fontWeight={'400'}
                            color="#75767A"
                            flex={1}
                        >
                            Item Type
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
                         2/27/2024
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                         2:41 PM
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                         Add New Item
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
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                            Fresh Fruits
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                           Rs.150.00
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                            New
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
                         2/27/2024
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                         2:41 PM
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                         Add New Item
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
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                            Fresh Fruits
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                           Rs.150.00
                        </Box>
                        <Box
                            fontSize="18px"
                            fontWeight={'600'}
                            color="#1B1C1D"
                            flex={1}
                        >
                            New
                        </Box>
                       
                    
                    </HStack>
                  

                </Stack>
            </Box>
           

        </Stack>
    )
}

export default Activity