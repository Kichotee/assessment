import { useRouter } from "next/navigation";
import { useAppSelector } from "./store/hooks";
import { RootState } from "./store/store";
import { useEffect } from "react";

type Props = { [key: string]: any };
const adminProtect=<T extends Props>(Component: React.FC<T>)=>{
    const RouteProtect=(props:T)=>{
        const user = useAppSelector((state: RootState) => state.user);
        const router = useRouter();
        useEffect(() => {
            if (user.user?.profile==="User") {
              router.replace("/login");
            }
          }, [user, router]);
      
          return user ? <Component {...props} /> : null;
        };

        return RouteProtect;
    }
    export default adminProtect;
