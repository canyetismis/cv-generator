import "bootstrap/dist/css/bootstrap.min.css";
import { About, BlankAbout } from "./components/About";
import { Progress } from "./components/framework/About/Progress";
import pp from "./images/professional.jpg";
import sig from "./images/signature.png";
import { Section } from "./components/Section";
import {
  Content,
  ListContent,
  DateSignature,
} from "./components/framework/Experience/Content";
import { SectionWrapper } from "./components/framework/Wrapper";
import React from "react";
import { Col } from "react-bootstrap";

function CV() {
  return (
    <React.Fragment>
      <div className="page">
        <About
          image={pp}
          name="Can Yetismis"
          description="Software Developer and Data Engineer"
          bday="28 January 1998"
          address1="Universitätsallee 1, Appt. A1.10"
          address2="28359 Bremen, Germany"
          telephone="+49 176 376 752 12"
          website="https://www.canyetismis.me"
          github="https://github.com/canyetismis"
          linkedin="https://www.linkedin.com/in/can-yetismis-14943914b/"
          email="can.yetismis@gmail.com"
        >
          <Progress name="Java" value="95" />
          <Progress name="Python" value="95" />
          <Progress name="Android" value="90" />
          <Progress name="Prometheus" value="80" />
          <Progress name="Grafana" value="80" />
          <Progress name="Airflow" value="80" />
          <Progress name="PySpark" value="70" />
          <Progress name="Palantir" value="70" />
          <Progress name="React JS" value="55" />
        </About>
        <SectionWrapper>
          <Section title="Profile">
            <Col xs={12}>
              <p
                style={{
                  margin: "0",
                  fontSize: "0.75rem",
                  paddingLeft: "1rem",
                }}
              >
                Software developer and data engineer, with experience on
                full-stack/back-end development and Android development. Mostly
                worked with consultancy firms and start-ups, in total I have 4
                years of experience in the industry.
              </p>
              <br />
            </Col>
          </Section>
          <Section title="Work Experience">
            <Content dates="01/2023 - Present" title="WasteAnt GmbH - Germany">
              <strong>Full-stack Developer</strong>
              <ul>
                <li>
                  Development of a GNU/linux system service using Python that
                  checks the availability of mounted folders.
                </li>
                <li>
                  Development of a Python application to generate Grafana
                  dashboards, Prometheus alerts and company's configuration
                  files.
                </li>
                <li>
                  Deployment of system monitoring using Prometheus and Grafana.
                </li>
                <li>
                  Integration of Prometheus exporters within ROS workspaces.
                </li>
                <li>
                  Integration of Prometheus alerts to publish messages through a
                  Telegram chatbot.
                </li>
              </ul>
              <strong>Master Thesis Student (02/2023 - 05/2023)</strong>
              <ul>
                <li>
                  PoC research for company's image processing pipeline using
                  Apache Airflow.
                </li>
              </ul>
            </Content>
            <Content
              dates="09/2022 - 12/2022"
              title="Jacobs University Bremen - Germany"
            >
              <strong>Teaching Assistant for Python Module</strong>
              <ul>
                <li>
                  Teaching students Python, Pandas Python Library and SQL
                  programming languages.
                </li>
                <li>
                  Preparing tutorials on WSL (Windows Subsystem Linux), Ubuntu
                  on Windows and Docker Desktop development environments.
                </li>
              </ul>
            </Content>
            <Content
              dates="06/2022 - 08/2022"
              title="HypoVereinsbank/Unicredit - Germany"
            >
              <strong>Big Data Intern</strong>
              <ul>
                <li>
                  Using Palantir’s Foundry tool for various data pre-processing
                  tasks.
                </li>
                <li>Using PySpark library for data manipulation.</li>
              </ul>
            </Content>
            <Content
              dates="06/2020 - 06/2022"
              title="BE1 Consultancy Corp. - Turkiye"
            >
              <strong>
                Android Maintenance Engineer, Sanalogi Inc. (06/2020 - 06/2022)
              </strong>
              <ul>
                <li>
                  Maintaining and adding features to the existing Android SDK of
                  NFCRead library.
                </li>
                <li>
                  Providing technical support to various clients, such as
                  Turkish Ministry of Health.
                </li>
              </ul>
              <strong>
                Python Developer, Sanalogi Inc. (06/2020 - 08/2020)
              </strong>
              <ul>
                <li>Face recognition software development using Python.</li>
                <li>
                  Turning Python code into a web service using Django and
                  Docker.
                </li>
              </ul>
              <strong>Software Developer (08/2019 - 09/2021)</strong>
              <ul>
                <li>
                  Developed various mobile applications using Android Studio and
                  React Native.
                </li>
                <li>Designed the company website using React JS.</li>
                <li>Developed a backend application for printers using C#</li>
              </ul>
            </Content>
            <Content
              dates="06/2018 - 07/2018"
              title=" SoftTech Corp./IsBank - Turkiye"
            >
              <strong>
                Artificial Intelligence Intern (08/2019 - 09/2021)
              </strong>
              <ul>
                <li>Java application development for text filtering.</li>
              </ul>
            </Content>
          </Section>
        </SectionWrapper>
      </div>
      <div className="page">
        <BlankAbout />
        <SectionWrapper>
          <br />
          <Section title="Education">
            <Content
              dates="2021 - 2023"
              title="M.Sc. Data Engineering, Jacobs University Bremen - Germany"
            >
              Currently known as Constructor University
              <br />
              <br />
              <strong>Thesis:</strong> Selection, Modelling and Evaluation of
              Workflow Management Systems - 1.67
              <br />
              <strong>Supervisors:</strong> Dr. Stefan Kettemann, Dr. Christian
              A. Müller (WasteAnt)
            </Content>
            <Content
              dates="2016 - 2019"
              title="B.Sc. with Honours in Computer Science, University of Nottingham - United Kingdom"
            >
              67%, Second Class, Division One - 1.7 in German Grading System
              <br />
              <br />
              <strong>Dissertation:</strong> A Selection-Based Hyper-Heuristic
              for Wind Farm Layout Optimisation Problem - 1.0 in German Grading
              System
              <br />
              <strong>Supervisor:</strong> Dr. Ender Özcan
            </Content>
          </Section>
          <Section title="Language Skills">
            <ListContent style={{ textAlign: "center" }}>
              <ul>
                <li>
                  <strong>Turkish - Native Tongue</strong>
                </li>
                <li>
                  <strong>English - Advanced</strong>
                </li>
                <li>
                  <strong>German - Basic to Intermediate</strong>
                </li>
                <li>
                  <strong>Spanish - Basic</strong>
                </li>
              </ul>
            </ListContent>
          </Section>
          <Section title="Extra Curricular">
            <ListContent>
              <ul>
                <li>
                  <strong>Hardware management (occasionally at work)</strong>
                  <br />
                  <ul>
                    <li>Installing RAM, storage units or WiFi cards on PCs</li>
                    <li>Replacement of broken ports on PCs</li>
                    <li>Formatting PCs</li>
                    <li>Reading about developments in hardware technology</li>
                  </ul>
                </li>
                <li>
                  <strong>
                    President of Turkish and Turkish Cypriot Society
                  </strong>
                  <br />
                  University of Nottingham 09/2017 - 06/2018
                </li>
                <ul>
                  <li>Learnt how to organise events in a systematic manner.</li>
                  <li>Improved my communication skills.</li>
                </ul>
                <li>
                  <strong>Playing the guitar</strong>
                  <br />
                  Since 2016, both acoustic and electric
                </li>
                <li>
                  <strong>
                    Learning about history, philosophy and religion
                  </strong>
                  <br />
                  Mainly military history of 20th century, but I read about all
                  different sorts of periods. I like reading about different
                  religions such as Shinto or Daoism. I also like to read about
                  different philosophical movements such as Stoicism or
                  Cynicism.
                </li>
              </ul>
            </ListContent>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <DateSignature placedate="Bremen, 31.05.2023" signature={sig} />
          </Section>
        </SectionWrapper>
      </div>
    </React.Fragment>
  );
}

export default CV;
