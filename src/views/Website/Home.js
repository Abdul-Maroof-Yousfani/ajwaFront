import {
  Stack,
  Text,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from '@chakra-ui/react';
import Banner from '../../components/Website/banner';
import Categories from '../../components/Website/categories';
import TopRated from '../../components/Website/toprated';
import Header from '../../components/Website/Header';
import SmBanner from '../../components/Website/smbannefr';
import Arrivals from '../../components/Website/arrivals';
import TimeBanner from '../../components/Website/banner/TimeBanner';
import Discount from '../../components/Website/discount';
import Support from '../../components/Website/cta/Support';
import ChatBanner from '../../components/Website/cta/ChatBanner';
import Footer from '../../components/Website/Footer';
import ModalWrapper from '../../components/Modal';
import { useEffect, useState } from 'react';
import { GET } from '../../utilities/ApiProvider';
import { useDispatch } from 'react-redux';
import { setWebsiteData } from '../../reducers/slices/website.slice';

function ChangePassword({ onClose }) {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  useEffect(() => {
    async function fetchArea() {
      try {
        const response = await GET('/store');
        if (response.status === 'success') {
          setData(response.data);
        } else {
          console.log('Error while fetching area');
        }
      } catch (error) {
        console.log(error, 'error while fetching area');
      }
    }
    fetchArea();
  }, []);
  async function getHomeData() {
    try {
      const response = await GET(`/users/webHome?storeId=${selectedArea}`);
      dispatch(setWebsiteData(response));
    } catch (error) {
      console.error('An error occurred while fetching user data:', error);
    }
  }
  const handleSubmit = () => {
    if (selectedArea !== null) {
      localStorage.setItem('storeId', selectedArea);
      getHomeData();
    
      onClose();
    }
  };
  return (
    <Stack display={'flex'} flexDirection={'column'} gap={3}>
      <FormControl>
        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>
          State
        </FormLabel>
        <Input
          background={'#F3F3F3'}
          border={'1px solid #B4B4B4'}
          py={6}
          defaultValue={'Karachi'}
          type="text"
          placeholder="Enter Your State"
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize={'16px'} fontWeight={'500'} lineHeight={'30px'}>
          Area
        </FormLabel>

        <Select onChange={e => setSelectedArea(e.target.value)} size={'lg'}>
          <option value="Select">Select</option>
          {data?.map(item => (
            <option value={item._id}>{item.area}</option>
          ))}
        </Select>
      </FormControl>
      <Stack py={3}>
        <Button
          padding={'10px 50px'}
          bg={
            'var(--New-Gradient, radial-gradient(292.31% 292.31% at -20.05% -138.79%, #FFF 0%, #FBB03B 50%, #C4272E 100%)) '
          }
          color={'#fff'}
          fontWeight={'500'}
          lineHeight={'inherit'}
          borderRadius={12}
          h="45px"
          _hover={{
            color: '#000',
          }}
          onClick={handleSubmit}
        >
          Continue
        </Button>
      </Stack>
    </Stack>
  );
}

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const storeId = localStorage.getItem('storeId');
    if (!storeId) {
      onOpen();
    }
  }, []);

  return (
    <>
      <ModalWrapper
        isOpen={isOpen}
        onClose={onClose}
        title={'Choose your location'}
        // subTitle={'You want to “Unblock” this user?'}
        children={<ChangePassword onClose={onClose} />}
        size={'lg'}
        isCentered={true}
      />
      <Header />
      <Banner />
      <Categories />
      <TopRated />
      <SmBanner />
      <Arrivals />
      <TimeBanner />
      <Discount />
      <Support />
      <ChatBanner />
      <Footer />
    </>
  );
}
