import { NavbarMenu } from "components/layout/NavbarMenu";
import { useCheckAuth } from "features";
import { FC } from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route, RouteProps } from "react-router-dom";

export const ProtectedRoute: FC<RouteProps> = ({
  ...routeProps
}: RouteProps) => {
  const { authInfo } = useCheckAuth();

  if (!authInfo)
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  if (authInfo?.isAuthenticated)
    return (
      <>
        <NavbarMenu />
        <Route {...routeProps} />
      </>
    );
  else return <Redirect to="/login" />;
};
