import { promises as fs } from "fs";

import ControlledOutlineInput from "@/components/Input/controlledOutlineInput";
import OutlinedInput from "@/components/Input/outlinedInput";
import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import Logo from "@/components/logo";
import LoginForm from "@/components/auth/LoginForm";

type IProps = {
  isLoggedIn: boolean;
};

const Login = async (props: IProps) => {
  const { isLoggedIn } = props;

  if (isLoggedIn) {
    return redirect("/dashboard"); // Redirect to protected page
  }
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
        <h3 className="">Sign in to Payer</h3>
        {/* <form
          action={authenticate}
          className="flex flex-col gap-4 w-[24rem] items-center py-4 px-2  "
        >
          <input
            className="outline-0 border text-sm py-1 px-2 rounded focus:outline-0 blur:outline-0 focus:border-brand-primary blur:border-brand-primary"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="border focus:outline-0 blur:outline-0 text-sm py-1 px-2 rounded focus:border-brand-primary blur:border-brand-primary"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button
            className="bg-brand-primary text-sm py-2  rounded w-[30%] text-white hover:"
            type="submit"
          >
            Login
          </button>
        </form> */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
