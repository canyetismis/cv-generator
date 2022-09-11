import React from "react";
import { Container, Row } from "react-bootstrap";

export const Wrapper = (props) => (
  <Container style={{ padding: `${props.padding}` }}>
    <Row>{props.children}</Row>
  </Container>
);

export const SectionWrapper = (props) => (
  <div
    style={{
      minHeight: "100%",
      width: "67%",
      position: "absolute",
      color: "#282C2F",
      marginLeft: "33%",
      paddingTop: "1rem",
    }}
  >
    {props.children}
  </div>
);
