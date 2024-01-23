"use client";

import React from "react";
import SidebarLink from "./StyledLink";
import { DASHBOARD_SIDEBAR_LINKS } from "./sidebarData";
import Logo from "../logo";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/lib/store/hooks";
import { RootState } from "@/app/lib/store/store";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { reset } from "@/app/lib/store/user/userSlice";

const Sidebar = () => {
  const pathname = usePathname();
  const user = useAppSelector((state: RootState) => state.user);

  const dispatch=useAppDispatch();
  const router = useRouter();
  const logout =()=>{
    router.push("/login")
    if(pathname=="/login") dispatch(reset())
  }
  


  return (
    <aside className="sticky top-0 bg-neutral-greyBg border-r text-black h-screen hidden w-[80px] p-3 sm:flex flex-col   lg:w-[184px] items-start transition-all duration-300">
      <Logo />
      <div className="py-8 w-full flex  flex-1 flex-col gap-8 ">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => {
          if (link.allowedRoles.includes(user.user?.profile as string)) {
            return (
              <div
                key={link.key}
                className={`${
                  pathname === link.path
                    ? " text-white bg-black rounded-sm py-2"
                    : "text-brand-tertiary"
                } hover:border-b  mb-1 px-2 py-1.5`}
              >
                <Link
                  href={link.path}
                  className={` flex  items-center  text-sm gap-2`}
                >
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
      <div className="text-black text-sm flex gap-2 items-center cursor-pointer" onClick={logout}>
        {" "}
        <span>
          <RiLogoutCircleRLine />
        </span>
        <p>Logout</p>
      </div>
    </aside>
  );
};

export default Sidebar;
