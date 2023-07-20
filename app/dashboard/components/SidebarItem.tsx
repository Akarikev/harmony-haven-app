import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SideBarItemProps {
  icon: IconType;
  label: string;
  active: boolean ;
  href: string;
}

export default function SidebarItem ({
  icon: Icon,
  label,
  active,
  href,
} :SideBarItemProps){
  return (
    <Link
      href={href}
      className={twMerge(
        `
      flex 
      flex-row
      h-auto
      items-center
      w-full
      gap-x-4
      font-medium
      text-md
      cursor-pointer
      hover:text-blue-300
      transition
      text-black
      py-1
  `,
        active && "text-white bg-blue-700 p-2 rounded-md"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

