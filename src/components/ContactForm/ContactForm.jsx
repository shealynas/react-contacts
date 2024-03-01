import { useState } from "react";
import "./ContactForm.css";
import MaskedInput from "react-text-mask";

export default function ContactForm({ onFormSubmitionHandler }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  return (
    <form
      className="form-container"
      onSubmit={(event) => {
        event.preventDefault();
        const newContact = {
          firstName,
          lastName,
          phoneNumber,
          email,
        };
        onFormSubmitionHandler(newContact);

        console.log("Submit clicked!");
      }}
    >
      <label>
        First Name:
        <input
          type="text"
          required
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setFirstName(value);
          }}
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          required
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setLastName(value);
          }}
        />
      </label>

      <label>
        Phone Number:{" "}
        <MaskedInput
          mask={[
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          guide={true}
          required
          pattern="\d{3}-\d{3}-\d{4}"
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setPhoneNumber(value);
          }}
        />
      </label>

      <label>
        Email Address:{" "}
        <input
          type="email"
          required
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setEmail(value);
          }}
        ></input>
        <button className="form-button" type="submit">
          Create Contact
        </button>
      </label>
    </form>
  );
}
