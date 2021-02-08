import React from "react";
import { data } from "../../dummyData/Data";

import { Card, Table } from "react-bootstrap";
const QuickDials = () => {
  return (
    <>
      <Card
        className="m-2"
        style={{
          maxHeight: "180px",
          overflowX: "scroll",
        }}
      >
        <Card.Header>Quick Dial - Contacts</Card.Header>
        <Table hover size="sm">
          <thead>
            <tr>
              <td> &nbsp; Members</td>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>
                  {d.name}
                  <i className="fas fa-user-circle text-success float-right mr-3"></i>
                </td>
                <td>
                  <i className="fas fa-phone-alt text-success"></i>
                </td>
                <td>
                  <i className="fas fa-phone-alt text-secondary"></i>
                </td>
                <td>
                  <i className="fas fa-phone-alt text-danger"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default QuickDials;
