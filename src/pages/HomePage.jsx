import React from 'react';
import Header from '../components/Header';
import Marqueee from '../components/Marqueee';
import Menu from '../components/Menu';

const Home = () => {
    return (
      <div>

        <Marqueee></Marqueee>

        <div className="content flex flex-row">
          <div className="left-sidebar hidden lg:block lg:w-1/4"></div>
          <div className="center w-full lg:w-1/2"></div>
          <div className="right-sidebar hidden lg:block sm:hidden lg:w-1/4"></div>
        </div>
      </div>
    );
};

export default Home;