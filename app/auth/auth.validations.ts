import { body, params, query } from "../utils/validation";
import { Credentials, signUpCredentials,  } from "./auth.types";

export const LoginValidations = [
    body(Credentials),
    // params(CredentialsI),
    // query(CredentialsI)
];
    
export const SignUpValidations = [
    body(signUpCredentials),
    // params(CredentialsI),
    // query(CredentialsI)
]