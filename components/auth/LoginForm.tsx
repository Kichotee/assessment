"use client";

import { useForm } from "react-hook-form";
import { handleMyFormSubmit } from "@/app/lib/actions";
import ControlledOutlineInput from "../Input/controlledOutlineInput";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";
import { SubmitButton } from "../Buttons/SubmitButton";
import { Auth } from "@/types";


// export type MyFormFields = z.infer<typeof myFormSchema>;

export default function LoginForm() {

  const onSubmit = async (data:Auth) => {
    const res = await handleMyFormSubmit(data);
   
    if (res) {
      
      return;
    }
  };

  const form = useForm({
    defaultValues: {
      password: "",
      email: "",
    },
  });

  return (
    <form
      action={onSubmit}
      className="flex flex-col gap-2"
    >
      <div>
        {/* <label>First name</label>
        <input {...form.register("firstName")}/> */}
        <ControlledOutlineInput
          control={form.control}
          name="email"
          type="email"
          label="Email"
          fullWidth
          placeholder="jhdoe@xyz.com"
        />
      </div>
      <div>
        <ControlledOutlineInput
          control={form.control}
          name="password"
          type="password"
          label="Password"
          fullWidth
          placeholder="John Doe"
        />
      </div>
    
      <SubmitButton />
    </form>
  );
}
