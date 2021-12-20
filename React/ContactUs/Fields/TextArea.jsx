import React from "react";
import { Label, FormGroup } from "reactstrap";
import { ErrorMessage, Field, useField } from "formik";
import PropTypes from "prop-types";

// import debug from "sabio-debug";
// const _logger = debug.extend("ContactTextField");

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // _logger("TextField Hooks", field, meta);
  const style = {
    minHeight: "39px",
  };
  return (
    <div className="mb-2">
      <FormGroup>
        <Label htmlFor={field.name}>{label}</Label>
        <Field
          style={style}
          component="textarea"
          className={`form-control shadow-none ${
            meta.touched && meta.error && "is-invalid"
          }`}
          {...field}
          {...props}
          autoComplete="off"
        />
        <ErrorMessage
          component="div"
          name={field.name}
          className="textfield-error"
        />
      </FormGroup>
    </div>
  );
};
TextField.propTypes = {
  label: PropTypes.string,
};

export default TextField;
