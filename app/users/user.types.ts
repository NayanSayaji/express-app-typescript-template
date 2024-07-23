import z, { string } from 'zod';

export interface UserResponsesI {
	[key: string]: {
		statusCode: number;
		message: string;
	};
}

export const UserSchema = z.object({
	name:z.string().max(20),
    username: z.string(),
	email:z.string(),
    password: z.string(),
	role:z.string() 
})

export interface UserI extends z.infer<typeof UserSchema>{};
