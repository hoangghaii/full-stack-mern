import { useHeaderToken } from "features";
import React from "react";

interface Props {}

export const Dashboard = (props: Props) => {
	useHeaderToken();
	return <div>Dashboard</div>;
};
