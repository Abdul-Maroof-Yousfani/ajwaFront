import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import AppRoute from './routes/Route';
import { loadUser } from './reducers/useReducers';
import { useSelector, useDispatch } from 'react-redux';
import { setWebsiteData } from './reducers/slices/website.slice';

import Cookies from 'js-cookie';
import { GET } from './utilities/ApiProvider';

function App() {
  const theme = extendTheme({
    colors: {
      primaryBlack: {
        100: '#1a1a1a',
      },
      primaryGreen: {
        100: '#0bd46e',
      },
    },
  });

  const dispatch = useDispatch();
  // const websiteData = useSelector(selectWebsiteData);

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('ajwaUser') !== null) {
        let user = JSON.parse(localStorage.getItem('ajwaUser') ?? '{}');
        dispatch(loadUser(user));
      } 
      try {
        const storeId = localStorage.getItem('storeId');
        if (storeId) {
          const response = await GET(`/users/webHome?storeId=${storeId}`);
          dispatch(setWebsiteData(response));
          // if (response?.status === 200) {
          // dispatch(loadUser(response?.data));
          // }
        }
      } catch (error) {
        console.error('An error occurred while fetching user data:', error);
      }
    })();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <AppRoute />
    </ChakraProvider>
  );
}

export default App;
