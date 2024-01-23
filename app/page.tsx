"use client";

import Image from "next/image";
import Login from "./login/page";
import withAuth from "./lib/protected";
import { useAppSelector } from "./lib/store/hooks";
import { RootState } from "./lib/store/store";
import Dashboard from "./dashboard/page";
import { useRouter } from "next/navigation";
import CircularProgress from "@/components/CircularProgress";
import React from "react";

function Home() {
  const router = useRouter();
  const user = useAppSelector((state: RootState) => state.user);
  React.useEffect(() => {
    if(user){
      router.replace("/dashboard") 
    }
    return router.replace("/login");
  }, []);
  return(
    <div className="flex h-full justify-center items-center">

      <CircularProgress size={48} color="orange" />
      <p className="text-xs">Validating user</p>
    </div>
     )
}
export default Home;
