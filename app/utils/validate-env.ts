import { z } from "zod";
import { config } from "dotenv";

const validator = z.object({
    PORT: z.coerce.number(),
    JWT_ACCESS_TOKEN: z.string(),
    JWT_REFRESH_TOKEN: z.string(),
    MONGO_DB_URI: z.string()
})

type ENV = z.infer<typeof validator>

export const validateENV = () => {
    try {
        config();
        validator.parse(process.env);
    } catch (e) {
        throw ({ message: "ENV IS NOT CONFIGURED CORRECTLY...", error: e });
    }
};

declare global {
    namespace Express {
        export interface Request {
            payload?:any,
        }
    }
    namespace NodeJS {
        interface ProcessEnv extends ENV { }
    }
}