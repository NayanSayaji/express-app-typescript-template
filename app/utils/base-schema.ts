import mongoose, { Schema, SchemaDefinitionProperty } from "mongoose";
import { UserModel } from "../users/user.schema";

export class BaseSchema extends Schema {
    constructor(schema: { [key: string]: SchemaDefinitionProperty }) {
        super({
            ...schema,
            isDeleted : {
                type:Boolean,
                require:true,
                default:false
            },
            createdAt : {
                type:Date,
                default:Date.now()
            },
            updatedAt : {
                type:Date,
                default:Date.now()
            },
            createdBy : {
                type: mongoose.Types.ObjectId,
                ref:UserModel
            }
        },{timestamps:true});
    }
}