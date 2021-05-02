import { Component } from "react";
import { FormField } from "./FormField";
import { SendButton } from "./SendButton";
import { FormMessage } from "./FormMessage";

import "./Form.css";
import { FormFieldTextArea } from "./FormFieldTextArea";

export class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    isInvalidFN: false,
    isInvalidLN: false,
    isInvalidEmail: false,
    isInvalidMessage: false,
    isValid: false,
  };

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value, isInvalidFN: false });
  };

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value, isInvalidLN: false });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value, isInvalidEmail: false });
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value, isInvalidMessage: false });
  };

  handleAll = () => {
    if (this.state.firstName === "") {
      this.setState({ isInvalidFN: true });
    } else {
      this.setState({ isInvalidFN: false });
    }

    if (this.state.lastName === "") {
      this.setState({ isInvalidLN: true });
    } else {
      this.setState({ isInvalidLN: false });
    }

    if (this.state.email === "") {
      this.setState({ isInvalidEmail: true });
    } else {
      this.setState({ isInvalidEmail: false });
    }

    if (this.state.message === "") {
      this.setState({ isInvalidMessage: true });
    } else {
      this.setState({ isInvalidMessage: false });
    }
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.message
    ) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  };

  onClick = () => {
    this.setState({ isValid: false });
  };

  render() {
    return (
      <div id="contact-form">
        <FormField
          label="FIRST NAME"
          style={{
            border: this.state.isInvalidFN ? "1px solid red" : undefined,
          }}
          onChange={this.handleFirstNameChange}
        />
        <FormField
          label="LAST NAME"
          style={{
            border: this.state.isInvalidLN ? "1px solid red" : undefined,
          }}
          onChange={this.handleLastNameChange}
        />
        <FormField
          label="EMAIL"
          style={{
            border: this.state.isInvalidEmail ? "1px solid red" : undefined,
          }}
          onChange={this.handleEmailChange}
        />
        <FormFieldTextArea
          label="MESSAGE"
          style={{
            border: this.state.isInvalidMessage ? "1px solid red" : undefined,
          }}
          onChange={this.handleMessageChange}
        />
        <SendButton onClick={this.handleAll} />
        <FormMessage
          style={{
            display: this.state.isValid ? "flex" : "none",
          }}
          onClick={this.onClick}
        />
      </div>
    );
  }
}
