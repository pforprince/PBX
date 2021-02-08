import React from "react";
import { Card, Table } from "react-bootstrap";
import { data } from "../../dummyData/Data";
import GoogleMap from "./GoogleMap";

const ParkedCalls = () => {
  return (
    <>
      <Card
        className="m-2"
        style={{
          height: "250px",
          overflowX: "scroll",
        }}
      >
        <Card.Header>Google Maps </Card.Header>
        <Card.Body>
          <GoogleMap />
        </Card.Body>
      </Card>
    </>
  );
};

export default ParkedCalls;
