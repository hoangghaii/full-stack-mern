import { LoginForm } from "components/auth/LoginForm";
import { RegisterForm } from "components/auth/RegisterForm";
import { useCheckAuth } from "features";
import { FC } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Redirect, RouteComponentProps } from "react-router";

type PropTypes = {
  authPath: "login" | "register";
};

export const Auth: FC<PropTypes & RouteComponentProps> = (props: PropTypes) => {
  const { authPath } = props;

  const { authInfo } = useCheckAuth();

  let body;

  if (authInfo?.authLoading) {
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (authInfo?.isAuthenticated) return <Redirect to="/dashboard" />;
  else
    body = (
      <>
        {authPath === "login" && <LoginForm />}
        {authPath === "register" && <RegisterForm />}
      </>
    );

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>LearnIt</h1>
          <h4>Keep track of what you are learning!</h4>
          {body}
        </div>
      </div>
    </div>
  );
};
