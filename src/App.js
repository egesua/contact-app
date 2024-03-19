import Header from "./components/Header";
import ContactList from "./components/ContactList";

import { useEffect, useState } from "react";
import { getContacts } from "./api/ContactService";
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const getAllContacts = async (page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const { data } = await getContacts(page, size);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleModal = (show) => {};

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <>
      <Header toggleModal={toggleModal} numOfContacts={data.totalElements} />
      <Routes>
        <Route path="/contacts" element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} />} />
      </Routes>
    </>
  );
}

export default App;
