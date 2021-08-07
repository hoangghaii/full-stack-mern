import { FC, Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

type PropTypes = {};

export const RegisterForm: FC = (props: PropTypes) => {
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
				<Form.Group>
					<Form.Control
						className="my-2"
						type="password"
						placeholder="Confirm Password"
						name="confirmPassword"
						required
					/>
				</Form.Group>
				<Button variant="success" type="submit" className="px-3 py-1">
					Register
				</Button>
			</Form>
			<p>
				Already have an account?
				<Link to="/login">
					<Button variant="info" size="sm" className="ms-1 px-2">
						Login
					</Button>
				</Link>
			</p>
		</Fragment>
	);
};
