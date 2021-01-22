import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      {!["/login", "/signup"].includes(location.pathname) && (
        <>
          <Link to="/">Page1 </Link>
          <Link to="/page2">Page2 </Link>
          <Link to="/page3">Page3 </Link>
        </>
      )}

      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

      <Route exact path="/" component={Page1} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
    </>
  );
}

function Page1() {
  return <div>Page1</div>;
}

function Page2() {
  const history = useHistory();

  const signOut = () => {
    history.push("/login");
  };

  return (
    <div>
      Page2
      <div>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
}

function Page3() {
  return <div>Page3</div>;
}

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({ name: "", password: "" });

  const syncName = (e) => setUser({ ...user, name: e.target.value });
  const syncPassword = (e) =>
    setUser({ ...user, password: e.target.value });

  const processLogin = () => {
    if (user.name === "" || user.password === "") {
      alert("Fail");
      return;
    }

    // time for validation with localstorage
    const localUser = localStorage.getItem("app-user");
    const localUserObj = JSON.parse(localUser);

    if (
      user.name === localUserObj.name &&
      user.password === localUserObj.password
    ) {
      console.log(user, localUserObj);
      history.push("/");
    } else {
      alert("Incorrect Credentials");
    }
  };

  const gotoRegister = () => {
    history.push("/signup");
  };

  return (
    <div>
      <h3>Login Page Ui</h3>

      <div>
        Username{" "}
        <input type="text" value={user.name} onChange={syncName} />
      </div>
      <div>
        Password{" "}
        <input
          type="password"
          value={user.password}
          onChange={syncPassword}
        />
      </div>

      <div>
        <button onClick={processLogin}>Process Login</button>
      </div>

      <div>
        <button onClick={gotoRegister}>Go To Regsiter</button>
      </div>
    </div>
  );
}

function Signup() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    mobile: "",
  });

  const syncName = (e) => setUser({ ...user, name: e.target.value });
  const syncPassword = (e) =>
    setUser({ ...user, password: e.target.value });
  const syncEmail = (e) => setUser({ ...user, email: e.target.value });
  const syncMobile = (e) => setUser({ ...user, mobile: e.target.value });

  const regiserUser = () => {
    if (user.name === "" || user.password === "") {
      return;
    }

    console.log("user", user);
    localStorage.setItem("app-user", JSON.stringify(user));

    setUser({
      name: "",
      password: "",
      email: "",
      mobile: "",
    });
  };

  const backtoLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      <h3>Sign Up Form</h3>

      <div>
        Name{" "}
        <input
          type="text"
          value={user.name}
          onChange={syncName}
          required
        />
      </div>

      <div>
        Pswd{" "}
        <input
          type="password"
          value={user.password}
          onChange={syncPassword}
          required
        />
      </div>

      <div>
        Email <input type="text" value={user.email} onChange={syncEmail} />
      </div>

      <div>
        Mobile{" "}
        <input type="text" value={user.mobile} onChange={syncMobile} />
      </div>

      <div>
        <button onClick={regiserUser}>Register</button>
      </div>

      <div>
        <button onClick={backtoLogin}>Back to Login</button>
      </div>
    </div>
  );
}

export default App;
