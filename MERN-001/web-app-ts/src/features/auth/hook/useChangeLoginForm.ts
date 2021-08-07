import { UserType } from "features/common/types";
import { useState } from "react";

export const useChangeLoginForm = () => {
	const [loginForm, setLoginForm] = useState<UserType>({
		username: "",
		password: "",
	});

	const onChangeLoginForm = (event: React.ChangeEvent<HTMLInputElement>): void =>
		setLoginForm({
			...loginForm,
			[event.target.name]: event.target.value,
		});

	return { onChangeLoginForm, loginForm };
};
