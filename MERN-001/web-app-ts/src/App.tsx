import { Landing } from "components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Auth } from "views/Auth";
import "./App.css";

function App() {
	return (
		<RecoilRoot>
			<Router>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route
						exact
						path="/login"
						render={(props) => <Auth {...props} authPath="login" />}
					/>
					<Route
						exact
						path="/register"
						render={(props) => <Auth {...props} authPath="register" />}
					/>
				</Switch>
			</Router>
		</RecoilRoot>
	);
}

export default App;
