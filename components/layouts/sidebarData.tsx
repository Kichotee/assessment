import React from "react";
import { FaBook, FaCashRegister, FaCreditCard, FaHouse, FaMoneyBillTransfer, FaUpload, FaVideo } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";

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
    path: "/dashboard/",
    icon: <FaHouse size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Transactions",
    label: "Transactions",
    path: "/dashboard/library",
    icon: <GrTransaction size={18} />,
    allowedRoles: [0],
    visible: true,
  },

  {
    key: "Transfers",
    label: "Transfers",
    path: "/dashboard/uploads",
    icon:<FaMoneyBillTransfer size={18} />,
    allowedRoles: [0],
    visible: true,
  },
  {
    key: "Upload media",
    label: "Upload media",
    path: "/auth/upload-media",
    icon: <FaVideo size={18} />,
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
