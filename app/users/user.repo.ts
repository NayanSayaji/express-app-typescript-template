import { UserModel } from "./user.schema";
import { UserI } from "./user.types";

const find = async (query: Partial<UserI>) => await UserModel.find(query)

const findOne = async (query: Partial<UserI>) => await UserModel.findOne({ $or: [{ username: query.username }, { email: query.email }] })

const insertOne = async (query: UserI) => await UserModel.create(query)

export default {
    find, findOne, insertOne
}













