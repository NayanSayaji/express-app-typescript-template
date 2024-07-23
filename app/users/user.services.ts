import userRepo from "./user.repo";
import { userResponses } from "./user.repsonse";
import { IUser } from "./user.types";

const find = async (query: Partial<IUser>) => await userRepo.find(query)

const findOne = async (query: Partial<IUser>, safe?: boolean) => {
    try {
        const user = await userRepo.findOne(query);
        if (!user) {
            if (safe) return null;

            throw userResponses.USER_NOT_FOUND;
        }
        return user;
    } catch (e) {
        throw e;
    }
}

const insertOne = async (user: IUser) => {
    try {
        const response = await userRepo.insertOne(user);
        if (response) return userResponses.USER_REGISTERED_SUCCESSFULLY;
        throw userResponses.USER_REGISTRATION_FAILED;
    } catch (e) {
        throw e;
    }
}

export default {
    find, findOne, insertOne,
}
