"use client"

import React from "react";
import SidebarLink from "./StyledLink";
import { DASHBOARD_SIDEBAR_LINKS } from "./sidebarData";
import Logo from "../logo";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-brand-secondary h-screen hidden w-[80px] p-3 sm:flex flex-col pl-8  lg:w-[184px] items-start transition-all duration-300">
      <Logo />
      <div className="py-8 w-full flex flex-1 flex-col gap-8 ">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => {
          if (link.visible) {
            return (
              <div  key={link.key} className="hover:border-b border-white px-2 py-1.5">
                <Link href={link.path} className="flex text-white items-center  text-sm gap-2">
                     <p>{link.icon}</p>
                    {link.label}
                </Link>
              </div>
            );
          }
          // eslint-disable-next-line react/jsx-no-useless-fragment
          return <></>;
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
