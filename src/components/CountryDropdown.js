import React,{useState, useEffect,useContext} from 'react';
import {RiMapPinLine,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';
import {HouseContext} from './HouseContext';
import{Menu} from '@headlessui/react';

const CountryDropdown = () => {
  const {country, setCountry,countries}= useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return(
    <Menu as='div' className='dropdown relative'>
      <Menu.Button className='dropdown-btn'>
        <RiMapPinLine className='dropdown-icon-primary' />
          <div>
            <div className='text-[15px] font-medium leading-tight'>{country}</div>
            <div className='text-[13px]'>Select your place</div>
            </div>
            {isOpen ? (
                <RiArrowUpSLine className='dropdown-icon-secondary'/>
              ): (<RiArrowDownSLine className='dropdown-icon-secondary'/>
              )}  
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
         {countries.map((country,index)=>{
          return(
            <Menu.Item onClick={()=> setCountry(country)} as='li' key={index} className='cursor-pointer hover:text-violet-700 transition'>
              {country}
            </Menu.Item>
          );
         })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
