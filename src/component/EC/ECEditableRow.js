import React from "react";

const ECEditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an roll-no"
          name="rollno"
          value={editFormData.rollno}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" class='btn btn-success btn-lg'>Save</button>
        <button type="button" class='btn btn-danger btn-' onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default ECEditableRow;