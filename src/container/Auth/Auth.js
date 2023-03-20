import "./Auth.css";
import { Button, Form, Input, Card } from "antd";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { authenticateUser } from "../../store/actions";
import { connect } from "react-redux";
import Spinner from "../../component/UI/Spinner/Spinner";

const Auth = (props) => {
  const [formValues, setFormvalues] = useState({
    email: "",
    emailError: false,
    password: "",
    passwordError: false,
    emailValidError: false,
    passwordLength: false,
  });
  const [isSignUp, setupIsSignUp] = useState(false);

  let authRedirect = null;
  // if (props.isAuthenticated && !props.building) {
  //   authRedirect = <Redirect to="/" />;
  // }
  // if (props.isAuthenticated && props.building) {
  //   authRedirect = <Redirect to="/checkout" />;
  // }
  // } else {
  //   authRedirect = <Redirect to="/checkout" />;
  // }
  if (props.isAuthenticated) {
    authRedirect = <Redirect to="/burger-builder" />;
  }

  const onChangeHandler = (event, name) => {
    setFormvalues((prevFormValues) => ({
      ...prevFormValues,
      [name]: event.target.value,
    }));
  };

  const validateForm = () => {
    let formError = false;
    if (formValues.email === "") {
      setFormvalues((prevFormValues) => ({
        ...prevFormValues,
        emailError: true,
      }));
      formError = true;
    } else {
      setFormvalues((prevFormValues) => ({
        ...prevFormValues,
        emailError: false,
      }));
      formError = false;
    }
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/;

    if (!emailRegex.test(formValues.email)) {
      formError = true;
      setFormvalues((prevFormValues) => ({
        ...prevFormValues,
        emailValidError: true,
      }));
    } else {
      formError = false;
      setFormvalues((prevFormValues) => ({
        ...prevFormValues,
        emailValidError: false,
      }));
    }

    if (formValues.password === "") {
      formError = true;
      setFormvalues((prevFormValues) => ({
        ...prevFormValues,
        passwordError: true,
      }));
    } else {
      formError = false;
      setFormvalues((prevFormValues) => ({
        ...prevFormValues,
        passwordError: false,
      }));
    }
    if (formValues.password.length < 7) {
      formError = true;
      setFormvalues((prevFormValues) => ({
        ...prevFormValues,
        passwordLength: true,
      }));
    } else {
      formError = false;
      setFormvalues((prevFormValues) => ({
        ...prevFormValues,
        passwordLength: false,
      }));
    }
    console.log(formError);
    return formError;
  };
  const handleSubmit = () => {
    if (validateForm()) return;

    const credentials = {
      email: formValues.email,
      password: formValues.password,
      returnSecureToken: true,
    };
    props.authenticateUser(credentials, isSignUp);
  };

  let form = (
    <Card
      extra={
        <span style={{ color: "red" }}>{props.error ? props.error : ""}</span>
      }
      title={!isSignUp ? "Login" : "Register"}
      className="AuthForm"
      bordered={false}
      style={{ width: 500 }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <Form.Item
          required
          hasFeedback
          label="Email"
          name="email"
          validateStatus={
            formValues.emailError | formValues.emailValidError ? "error" : ""
          }
          help={
            formValues.emailError
              ? "This is a required field"
              : formValues.emailValidError
              ? "Invalid Email"
              : ""
          }
        >
          <Input
            value={formValues.email}
            onChange={(e) => onChangeHandler(e, "email")}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          validateStatus={
            formValues.passwordError | formValues.passwordLength ? "error" : ""
          }
          help={
            formValues.passwordError
              ? "Please fill Your Password"
              : formValues.passwordLength
              ? "Password Length must be greater than 7"
              : ""
          }
        >
          <Input.Password
            value={formValues.password}
            onChange={(e) => onChangeHandler(e, "password")}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="link" onClick={handleSubmit}>
            Submit
          </Button>
          <Button type="link" danger onClick={() => setupIsSignUp(!isSignUp)}>
            {`Switch to ${isSignUp ? "Login" : "Register"}`}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
  if (props.loading) {
    form = <Spinner />;
  }

  return (
    <div className="site-card-border-less-wrapper">
      {authRedirect}
      {form}
    </div>
  );
};

const mapStateToProps = ({ authReducer, ingredientReducer }) => {
  return {
    isAuthenticated: authReducer.Token !== null,
    error: authReducer.error,
    loading: authReducer.loading,
    building: ingredientReducer.building,
    redirectPath: ingredientReducer.redirectPath,
  };
};
const mapDispatchToProps = {
  authenticateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
