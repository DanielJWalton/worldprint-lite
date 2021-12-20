import React from "react";
import {
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  Button,
  Form,
  FormGroup,
} from "reactstrap";
import { Formik } from "formik";
import TextField from "../fields/TextField";
import YupValid from "./validate/YupContactUs";
import debug from "sabio-debug";
import TextArea from "../fields/TextArea";
import * as emailService from "@services/emailService";
import toastr from "toastr";

const _logger = debug.extend("ContactUs");

const ContactUsForm = () => {
  const handleSubmit = (values) => {
    _logger(values);

    emailService
      .contactUs(values)
      .then(onContactUsSuccess)
      .catch(onContactUsError);
  };

  const onContactUsSuccess = (response) => {
    _logger(response);
    toastr.success("Email delivered");
  };

  const onContactUsError = (error) => {
    _logger(error);
  };

  const defaultData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={defaultData}
      validationSchema={YupValid}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm(defaultData);
      }}
    >
      {({ handleSubmit, resetForm }) => (
        <div className="container mt-3">
          <Row className="row g-0">
            <Col className="col-md-12">
              <Card className="card-box shadow-xxl mb-5">
                <CardBody>
                  <CardTitle className="font-weight-bold font-size-lg mb-4">
                    Contact Us
                  </CardTitle>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <TextField
                        label={
                          <>
                            Name:<i> 50 characters or less</i>
                          </>
                        }
                        name="name"
                        type="text"
                        placeholder="John Doe"
                      />

                      <TextField
                        label={
                          <>
                            Email:<i> Please enter a valid email</i>
                          </>
                        }
                        name="email"
                        type="email"
                        placeholder="john@doe.com"
                      />
                      <TextField
                        label={
                          <>
                            <i> Reason for contact</i>
                          </>
                        }
                        name="subject"
                        type="text"
                        placeholder="Type of Query"
                      />
                      <TextArea
                        label={
                          <>
                            <i> Please describe message in detail</i>
                          </>
                        }
                        name="message"
                        type="text"
                        placeholder="Your message"
                      />

                      <Button
                        className="btn btn-dark mt-3"
                        type="submit"
                        style={{ margin: "15px" }}
                      >
                        Send Message
                      </Button>
                      <Button
                        className="btn btn-danger mt-3"
                        type="button"
                        onClick={() => resetForm(defaultData)}
                        style={{ margin: "15px" }}
                      >
                        Clear
                      </Button>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </Formik>
  );
};

export default ContactUsForm;
