/* eslint-disable import/no-extraneous-dependencies */
"use client"
import React from "react";

import OverviewCards from "./Cards/overviewCard";
import { BiSolidBarChartSquare, BiSolidWalletAlt, BiMoney, BiSolidDiscount } from "react-icons/bi";
import { useAppSelector } from "@/app/lib/store/hooks";
import { RootState } from "@/app/lib/store/store";
import { TbCurrencyNaira } from "react-icons/tb";
// import Auth from "@/api/auth";
// import { LoginResponse } from "@/features/auth/types/Responses";

const OverviewCardsGrid = () => {
//   const user: LoginResponse = Auth.getUserObj();

const user= useAppSelector((state:RootState)=>state.user)

  const cardData = [
    {
      icon: <BiSolidBarChartSquare size={20} color="red" />,
      heading: "Account Balance",
      amount: `${ user.user?.balance}`,
    },
    {
      icon: <BiSolidWalletAlt size={20} color="green" />,
      heading: "Net Asset Balance",
      amount:`$${ 0}`,
    },
    {
      icon: <BiMoney size={20} color="blue" />,
      heading: "Transactions",
      amount: user.user?.transactions.length,
    },
    {
      icon: <BiSolidDiscount size={20} color="blue" />,
      heading: "Available margin",
      amount: 0,
    },
   
  ];
  return (
    <div className="mt-[2.05rem]">
      <div className="flex flex-wrap justify-between ">
        {cardData.map((data) => {
          return <OverviewCards key={data.heading} icon={data.icon} heading={data.heading} amount={data.amount} />;
        })}
      </div>
    </div>
  );
};

export default OverviewCardsGrid;
