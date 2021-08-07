import { LoginForm } from "components/auth/LoginForm";
import { RegisterForm } from "components/auth/RegisterForm";
import { FC } from "react";
import { RouteComponentProps } from "react-router";

type PropTypes = {
	authPath: "login" | "register";
};

export const Auth: FC<PropTypes & RouteComponentProps> = (props: PropTypes) => {
	const { authPath } = props;

	return (
		<div className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1>LearnIt</h1>
					<h4>Keep track of what you are learning!</h4>
					{authPath === "login" && <LoginForm />}
					{authPath === "register" && <RegisterForm />}
				</div>
			</div>
		</div>
	);
};
