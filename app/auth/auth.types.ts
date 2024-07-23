import { string, z } from "zod";
import { UserI, UserResponsesI, UserSchema } from "../users/user.types";

export interface CredentialI extends z.infer<typeof Credentials> { };

export const Credentials = UserSchema.pick({ username: true, password: true });

export interface AuthResponsesI extends UserResponsesI { }

export const signUpCredentials = UserSchema.pick({ username: true, password: true, name: true, email: true, role: true })