export const fetchUsersService = async () => {
  try {
    const response = await fetch('https://backendmi-crud.onrender.com/users/');
    if (!response.ok) {
      throw new Error('La respuesta de la red no era correcta');
    }
    const data = await response.json();
    const formattedData = data.map(user => ({
      id: user.id,
      marca: user.marca,
      sucursal: user.sucursal,
      aspirante: user.fullname,
    }));
    return formattedData;
  } catch (error) {
    console.error('Error en la búsqueda de usuarios:', error);
    throw error;
  }
};

export const updateUserService = async (user) => {
  try {
    const response = await fetch(`https://backendmi-crud.onrender.com/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: user.fullName,
        marca: user.marca,
        sucursal: user.sucursal
      }),
    });

    if (!response.ok) {
      throw new Error('La respuesta de la red no era correcta');
    }

    const updatedUser = await response.json();
    console.log('Usuario actualizado correctamente:', updatedUser);
    return updatedUser;
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    throw error;
  }
};

export const createUserService = async (user) => {
  try {
    const response = await fetch(`https://backendmi-crud.onrender.com/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: user.fullName,
        marca: user.marca,
        sucursal: user.sucursal
      }),
    });

    if (!response.ok) {
      throw new Error('La respuesta de la red no era correcta');
    }

    const updatedUser = await response.json();
    console.log('Usuario creado correctamente:', updatedUser);
    return updatedUser;
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error;
  }
};

export const deleteUserService = async (id) => {
  try {
    const response = await fetch(`https://backendmi-crud.onrender.com/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) {
      throw new Error('La respuesta de la red no era correcta');
    }
    const deleteUser = await response.json();
    console.log('Usuario borrado correctamente:', deleteUser);
    return deleteUser;
  } catch (error) {
    console.error('Error al borrar el usuario:', error);
    throw error;

  }
}