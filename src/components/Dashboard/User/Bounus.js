import {
    Button,
    Heading,

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

function Bounus() {
    return (
        <Stack gap={4}>
            <Stack>
                <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                    Top-up History:
                </Text>
                <Heading fontSize={'25px'} fontWeight={600}>
                    Bonus Card:{' '}
                    <Text
                        bg={
                            'var(--New-Gradient-2, radial-gradient(224.21% 224.21% at -16.41% -106.24%, #FFF 0%, #E2E432 28%, #399A48 80%))'
                        }
                        backgroundClip={'text'}
                        as={'span'}
                    >
                        Rs. 11,500
                    </Text>
                </Heading>
            </Stack>
            <Stack p={5} boxShadow="xl">
                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>No.</Th>
                                <Th>Date</Th>
                                <Th>Time</Th>
                                <Th>Top-up Type</Th>
                                <Th>Amount</Th>
                                <Th>Cashback</Th>
                                <Th>Receipt</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        01
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        2/27/2024
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        2:41 PM
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        VISA
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        Rs. 2,500
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        Rs. 0.00
                                    </Text>
                                </Td>
                                <Td>
                                    <Button
                                        border={'2px solid #EAA13E'}
                                        padding={'10px 25px'}
                                        bg={
                                            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                                        }
                                        width={'max-content'}
                                    >
                                        Download
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        02
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        2/27/2024
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        2:41 PM
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        VISA
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        Rs. 2,500
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        Rs. 0.00
                                    </Text>
                                </Td>
                                <Td>
                                    <Button
                                        border={'2px solid #EAA13E'}
                                        padding={'10px 25px'}
                                        bg={
                                            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                                        }
                                        width={'max-content'}
                                    >
                                        Download
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        03
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        2/27/2024
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        2:41 PM
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        VISA
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        Rs. 2,500
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={600}>
                                        Rs. 0.00
                                    </Text>
                                </Td>
                                <Td>
                                    <Button
                                        border={'2px solid #EAA13E'}
                                        padding={'10px 25px'}
                                        bg={
                                            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                                        }
                                        width={'max-content'}
                                    >
                                        Download
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Stack>
        </Stack>
    )
}

export default Bounus