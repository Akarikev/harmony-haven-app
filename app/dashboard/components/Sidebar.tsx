"use client";
import { FC, useMemo } from "react";
import { usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import {GiMeditation} from "react-icons/gi"

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import ModeToggle  from "./ModeToggle";
import Profile from "./Profile";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({children} : SidebarProps)  {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/dashboard/Profile",
        href: "/dashboard",
      },


      {
        icon: CgProfile,
        label: "Meditation",
        active: pathname === "/dashboard/Meditation",
        href: "/dashboard/Meditation",
      },


    ],
    [pathname]
  ) 
  
  return (
    <div className="flex h-full ">
      <div
        className="
      hidden 
      md:flex 
      flex-col
      gap-y-2
      bg-gray-200
      h-full
      w-[300px]
      p-2
      "
      >
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full flex flex-col gap-y-2 p-2">
            <h2>Accessibility</h2>
            <ModeToggle />
            <Profile className='w-10 h-10 hidden'/>
        </Box>
      </div>
      <main className="h-full overflow-y-auto flex-1 py-2">{children}</main>
    </div>
  );
};

