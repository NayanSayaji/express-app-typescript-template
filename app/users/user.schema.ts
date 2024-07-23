import {Schema, model} from "mongoose";
import { UserI } from "./user.types";
import { BaseSchema } from "../utils/base-schema";

const userSchema = new BaseSchema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: 'user'
    }
});

export const UserModel = model<UserI>('User', userSchema);

