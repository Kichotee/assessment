import { promises as fs } from "fs";

import ControlledOutlineInput from "@/components/Input/controlledOutlineInput";
import OutlinedInput from "@/components/Input/outlinedInput";
import React from "react";
import { authenticate } from "../lib/actions";
// import { useForm } from "react-hook-form";
// async function getProjects() {
//     const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
//     const projects = await JSON.parse(file)

//     return projects
//   }

const Login = async () => {
  return (
    <div className="flex justify-center items-center h-full pt-12">
      <form
        action={authenticate}
        className="flex flex-col gap-4 w-[24rem] items-center py-4 px-2 border "
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
        <button className="bg-brand-primary text-sm py-2  rounded w-[30%] text-white hover:" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
