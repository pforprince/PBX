import React from "react";
import { Card, Table } from "react-bootstrap";
import {data} from '../../dummyData/Data'

const ParkedCalls = () => {
  return (
    <>
      <Card
        className="m-2"
        style={{
          maxHeight: "250px",
          overflowX: "scroll",
        }}
      >
        <Card.Header>Parket Calls </Card.Header>
        <Table hover size="sm">
          <thead>
            <tr>
              <td>Calls</td>
              <td>Call Log</td>
              <td>Voice Mail</td>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr>
                <td>{d.name}</td>
                <td>
                  <i class="fas fa-check-circle text-success"></i>
                </td>
                <td>-</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default ParkedCalls;
