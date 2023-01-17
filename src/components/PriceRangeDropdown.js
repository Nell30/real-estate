import React,{useState, useEffect,useContext} from 'react';
import {RiHome5Line,RiArrowDownSLine,RiArrowUpSLine,RiWallet3Line} from 'react-icons/ri';
import {HouseContext} from './HouseContext';
import{Menu} from '@headlessui/react';

const PropertyDropdown = () => {
  const {price, setPrice}= useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '10000 - 30000',
    },
    {
      value: '30000 - 40000',
    },
  ]

  return(
    <Menu as='div' className='dropdown relative'>
      <Menu.Button className='dropdown-btn'>
        <RiWallet3Line className='dropdown-icon-primary' />
          <div>
            <div className='text-[15px] font-medium leading-tight'>{price}</div>
            <div className='text-[13px]'>Choose price range</div>
            </div>
            {isOpen ? (
                <RiArrowUpSLine className='dropdown-icon-secondary'/>
              ): (<RiArrowDownSLine className='dropdown-icon-secondary'/>
              )}  
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
         {prices.map((price,index)=>{
          return(
            <Menu.Item onClick={()=> setPrice(price.value)} as='li' key={index} className='cursor-pointer hover:text-violet-700 transition'>
              {price.value}
            </Menu.Item>
          );
         })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
