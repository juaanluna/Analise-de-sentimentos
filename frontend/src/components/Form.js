import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

const DefaultForm = ({
  title,
  children,
  buttonSubmit,
  buttonCancel,
  arrowBackReplace,
  icon,
}) => {
  return (
    <>
      <Container>
        <div className="card" style={{ margin: "30px 0px" }}>
          <a
            className="arrowBack"
            href={arrowBackReplace}
            style={{ color: "#343A40", padding: "10px", alignItems: "center" }}
          >
            <FaArrowLeft /> Voltar
          </a>{" "}
          <div
            className="card-header"
            style={{
              background: "#343A40",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <a
              className="formIcon"
              style={{ color: "white", padding: "10px", alignItems: "center" }}
            >
              {icon}
            </a>{" "}
            <h4 style={{ margin: "0px" }}>{title}</h4>
          </div>
          <div className="card-body">
            <Form sm={8}>
              {children}
            
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DefaultForm;
