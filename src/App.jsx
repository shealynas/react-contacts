import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import dummyContacts from "./contacts";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(dummyContacts);

  return (
    <>
      <div className="page">
        <h1>React Contacts</h1>
        <ContactForm
          onFormSubmitionHandler={(newContact) => {
            const updatedContacts = [...contacts, newContact];
            setContacts(updatedContacts);
          }}
        />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
