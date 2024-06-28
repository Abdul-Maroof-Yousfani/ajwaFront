import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  IconButton,
  Image,
  Input,
  Select,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Checkbox,
  AccordionPanel,
  Stack,
  Text,
  Textarea,
  Button,
  HStack,
  useDisclosure
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import ModalWrapper from '../../Modal';

function AddCategory() {
  return (
    <Stack display={'flex'} flexDirection={'column'} gap={3}>
      <FormControl>
        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Category Name</FormLabel>
        <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
      </FormControl>
      <FormControl>
        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Category Picture</FormLabel>
        <Box h='56px' borderRadius={'8px'} border={'1px dashed #B4B4B4'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={3}>
            <Box w='24px' h='24px' borderRadius={'50%'} border={'1px solid #1A1A1A'} display={'flex'} justifyContent={'center'} alignItems={'center'} color='#1A1A1A'>
              <AddIcon fontSize={'12px'} />
            </Box>
            <Box marginTop={'0px !important'}>
              <Text fontSize={'18px'} fontWeight={'500'} >Upload Picture</Text>

            </Box>
          </Stack>

        </Box>
      </FormControl>
      <Stack py={3} >
        <Button padding={'10px 50px'}
          bg={
            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
          }
          color={'#fff'}
          fontWeight={'500'}
          lineHeight={'inherit'}
          borderRadius={12}
          h='45px'
          _hover={{
            color: '#000',
          }}>
          Continue
        </Button>
      </Stack>


    </Stack>
  )
}
function AddSubCategory() {
  return (
    <Stack display={'flex'} flexDirection={'column'} gap={3}>
      <FormControl>
        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Subcategory Name</FormLabel>
        <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
      </FormControl>
      <FormControl>
        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Subcategory Picture</FormLabel>
        <Box h='56px' borderRadius={'8px'} border={'1px dashed #B4B4B4'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={3}>
            <Box w='24px' h='24px' borderRadius={'50%'} border={'1px solid #1A1A1A'} display={'flex'} justifyContent={'center'} alignItems={'center'} color='#1A1A1A'>
              <AddIcon fontSize={'12px'} />
            </Box>
            <Box marginTop={'0px !important'}>
              <Text fontSize={'18px'} fontWeight={'500'} >Upload Picture</Text>

            </Box>
          </Stack>

        </Box>
      </FormControl>
      <Stack py={3} >
        <Button padding={'10px 50px'}
          bg={
            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
          }
          color={'#fff'}
          fontWeight={'500'}
          lineHeight={'inherit'}
          borderRadius={12}
          h='45px'
          _hover={{
            color: '#000',
          }}>
          Continue
        </Button>
      </Stack>


    </Stack>
  )
}
function EditSubCategory() {
  return (
    <Stack display={'flex'} flexDirection={'column'} gap={3}>
      <FormControl>
        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Subcategory Name</FormLabel>
        <Input background={'#F3F3F3'} border={'1px solid #B4B4B4'} py={6} type="text" placeholder="Enter Your Name" />
      </FormControl>
      <FormControl>
        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>Subcategory Picture</FormLabel>
        <Box h='56px' borderRadius={'8px'} border={'1px dashed #B4B4B4'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={3}>
            <Box w='24px' h='24px' borderRadius={'50%'} border={'1px solid #1A1A1A'} display={'flex'} justifyContent={'center'} alignItems={'center'} color='#1A1A1A'>
              <AddIcon fontSize={'12px'} />
            </Box>
            <Box marginTop={'0px !important'}>
              <Text fontSize={'18px'} fontWeight={'500'} >Upload Picture</Text>

            </Box>
          </Stack>

        </Box>
      </FormControl>
      <Stack display={'flex'} flexDirection={'column'} >
        <Text color={'#1A1B1A'} fontSize={'16px'} fontWeight={'500'}>“Grocery” Subcategories</Text>
        <Text color='#4A4B4E' fontSize={'14px'} fontWeight={'400'}>You’ve 3 subcategories in “Grocery”</Text>
      </Stack>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        h={'50px'}
        border={'1px solid #B4B4B4'}
        borderRadius={8}
        py={2}
        px={4}
      >
        <Box >
          <Heading fontSize={'16px'} fontWeight={'600'}>Category 1</Heading>
        </Box>

        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={6}>
          <HStack>
            <Button  w='24px' h='34px' fontSize={'13px'} fontWeight={'600'} border={'1px solid #1A1B1A'} borderRadius={'8px'} width={'max-content'}>
              Edit
            </Button>
            <Button w='24px' h='34px' fontSize={'13px'} fontWeight={'600'} border={'1px solid #1A1B1A'} borderRadius={'8px'} width={'max-content'}>
              Remove
            </Button>
          </HStack>
        </Box>
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        h={'50px'}
        border={'1px solid #B4B4B4'}
        borderRadius={8}
        py={2}
        px={4}
      >
        <Box >
          <Heading fontSize={'16px'} fontWeight={'600'}>Category 2</Heading>
        </Box>

        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={6}>
          <HStack>
            <Button  w='24px' h='34px' fontSize={'13px'} fontWeight={'600'} border={'1px solid #1A1B1A'} borderRadius={'8px'} width={'max-content'}>
              Edit
            </Button>
            <Button w='24px' h='34px' fontSize={'13px'} fontWeight={'600'} border={'1px solid #1A1B1A'} borderRadius={'8px'} width={'max-content'}>
              Remove
            </Button>
          </HStack>
        </Box>
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        h={'50px'}
        border={'1px solid #B4B4B4'}
        borderRadius={8}
        py={2}
        px={4}
      >
        <Box >
          <Heading fontSize={'16px'} fontWeight={'600'}>Category 3</Heading>
        </Box>

        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={6}>
          <HStack>
            <Button  w='24px' h='34px' fontSize={'13px'} fontWeight={'600'} border={'1px solid #1A1B1A'} borderRadius={'8px'} width={'max-content'}>
              Edit
            </Button>
            <Button w='24px' h='34px' fontSize={'13px'} fontWeight={'600'} border={'1px solid #1A1B1A'} borderRadius={'8px'} width={'max-content'}>
              Remove
            </Button>
          </HStack>
        </Box>
      </Box>
      <Stack py={3} >
        <Button padding={'10px 50px'}
          bg={
            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
          }
          color={'#fff'}
          fontWeight={'500'}
          lineHeight={'inherit'}
          borderRadius={12}
          h='45px'
          _hover={{
            color: '#000',
          }}>
          Continue
        </Button>
      </Stack>


    </Stack>
  )
}

export default function AddNewProduct() {
  const [images, setImages] = useState([]);
  const [primaryImage, setPrimaryImage] = useState(null);
  const disclosure = useDisclosure();
  const disclosure1 = useDisclosure();
  const disclosure2 = useDisclosure();
  const { onClose, isOpen, onOpen } = disclosure;
  const { onClose: onClose1, isOpen: isOpen1, onOpen: onOpen1 } = disclosure1;
  const { onClose: onClose2, isOpen: isOpen2, onOpen: onOpen2 } = disclosure2;

  const handleImageUpload = event => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  const handlePrimaryImage = index => {
    setPrimaryImage(index);
  };
  const Categories = [1, 2, 3, 4, 5, 6, 7, 8]
  const data = ['Grocery', 'Fresh Fruits', 'Meat', 'Sea Foods', 'Baking', 'Drinks', 'Cheese']

  return (
    <Stack gap={6} px={4} pb={6}>
      <ModalWrapper
        isOpen={isOpen}
        onClose={onClose}
        title={'Add New Category'}
        children={
          <AddCategory />
        }
        size={'lg'}
        isCentered={true}
      />
      <ModalWrapper
        isOpen={isOpen1}
        onClose={onClose1}
        title={'Add New Subcategory'}
        children={
          <AddSubCategory />
        }
        size={'lg'}
        isCentered={true}
      />
      <ModalWrapper
        isOpen={isOpen2}
        onClose={onClose2}
        title={'Edit “Grocery” Category'}
        children={
          <EditSubCategory />
        }
        size={'lg'}
        isCentered={true}
      />
      <SimpleGrid columns={2} spacing={16}>
        <Stack gap={4}>
          <Stack>
            <Heading fontSize={'30px'} fontWeight={'700'}>
              Add New Product
            </Heading>
            <Text fontSize={'15px'} color={'#1A1B1A'} fontWeight={'400'}>
              Here is the all user details...Check Now!
            </Text>
          </Stack>
          <Stack gap={4}>
            <FormControl>
              <FormLabel fontSize={'15px'}>Full Name</FormLabel>
              <Select height={'50px'} placeholder="Simple Product">
                <option value="option2">Simple Product</option>
                <option value="option1">Variable Product </option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'15px'}>Product Name</FormLabel>
              <Input py={6} type="text" placeholder="Enter Product Name" />
            </FormControl>
            <Flex gap={8}>
              <FormControl>
                <FormLabel fontSize={'15px'}>Price</FormLabel>
                <Input py={6} type="text" placeholder="Rs. 0.00" />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={'15px'}>Sales Price</FormLabel>
                <Input py={6} type="text" placeholder="Rs. 0.00" />
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel fontSize={'15px'}>Sale Quantity</FormLabel>
              <Input py={6} type="text" placeholder="Enter Here" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'15px'}>Description</FormLabel>
              <Textarea
                py={6}
                height={'150px'}
                placeholder="Enter Description"
              ></Textarea>
            </FormControl>
            <Flex gap={8}>
              <FormControl>
                <FormLabel fontSize={'15px'}>In stock Items</FormLabel>
                <Input py={6} type="text" placeholder="Rs. 0.00" />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={'15px'}>Threshold</FormLabel>
                <Input py={6} type="text" placeholder="Rs. 0.00" />
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel fontSize={'15px'}>SKU No.</FormLabel>
              <Input py={6} type="text" placeholder="654321234564" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'15px'}>Short Description</FormLabel>
              <Textarea
                py={6}
                height={'150px'}
                placeholder="Enter Short Description"
              ></Textarea>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'15px'}>Upload Pictures</FormLabel>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Input
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                  display="none"
                  id="upload-input"
                />
                <label htmlFor="upload-input">
                  <Button
                    as="span"
                    leftIcon={<AddIcon />}
                    bg={
                      'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                    }
                  >
                    Upload Pictures
                  </Button>
                </label>
                <Grid
                  templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
                  gap={4}
                  mt={4}
                >
                  {images.map((src, index) => (
                    <Box key={index} position="relative">
                      <Image
                        src={src}
                        alt={`upload-${index}`}
                        boxSize="100px"
                        objectFit="cover"
                        borderRadius="md"
                      />
                      <Flex mt={2} alignItems="center" justifyContent="center">
                        <Text mr={2}>
                          {index === primaryImage
                            ? 'Primary'
                            : 'Set as Primary'}
                        </Text>
                        <IconButton
                          size="sm"
                          colorScheme={
                            index === primaryImage ? 'green' : 'gray'
                          }
                          icon={<AddIcon />}
                          onClick={() => handlePrimaryImage(index)}
                        />
                      </Flex>
                    </Box>
                  ))}
                </Grid>
              </Box>
            </FormControl>
          </Stack>
          <Stack gap={4}>
            <Stack gap={4}>
              <Heading fontSize={'20px'} fontWeight={'700'}>
                Add Attributes
              </Heading>
              <Flex gap={8}>
                <FormControl>
                  <FormLabel fontSize={'15px'}>Name</FormLabel>
                  <Input py={6} type="text" placeholder="i.e; size or color" />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={'15px'}>Values</FormLabel>
                  <Input py={6} type="text" placeholder="Enter here" />
                </FormControl>
              </Flex>
              <Stack alignItems={'end'}>
                <Button border={'2px solid #07d57c'} width={'max-content'}>Generate</Button>
              </Stack>
              <Button
                bg={
                  'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                }
                color={'#000'}
                width={'max-content'}
              >Save Attributes</Button>
            </Stack>
            <Stack gap={4}>
              <Heading fontSize={'20px'} fontWeight={'700'}>
                Variations
              </Heading>
              <Stack>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                  <Text fontWeight={600} fontSize={'16px'}>Variation 1</Text>
                  <Flex gap={2}>
                    <Button border={'2px solid #07d57c'} width={'max-content'}>Edit</Button>
                    <Button border={'2px solid #07d57c'} width={'max-content'}>Remove</Button>
                  </Flex>
                </Flex>
                <Flex gap={4}>
                  <FormControl>
                    <FormLabel fontSize={'15px'}>Brand</FormLabel>
                    <Select height={'50px'} placeholder="Levis">
                      <option value="option2">Levis</option>
                      <option value="option1">Levis</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={'15px'}>Color</FormLabel>
                    <Select height={'50px'} placeholder="Green">
                      <option value="option2">Green</option>
                      <option value="option1">Green </option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize={'15px'}>Color</FormLabel>
                    <Select height={'50px'} placeholder="Any">
                      <option value="option2">Any</option>
                      <option value="option1">Any</option>
                    </Select>
                  </FormControl>
                </Flex>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack  >
          <Stack mb={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Stack display={'flex'} flexDirection={'column'} >
              <Heading fontSize={'40px'} fontWeight={'600'}>
                Categories
              </Heading>
              <Text fontSize={'15px'} color={'#75767A'} fontWeight={'400'}>
                Choose at least (1) category:
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
              w='180px'
              onClick={onOpen}

              _hover={{
                color: '#000',
              }}>
              Add New Category
            </Button>
          </Stack>
          <Accordion allowToggle>
            {data?.map((item, index) => (
              <AccordionItem mb={3} border={'1px solid #B4B4B4'} background={'#F3F3F3'} borderRadius={'8px'}>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  h={'62px'}
                  borderBottom={'1px solid #B4B4B4'}
                  py={4}
                >
                  <Box px={4}>
                    <Heading fontSize={'20px'} fontWeight={'600'}>{item}</Heading>
                  </Box>

                  <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={6}>
                    <HStack>
                      <Button onClick={onOpen2} fontSize={'13px'} fontWeight={'600'} border={'1px solid #1A1B1A'} borderRadius={'8px'} width={'max-content'}>
                        Edit
                      </Button>
                      <Button fontSize={'13px'} fontWeight={'600'} border={'1px solid #1A1B1A'} borderRadius={'8px'} width={'max-content'}>
                        Remove
                      </Button>
                    </HStack>
                    <AccordionButton width={'max-content'}>
                      <AccordionIcon />
                    </AccordionButton>
                  </Box>
                </Box>
                <AccordionPanel display={'flex'} flexDirection={'column'} gap={4}>
                  <Stack display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={3} flexWrap={'wrap'}>
                    {Categories.map((item, index) => (
                      <Box w='48%'>
                        <Checkbox colorScheme={'green'} fontSize={'18px'} fontWeight={'500'} >Category {item}</Checkbox>
                      </Box>
                    ))}


                  </Stack>

                  <Button w='100%' onClick={onOpen1} fontSize={'14px'} fontWeight={'600'} border={'1px solid #1A1B1A'} borderRadius={'8px'} >
                    Add New Subcatory
                  </Button>
                </AccordionPanel>
              </AccordionItem>

            ))}
          </Accordion>

          <Stack>
            <Heading fontSize={'30px'} fontWeight={'700'}>
              Tags
            </Heading>
            <Text fontSize={'15px'} color={'#1A1B1A'} fontWeight={'400'}>
              Choose at least (1) tag:
            </Text>
          </Stack>
          <Accordion allowToggle>

            <AccordionItem mb={3} border={'1px solid #B4B4B4'} background={'#F3F3F3'} borderRadius={'8px'}>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                h={'62px'}
                borderBottom={'1px solid #B4B4B4'}
                py={4}
              >
                <Box px={4}>
                  <Heading fontSize={'20px'} fontWeight={'600'}>Add New Tag</Heading>
                </Box>


                <AccordionButton width={'max-content'}>
                  <AccordionIcon />
                </AccordionButton>
              </Box>
              <AccordionPanel display={'flex'} flexDirection={'column'} gap={4}>

                <Stack display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={3}>

                  <Input border={'1px solid #1A1B1A'} bg={'#F3F3F3'} borderRadius={'8px'} placeholder="Enter Here" />
                  <Button
                    bg={
                      'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
                    }
                    color={'#000'}
                    width={'max-content'}
                  >Add</Button>
                </Stack>
                <Stack display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={3} flexWrap={'wrap'}>
                  {Categories.map((item, index) => (
                    <Box w='48%'>
                      <Checkbox colorScheme={'green'} fontSize={'18px'} fontWeight={'500'} >Tag {item}</Checkbox>
                    </Box>
                  ))}


                </Stack>


              </AccordionPanel>
            </AccordionItem>


          </Accordion>
        </Stack>

      </SimpleGrid>
      <Stack>
        <Button
          bg={
            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%))'
          }
          color={'#000'}
          width={'max-content'}
        >Save Changes</Button>
      </Stack>
    </Stack>
  );
}
