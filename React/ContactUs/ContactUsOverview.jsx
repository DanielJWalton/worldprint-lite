import React from "react";
import { Col, Container } from "reactstrap";
import particles3 from "@assets/images/hero-bg/particles-2.svg";
import hero5 from "@assets/images/hero-bg/hero-5.jpg";
import OverviewHeader from "./OverviewHeader";

export default function Overview1() {
  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-deep-sky">
        <Container>
          <OverviewHeader />
        </Container>
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image opacity-7"
            style={{ backgroundImage: "url(" + hero5 + ")" }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-6" />
          <div className="bg-composed-wrapper--bg bg-primary opacity-6" />
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-9"
            style={{ backgroundImage: "url(" + particles3 + ")" }}
          />
          <div className="bg-composed-wrapper--content">
            <Container className="z-over shadow-container-content-5 text-white text-center pt-5">
              <Col md="11" lg="10" xl="8" className="mx-auto py-3 py-lg-5">
                <h2 className="display-3 font-weight-bold">Contact Us</h2>
                <p className="font-size-xl py-3 text-white-50">
                  Get feedback about your design, or get your questions
                  answered.
                </p>
              </Col>
            </Container>
            <div className="shadow-container-blocks-5 z-below">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path
                  fill="var(--white)"
                  fillOpacity="1"
                  d="M0,32L120,58.7C240,85,480,139,720,138.7C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
