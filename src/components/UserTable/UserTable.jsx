import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './UserTable.css';

const UserTable = ({ users, selectedUserId, handleUpdateClick, handleDeleteClick }) => {

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
          {users.map((user) => (
            <CSSTransition key={user.id} timeout={500} classNames="fade">
              <tr>
                <td>{user.marca}</td>
                <td>{user.sucursal}</td>
                <td>
                  <div className="aspirante-content">
                    <span className="aspirante-name">{user.aspirante}</span>
                    <div
                      className="btnUpdate"
                      style={{
                        backgroundImage: `url(${user.id === selectedUserId
                          ? '/img/Icon_editar1.svg'
                          : '/img/Icon_editar.svg'
                          })`
                      }}
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
