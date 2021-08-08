import { Landing } from "components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				draggablePercent={60}
				pauseOnHover
			/>
		</RecoilRoot>
	);
}

export default App;
