// Learning Notes
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import { useState, useCallback, useEffect} from "react";

// Wrap param dynamic, param for array.map is annon func that refs each element in array

const Results = ({ data, showResults }) => {

  useEffect(()=>{
    console.log(data.length);
  },[data]);

  return (
    <div>
      <Container>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          {showResults &&
            data.map((record) => (
              <Card
                style={{
                  width: "18rem",
                }}
                key={record.id}
              >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{record.name}</Card.Title>
                  <Card.Text>
                    {record.description}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          {!showResults && <div style={{color:'white'}}>Please Enter Critera</div>}
          {(data.length === 0) && <div style={{color:'white'}}>No Results</div>}
        </Row>
      </Container>
    </div>
  );
};

export default Results;
