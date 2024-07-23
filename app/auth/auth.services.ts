import { compare } from "bcrypt";
import userService from "../users/user.services";
import { UserI } from "../users/user.types";
import { encrypt } from "../utils/encrypt";
import { authReponses } from "./auth.responses";
import { sign } from "jsonwebtoken";

const find = async (credentials: Partial<UserI>) => {
    const user = await userService.findOne({ username: credentials.username });
    if (!user?.username) throw authReponses.USER_NOT_FOUND;

    const { password, ...restOfTheUser } = user;
    return restOfTheUser;
}

const login = async (credentials: UserI) => {
    try {

        const user = await userService.findOne({ username: credentials.username });

        if (!user?.username) throw authReponses.USER_NOT_FOUND;

        const didMatch = await compare(credentials.password, user.password);

        if (!didMatch) throw authReponses.WRONG_PASSWORD;
        const { password, ...restOfTheUser } = user;

        const { JWT_ACCESS_TOKEN } = process.env;

        const accessToken = sign(restOfTheUser, JWT_ACCESS_TOKEN)

        return { user: restOfTheUser, accessToken };

    } catch (e) {
        throw e;
    }
};

const register = async (userData: UserI) => {
    try {
        const User = await userService.findOne({ username: userData.username, email: userData.email }, true);
        if (User?.username === userData.username && User?.email === userData.email) {
            throw authReponses.USER_ALREADY_EXIST_WITH_THIS_EMAIL_AND_USERNAME;
        }
        else if (User?.username === userData.username) {
            throw authReponses.USER_ALREADY_EXIST_WITH_THIS_USERNAME;
        }
        else if (User?.email === userData.email) {
            throw authReponses.USER_ALREADY_EXIST_WITH_THIS_EMAIL;
        }
        userData.password = await encrypt(userData.password)
        return await userService.insertOne(userData);
    } catch (e) {
        console.log(e)
        throw e;
    }
}

export default {
    login,
    register,
    find
}
