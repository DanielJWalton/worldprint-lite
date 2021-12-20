import * as Yup from "yup";

const YupValid = () => {
  const validate = Yup.object({
    name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("required"),
    email: Yup.string().email("Email is invalid").required("required"),
    subject: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("required"),
    message: Yup.string()
      .max(1000, "Must be 1000 characters or less")
      .required("required"),
  });
  return validate;
};

export default YupValid;
