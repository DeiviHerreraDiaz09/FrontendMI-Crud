import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
        <TransitionGroup component="tbody">
          {users.map((user, index) => (
            <CSSTransition key={user.id} timeout={500} classNames="fade">
              <tr className="fade-row">
                <td>{user.marca}</td>
                <td>{user.sucursal}</td>
                <td>
                  <div className="aspirante-content">
                    <span className="aspirante-name">{user.aspirante}</span>
                    <div
                      className="btnUpdate"
                      onClick={() => handleUpdateClick(user)}
                    ></div>
                    <div
                      className="btnDelete"
                      onClick={() => handleDeleteClick(user.id)}
                    ></div>
                  </div>
                </td>
              </tr>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </table>
    </div>
  );
};

export default UserTable;
