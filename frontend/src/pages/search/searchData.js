import React, { useCallback, useState } from "react";
import { Button, FormControl, Container } from "react-bootstrap";
import { toastr } from "react-redux-toastr";

const SearchData = () => {
  const [search, setSearch] = useState("");
  const onChange = (setState) => (event) => setState(event.target.value);

  return (
    <Container>
      <div
        style={{
          padding: "140px 0",
          marginTop: "2%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            color: "grey",
            paddingBottom: "3%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Pesquisar{" "}
        </h3>

        <div
          id="searchHeader"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div id="buttonsHeader" style={{ marginRight: "1%" }}>
            <Button
              className="btnFiltrar"
              variant="success"
              onClick={() => toastr.success("Pesquisa realizada com sucesso")}
            >
              Pesquisar
            </Button>{" "}
            <Button
              className="btnFiltrar"
              variant="danger"
              onClick={() => toastr.error("Falha ao executar pesquisa")}
            >
              Limpar Campo
            </Button>
          </div>
          <FormControl
            onChange={onChange(setSearch)}
            value={search}
            placeholder="Pesquisar assunto"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ width: "50%" }}
          />
        </div>
      </div>
    </Container>
  );
};
export default SearchData;
