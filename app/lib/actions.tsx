"use server";
import signIn from "@/firebase/signIn";
import signUp from "@/firebase/signup";
import { Auth } from "@/types";
import { UserCredential } from "firebase/auth";
import { redirect } from "next/navigation";
import getDocument from "@/firebase/firestore/getData";

const onloginSubmit = async (data: Auth) => {
  try {
    const response = await signIn(data);

    if (response) {
      const id = response.result?.user.uid;
      // const user = getDocument("users", id);
      console.log(id);
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
  }
};

const onSignupSubmit = async (data: Auth) => {
  // Send login request to your JSON server
  try {
    const response = await signUp(data);

    if (response) {
      console.log(response);
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

export async function handleMyFormSubmit(data: Auth) {
  console.log({ firstName: data.password, email: data.email });

  const res = await onloginSubmit(data);

  return redirect("/dashboard");
}
export async function handleSignupSubmit(data: Auth) {
  console.log({ firstName: data.password, email: data.email });

  onSignupSubmit(data);
}
