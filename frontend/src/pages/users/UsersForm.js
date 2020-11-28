import React, { useCallback, useEffect, useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { FaUserPlus, FaPen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import DefaultForm from "../../components/Form";
import {
  updateUsers,
  deleteUsers,
  createUsers,
  findUsers,
} from "../../store/users/users.action";

const usersForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEdit, setIsEdit] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const { id } = props.match.params;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    if (!id) setIsEdit(false);
  }, []);

  useEffect(() => {
    if (!id) return;
    dispatch(findUsers(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!id) return;
    if (!user) return;
    if (user.id !== Number(id)) return;

    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
  }, [user, id]);

  const onChange = (setState) => (event) => setState(event.target.value);

  const onRegister = useCallback(() => {
    const values = { name, email, password };
    dispatch(createUsers(values));
  }, [dispatch, name, email, password]);

  const onUpdateUser = useCallback(() => {
    const values = { name, email };
    dispatch(updateUsers(values, id));
  }, [dispatch, name, email, id]);

  const onDeleteUser = useCallback(() => {
    dispatch(deleteUsers(id));
  }, [dispatch, id]);

  return (
    <DefaultForm
      icon={<FaPen />}
      title={isEdit? "Editar usuário": "Cadastrar usuário"}
      arrowBackReplace="/users"
    >
      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          placeholder="Ex: Juan Luna"
          onChange={onChange(setName)}
          value={name}
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridBirthday">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          placeholder="Ex: Juan@mail.com"
          onChange={onChange(setEmail)}
          value={email}
        />
      </Form.Group>
      {!isEdit && (
        <Form.Group as={Col} controlId="formGridCpf">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha"
            onChange={onChange(setPassword)}
            value={password}
          />
        </Form.Group>
      )}
      {isEdit ? (
        <>
          <Button
            variant="outline-success"
            onClick={() => {
              onUpdateUser();
            }}
          >
            Editar
          </Button>{" "}
          <Button
            variant="outline-danger"
            type="reset"
            onClick={() => onDeleteUser()}
          >
            Deletar
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="outline-success"
            onClick={() => onRegister()}
          >
            Cadastrar
          </Button>{" "}
          <Button
            variant="outline-secondary"
            onClick={() => {
              window.location.replace("/users");
            }}
          >
            Cancelar
          </Button>
        </>
      )}
    </DefaultForm>
  );
};

export default usersForm;
