import React from "react";
// import { ExampleWrapperSeamless } from "../layout-components";
import PropTypes from "prop-types";

import ContactUsForm from "../components/forms/ContactUsForm";
import ContactInfoCard from "../components/featureSections/ContactFeatured";
import Overview6 from "../../src/components/overview/Overview6";
import ContactUsOverview from "../components/overview/ContactUsOverview";

export default function ContactUs() {
  ContactUs.propTypes = {
    currentUser: PropTypes.arrayOf(PropTypes.string),
  };
  return (
    <>
      <ContactUsOverview />
      <div className="container-fluid" style={{ marginBottom: "120px" }}>
        <div className="row">
          <div className="col-8">
            <ContactUsForm />
          </div>
          <div className="col-4">
            <ContactInfoCard />
          </div>
        </div>
      </div>

      <Overview6 />
    </>
  );
}
