import React from 'react';
import './UserForm.css';

const UserForm = ({ showButtons, handlePlusClick, showOptions, marca, setMarca, sucursal, setSucursal, fullName, setFullName, handleCancelClick, handleAcceptClick }) => {
  
  console.log(showOptions);
  
  return (
    <div className="createUpdateUser">
      <div className={
        showButtons ? 'show-buttons' : showOptions ? "show-options" : "card"
      }>
        <div className="marca">
          <div className="plus" onClick={handlePlusClick}></div>
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

        {showOptions && (
          <div className="action-options">
            <button className='btn-cancelTwo'>Cancelar</button>
            <button className='btn-create'>Crear</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
