import { IAuthResponses } from './auth.types';

export const authResponses: IAuthResponses = {
    WRONG_PASSWORD: {
        statusCode: 400,
        message: "Incorrect password. Please try again."
    },
    SOMETHING_WENT_WRONG: {
        statusCode: 500,
        message: "An unexpected error occurred. Please try again later."
    },
    UNAUTHORISED_ACCESS_DENIED: {
        statusCode: 401,
        message: "Unauthorized access. Permission denied."
    },
    USER_ALREADY_EXISTS_WITH_THIS_USERNAME: {
        statusCode: 403,
        message: "A user with this username already exists."
    },
    USER_ALREADY_EXISTS_WITH_THIS_EMAIL: {
        statusCode: 403,
        message: "A user with this email already exists."
    },
    USER_ALREADY_EXISTS_WITH_THIS_EMAIL_AND_USERNAME: {
        statusCode: 403,
        message: "A user with this email and username already exists."
    }
};
