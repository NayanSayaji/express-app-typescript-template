import { z } from "zod";
import { IUserResponses, UserSchema } from "../users/user.types";

export interface CredentialI extends z.infer<typeof Credentials> { };

export const Credentials = UserSchema.pick({ username: true, password: true });

export interface IAuthResponses extends IUserResponses { }

export const signUpCredentials = UserSchema.pick({ username: true, password: true, name: true, email: true, role: true })