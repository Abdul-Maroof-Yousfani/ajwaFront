import {

    Stack,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import React from 'react';

function Activity() {
    return (

        <Stack gap={4}>
            <Stack className="one">
                <Stack>
                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                        All Activity Logs
                    </Text>
                    <Text
                        fontSize={'18px'}
                        fontWeight={600}
                        bg={
                            'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                        }
                        backgroundClip={'text'}
                        as={'span'}
                    >
                        Log In
                    </Text>
                </Stack>
                <Stack p={5} boxShadow="xl">
                    <TableContainer>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>No.</Th>
                                    <Th>Date</Th>
                                    <Th>Time</Th>
                                    <Th>Activity Type</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            01
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            2/27/2024
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            2:41 PM
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Log In
                                        </Text>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            02
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            2/27/2024
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            2:41 PM
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Log In
                                        </Text>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Stack>
            <Stack className="tow">
                <Stack>
                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                        Add New Product
                    </Text>
                </Stack>
                <Stack p={5} boxShadow="xl">
                    <TableContainer>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>No.</Th>
                                    <Th>Date</Th>
                                    <Th>Time</Th>
                                    <Th>Activity Type</Th>
                                    <Th>Item Name</Th>
                                    <Th>Price</Th>
                                    <Th>Delivery</Th>
                                    <Th>Payment Method</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            01
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            2/27/2024
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            2:41 PM
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Item Purchased
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Kiwi
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Rs. 2,500
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            3 May, 3:00 PM
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Cash On Delivery
                                        </Text>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            02
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            2/27/2024
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            2:41 PM
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Item Purchased
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Kiwi
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Rs. 2,500
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            3 May, 3:00 PM
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Cash On Delivery
                                        </Text>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            03
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            2/27/2024
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            2:41 PM
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Item Purchased
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Kiwi
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Rs. 2,500
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            3 May, 3:00 PM
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text
                                            color={'#1A1B1A'}
                                            fontSize={'16px'}
                                            fontWeight={600}
                                        >
                                            Cash On Delivery
                                        </Text>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Activity