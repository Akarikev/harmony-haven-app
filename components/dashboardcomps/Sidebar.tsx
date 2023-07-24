'use client'

import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { HiHome, HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

import {CgCommunity} from 'react-icons/cg'
import {BiHomeHeart} from 'react-icons/bi'
import { usePathname } from 'next/navigation';
import {FaNoteSticky} from 'react-icons/fa6'
import SidebarItem from './SidebarItem';
interface sideBarProps {
    children: React.ReactNode,
}




const Sidebar = ({ children }:sideBarProps) => {

  const pathname = usePathname(); 
  const routes  = useMemo(
    () => [
      {
        icon: BiHomeHeart,
        label: "Home",
        active: pathname === "/dashboard" || pathname === "/dashboard/",
        href: "/dashboard/",
      },
      {
        icon: CgCommunity,
        label: "Communities",
        active: pathname === "/dashboard/community",
        href: "/dashboard/community",
      },
      {
        icon: FaNoteSticky,
        label: "Notes",
        active: pathname === "/dashboard/notes",
        href: "/dashboard/notes",
      },
    ],
    [pathname]
  );


  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        {routes.map((item) => (
        <SidebarItem key = {item.href} {...item}/>
        ))}
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;