"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppSelector } from "./store/hooks";
import { RootState } from "./store/store";

type Props = { [key: string]: any };

const withAuth = <T extends Props>(Component: React.FC<T>) => { 
  const ProtectedRoute = (props: T) => {
  const user = useAppSelector((state: RootState) => state.user);

    const Page= Component
    const token: string | null = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.replace("/login");
      }
    }, [user, router]);

    return user ? <Page {...props} /> : null;
  };

  return ProtectedRoute;
};

export default withAuth;
