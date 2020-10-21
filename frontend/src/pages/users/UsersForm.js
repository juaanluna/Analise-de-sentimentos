import React from "react";
import { Form, Col } from "react-bootstrap";
import { FaUserPlus } from "react-icons/fa";
import DefaultForm from "../../components/Form";

const usersForm = () => {
  return (
    <DefaultForm
      icon={<FaUserPlus />}
      title="Cadastrar usuário"
      arrowBackReplace="/users"
      buttonSubmit="Salvar"
      buttonCancel="Cancelar"
    >
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="email" placeholder="Ex: Juan Luna" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBirthday">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="" placeholder="Ex: Juan@mail.com" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridCpf">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Confirmar senha</Form.Label>
          <Form.Control type="password" placeholder='Confirmar sua senha'/>
        </Form.Group>
      </Form.Row>
     
    </DefaultForm>
  );
};

export default usersForm;
