import "./ContactCard.css";

export default function ContactCard({
  name,
  phoneNumber,
  email,
  onDeleteClicked,
}) {
  return (
    <div className="contact-card">
      <h3>{name}</h3>
      <p>{phoneNumber}</p>
      <p>{email}</p>
      <button
        onClick={() => {
          onDeleteClicked(phoneNumber);
        }}
      >
        Delete
      </button>
    </div>
  );
}
