import { useState } from 'react';
import logo from '../assets/logo.png';
import moment from 'moment';
import { useEffect } from 'react';
import Menu from './Menu';

const Header = () => {

    const [time, setTime] = useState(
      moment().format("h:mm:ss a, MMMM Do YYYY")
    );
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(moment().format("h:mm:ss a, MMMM Do YYYY"));
      }, 1000);

      return () => clearInterval(timer); // Clean up on unmount
    }, []);
    

    return (
      <div className="flex flex-col items-center justify-center bg-[#F5F5F5]  w-full">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="motto">
          <h2 className="text-xl text-[#333] mt-2">
            Where news website are built
          </h2>
        </div>
        <div className="timeDate text-[#333]">
          {time}
        </div>
  
      </div>
    );
};

export default Header;