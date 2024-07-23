import z from 'zod';

export interface IUserResponses {
	[key: string]: {
		statusCode: number;
		message: string;
	};
}

export const UserSchema = z.object({
	name:z.string().max(20).trim(),
    username: z.string().trim(),
	email:z.string().trim(),
    password: z.string().trim(),
	role:z.string().trim() 
})

export interface IUser extends z.infer<typeof UserSchema>{};
