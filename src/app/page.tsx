
import React from 'react';
import BrowsingSection from '@/components/BrowsingSection/page';

import HeroSection from '@/components/HeroSection/page';
import NewArrival from '@/components/NewArrival/page';
import TopSellings from '@/components/TopSellings/page';
import HappyCustomerSection from '@/components/HappyCustomer/page';
import Divider from '@/components/Divider/Divider';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <NewArrival />
      <Divider/>
      <TopSellings />
      <BrowsingSection />
      <HappyCustomerSection/>
    </div>
  );
};

export default Home;
