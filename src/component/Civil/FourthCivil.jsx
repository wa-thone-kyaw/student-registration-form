import React, { useState, Fragment, useEffect } from "react";
import "./Civil.css";
import CivilEditableRow from "./CivilEditableRow";

export const FourthCivil = () => {
  const [engname, setEngname] = useState("");
  const [rollno, setRollNo] = useState("");
  const [phone_no, setPhoneno] = useState("");
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  //searchName
  const filteredData = data.filter((item) => {
    const engname = item?.engname?.toLowerCase();
    const rollno = item?.rollno?.toLowerCase();
    const phone_no = item?.phone_no?.toLowerCase();

    return (
      engname?.includes(searchQuery?.toLowerCase()) ||
      rollno?.includes(searchQuery?.toLowerCase()) ||
      phone_no?.includes(searchQuery?.toLowerCase())
    );
  });
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchButtonClick = () => {
    setSearchClicked(true);
  };

  //to show data in table
  useEffect(() => {
    fetchDataAsync();
  }, []);

  const fetchDataAsync = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/student_registration/fourth_civil_list"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const jsonData = await response.json();
      console.log("fetched data", jsonData);
      setData(jsonData.students);
      console.log("Fetched data", response.jsonData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  //To add data to table and database
  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("engname", engname);
    formData.append("rollno", rollno);
    formData.append("phone_no", phone_no);

    try {
      await fetch("http://127.0.0.1:8000/student_registration/fourth_year", {
        method: "POST",
        body: formData,
      });

      setEngname("");
      setRollNo("");
      setPhoneno("");
      fetchDataAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const [editFormData, setEditFormData] = useState({
    engname: "",
    rollno: "",
    phone_no: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      engname: editFormData.engname,
      rollno: editFormData.rollno,
      phone_no: editFormData.phone_no,
    };

    const newContacts = [...data];

    const index = data.findIndex((data) => data.id === editContactId);

    newContacts[index] = editedContact;

    setData(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, data) => {
    event.preventDefault();
    setEditContactId(data.id);

    const formValues = {
      engname: data.engname,
      rollno: data.rollno,
      phone_no: data.phone_no,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...data];

    const index = data.findIndex((data) => data.id === contactId);

    newContacts.splice(index, 1);

    setData(newContacts);
  };

  return (
    <div className="table">
      <div class="col-sm-3 mt-5 mb-4 text-gred">
        <div className="search">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search Student"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onClick={handleSearchButtonClick}
          />
        </div>
      </div>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll-no</th>
              <th>Phone-no</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchClicked
              ? filteredData.map((item, index) => (
                  <Fragment key={index}>
                    {editContactId === item._id ? (
                      <CivilEditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <tr>
                        <td>{item.engname}</td>
                        <td>{item.rollno}</td>
                        <td>{item.phone_no}</td>
                        <td>
                          <button>View</button>
                          <button>Edit</button>
                          <button>Delete</button>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))
              : data.map((item, index) => (
                  <Fragment key={index}>
                    {editContactId === item._id ? (
                      <CivilEditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <tr>
                        <td>{item.engname}</td>
                        <td>{item.rollno}</td>
                        <td>{item.phone_no}</td>
                        <td>
                          <button>View</button>
                          <button>Edit</button>
                          <button>Delete</button>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
          </tbody>
        </table>
      </form>

      <h3>Add a Contact</h3>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="engname"
          value={engname}
          required="required"
          placeholder="Enter a name..."
          onChange={(e) => setEngname(e.target.value)}
        />
        <input
          type="text"
          name="rollno"
          value={rollno}
          required="required"
          placeholder="Enter roll no..."
          onChange={(e) => setRollNo(e.target.value)}
        />
        <input
          type="text"
          name="phone_no"
          value={phone_no}
          required="required"
          placeholder="Enter a phone number..."
          onChange={(e) => setPhoneno(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};
