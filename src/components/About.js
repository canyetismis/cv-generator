import React from "react";
import { Col, Image } from "react-bootstrap";
import { IconText } from "./framework/About/IconText";
import { Wrapper } from "./framework/Wrapper";
import { IoLogoLinkedin } from "react-icons/io";
import { FaBirthdayCake } from "react-icons/fa";
import { BsMailbox } from "react-icons/bs";
import { CgSmartphone } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { StraightLine } from "./framework/About/StraightLine";

export const About = (props) => (
  <div
    style={{
      minHeight: "100%",
      width: "33%",
      position: "absolute",
      backgroundColor: "#003355",
      color: "beige",
      display: "inline-block",
    }}
  >
    <Wrapper>
      <Col xs={12}>
        <Image
          src={props.image}
          style={{
            width: "100%",
            padding: "1rem",
          }}
          roundedCircle
        />
        <div style={{ textAlign: "center" }}>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
      </Col>
      <IconText icon={<FaBirthdayCake />}>{props.bday}</IconText>
      <IconText icon={<BsMailbox />}>
        {props.address1} <br />
        {props.address2}
      </IconText>
      <IconText icon={<CgSmartphone />}>{props.telephone}</IconText>
      <IconText icon={<BiWorld />}>{props.website}</IconText>
      <IconText icon={<IoLogoLinkedin />}>{props.linkedin}</IconText>
      <IconText icon={<MdAlternateEmail />}>{props.email}</IconText>
      <Col xs={12} style={{ marginTop: "1rem" }}>
        <Wrapper padding="0">
          <Col xs={4}>
            <h3>Skills</h3>
          </Col>
          <Col xs={8} style={{ position: "relative", padding: "0" }}>
            <StraightLine />
          </Col>
        </Wrapper>
      </Col>
      <Col xs={12}>
        <Wrapper padding="0">{props.children}</Wrapper>
      </Col>
    </Wrapper>
  </div>
);
