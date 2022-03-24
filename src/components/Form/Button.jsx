import { Button as ButtonMui } from "@material-ui/core";
import { useFormikContext } from "formik";

export const Button = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    onClick: handleSubmit,
    variant: "contained",
    color: "secondary",
    fullWidth: true,
  };

  return <ButtonMui {...configButton}>{children}</ButtonMui>;
};
