import React from "react";
import Navbar from "../components/Navbar";
import { Col, Row } from "react-bootstrap";

import MyCalls from "../components/charts/MyCalls";
import GoogleMaps from "../components/charts/GoogleMaps";
import QuickDials from "../components/charts/QuickDials";
import CallActivity from "../components/charts/CallActivity";
import QueueMemberActivity from "../components/charts/QueueMemberActivity";
import QueueOverview from "../components/charts/QueueOverview";

const Reports = () => {
  return (
    <>
      <Navbar />
      <div className="p-3">
        <Row>
          <Col md={3} className="p-2">
            <MyCalls />
            <GoogleMaps />
            {/* my calls  */}
            {/* parked calls  */}
          </Col>
          <Col md={4} className="p-2">
            <QuickDials />
            <CallActivity />
            <QueueOverview />
            {/* quick dial  */}
            {/* call Activity */}
          </Col>
          <Col md={5} className="p-2">
            {/* Queue */}
            <QueueMemberActivity />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Reports;
