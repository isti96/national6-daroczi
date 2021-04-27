import { Component } from "react";
import { FormField } from "./FormField";
import { SendButton } from "./SendButton";
import { FormMessage } from "./FormMessage";

import "./Form.css";

export class Form extends Component {
  state = {
    firstName: "",
    hasFirstNameError: true,
  };

  checkHasError = () => {
    const hasFirstNameError = this.state;
    console.log(hasFirstNameError);
    if (hasFirstNameError) {
      return true;
    } else {
      return false;
    }
    
  }

  handleFirstNameChange(firstName) {
    let hasFirstNameError = true;
    if (firstName.replace(/\s/g, "") !== "") {
         hasFirstNameError = false;
    }
    this.setState({ firstName, hasFirstNameError });
  }


  render() {
    
    return (
      <div id="contact-form">
        <FormField label="FIRST NAME" onChange={this.handleFirstNameChange}
        />
        <FormField label="LAST NAME" />
        <FormField label="EMAIL" />
        <SendButton  className={ this.checkHasError() ? "send-container" : "send-container--valid"}/>
        <FormMessage />
      </div>
    );
  }
}
