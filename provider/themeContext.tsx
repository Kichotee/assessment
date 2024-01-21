/* eslint-disable react/jsx-no-constructed-context-values */
"use client"
import { IChildren } from "@/types";
import React, { createContext } from "react";

interface IProps {
  isSmallScreen: boolean;
  sideBarWidth: string;
  isSideBarCollapsed: boolean;
  toggleSideBar: () => void;
  isSideBarOpen: boolean;
}

export const ThemeContext = createContext<IProps>({
  isSmallScreen: false,
  sideBarWidth: "300px",
  isSideBarCollapsed: false,
  toggleSideBar: () => {},
  isSideBarOpen: false,
});

export default function ThemeContextProvider({ children }: IChildren) {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  const [isSideBarCollapsed, setIsSidebarCollapsed] = React.useState(false);
  const sideBarWidth = React.useMemo(() => {
    if (isSmallScreen) return "18.75rem";
    
    return isSideBarCollapsed ? "80px" : "15rem";
  }, [isSmallScreen]);

  const toggleSideBar = () => {
    setIsSideBarOpen((prev)=>{return !prev});
  };


  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };
  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const contextValue = {
    isSmallScreen,
    isSideBarOpen,
    isSideBarCollapsed,
    sideBarWidth,
    toggleSideBar: React.useCallback(() => {
   

      toggleSideBar();
    }, []),
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}
