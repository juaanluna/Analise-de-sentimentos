import React, { useCallback, useState } from "react";
import { Button, FormControl, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { sendSearchParams } from "../../store/search/search.action";

const SearchData = () => {
  const [parameter, setParameter] = useState("");
  const onChange = (setState) => (event) => setState(event.target.value);
  const dispatch = useDispatch();

  const sendSearch = useCallback(() => {
    dispatch(sendSearchParams(parameter));
  }, [dispatch, parameter]);

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
              disabled={parameter.length <= 0}
              className="btnFiltrar"
              variant="success"
              onClick={() => sendSearch()}
            >
              Pesquisar
            </Button>{" "}
            <Button
              disabled={parameter.length <= 0}
              className="btnFiltrar"
              variant="danger"
              onClick={() => setParameter("")}
            >
              Limpar Campo
            </Button>
          </div>
          <FormControl
            onChange={onChange(setParameter)}
            value={parameter}
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
