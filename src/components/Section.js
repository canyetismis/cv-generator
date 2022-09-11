import React from "react";
import { Wrapper } from "./framework/Wrapper";
import { Title } from "./framework/Experience/Title";

export const Section = (props) => (
  <Wrapper>
    <Title>{props.title}</Title>
    {props.children}
  </Wrapper>
);
