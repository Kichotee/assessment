"use client";

import { useFormStatus } from "react-dom";
import Button from "./Button";
import CircularProgress from "../CircularProgress";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="contained"
      themeColor="main"
      type="submit"
      aria-disabled={pending}
    >
      {pending ? (
        <div className="flex justify-center">
          <CircularProgress color="white" />
        </div>
      ) : (
        "Submit"
      )}
    </Button>
  );
}
