import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import { IChildren } from "@/types";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex relative   min-h-screen bg-neutral-commonBg no-scrollbar text-text-offWhite flex-row">
      <Sidebar />
      <main className="flex-1 text-[#111] pt-2 h-[calc(100vh-70px)] overflow-y-auto">
        <Header />
        <section className="md:px-7 px-5">

        {children}
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
