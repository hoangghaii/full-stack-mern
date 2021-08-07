import { FC, Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

type PropTypes = {};

export const LoginForm: FC = (props: PropTypes) => {
	return (
		<Fragment>
			<Form className="my-4">
				<Form.Group>
					<Form.Control
						className="my-2"
						type="text"
						placeholder="Username"
						name="username"
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						className="my-2"
						type="password"
						placeholder="Password"
						name="password"
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
