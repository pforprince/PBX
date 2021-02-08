import React from "react";
import { Card, Table } from "react-bootstrap";
import { data } from "../../dummyData/Data";

const QueueOverview = () => {
  return (
    <>
      <Card
        className="m-2"
        style={{
          maxHeight: "250px",
          overflowX: "scroll",
        }}
      >
        <Card.Header>Queue Member Activity - Sales Queue</Card.Header>
        <Table  hover size="sm">
          <thead>
            <tr>
              <td>Queue &nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>Calls</td>
              <td>Time</td>
              <td>In</td>
              <td>Busy</td>
              <td>Taken</td>
              <td>Miss</td>
              <td>ABD</td>
              <td>AVG</td>
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
                <td>- </td>
                <td>- </td>
                <td>{Math.floor(Math.random() * 20) + 10}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default QueueOverview;
