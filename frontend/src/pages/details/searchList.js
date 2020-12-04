import React from "react";
import {
  Table,
  Button,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FaRegListAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getSearchs } from "../../store/search/search.action";
import { useCallback, useEffect } from "react";
import { useState } from "react";

const SearchList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchs());
  }, [dispatch]);

  const searchs = useSelector((state) => state.searchs.searchs);
  const [filterList, setFilterList] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (searchs) {
      setFilterList(searchs);
    }
  }, [searchs]);

  const onFilterList = useCallback(() => {
    const list = filterList.filter(
      (i) => i.searchName.toUpperCase().indexOf(text.toUpperCase()) > -1
    );
    setFilterList(list);
  }, [text, filterList]);

  const clearFilter = useCallback(() => {
    setFilterList(searchs);
    setText("");
  }, [searchs]);

  const onChange = (setState) => (event) => setState(event.target.value);

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
          <h3 style={{ color: "grey", paddingBottom: "3%" }}>
            Histórico de pesquisas{" "}
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
              <Button
                className="btnFiltrar"
                variant="success"
                onClick={() => onFilterList()}
              >
                Filtrar
              </Button>{" "}
              <Button
                className="btnFiltrar"
                variant="danger"
                onClick={() => clearFilter()}
              >
                Limpar filtro
              </Button>
            </div>
            <FormControl
              value={text}
              onChange={onChange(setText)}
              placeholder="Pesquisar por assunto"
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
              <th>Assunto</th>
              <th>Palavra principal</th>
              <th></th>
            </tr>
          </thead>
          {filterList.map((search) => (
            <>
              <tbody>
                <tr>
                  <td>{search.id}</td>
                  <td>{search.searchName}</td>
                  <td>{search.principalWord}</td>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <a
                      href={`searchDetails/${search.id}`}
                      style={{ color: "white" }}
                    >
                      <FaRegListAlt />
                    </a>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </Table>
      </Container>
    </>
  );
};
export default SearchList;
