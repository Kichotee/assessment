"use client";

import { useForm } from "react-hook-form";
import { handleMyFormSubmit, handleSignupSubmit } from "@/app/lib/actions";
import ControlledOutlineInput from "../Input/controlledOutlineInput";
import Button from "../Buttons/Button";
import Link from "next/link";
import { Auth } from "@/types";

// export type MyFormFields = z.infer<typeof myFormSchema>;

export default function SignUpForm() {
  const onMyFormSubmit = async (data:Auth) => {
    await handleSignupSubmit(data);
  };
  const form = useForm({
    // resolver: zodResolver(myFormSchema),
    defaultValues: {
      password:"",
      email: "",
    },
  });

  return (
    <form action={onMyFormSubmit} className="flex flex-col gap-2">
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
      {/* <div>
        <ControlledOutlineInput
          control={form.control}
          name="firstName"
          fullWidth
          placeholder="John Doe"
        />
      </div> */}
      <Button
        variant="contained"
        themeColor="main"
        type="submit"
        onClick={form.handleSubmit((data) => onMyFormSubmit(data))}
      >
        {" "}
        Sign up
      </Button>

      <p className="text-xs">if you have an account, sign in <span className="text-brand-primary"> <Link href={"/login"}>here</Link></span> </p>
    </form>
  );
}
