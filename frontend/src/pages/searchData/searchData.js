import React from "react";
import { Button, FormControl, Container } from "react-bootstrap";
import { Chart } from "react-google-charts";

const SearchData = () => {
  return (
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
        <h3 style={{ color: "grey", paddingBottom: "3%" }}>
          Pesquisar{" "}
        </h3>

        <div
          id="searchHeader"
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div id="buttonsHeader" style={{ marginRight: "1%" }}>
            <Button className="btnFiltrar" variant="success">
              Pesquisar
            </Button>{" "}
            <Button className="btnFiltrar" variant="danger">
              Limpar Campo
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
      <Chart
      style={{margin: '0 auto'}}
        width={"800px"}
        height={"500px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Language", "Speakers (in millions)"],
          ["Felicidade", 5.85],
          ["Tristeza", 1.66],
          ["Raiva", 0.316],
          ["Alegria", 0.0791],
        ]}
        options={{
          legend: "none",
          pieSliceText: "label",
          title: "Sentimentos do usuário pesquisado",
          pieStartAngle: 100,
        }}
        rootProps={{ "data-testid": "4" }}
      />
    </Container>
  );
};
export default SearchData;
