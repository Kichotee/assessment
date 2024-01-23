import { promises as fs } from "fs";

import ControlledOutlineInput from "@/components/Input/controlledOutlineInput";
import OutlinedInput from "@/components/Input/outlinedInput";
import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import Logo from "@/components/logo";
import LoginForm from "@/components/auth/LoginForm";



const Login = async () => {
  
  return (
    <div className="flex w-full overflow-hidden items-center h-full ">
      <img
        src="/hero_img.jpg"
        className="max-w-[50%] max-h-[100%] h-full"
        alt=""
      />
      <div className="flex flex-col gap-12w w-[50%]  h-full justify-center items-center">
        <div className="max-w-[8rem]">
          <Logo />
        </div>
        <h3 className="mt-4 font-medium text-sm">Sign in to Payer</h3>
       
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
