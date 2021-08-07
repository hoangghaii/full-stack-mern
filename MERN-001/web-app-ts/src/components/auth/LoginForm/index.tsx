import { authState, useChangeLoginForm } from "features";
import { useLogin } from "features/auth/hook/useLogin";
import { FC, Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

type PropTypes = {};

export const LoginForm: FC = (props: PropTypes) => {
	const { onChangeLoginForm, loginForm } = useChangeLoginForm();
	const { onLogin } = useLogin();
	const authToken = useRecoilValue(authState);
	console.log(authToken);

	return (
		<Fragment>
			<Form
				className="my-4"
				onSubmit={(event) => {
					onLogin(event, loginForm);
				}}
			>
				<Form.Group>
					<Form.Control
						className="my-2"
						type="text"
						placeholder="Username"
						name="username"
						value={loginForm.username}
						onChange={onChangeLoginForm}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						className="my-2"
						type="password"
						placeholder="Password"
						name="password"
						value={loginForm.password}
						onChange={onChangeLoginForm}
						required
					/>
				</Form.Group>
				<Button variant="success" type="submit" className="px-3 py-1">
					Login
				</Button>
			</Form>
			<p>
				Don't have an account?
				<Link to="/register">
					<Button variant="info" size="sm" className="ms-1 px-2">
						Register
					</Button>
				</Link>
			</p>
		</Fragment>
	);
};
