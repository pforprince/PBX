import React from "react";
import { Card, Table } from "react-bootstrap";
import { data } from "../../dummyData/Data";

const QueueMemberActivity = () => {
  return (
    <>
      <Card
        className="m-2"
        style={{
          maxHeight: "350px",
          overflowX: "scroll",
        }}
      >
        <Card.Header>Queue Member Activity - Sales Queue</Card.Header>
        <Table hover size="sm">
          <thead>
            <tr>
              <td>Member Name</td>
              <td>Login</td>
              <td>Caller</td>
              <td>Duration</td>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.name}</td>
                <td>
                  100 <i className="fas fa-check-circle text-success"></i>
                </td>
                <td>-</td>
                <td>- </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default QueueMemberActivity;
