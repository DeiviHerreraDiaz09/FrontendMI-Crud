import React from 'react';
import './UserForm.css';

const UserForm = ({
  iconMarcaClass,
  iconSucursalClass,
  iconUserClass,
  showButtons,
  setInputsEnabledState,
  handlePlusClick,
  showOptions,
  marca,
  setMarca,
  sucursal,
  setSucursal,
  fullName,
  setFullName,
  inputsEnabledState,
  handleCancelClick,
  handleAcceptClick,
  handleCreateClick,
  errors,
  setErrors
}) => {

  const handleCreate = () => {
    let hasErrors = false;
    let newErrors = { marca: '', sucursal: '', fullName: '' };

    if (!marca) {
      newErrors.marca = 'Campo requerido';
      hasErrors = true;
    }
    if (!sucursal) {
      newErrors.sucursal = 'Campo requerido';
      hasErrors = true;
    }
    if (!fullName) {
      newErrors.fullName = 'Campo requerido';
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      const newUser = { marca, sucursal, fullName };
      handleCreateClick(newUser);
      setInputsEnabledState(false);
    }
  };

  return (
    <div className="createUpdateUser">
      <div className={showButtons ? 'show-buttons' : showOptions ? "show-options" : "card"}>
        <div className="marca">
          <div className="marca-icons">
            <div className="plus" onClick={handlePlusClick}></div>
            <div className={iconMarcaClass}></div>
          </div>
          <input
            type="text"
            placeholder="Mazda"
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value);
              if (e.target.value) setErrors({ ...errors, marca: '' });
            }}
            disabled={!inputsEnabledState}
          />
          {errors.marca && <div className="errorOne">{errors.marca}</div>}
        </div>
        <div className="sucursal">
          <div className={iconSucursalClass}></div>
          <input
            type="text"
            placeholder="Chapinero"
            value={sucursal}
            onChange={(e) => {
              setSucursal(e.target.value);
              if (e.target.value) setErrors({ ...errors, sucursal: '' });
            }}
            disabled={!inputsEnabledState}
          />
          {errors.sucursal && <div className="error">{errors.sucursal}</div>}
        </div>
        <div className="user">
          <div className={iconUserClass}></div>
          <input
            type="text"
            placeholder="David Sandoval"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (e.target.value) setErrors({ ...errors, fullName: '' });
            }}
            disabled={!inputsEnabledState}
          />
          {errors.fullName && <div className="error">{errors.fullName}</div>}
        </div>
        {showButtons && (
          <div className="action-buttons">
            <button className="btn-cancel" onClick={handleCancelClick}></button>
            <button className="btn-accept" onClick={handleAcceptClick}></button>
          </div>
        )}

        {showOptions && (
          <div className="action-options">
            <button className='btn-cancelTwo' onClick={handleCancelClick}>Cancelar</button>
            <button className='btn-create' onClick={handleCreate}>Crear</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
