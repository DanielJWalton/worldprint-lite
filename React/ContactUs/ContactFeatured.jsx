import React, { useState } from "react";
import { Row, Col, Card, Container, Badge, Nav, NavItem } from "reactstrap";
import { NavLink as NavLinkStrap } from "reactstrap";
import { useHistory } from "react-router-dom";

import clsx from "clsx";

import illustration1 from "../../assets/images/illustrations/pack1/wireframe.svg";

const ContactInfoCard = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const history = useHistory();

  return (
    <div className="bg-white py-3 py-xl-5 container">
      <Container className="py-3 py-xl-5" style={{ width: "170%" }}>
        <Row>
          <Col
            xl="8"
            className="d-flex align-items-center text-center text-xl-left"
          >
            <div className="mb-5 pr-0 pr-xl-5 mb-xl-0">
              <div className="mb-4">
                <Badge pill color="warning">
                  Learn about us!
                </Badge>
                <h1 className="display-3 mt-3 font-weight-bold">
                  World Prints
                </h1>
                <div className="divider mx-auto mx-xl-0 my-4 bg-dark opacity-1 w-43" />
                <p className="font-size-xl text-second opacity-6">
                  <b> The best ways to contact us. </b>
                  <br /> 1. josue@worldprint.com
                  <br /> 2. Submit Contact Form
                  <br /> 3. Social Media
                  <div className="nav-tabs-first tabs-animated tabs-animated-shadow">
                    <Nav tabs justified>
                      <NavItem style={{ margin: "10px" }}>
                        <NavLinkStrap
                          className={clsx("mb-0", {
                            active: activeTab === "1",
                          })}
                          onClick={() => {
                            history.push("/faqsfilter");
                            toggleTab("1");
                          }}
                        >
                          <span className="font-weight-bold font-size-sm text-white-50 text-uppercase">
                            FAQ
                          </span>
                          <div className="divider" />
                        </NavLinkStrap>
                      </NavItem>
                      <NavItem style={{ margin: "10px" }}>
                        <NavLinkStrap
                          className={clsx("mb-0", {
                            active: activeTab === "1",
                          })}
                          onClick={() => {
                            history.push("/");
                            toggleTab("1");
                          }}
                        >
                          <span className="font-weight-bold font-size-sm text-white-50 text-uppercase">
                            Home
                          </span>
                          <div className="divider" />
                        </NavLinkStrap>
                      </NavItem>
                    </Nav>
                  </div>
                </p>
              </div>
            </div>
          </Col>
          <Col xl="4" className="d-none d-xl-flex align-items-center">
            <Card className="shadow-xxl rounded-circle p-3 w-100">
              <img src={illustration1} className="img-fluid" alt="..." />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInfoCard;
