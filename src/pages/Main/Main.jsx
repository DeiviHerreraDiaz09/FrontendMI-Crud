import React, { useEffect, useState } from 'react';
import './Main.css';
import { fetchUsers, updateUser } from '../../services/userService';

const Main = () => {
  const [users, setUsers] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const [marca, setMarca] = useState('');
  const [sucursal, setSucursal] = useState('');
  const [fullName, setFullName] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    };

    loadUsers();
  }, []);

  const handlePlusClick = () => {
    setShowButtons(true);
  };

  const handleCancelClick = () => {
    setMarca('');
    setSucursal('');
    setFullName('');
    setShowButtons(false);
  };

  const handleAcceptClick = async () => {
    try {
      await updateUser({
        id: selectedUserId,
        marca,
        sucursal,
        fullName
      });

      const updatedUsers = await fetchUsers();
      setUsers(updatedUsers);
      setMarca('');
      setSucursal('');
      setFullName('');
      setShowButtons(false);

      window.location.reload();
    } catch (error) {
      console.error('Error al aceptar la actualización:', error);
    }
  };


  const handleUpdateClick = (user) => {
    setMarca(user.marca);
    setSucursal(user.sucursal);
    setFullName(user.aspirante);
    setSelectedUserId(user.id);
    setShowButtons(true);
  };

  return (
    <>
      <div className="homePage">
        <header>
          <div className="iconMotion"></div>
        </header>
        <div className="welcomeMI">
          <h1 className="title">BIENVENIDO A</h1>
          <div className="mainImg"></div>
          <h2 className="subTitle">MONITORING INNOVATION</h2>
        </div>
        <div className="redirectLinks">
          <a href="">MONITORINGINNOVATION</a>
          <a href="">GPS CONTROL</a>
          <a href="">Link repo front</a>
          <a href="">Link repo back</a>
        </div>
        <div className="animation">
          <div className="circleAnimation"></div>
        </div>
      </div>

      <div className="formUsers">
        <div className="userFeatures">
          <div className="createUpdateUser">
            <div className={showButtons ? 'show-buttons' : 'card'}>
              <div className="marca">
                <div className="plus"></div>
                <div className="iconMarca"></div>
                <input
                  type="text"
                  placeholder="Mazda"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                />
              </div>
              <div className="sucursal">
                <div className="iconSucursal"></div>
                <input
                  type="text"
                  placeholder="Chapinero"
                  value={sucursal}
                  onChange={(e) => setSucursal(e.target.value)}
                />
              </div>
              <div className="user">
                <div className="iconUser"></div>
                <input
                  type="text"
                  placeholder="David Sandoval"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              {showButtons && (
                <div className="action-buttons">
                  <button className="btn-cancel" onClick={handleCancelClick}></button>
                  <button className="btn-accept" onClick={handleAcceptClick}></button>
                </div>
              )}
            </div>
          </div>
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
                        <div className="btnDelete"></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="iconMotionv2"></div>
      </div>
    </>
  );
};

export default Main;
