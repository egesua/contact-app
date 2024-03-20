import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getContact } from "../api/ContactService";

const ContactDetail = ({ updateContact, updateImage }) => {
  const inputRef = useRef();
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

  const selectImage = () => {};

  const updatePhoto = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file, file.name);
      formData.append("id", id);
      const { data } = await updateImage(formData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect((id) => {
    fetchContact(id);
  }, []);

  return (
    <>
      <Link to={"/"} className="link">
        <i className="bi bi-arrow-left"></i>Back to List
      </Link>
      <div className="profile">
        <div className="profile_details">
          <img
            src={contact.photoUrl}
            alt={`Profile photo of ${contact.name}`}
          />
          <div className="profile__metadata">
            <p className="profile__name">{contact.name}</p>
            <p className="profile__muted">JPG, GIF, or PNG. Max size of 10MG</p>
            <button className="btn">
              {" "}
              <i className="bi bi-cloud-upload"></i> Change Photo
            </button>
          </div>
        </div>
        <div className="profile__settings"> Setting will go here.</div>
      </div>

      <form style={{ display: "none" }}>
        <input
          type="file"
          ref={inputRef}
          onChange={(e) => updatePhoto(e.target.files[0])}
          name="file"
          accept="image/*"
        />
      </form>
    </>
  );
};

export default ContactDetail;
