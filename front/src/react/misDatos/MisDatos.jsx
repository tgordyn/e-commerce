import React from "react";


export default ({ isLogged , handleClick }) => {
  return (
    <div>
      <h1> BIENVENIDO USARIO </h1>
      <h3> NAME: {isLogged.name}</h3>
      <h3> LASTNAME: {isLogged.lastname}</h3>
      <h3> AVATAR: {isLogged.avatar}</h3>
      <h3> EMAIL: {isLogged.email}</h3>
      <h3> DIRECCION: {isLogged.direccion}</h3>
      <h3> ROLL: {isLogged.roll}</h3>
      <button className='btn btn-primary' onClick={() => handleClick(isLogged.id)}>historial</button>
    </div>
  );
};
