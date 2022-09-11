import React from "react";
import { Wrapper } from "../Wrapper";
import { Col } from "react-bootstrap";

export const IconText = (props) => (
  <Col xs={12} style={{ marginBottom: "0.5rem" }}>
    <Wrapper padding="0">
      <Col xs={2}>
        <div
          style={{
            width: "6mm",
            height: "6mm",
            marginRight: "0.2rem",
            borderRadius: "50%",
            backgroundColor: "beige",
            color: "#003355",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
          }}
        >
          {props.icon}
        </div>
      </Col>
      <Col xs={10} style={{ position: "relative" }}>
        <div
          style={{
            color: "beige",
            fontSize: "0.8rem",
            display: "flex",
            alignItems: "center",
            position: "absolute",
            height: "100%",
          }}
        >
          <p style={{ margin: "0" }}>{props.children}</p>
        </div>
      </Col>
    </Wrapper>
  </Col>
);
