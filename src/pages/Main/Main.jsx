import styles from './Main.module.css'; 
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import UserForm from '../../components/UserForm/UserForm';
import { RedirectLinks } from '../../components/RedirectLinks';
import "../../index.css"
import { UserTable } from '../../components/UserTable';
import UseUserManagement from '../../hooks/useUserManagement';

const Main = () => {
  const {
    iconMarcaClass,
    selectedUserId,
    iconSucursalClass,
    iconUserClass,
    showOptions,
    users,
    showButtons,
    marca,
    sucursal,
    fullName,
    inputsEnabledState,
    errors,
    handleCreateClick,
    handlePlusClick,
    handleCancelClick,
    handleAcceptClick,
    handleUpdateClick,
    handleDeleteClick,
    setMarca,
    setInputsEnabledState,
    setSucursal,
    setFullName,
    setErrors,
  } = UseUserManagement();

  return (
    <>
      <div className={styles.homePage}> 
        <header>
          <div className={styles.iconMotion}></div>
        </header>
        <WelcomeSection />
        <RedirectLinks />
        <div className={styles.animation}>
          <div className={styles.circleAnimation}></div>
        </div>
      </div>

      <div className={styles.formUsers}>
        <div className={styles.userFeatures}>
          <UserForm
            iconMarcaClass={iconMarcaClass}
            iconSucursalClass={iconSucursalClass}
            iconUserClass={iconUserClass}
            showOptions={showOptions}
            showButtons={showButtons}
            marca={marca}
            sucursal={sucursal}
            fullName={fullName}
            inputsEnabledState={inputsEnabledState}
            errors={errors}
            handlePlusClick={handlePlusClick}
            setMarca={setMarca}
            setSucursal={setSucursal}
            setFullName={setFullName}
            handleCancelClick={handleCancelClick}
            handleAcceptClick={handleAcceptClick}
            handleCreateClick={handleCreateClick}
            setInputsEnabledState={setInputsEnabledState}
            setErrors={setErrors}
          />
          <UserTable users={users} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeleteClick} selectedUserId={selectedUserId} />
        </div>
        <div className={styles.iconMotionv2}></div>
      </div>
    </>
  );
};

export default Main;
