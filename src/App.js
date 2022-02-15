import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import logo from './logo.svg';
import backgroundImg from './background.jpg';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect, useState, useCallback } from "react";
import Results from "./Results";
import MyModal from "./MyModal";

function App() {
const [results, setResults] = useState([]);
const [textInput,setTextInput] = useState('');
const [modalShow, setModalShow] = useState(true);
const [url, setUrl] = useState('http://localhost:3000/location');

useEffect (() => {
  console.log(results);
});

const fetchLocations = useCallback(async () => {
  const response = await fetch(url && textInput ? `${url}?id=${textInput}` : url);
  const json = await response.json();
  setResults(json);
}, [url, textInput]) 

  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImg})`,
      height: '100vh',
      backgroundSize: 'cover',
      overflow: 'hidden' 
    }}>

      <Container fluid="sm" style={{display: 'flex',  justifyContent:'center', alignItems:'center', alignContent: 'flexStart'}}>
          <Col>
            <Row><img src={logo} className="App-logo" alt="logo" /></Row>
            <Row><Home setTextInput={setTextInput} fetchData={fetchLocations}></Home></Row>
            <Row><Results data={results}></Results></Row>
          </Col>
      </Container>

    <MyModal show={modalShow} onHide={() => setModalShow(false)}></MyModal>
    </div>
  );
}

export default App;
