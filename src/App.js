import "./App.css";

function App() {
  return <Signup />;
}

function Signup() {
  return (
    <div>
      <h3>Sign Up Form</h3>

      <div>
        Name <input type="text" />
      </div>

      <div>
        Pswd <input type="text" />
      </div>

      <div>
        Email <input type="text" />
      </div>
      <div>
        Mobile <input type="text" />
      </div>

      <div>
        <button>Register</button>
      </div>
    </div>
  );
}

export default App;
