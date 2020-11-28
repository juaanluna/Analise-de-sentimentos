import React, { useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { getUsers } from "../../store/users/users.action";
import { useDispatch, useSelector } from "react-redux";
import { FaPen, FaRegEye } from "react-icons/fa";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.users.users);
  return (
    <div>
      <Container>
        <div
          style={{
            borderBottom: "1px solid #a5a4a4",
            padding: "2%",
            marginTop: "2%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3 style={{ color: "grey" }}>Usuários</h3>
          <Button
            variant="success"
            onClick={() => {
              window.location.replace("/users/form");
            }}
          >
            Adicionar novo usuário
          </Button>
        </div>

        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{ marginTop: "3%" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th></th>
            </tr>
          </thead>
          {users.map((usuarios) => (
            <>
              <tbody>
                <tr>
                  <td>{usuarios.id}</td>
                  <td>{usuarios.name}</td>
                  <td>{usuarios.email}</td>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <a
            
                        href={`/users/form/${usuarios.id}`}
                      
                      style={{ color: "white" }}
                    >
                      <FaPen />
                    </a>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </Table>
      </Container>
    </div>
  );
};
export default Users;
