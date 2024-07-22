import { useState, useEffect } from 'react';
import { deleteUserService, fetchUsersService, updateUserService, createUserService } from "../services/userService"

const UseUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [marca, setMarca] = useState('');
  const [sucursal, setSucursal] = useState('');
  const [fullName, setFullName] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [inputsEnabledState, setInputsEnabledState] = useState(false);
  const [errors, setErrors] = useState({ marca: '', sucursal: '', fullName: '' });
  const [iconMarcaClass, setIconMarcaClass] = useState('iconMarca');
  const [iconSucursalClass, setIconSucursalClass] = useState('iconSucursal');
  const [iconUserClass, setIconUserClass] = useState('iconUser');



  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsersService();
        setUsers(usersData);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    };

    loadUsers();
  }, []);

  const handlePlusClick = () => {
    setShowOptions(true);
    setShowButtons(false);
    setMarca('');
    setSucursal('');
    setFullName('');
    setInputsEnabledState(true);
    setIconMarcaClass(iconMarcaClass === 'iconMarca' ? 'iconMarcaActive' : 'iconMarca');
    setIconSucursalClass(iconSucursalClass === 'iconSucursal' ? 'iconSucursalActive' : 'iconSucursal');
    setIconUserClass(iconUserClass === 'iconUser' ? 'iconUserActive' : 'iconUser');
  };

  const handleCancelClick = () => {
    setMarca('');
    setSucursal('');
    setFullName('');
    setShowButtons(false);
    setShowOptions(false);
    setInputsEnabledState(false);
    setSelectedUserId(null);
    setErrors({ marca: '', sucursal: '', fullName: '' });
    setIconMarcaClass('iconMarca')
    setIconSucursalClass('iconSucursal')
    setIconUserClass('iconUser')
  };

  const handleAcceptClick = async () => {

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

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    try {
      await updateUserService({
        id: selectedUserId,
        marca,
        sucursal,
        fullName
      });

      const updatedUsers = await fetchUsersService();
      setUsers(updatedUsers);
      setMarca('');
      setSucursal('');
      setFullName('');
      setShowButtons(false);
      setInputsEnabledState(false);
      setErrors({ marca: '', sucursal: '', fullName: '' });
      setIconMarcaClass('iconMarca')
      setIconSucursalClass('iconSucursal')
      setIconUserClass('iconUser')
    } catch (error) {
      console.error('Error al aceptar la actualización:', error);
    }
  };


  const handleCreateClick = async (user) => {
    try {
      const createUser = await createUserService(user);
      if (!createUser) {
        console.log("Error en la creación del usuario");
        return;
      }
      console.log("Usuario creado con éxito");
      const updatedUsers = await fetchUsersService();
      setUsers(updatedUsers);
      setMarca('');
      setSucursal('');
      setFullName('');
      setShowOptions(false);
      setInputsEnabledState(false);
      setErrors({ marca: '', sucursal: '', fullName: '' });
      setIconMarcaClass('iconMarca')
      setIconSucursalClass('iconSucursal')
      setIconUserClass('iconUser')
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  }

  const handleUpdateClick = (user) => {
    setMarca(user.marca);
    setSucursal(user.sucursal);
    setFullName(user.aspirante);
    setSelectedUserId(user.id);
    setShowButtons(true);
    setShowOptions(false);
    setInputsEnabledState(true);
    setIconMarcaClass('iconMarcaActive');
    setIconSucursalClass('iconSucursalActive');
    setIconUserClass('iconUserActive');
  };

  const handleDeleteClick = async (id) => {
    const deleteUser = await deleteUserService(id);
    if (!deleteUser) {
      return console.log("Error al eliminar el usuario: " + id);
    }
    console.log("Usuario eliminado");
    const updatedUsers = await fetchUsersService();
    setUsers(updatedUsers);
  }

  return {
    iconMarcaClass,
    iconSucursalClass,
    iconUserClass,
    users,
    showButtons,
    marca,
    sucursal,
    fullName,
    selectedUserId,
    showOptions,
    inputsEnabledState,
    errors,
    setInputsEnabledState,
    handlePlusClick,
    handleCreateClick,
    handleCancelClick,
    handleAcceptClick,
    handleUpdateClick,
    handleDeleteClick,
    setMarca,
    setSucursal,
    setFullName,
    setErrors,
    setIconMarcaClass,
    setIconSucursalClass,
    setIconUserClass
  };
};

export default UseUserManagement;
