import React,{useState, useEffect,useContext} from 'react';
import {RiHome5Line,RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri';
import {HouseContext} from './HouseContext';
import{Menu} from '@headlessui/react';

const PropertyDropdown = () => {
  const {property, setProperty,properties}= useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return(
    <Menu as='div' className='dropdown relative'>
      <Menu.Button className='dropdown-btn'>
        <RiHome5Line className='dropdown-icon-primary' />
          <div>
            <div className='text-[15px] font-medium leading-tight'>{property}</div>
            <div className='text-[13px]'>Select your place</div>
            </div>
            {isOpen ? (
                <RiArrowUpSLine className='dropdown-icon-secondary'/>
              ): (<RiArrowDownSLine className='dropdown-icon-secondary'/>
              )}  
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
         {properties.map((property,index)=>{
          return(
            <Menu.Item onClick={()=> setProperty(property)} as='li' key={index} className='cursor-pointer hover:text-violet-700 transition'>
              {property}
            </Menu.Item>
          );
         })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
