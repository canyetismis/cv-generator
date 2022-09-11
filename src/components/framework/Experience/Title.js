import React from "react";
import { Wrapper } from "../Wrapper";
import { Col } from "react-bootstrap";

export const Title = (props) => (
  <Col xs={12} style={{ marginBottom: "0.8rem" }}>
    <Wrapper>
      <Col xs={12}>
        <div
          style={{
            backgroundColor: "#003355",
            color: "beige",
            textAlign: "center",
            paddingTop: "0.15rem",
            paddingBottom: "0.15rem",
            borderRadius: "10px",
          }}
        >
          <h6 style={{ margin: "0" }}>{props.children}</h6>
        </div>
      </Col>
    </Wrapper>
  </Col>
);
