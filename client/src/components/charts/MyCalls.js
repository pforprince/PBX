import React, { useState } from "react";
import { Card, Table, Row, Col } from "react-bootstrap";
import { data } from "../../dummyData/Data";

const MyCalls = () => {
  const [showCalls, setShowCalls] = useState(true);
  const [showVoiceCall, setShowVoiceCalls] = useState(false);
  const [showCallLogs, setShowCallLogs] = useState(false);

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
        >
          <div>
            <a
              onClick={(e) => {
                setShowCalls(true);
                setShowCallLogs(false);
                setShowVoiceCalls(false);
              }}
              className=""
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
              className=""
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
              className=""
            >
              Voice Mail
            </a>
          </div>
        </div>

        {showCalls ? <CallLogs /> : showVoiceCall ? <VoiceMail /> : <Call />}
      </Card>
    </>
  );
};

const CallLogs = () => {
  return (
    <ul class="list-group">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  );
};

const Call = () => {
  return (
    <>
      <div className="mb-2">
        <li class="list-group-item bg-info">
          Donald Trump <span style={{fontSize:"10px", fontWeight:'bold'}}> -104</span>
          <p className="float-right"> 0.45</p>
        </li>
        <div></div>
      </div>
      <Row>
        <Col md={4}>
          <div class="text-center ">
            <i
              style={{ fontSize: "1.8rem" }}
              class="fas fa-pause-circle text-success"
            ></i>
            <p className="text-success">Hold</p>
          </div>
        </Col>
        <Col md={4}>
          <div class="text-center ">
            <i
              style={{ fontSize: "1.8rem" }}
              class="fas fa-exchange-alt text-success"
            ></i>
            <p className="text-success">Transfer</p>
          </div>
        </Col>
        <Col md={4}>
          <div class="text-center ">
            <i
              style={{ fontSize: "1.8rem" }}
              class="fab fa-product-hunt text-success"
            ></i>
            <p className="text-success">Park</p>
          </div>
        </Col>
        <Col md={4}>
          <div class="text-center ">
            <i
              style={{ fontSize: "1.8rem" }}
              class="fas fa-microphone-alt text-success"
            ></i>
            <p className="text-success">Record</p>
          </div>
        </Col>
        <Col md={4}>
          <div class="text-center">
            <i
              style={{ fontSize: "1.8rem", transform: [{ rotateY: "180deg" }] }}
              class="fas fa-phone text-danger"
            ></i>
            <p className="text-danger">End</p>
          </div>
        </Col>
      </Row>
    </>
  );
};

const VoiceMail = () => {
  return <h2>Voice Component</h2>;
};

export default MyCalls;
