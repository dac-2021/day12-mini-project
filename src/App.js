import "./App.css";
import { useState, useEffect } from "react";

function App() {
  return <Signup />;
}

/**
 * User {
 *  name: '',
 *  password :''
 *  email : ''
 *  mobile: ''
 * }
 */
function Signup() {
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
    </div>
  );
}

export default App;
