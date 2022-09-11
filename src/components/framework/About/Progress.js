import React from "react";
import { Col, ProgressBar } from "react-bootstrap";

export const Progress = (props) => (
  <Col xs={12} style={{ fontSize: "0.8rem", marginBottom: "0.5rem" }}>
    <p style={{ marginBottom: "0", marginLeft: "0.5rem" }}>{props.name}</p>
    <ProgressBar
      style={{ width: "95%", backgroundColor: "#afafaf" }}
      now={props.value}
    />
  </Col>
);
