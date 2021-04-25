import { Component } from "react";
import { FormField } from "./FormField";
import { SendButton } from "./SendButton";
import { FormMessage } from "./FormMessage";

import "./Form.css";

export class Form extends Component {
  render() {
    return (
      <div id="contact-form">
        <FormField label="FIRST NAME" />
        <FormField label="LAST NAME" />
        <FormField label="EMAIL" />
        <SendButton />
        <FormMessage />
      </div>
    );
  }
}
