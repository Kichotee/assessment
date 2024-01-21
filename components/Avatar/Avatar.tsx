import React from "react";
// import { FaCaretDown } from "react-icons/fa6";
import { initials } from "@/utils/initials";
import Image from "next/image";
// import { DropDown } from "../Dropdown/DropDown";

type AvatarProps = {
  src?: string;
  name: string;
};

const Avatar = ({ src, name }: AvatarProps) => {
  return (
    <div className="items-center cursor  flex">
      <div className=" px-2 py-2 rounded-full flex bg-gray-200">
        {src ? <Image alt="" src={src} /> : <div>{initials(name)}</div>}
      </div>
      {/* <FaCaretDown /> */}
   
    </div>
  );
};

export default Avatar;
