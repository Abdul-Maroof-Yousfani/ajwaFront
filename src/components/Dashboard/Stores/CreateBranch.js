import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Icon,
  Checkbox,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link as ReactLink } from 'react-router-dom';

const CreateBranch = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [newBranch, setNewBranch] = useState({
    name: '',
    phone: '',
    state: '',
    uploadPicture: '',
    area: '',
    zipCode: '',
    availability: [],
  });
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const handleCreate = async () => {
    // Hit Api
    onClose();
  };

  useEffect(() => {
    console.log(newBranch.availability);
  }, [newBranch]);

  return (
    <>
      <SimpleGrid
        columns={{
          base: '1',
          sm: '1',
          md: '1',
          lg: '1',
          xl: '2',
          '2xl': '2',
        }}
        spacingX="40px"
        spacingY="20px"
      >
        <Stack className={'bread m3-h'}>
          <Heading as={'h3'} fontFamily={'Quicksand'} color={'#1B1C1D'}>
            Create New Branch
          </Heading>
          <Text color={'#75767A'} fontWeight={400} fontFamily={'Quicksand'}>
            Here is the your stores details...Check Now!
          </Text>
        </Stack>
      </SimpleGrid>
      <Stack bg={'#FBFBFB'} px={2} gap={6} py={6} borderRadius={8}>
        <SimpleGrid
          columns={{
            base: '1',
            sm: '1',
            md: '1',
            lg: '1',
            xl: '2',
            '2xl': '2',
          }}
          spacingX="40px"
          spacingY="20px"
        >
          <Stack className="adser" gap={6}>
            <Stack>
              <FormLabel
                fontWeight={500}
                m={0}
                color={'#1A1B1A'}
                fontSize={'16px'}
              >
                Branch Name
              </FormLabel>
              <Box className="Ifiled">
                <Input
                  type="text"
                  value={newBranch.name}
                  onChange={e =>
                    setNewBranch({ ...newBranch, name: e.target.value })
                  }
                  placeholder="Enter Branch Name"
                />
              </Box>
            </Stack>

            <Stack>
              <FormLabel
                fontWeight={500}
                m={0}
                color={'#1A1B1A'}
                fontSize={'16px'}
              >
                Phone No.
              </FormLabel>
              <Box className="Ifiled">
                <Input
                  type="number"
                  value={newBranch.phone}
                  onChange={e =>
                    setNewBranch({ ...newBranch, phone: e.target.value })
                  }
                  placeholder="Enter Phone No."
                />
              </Box>
            </Stack>
            <Stack direction={'row'} gap={6} justifyContent={'space-between'}>
              <Stack w={'100%'}>
                <FormLabel
                  fontWeight={500}
                  m={0}
                  color={'#1A1B1A'}
                  fontSize={'16px'}
                >
                  State
                </FormLabel>
                <Box className="Ifiled">
                  <Select
                    value={newBranch.state}
                    onChange={e =>
                      setNewBranch({
                        ...newBranch,
                        state: e.target.value,
                      })
                    }
                    placeholder="Enter Here"
                  >
                    <option value={'sindh'}>Sindh</option>
                    <option value={'punjab'}>Punjab</option>
                    <option value={'balochistan'}>Balochistan</option>
                    <option value={'gilgit'}>Gilgit-Baltistan</option>
                  </Select>
                </Box>
              </Stack>
              <Stack w={'100%'}>
                <FormLabel
                  fontWeight={500}
                  m={0}
                  color={'#1A1B1A'}
                  fontSize={'16px'}
                >
                  Area
                </FormLabel>
                <Box className="Ifiled">
                  <Input
                    type="text"
                    value={newBranch.area}
                    onChange={e =>
                      setNewBranch({ ...newBranch, area: e.target.value })
                    }
                    placeholder="Enter Area here"
                  />
                </Box>
              </Stack>
            </Stack>
            <Stack>
              <FormLabel
                fontWeight={500}
                m={0}
                color={'#1A1B1A'}
                fontSize={'16px'}
              >
                Zip Code
              </FormLabel>
              <Box className="Ifiled">
                <Input
                  type="number"
                  value={newBranch.zipCode}
                  onChange={e =>
                    setNewBranch({ ...newBranch, zipCode: e.target.value })
                  }
                  placeholder="Enter Zip Code"
                />
              </Box>
            </Stack>
          </Stack>
          <Stack>
            <FormLabel
              fontWeight={500}
              m={0}
              color={'#1A1B1A'}
              fontSize={'16px'}
            >
              Upload Picture*
            </FormLabel>
            <Box className="ufiled">
              <Input
                type="file"
                onChange={e =>
                  setNewBranch({
                    ...newBranch,
                    uploadPicture: e.target.files[0],
                  })
                }
              />
            </Box>
          </Stack>
        </SimpleGrid>
        <Stack>
          <Button
            padding={'10px 50px'}
            bg={
              'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
            }
            color={'#fff'}
            fontWeight={'500'}
            lineHeight={'inherit'}
            borderRadius={12}
            _hover={{
              color: '#000',
            }}
            w={'fit-content'}
            isLoading={isLoading}
            onClick={onOpen}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={'lg'}
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent height={'fit-content'}>
          <ModalHeader>Branch Availability</ModalHeader>
          <ModalCloseButton />
          <ModalBody gap={3}>
            {daysOfWeek.map(day => (
              <Stack
                key={day}
                bg={'#F3F3F3'}
                border={'1px solid #B4B4B4'}
                borderRadius={8}
                padding={3}
                my={2}
                display={'flex'}
                direction={'row'}
                justifyContent={'space-between'}
              >
                <Checkbox
                  colorScheme="green"
                  value={day}
                  onChange={e => {
                    if (e.target.checked) {
                      setNewBranch({
                        ...newBranch,
                        availability: [...newBranch.availability, day],
                      });
                    } else {
                      setNewBranch({
                        ...newBranch,
                        availability: newBranch.availability.filter(
                          d => d !== day
                        ),
                      });
                    }
                  }}
                >
                  {day}
                </Checkbox>
                <Stack display={'flex'} direction={'row'} gap={3}>
                  <Text
                    bg={
                      newBranch.availability.includes(day)
                        ? 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                        : '#D9D5D5'
                    }
                    padding={2}
                    borderRadius={6}
                    color={'#1A1B1A'}
                    fontWeight={500}
                  >
                    08:00 AM
                  </Text>
                  <Text
                    padding={2}
                    borderRadius={6}
                    bg={
                      newBranch.availability.includes(day)
                        ? 'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                        : '#D9D5D5'
                    }
                    color={'#1A1B1A'}
                    fontWeight={500}
                  >
                    10:00 PM
                  </Text>
                </Stack>
              </Stack>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button
              background={
                'radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)'
              }
              color={'#fff'}
              fontWeight={'500'}
              lineHeight={'inherit'}
              borderRadius={8}
              _hover={{
                color: '#000',
              }}
              w={'full'}
              onClick={handleCreate}
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateBranch;
