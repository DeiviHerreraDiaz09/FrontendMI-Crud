import React from 'react';
import './UserTable.css';

const UserTable = ({ users, handleUpdateClick, handleDeleteClick }) => {
  return (
    <div className="tableUsers">
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Sucursal</th>
            <th>Aspirante</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.marca}</td>
              <td>{user.sucursal}</td>
              <td>
                <div className="aspirante-content">
                  <span className="aspirante-name">{user.aspirante}</span>
                  <div
                    className="btnUpdate"
                    onClick={() => handleUpdateClick(user)}
                  ></div>
                  <div className="btnDelete"
                  onClick={() => handleDeleteClick(user.id)}></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;