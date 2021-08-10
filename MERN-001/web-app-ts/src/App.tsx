import { ProtectedRoute } from "components/common/ProtectedRoute";
import { Landing } from "components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import { Auth } from "views/Auth";
import { Dashboard } from "views/Dashboard";
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
          <ProtectedRoute
            exact
            path="/dashboard"
            render={(props) => <Dashboard {...props} />}
          />
        </Switch>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        rtl={false}
        pauseOnFocusLoss={false}
        draggablePercent={60}
      />
    </RecoilRoot>
  );
}

export default App;
