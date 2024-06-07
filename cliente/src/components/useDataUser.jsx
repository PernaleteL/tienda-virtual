import { useEffect, useState } from "react";

function parseJwt (token) {
    if (!token) {
      return false;
    }
  
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  
    const jsonPayload = JSON.parse(decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('')));
  
    return jsonPayload;
  }

const useDataUser = () => {
    // Declara las variables para almacenar los datos del usuario
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [saldo, setSaldo] = useState(0);
    const [admin, setAdmin] = useState("");
    const [id_usuario, setId_usuario] = useState("");
  
    // Actualiza las variables cuando el usuario inicie sesión
    
       useEffect(()=>{
        const tokenizado = parseJwt(localStorage.getItem('token'))
        const datos = JSON.parse(JSON.stringify(tokenizado));
    
        setNombre(datos.nombre)
        setApellido(datos.apellido)
        setSaldo(datos.saldo)
        setId_usuario(datos.id_usuario)
        setAdmin(datos.admin)
    
        const balance= datos.saldo
        localStorage.setItem("saldo", balance);
       }, []);
    
  
    // Devuelve los datos del usuario
    return {
      nombre,
      apellido,
      saldo,
      admin,
      id_usuario
    };
  };

  export default useDataUser;