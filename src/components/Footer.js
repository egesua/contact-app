import React from "react";

const Footer = ({ toggleModal, numOfContacts }) => {
  return (
    <header className="footer">
      <div className="container">
        <h3>Contact List ({numOfContacts}) </h3>
        <button onClick={() => toggleModal(true)} className="btn">
          <i className="bi bi-plus-square"></i> Add New Contact
        </button>
      </div>
    </header>
  );
};

export default Footer;
