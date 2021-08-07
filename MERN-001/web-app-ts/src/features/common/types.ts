/** error hander */
export type ErrorHandlerType = (e: Error) => void;

export type UserType = {
	username: string;
	password: string;
};

export type AuthResponseType = {
	success: boolean;
	message: string;
	accessToken: string;
};
