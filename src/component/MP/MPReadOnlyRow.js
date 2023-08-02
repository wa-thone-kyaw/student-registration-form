import React from "react";
import {Link} from "react-router-dom";
export const MPReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick, handleViewClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.rollno}</td>
      <td>{contact.phoneNumber}</td>
      
      <td>
      <Link to="/itregisterform"><button type="button" class='btn btn-success btn-lg'>
          View
        </button></Link>
        <button
          type="button" class='btn btn-primary btn-lg'
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" class='btn btn-danger btn-lg' onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default MPReadOnlyRow;