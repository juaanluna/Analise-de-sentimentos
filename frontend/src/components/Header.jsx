import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {logout} from '../store/users/users.action';

const Header = () => {

  const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home">Análise de sentimentos</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/users">Usuários</Nav.Link>
          <Nav.Link href="/searchData">Pesquisar</Nav.Link>
          <Nav.Link href="/searchList">Histórico</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login" onClick={() => dispatch(logout())}>Sair</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
