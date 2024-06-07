import { useState } from 'react';

export const useRegistrar = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
  
    const handleNombre = (e) => {
      setNombre(e.target.value)
    }
    const handleApellido = (e) => {
      setApellido(e.target.value)
    }
    const handleUsuario = (e) => {
      setUsuario(e.target.value)
    }
    const handleClave = (e) => {
      setClave(e.target.value)
    }
  
    return {
      nombre,
      handleNombre,
      apellido,
      handleApellido,
      usuario,
      handleUsuario,
      clave,
      handleClave,
    }
  }
  