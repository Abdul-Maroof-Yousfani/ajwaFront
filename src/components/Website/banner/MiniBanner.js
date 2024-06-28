import { Container, Stack, Box, Heading, Link, Text } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom';


export default function MiniBanner({ title, breadtitle}) {

    return (
        <Stack
        px={{ base: '15px', md: '15px', xl: '0', '2xl': '0' }}
        >
            <Container
            p={0}
           
            my={4}
                maxW={{ base: "1366px", xl: '6xl', '2xl': "8xl" }}>
                <Box
                    bg={"var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))"}
                   borderRadius={12}
                    height={{ base: "140px", xl: "233px", '2xl': "233px" }}
                    display={'flex'}
                    alignItems={'center'}
                >
                    <Stack textAlign={'center'} w={'full'}>
                       
                    <Text ml="10px" fontSize={{ base: '14px', xl: '16px' }} fontWeight={700} color={'#111'}> <Link color={'#fff'} as={ReactLink} to={'/'}>Home /</Link> {breadtitle}</Text>
                        <Heading fontSize={{ base: '30px', xl: '62px' }} mt={'0 !important'} fontWeight={'700'} color={'#fff'} mb="5px"> {title}</Heading>
                        
                    </Stack>
                </Box>
            </Container >
        </Stack>
    )
}
