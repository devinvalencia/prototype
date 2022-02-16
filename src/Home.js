import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef} from "react";

const Home = ({setUrl, setShowResults }) => {
  const searchCrit = useRef(null);

  // If no value entered, then send alert
  const handleClickEvent = () => {
    setShowResults(true);
    setUrl(`http://localhost:3000/location?id=${searchCrit.current.value}`);
  };

  // Take form value, assign to name
  return (
    <div>
      <Form.Group>
        <Form.Label style={{ color: "white" }}>Enter Name</Form.Label>
        <Form.Control size="lg" type="text" placeholder="..." ref={searchCrit} />
      </Form.Group>
      <br />
      <Button value="test" onClick={() => handleClickEvent()} variant="primary">
        Submit
      </Button>
      <br />
      <br />
    </div>
  );
};

export default Home;
