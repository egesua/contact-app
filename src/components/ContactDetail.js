import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../api/ContactService";

const ContactDetail = ({ updateContact, updateImage }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    title: "",
    status: "",
    photoUrl: "",
  });

  const { id } = useParams();

  const fetchContact = async (id) => {
    try {
      const { data } = await getContact(id);
      setContact(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchContact(id);
  }, []);

  return <div></div>;
};

export default ContactDetail;
