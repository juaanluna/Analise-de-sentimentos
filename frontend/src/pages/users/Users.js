import React from 'react';
import { Table, Container, Button } from 'react-bootstrap';

const Users = () => {
  const agua = 123;
  return (
    <div>
      <Container>
        <div
          style={{
            borderBottom: '1px solid #a5a4a4',
            padding: '2%',
            marginTop: '2%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <h3 style={{ color: 'grey' }}>Usuários</h3>
          <Button
            variant="success"
            onClick={() => {
              window.location.replace('/usersForm');
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default Users;
