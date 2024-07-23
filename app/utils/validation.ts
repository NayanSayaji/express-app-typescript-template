import { Request, Response, NextFunction } from "express";
import { ZodObject, ZodRawShape } from "zod";

const validator =
	<T extends ZodRawShape>(source: "body" | "params" | "query", schema: ZodObject<T>, passthrough: boolean = false) => {
		return (req: Request, res: Response, next: NextFunction) => {
			try {
				if (passthrough) {
					req[source] = schema.passthrough().parse(req[source])
				} else {
					req[source] = schema.parse(req[source]);
				}
				next();
			} catch (e) {
				next({ statusCode: 400, message: "BAD REQUEST", errors: e });
			}
		};
	}

export const body = <T extends ZodRawShape>(schema: ZodObject<T>, passthrough: boolean = false) => validator("body", schema);
export const params = <T extends ZodRawShape>(schema: ZodObject<T>, passthrough: boolean = false) => validator("params", schema);
export const query = <T extends ZodRawShape>(schema: ZodObject<T>, passthrough: boolean = false) => validator("query", schema);