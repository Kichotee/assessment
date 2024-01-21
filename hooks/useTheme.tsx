"use client"

import React from "react";
import { ThemeContext } from "@/provider/themeContext";

function useTheme() {
  const { isSmallScreen, sideBarWidth, isSideBarCollapsed, toggleSideBar, isSideBarOpen } =
    React.useContext(ThemeContext);
  return { isSmallScreen, sideBarWidth, isSideBarCollapsed, toggleSideBar, isSideBarOpen };
}

export default useTheme;