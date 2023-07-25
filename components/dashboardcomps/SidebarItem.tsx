import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

import { SideBarItemProps } from "@/lib/routes/route";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SideBarItem: FC<SideBarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <div>
      <Link
        href={href}
        className={twMerge(
          `
       
          p-2 rounded-lg text-center  bg-gray-100 hover:text-white hover:bg-purple-800 cursor-pointer my-4 inline-block shadow-md transition ease font-[inter] text-zinc-700 text-bold
  `,
          active &&
            "bg-purple-800 hover:text-black hover:bg-gray-200 shadow-md text-white"
        )}
      >
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Icon size={25} className="text-center flex items-center" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs text-zinc-500 font-[inter]">{label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Link>
      <span className="border-b-[1px] border-gray-200 w-full p-2 flex items-center"></span>
    </div>
  );
};

export default SideBarItem;
