import React from "react"
import Contact from "./Contact";

const ContactList = ({ data, currentPage, getAllContacts }) => {
  return (
    <main className="main">
      {data?.content?.length === 0 && <div>No Contacts. Please add a new contact.</div>}

      {data?.content?.length > 0 && data.content.map(contact => <Contact contact={contact} key={contact.id} />)}
    </main>
  )
};

export default ContactList;
