import React, { FC } from "react";
import { Redirect } from "react-router";

type PropTypes = {};

export const Landing: FC = (props: PropTypes) => {
	return <Redirect to="/login" />;
};
