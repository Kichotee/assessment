import React from "react";
import { FaBook, FaCashRegister, FaCreditCard, FaHouse, FaMoneyBillTransfer, FaUpload, FaUser, FaVideo } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";

type SidebarLink = Array<{
  key: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  allowedRoles: Array<number>;
  visible?: boolean;
}>;

export const DASHBOARD_SIDEBAR_LINKS: SidebarLink = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <RxDashboard size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Transactions",
    label: "Transactions",
    path: "/dashboard/transactions",
    icon: <GrTransaction size={18} />,
    allowedRoles: [0],
    visible: true,
  },

  {
    key: "Users",
    label: "Users",
    path: "/dashboard/users",
    icon:<FaUser size={18} />,
    allowedRoles: [0],
    visible: true,
  },
 
  // {
  //   key: "Earnings",
  //   label: "Earnings",
  //   path: "/auth/earnings",
  //   icon: <FaCashRegister size={18} />,
  //   allowedRoles: [0],
  //   visible: true,
  // },
  // {
  //   key: "Withdrawal",
  //   label: "Withdrawal",
  //   path: "/auth/withdrawal",
  //   icon: <FaCreditCard size={18} />,
  //   allowedRoles: [0],
  //   visible: true,
  // },
 
];
