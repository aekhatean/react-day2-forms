import "./index.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [currentFormLogin, setCurrentForm] = useState(true);

  return (
    <div className="App container mt-5">
      <div className="row justify-content-between">
        <section className="forms-section col-md-4">
          {currentFormLogin ? <LoginForm /> : <RegisterForm />}
        </section>
        <section className="change-button-section col-md-4">
          <Button
            variant="outline-info"
            onClick={() => setCurrentForm(!currentFormLogin)}
          >
            {currentFormLogin ? "Register instead" : "Login instead"}
          </Button>
        </section>
      </div>
    </div>
  );
}

export default App;
