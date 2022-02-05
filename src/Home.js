import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";

const Home = ({setTextInput}) => {
  const firstName = useRef(null);
  const [name, setName] = useState("");

  // If no value entered, then send alert
  const handleClick = () => {
    setTextInput(firstName.current.value);
  };

  // Take form value, assign to name
  return (
    <div>
      <Form.Group>
        <Form.Label style={{ color: "white" }}>Enter Name</Form.Label>
        <Form.Control size="lg" type="text" placeholder="..." ref={firstName} />
      </Form.Group>
      <br />
      <Button value="test" onClick={() => handleClick()} variant="primary">
        Submit
      </Button>
      <br />
      <br />
      <span style={{color:'white'}}>{name}</span>
    </div>
  );
};

export default Home;
