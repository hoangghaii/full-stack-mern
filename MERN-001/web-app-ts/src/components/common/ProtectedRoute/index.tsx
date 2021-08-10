import { useCheckAuth } from "features";
import { FC } from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route, RouteProps } from "react-router-dom";

export const ProtectedRoute: FC<RouteProps> = ({
  ...routeProps
}: RouteProps) => {
  const { authInfo } = useCheckAuth();

  if (authInfo?.authLoading)
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  if (authInfo?.isAuthenticated) return <Route {...routeProps} />;
  else return <Redirect to="/login" />;
};
