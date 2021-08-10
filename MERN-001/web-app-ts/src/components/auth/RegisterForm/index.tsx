import { useChangeRegisterForm, useRegister } from "features";
import { FC, Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

type PropTypes = {};

export const RegisterForm: FC = (props: PropTypes) => {
  const { handleSubmit, errors, isSubmitting, register, submit, setSubmit } =
    useChangeRegisterForm();
  const onRegister = useRegister();

  return (
    <Fragment>
      <Form className="my-4" onSubmit={handleSubmit(onRegister)}>
        <Form.Group>
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
        <Form.Group>
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
        <Form.Group>
          <Form.Control
            className={`my-2 ${
              errors.confirmPassword?.message
                ? "is-invalid"
                : submit
                ? "is-valid"
                : ""
            }`}
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            name="confirmPassword"
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          className="px-3 py-1"
          onClick={() => setSubmit(true)}
          disabled={isSubmitting}
        >
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
