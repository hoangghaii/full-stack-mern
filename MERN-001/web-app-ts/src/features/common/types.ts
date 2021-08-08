/** error hander */
export type ErrorHandlerType = (e: Error) => void;

export type UserType = {
	username: string;
	password: string;
};

export type RegisterType = {
	username: string;
	password: string;
	confirmPassword: string;
};

export type AuthResponseType = {
	success: boolean;
	message: string;
	accessToken: string;
};

export type MessageType = "success" | "info" | "warn" | "error";
