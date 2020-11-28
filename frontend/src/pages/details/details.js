import React, { useCallback, useState, useEffect } from "react";
import { Button, FormControl, Container } from "react-bootstrap";
import { Chart } from "react-google-charts";
import { FaArrowLeft } from "react-icons/fa";
import { findSearch } from "../../store/search/search.action";
import { useSelector, useDispatch } from "react-redux";

const Details = (props) => {
  const { id } = props.match.params;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findSearch(id));
  }, [dispatch, id]);

  const search = useSelector((state) => state.searchs.search);
  const { positives } = search;
  const { negatives } = search;

  const positivesFeelings = Number(positives);
  const negativeFeelings = Number(negatives);

  return (
    <Container>
      <div
        style={{
          borderBottom: "1px solid #a5a4a4",
          padding: "10px 0",
          marginTop: "2%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <a
          className="arrowBack"
          href={"/searchList"}
          style={{
            color: "#343A40",
            padding: "10px",
            alignItems: "center",
            marginRight: "31%",
          }}
        >
          <FaArrowLeft /> Voltar
        </a>{" "}
        <div>
          <h3
            style={{
              color: "grey",
              paddingBottom: "1%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Detalhes da pesquisa{" "}
          </h3>
          <div
            style={{
              color: "grey",
              paddingBottom: "1%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Assunto pesquisado: <b> {search.searchName}</b>{" "}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Chart
          width={"600px"}
          height={"500px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["feeling", "number"],
            ["negativo", negativeFeelings],
            ["positivo", positivesFeelings],
          ]}
          options={{
            legend: "none",
            pieSliceText: "label",
            title: "Sentimentos extraídos da pesquisa",
            pieStartAngle: 100,
          }}
          rootProps={{ "data-testid": "4" }}
        />
      </div>
    </Container>
  );
};
export default Details;
