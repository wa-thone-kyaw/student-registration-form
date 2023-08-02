import React from "react";
import { Link } from 'react-router-dom';

const EPReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.rollno}</td>
      <td>{contact.phoneNumber}</td>
      
      <td>
      <Link to="/epregisterform"><button type="button" class='btn btn-success btn-lg' >
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
export default EPReadOnlyRow;