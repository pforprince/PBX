import React from "react";
import { data } from "../../dummyData/Data";

import { Card, Table } from "react-bootstrap";
const CallActivity = () => {
  return (
    <>
      <Card
        className="m-2"
        style={{
          maxHeight: "200px",
          overflowX: "scroll",
        }}
      >
        <Card.Header>Call Activity</Card.Header>
        <Table hover size="sm">
          <thead>
            <tr>
              <td> &nbsp; Members</td>
              <th></th>
              <td>Caller</td>
              <td>Duration</td>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.name}</td>
                <td>
                  101 <i className="fas fa-user-circle text-success"></i>
                </td>
                <td>- </td>
                <td>- </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default CallActivity;
