import { useCheckAuth } from "features";
import React from "react";

interface Props {}

export const Dashboard = (props: Props) => {
	const { authInfo } = useCheckAuth();
	console.log(authInfo?.user);

	return <div>Dashboard</div>;
};
