import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import logo from './logo.svg';
import backgroundImg from './background.jpg';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {
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
          <Row><Home></Home></Row>
          </Col>
      </Container>
    </div>
  );
}

export default App;
