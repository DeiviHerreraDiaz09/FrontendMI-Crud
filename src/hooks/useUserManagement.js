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
  };

  const handleCancelClick = () => {
    setMarca('');
    setSucursal('');
    setFullName('');
    setShowButtons(false);
    setShowOptions(false)
  };

  const handleAcceptClick = async () => {
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

  const handleDeleteClick = async (id) => {
    const deleteUser = await deleteUserService(id);
    if (!deleteUser) {
      return console.log("Error al eliminar el usuario: " + id);
    }
    console.log("Usuario eliminado");
  }

  return {
    users,
    showButtons,
    marca,
    sucursal,
    fullName,
    showOptions,
    handlePlusClick,
    handleCancelClick,
    handleAcceptClick,
    handleUpdateClick,
    handleDeleteClick,
    setMarca,
    setSucursal,
    setFullName
  };
};

export default UseUserManagement;
