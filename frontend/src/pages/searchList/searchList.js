import React from "react";
import {
  Table,
  Button,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const SearchList = () => {
  return (
    <>
      <Container>
        <div
          style={{
            borderBottom: "1px solid #a5a4a4",
            padding: "2%",
            marginTop: "2%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <h3 style={{ color: "grey", paddingBottom:'3%' }}>Histórico de pesquisas </h3>

          <div id="searchHeader"
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center"
            }}
          >
            <div id='buttonsHeader' style={{marginRight:'1%'}}>
              <Button className="btnFiltrar" variant="success" >
                Filtrar
              </Button>{' '}
              <Button className="btnFiltrar" variant="danger" >
                Limpar filtro
              </Button>
            </div>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              style={{ width: "50%" }}
            />
          </div>
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
              <th>Sentimento principal</th>
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
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default SearchList;
