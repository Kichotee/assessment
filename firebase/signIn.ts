import {Auth} from "@/types";

import firebase_app from "./config";

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signIn(body:Auth){
    let result = null,
    error = null;
    const{email, password} = body
try {
    result = await signInWithEmailAndPassword(auth, email, password);
} catch (e) {
    error = e;
}

return { result, error };
}
