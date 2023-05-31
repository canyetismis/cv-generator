import React from "react";
import { Wrapper } from "../Wrapper";
import { Col, Image } from "react-bootstrap";

export const Content = (props) => (
  <Col xs={12}>
    <Wrapper>
      <Col xs={3} style={{ fontSize: "0.75rem" }}>
        <p style={{ margin: "0" }}>
          <strong>{props.dates}</strong>
        </p>
      </Col>
      <Col
        xs={9}
        style={{ fontSize: "0.8rem", paddingLeft: "0", textAlign: "justify" }}
      >
        <p style={{ margin: "0" }}>
          <strong> {props.title}</strong>
        </p>
      </Col>

      <Col xs={3} />
      <Col
        xs={9}
        style={{ fontSize: "0.75rem", paddingLeft: "0", textAlign: "justify" }}
      >
        <p style={{ marginBottom: "0.6rem" }}>{props.children}</p>
      </Col>
    </Wrapper>
  </Col>
);

export const ListContent = (props) => (
  <Col xs={12}>
    <Wrapper>
      <Col xs={12} style={{ fontSize: "0.75rem" }}>
        {props.children}
      </Col>
    </Wrapper>
  </Col>
);

export const DateSignature = (props) => (
  <Col xs={12}>
    <Wrapper>
      <Col xs={9} style={{ fontSize: "0.75rem" }}>
        <strong>{props.placedate}</strong>
      </Col>
      <Col xs={3} style={{ fontSize: "0.75rem" }}>
        <Image
          src={props.signature}
          style={{
            width: "75%",
          }}
        />
      </Col>
    </Wrapper>
  </Col>
);
