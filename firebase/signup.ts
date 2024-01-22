import { Auth } from "@/types";
import firebase_app from "./config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUp(body:Auth) {
    let result = null,
        error = null;
        const{email, password} = body
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}