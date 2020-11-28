import React, { useState, useCallback } from "react";
import { Form, Button } from "react-bootstrap";
import "./auth.css";
import { signin } from "../../store/users/users.action";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom'

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const auth = useCallback(() => {
    const values = { email, password };
    dispatch(signin(values));
  }, [dispatch, email, password]);

  const onChange = (setState) => (event) => setState(event.target.value);
  const isAuth = useSelector((state) => state.users.isAuth);

  if (isAuth) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="Login">
      <Form>
        <b style={{ display: "flex", fontSize: "29px", margin: "45px 0px" }}>
          Análise de sentimentos
        </b>
        <Form.Group size="lg" controlId="email">
          <Form.Control
            placeholder="E-mail"
            autoFocus
            type="email"
            value={email}
            onChange={onChange(setEmail)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            placeholder="Senha"
            type="password"
            value={password}
            onChange={onChange(setPassword)}
          />
        </Form.Group>
        <Button
          block
          size="lg"
          style={{ background: "#343A40" }}
          disabled={!validateForm()}
          onClick={() => auth()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Auth;
