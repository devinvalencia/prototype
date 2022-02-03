import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Custom Components/Home";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <Container fluid="sm">
        <Row>
          <Col><Home></Home></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
