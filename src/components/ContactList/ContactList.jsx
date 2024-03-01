import ContactCard from "../ContactCard/ContactCard";
import "./ContactList.css";

export default function ContactList({ contacts, onCardDeleteClicked }) {
  return (
    <ul className="contact-list">
      {contacts &&
        contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.phoneNumber}
              name={`${contact.firstName} ${contact.lastName}`}
              phoneNumber={contact.phoneNumber}
              email={contact.email}
              onDeleteClicked={onCardDeleteClicked}
            />
          );
        })}
    </ul>
  );
}
