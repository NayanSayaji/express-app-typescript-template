import { UserModel } from "./user.schema";
import { IUser} from "./user.types";

const find = async (query: Partial<IUser>) => await UserModel.find(query)

const findOne = async (query: Partial<IUser>) => await UserModel.findOne({ $or: [{ username: query.username }, { email: query.email }] })

const insertOne = async (query: IUser) => await UserModel.create(query)

export default {
    find, findOne, insertOne
}













