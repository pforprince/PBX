import React from "react";
import {data} from '../../dummyData/Data'

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
              <tr> &nbsp; Members</tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr>
                <td>
                  {d.name}
                  <i class="fas fa-user-circle text-success float-right mr-3"></i>
                </td>
                <td>
                  <i class="fas fa-phone-alt text-success"></i>
                </td>
                <td>
                  <i class="fas fa-phone-alt text-secondary"></i>
                </td>
                <td>
                  <i class="fas fa-phone-alt text-danger"></i>
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
