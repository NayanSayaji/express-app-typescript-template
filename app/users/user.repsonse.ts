import { UserResponsesI } from "./user.types";

export const userResponses: UserResponsesI = {
    USER_NOT_FOUND: {
        message: "USER NOT FOUND",
        statusCode: 404
    },
    BAD_REQUEST: {
        message: "BAD REQUEST",
        statusCode: 400
    },
    USER_ALREADY_EXIST: {
        message: "USER ALREADY EXIST",
        statusCode: 403
    },
    USER_REGISTERED_SUCCESSFULLY: {
        message: "USER REGISTERED SUCCESSFULLY",
        statusCode: 200
    }
}
