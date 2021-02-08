import React, { useState } from "react";
import { Card, Table, Row, Col, Form } from "react-bootstrap";
import { data } from "../../dummyData/Data";

const MyCalls = () => {
  const [showCalls, setShowCalls] = useState(false);
  const [showVoiceCall, setShowVoiceCalls] = useState(false);
  const [showCallLogs, setShowCallLogs] = useState(true);

  return (
    <>
      <Card
        className="m-2"
        style={{
          maxHeight: "250px",
          overflowX: "scroll",
        }}
      >
        <Card.Header>My Calls </Card.Header>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            direction: "column",
          }}
          className="my-2"
        >
          <div>
            <a
              onClick={(e) => {
                setShowCalls(true);
                setShowCallLogs(false);
                setShowVoiceCalls(false);
              }}
              className={showCalls ? "active-class" : ""}
            >
              Calls
            </a>
          </div>
          <div>
            <a
              onClick={(e) => {
                setShowCalls(false);
                setShowCallLogs(true);
                setShowVoiceCalls(false);
              }}
              className={showCallLogs ? "active-class" : ""}
            >
              Call Logs
            </a>
          </div>
          <div>
            <a
              onClick={(e) => {
                setShowCalls(false);
                setShowCallLogs(false);
                setShowVoiceCalls(true);
              }}
              className={showVoiceCall ? "active-class" : ""}
            >
              Voice Mail
            </a>
          </div>
        </div>

        {showCalls ? <Call /> : showVoiceCall ? <VoiceMail /> : <CallLogs />}
      </Card>
    </>
  );
};

const CallLogs = () => {
  return (
    <ul className="list-group">
      {data.map((d) => {
        return (
          <div key={d.id}>
            <li className="list-group-item" key={d.id}>
              {d.name}
              <span className="text-info" style={{ fontSize: "11px" }}>
                102
              </span>
              <span
                style={{ fontSize: "12px" }}
                className="float-right text-secondary"
              >
                {d.duration} &nbsp; {d.date} - {d.time}
              </span>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

const Call = () => {
  return (
    <>
      <div className="">
        <li className="list-group-item bg-info">
          Donald Trump
          <span style={{ fontSize: "10px", fontWeight: "bold" }}> -104</span>
          <p className="float-right"> 0.45</p>
        </li>
        <div></div>
      </div>
      <Row>
        <Col md={4}>
          <div className="text-center ">
            <i
              style={{ fontSize: "1.8rem" }}
              className="fas fa-pause-circle text-success"
            ></i>
            <p className="text-success">Hold</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center ">
            <i
              style={{ fontSize: "1.8rem" }}
              className="fas fa-exchange-alt text-success"
            ></i>
            <p className="text-success">Transfer</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center ">
            <i
              style={{ fontSize: "1.8rem" }}
              className="fab fa-product-hunt text-success"
            ></i>
            <p className="text-success">Park</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center ">
            <i
              style={{ fontSize: "1.8rem" }}
              className="fas fa-microphone-alt text-success"
            ></i>
            <p className="text-success">Record</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center">
            <i
              style={{ fontSize: "1.8rem", transform: [{ rotateY: "180deg" }] }}
              className="fas fa-phone text-danger"
            ></i>
            <p className="text-danger">End</p>
          </div>
        </Col>
      </Row>
    </>
  );
};

const VoiceMail = () => {
  return (
    <div>
      <li className="list-group-item bg-info">
        Donald Trump
        <span style={{ fontSize: "10px", fontWeight: "bold" }}> -104</span>
        <p className="float-right"> 0.45</p>
      </li>
      <Form>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Range</Form.Label>
          <Form.Control type="range" />
        </Form.Group>
      </Form>
      <div className="d-flex " style={{ justifyContent: "space-around" }}>
        <div className="text-center ">
          <i
            style={{ fontSize: "1.8rem" }}
            className="fas fa-phone-alt text-success"
          ></i>
          <p className="text-success">Call Back</p>
        </div>
        <div className="text-center ">
          <i
            style={{ fontSize: "1.8rem" }}
            className="fas fa-envelope text-success"
          ></i>
          <p className="text-success">Message</p>
        </div>
        <div className="text-center ">
          <i
            style={{ fontSize: "1.8rem" }}
            className="fas fa-angle-double-right text-success"
          ></i>
          <p className="text-success">Forward</p>
        </div>
        <div className="text-center ">
          <i
            style={{ fontSize: "1.8rem" }}
            className="fas fa-trash text-danger"
          ></i>
          <p className="text-danger">Delete</p>
        </div>
      </div>
    </div>
  );
};

export default MyCalls;
