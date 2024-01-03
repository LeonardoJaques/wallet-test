import React, {useEffect} from 'react';
import HomeOrganism from '@organisms/HomeOrganism';
import {RegisterCard} from '~/services/CardsSevices';
import {useAuth} from '@contexts/index';

const HomeTemplate = () => {
  const {setData} = useAuth();
  useEffect(() => {
    async function getCard() {
      try {
        const response = await RegisterCard();
        console.log('response-a', response);
        setData(response);
        return response;
      } catch (error: any) {
        console.log('error', error);
      }
    }

    const fetchData = async () => {
      await getCard();
    };
    fetchData();
  }, [setData]);
  return <HomeOrganism />;
};

export default HomeTemplate;
