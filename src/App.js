import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import logo from "./logo.svg";
import backgroundImg from "./background.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect, useState, useCallback } from "react";
import Results from "./Results";
import MyModal from "./MyModal";

function App() {
  const [results, setResults] = useState([]);
  const [modalShow, setModalShow] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const [url, setUrl] = useState("http://localhost:3000/location");

  const fetchLocations = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    setResults(json);
  }, [url]);

  useEffect(() => {
    // console.log(showResults);
    fetchLocations();

    // console.log(results.length);
  }, [fetchLocations, url]);


  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        height: "100vh",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Container
        fluid="sm"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "flexStart",
        }}
      >
        <Col>
          <Row>
            <img src={logo} className="App-logo" alt="logo" />
          </Row>

          <Row>
            <Home setUrl={setUrl} setShowResults={setShowResults}></Home>
          </Row>
          <Row style={{display:'flex', flexDirection: 'Row', justifyContent: 'center', alignItems: 'center'}}>
            <Results data={results} showResults={showResults}></Results>
          </Row>
        </Col>
      </Container>

      <MyModal show={modalShow} onHide={() => setModalShow(false)}></MyModal>
    </div>
  );
}

export default App;

// {results.filter( (record) => record.id === textInput)}
// FORGOT TO SET URL DUM DUM
