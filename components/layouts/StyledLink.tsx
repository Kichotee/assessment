"use client"
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from "styled-components"
import { useRouter } from "next/router" 
import Link from "next/link";

// import { IRoleObject } from "@/utils/constants";

type ModifiedLinkProps = {
  isActive?: boolean;
  isChildren?: boolean;
} 

const StyledLink = styled(Link)<ModifiedLinkProps>`
  display: flex;
  height: 42px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  justify-content: flex-start;
  align-items: center;
  &:before {
    content: ".";
    position: "absolute";
    width: 5px;
    left: 0;
    top: 0;
    height: 42px;
    background-color: #78c2ed;
  
    }};
  }
`;

type ILink = {
  key: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  // allowedRoles: IRoleObject[keyof IRoleObject][];
};
type ISidebarProps = {
  link: ILink;
};

function SidebarLink({ link }: ISidebarProps) {

    const router= window && useRouter();
  const pathname  = router.pathname;
  return (
    <StyledLink
      to={link.path}
      className={` ${
        pathname === link.path
          ? " border-brand-primary border rounded-md text-brand-primary"
          : `text-text- rounded hover:bg-brand-primary/80`
      }    flex items-center gap-8     pl-8 py-2 text-[14px] leading-[150%] font-[500]`}
    >
      <span className="">{link.icon}</span>
      <span className="hidden  lg:flex">{link.label}</span>
    </StyledLink>
  );
}

export default SidebarLink;
