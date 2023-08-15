import React, { useState, Fragment, useEffect } from "react";
import "./Civil.css";
import CivilEditableRow from "./CivilEditableRow";

export const SecondCivil = () => {
  const [engname, setEngname] = useState("");
  const [rollno, setRollNo] = useState("");
  const [phone_no, setPhoneno] = useState("");
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  //searchName
  const filteredData = data.filter((item) => {
    const engname = item?.engname?.toLowerCase();

    return engname?.includes(searchQuery?.toLowerCase());
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
        "http://127.0.0.1:8000/student_registration/student_list/"
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
      await fetch("http://127.0.0.1:8000/student_registration/second_year", {
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

  //delete student
  const handleDeleteClick = async (studentId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/student_registration/delete_document/${studentId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const updateData = data.filter((item) => item._id !== studentId);
        setData(updateData);
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error while deleting item", error);
    }
  };

  const [editFormData, setEditFormData] = useState({
    engname: "",
    rollno: "",
    phone_no: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/student_registration/update_document/${editContactId}`,
        {
          method: "PUT",
          headers: {
            Content_Type: "application/json",
          },
          body: JSON.stringify(editFormData),
        }
      );

      if (response.ok) {
        const updateData = data.map((item) =>
          item._id === editContactId
            ? {
                ...item,
                engname: editFormData.engname,
                rollno: editFormData.rollno,
                phone_no: editFormData.phone_no,
              }
            : item
        );
        setData(updateData);
        setEditContactId(null);
      } else {
        console.error("Error editing student");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleEditClick = (data) => {
    setEditContactId(data._id);

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
              <th>ID</th>
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
                    : (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.engname}</td>
                      <td>{item.rollno}</td>
                      <td>{item.phone_no}</td>
                      <td>
                        <button>View</button>
                        <button onClick={() => handleEditClick(item)}>
                          Edit
                        </button>
                        <button onClick={() => handleDeleteClick(item._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                    )
                  </Fragment>
                ))
              : data.map((item, index) => (
                  <Fragment key={index}>
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.engname}</td>
                      <td>{item.rollno}</td>
                      <td>{item.phone_no}</td>
                      <td>
                        <button>View</button>
                        <button onClick={() => handleEditClick(item)}>
                          Edit
                        </button>
                        <button onClick={() => handleDeleteClick(item._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  
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

export default SecondCivil;
