import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import logo from './logo.svg';
import backgroundImg from './background.jpg';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect, useState } from "react";
import Results from "./Results";
import MyModal from "./MyModal";

function App() {
const [results, setResults] = useState([
  {id: 1, name: 'Test1'},
  {id: 2, name: 'Test2'},
  {id: 3, name: 'Test3'},
  {id: 4, name: 'Test4'}
]);

const [textInput,setTextInput] = useState('');
const [modalShow, setModalShow] = useState(true);

useEffect (() => {
  console.log(modalShow);
});

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
            <Row><Home setTextInput={setTextInput}></Home></Row>
            <Row><Results data={results.filter( (record) => record.id == textInput)}></Results></Row>
          </Col>
      </Container>

    <MyModal show={modalShow} onHide={() => setModalShow(false)}></MyModal>
    </div>
  );
}

export default App;
