import React from "react"
import { useState } from "react";
import { useParams } from "react-router-dom";

const ContactDetail = ({ updateContact, updateImage }) => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    title: "",
    status: "",
    photoUrl: ""
  });

  const { id } = useParams();
  console.log(id);
  return (
    <div>
      
    </div>
  )
};

export default ContactDetail;
