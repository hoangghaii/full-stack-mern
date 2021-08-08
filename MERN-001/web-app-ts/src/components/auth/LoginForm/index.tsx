import { useChangeLoginForm } from "features";
import { useLogin } from "features/auth/hook/useLogin";
import { FC, Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

type PropTypes = {};

export const LoginForm: FC = (props: PropTypes) => {
	const { handleSubmit, errors, isSubmitting, register, submit, setSubmit } =
		useChangeLoginForm();
	const onLogin = useLogin();

	return (
		<Fragment>
			<Form className="my-4" onSubmit={handleSubmit(onLogin)}>
				<Form.Group className={errors.username?.message ? "has-danger" : ""}>
					<Form.Control
						className={`my-2 ${
							errors.username?.message ? "is-invalid" : submit ? "is-valid" : ""
						}`}
						type="text"
						placeholder="Username"
						{...register("username")}
						name="username"
					/>
					<div className="invalid-feedback">{errors.username?.message}</div>
				</Form.Group>
				<Form.Group className={errors.password?.message ? "has-danger" : ""}>
					<Form.Control
						className={`my-2 ${
							errors.password?.message ? "is-invalid" : submit ? "is-valid" : ""
						}`}
						type="password"
						placeholder="Password"
						{...register("password")}
						name="password"
					/>
					<div className="invalid-feedback">{errors.password?.message}</div>
				</Form.Group>
				<Button
					variant="success"
					type="submit"
					className="px-3 py-1"
					onClick={() => setSubmit(true)}
					disabled={isSubmitting}
				>
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
