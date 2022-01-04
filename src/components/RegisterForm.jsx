import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function RegisterForm() {
  // States
  const [passwords, setPasswords] = useState({
    password: "",
    confirm: "",
  });

  // Logic handling
  const handleFormValidation = (e) => {
    if (passwords.password !== passwords.confirm) {
      e.preventDefault();
      alert("passwords do not match!");
    }
  };

  // Return component
  return (
    <div className="register-form">
      <h2>Register</h2>
      <Form onSubmit={(event) => handleFormValidation(event)}>
        <Form.Group className="mb-3" controlId="formUserName">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter username" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={passwords.password}
            onChange={(event) =>
              setPasswords({
                ...passwords,
                password: event.target.value,
              })
            }
            minLength={8}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formReenterPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password Again"
            value={passwords.confirm}
            onChange={(event) =>
              setPasswords({
                ...passwords,
                confirm: event.target.value,
              })
            }
            minLength={8}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to terms of service" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
