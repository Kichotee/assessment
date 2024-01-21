"use client"
import React from "react";
import { useSelector } from "react-redux";

// import { UserState } from "@/features/auth/store/userSlice";
import Avatar from "@/components/Avatar/Avatar";
import { RootState } from "@/app/lib/store/store";
// import LanguageSwitcher from "@/features/misc/components/languageSwitch";

const Header = () => {
    const { user } = useSelector((state: RootState) => {
      return state.user;
    });

  return (
    <header className="sticky z-10  top-0 bg-white h-16 base-theme-container flex items-center border-b border-gray-200 justify-between md:px-7 px-5">
      {/* left side */}
      <div className=" w-full flex gap-4 justify-between items-center">
        <p className="common-sub-text">Dashboard</p>

        <div className="flex">
          <Avatar name={user?.name as string} />
        </div>
      </div>
      {/* right side */}
    </header>
  );
};

export default Header;
