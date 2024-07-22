import React from 'react';
import './Main.css';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import { RedirectLinks } from '../../components/RedirectLinks';
import UserForm from '../../components/UserForm/UserForm';
import { UserTable } from '../../components/UserTable';
import UseUserManagement from '../../hooks/useUserManagement';

const Main = () => {
  const {
    users,
    showButtons,
    marca,
    sucursal,
    fullName,
    showOptions,
    inputsEnabledState,
    setInputsEnabledState,
    handleCreateClick,
    handlePlusClick,
    handleCancelClick,
    handleAcceptClick,
    handleUpdateClick,
    handleDeleteClick,
    setMarca,
    setSucursal,
    setFullName,
    errors,
    setErrors
  } = UseUserManagement();

  return (
    <>
      <div className="homePage">
        <header>
          <div className="iconMotion"></div>
        </header>
        <WelcomeSection />
        <RedirectLinks />
        <div className="animation">
          <div className="circleAnimation"></div>
        </div>
      </div>

      <div className="formUsers">
        <div className="userFeatures">
          <UserForm
            handlePlusClick={handlePlusClick}
            showOptions={showOptions}
            showButtons={showButtons}
            marca={marca}
            setMarca={setMarca}
            sucursal={sucursal}
            setSucursal={setSucursal}
            fullName={fullName}
            setFullName={setFullName}
            handleCancelClick={handleCancelClick}
            handleAcceptClick={handleAcceptClick}
            handleCreateClick={handleCreateClick}
            inputsEnabledState={inputsEnabledState}
            setInputsEnabledState={setInputsEnabledState}
            errors={errors}
            setErrors={setErrors}
          />
          <UserTable users={users} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeleteClick} />
        </div>
        <div className="iconMotionv2"></div>
      </div>
    </>
  );
};

export default Main;
