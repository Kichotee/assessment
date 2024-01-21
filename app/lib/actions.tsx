"use server";

import signIn from "@/auth";

export async function authenticate(formData: FormData) {
  try {
      console.log(formData)
    await signIn("credentials", formData);

  } catch (error) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
