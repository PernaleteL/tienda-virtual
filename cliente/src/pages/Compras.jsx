import './Gestion.css'
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import logo from './img/logoo.png';
import icohome from './img/ico-home.png'
import icoshop from './img/ico-shop.png'
import icoperfil from './img/ico-perfil.png'
import icocompras from './img/ico-compras.png'
import icorecarga from './img/ico-recarga.png'
import useDataUser from '../components/useDataUser';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Card from 'react-bootstrap/Card';

const Compras = () => {
    const navigate = useNavigate();
    const datos = useDataUser();
    
    const idU= datos.id_usuario;

    
    const handleLogout = () => {
        // Elimina el token de localStorage u otros datos de sesión
        localStorage.removeItem('token');
        
        // Redirige al usuario a la página de inicio de sesión
        navigate('/login');
        window.location.reload();
    };
    
    
    const [balance,setBalance] = useState("")
    const elBalance=balance;
      const handleBalance=(e)=>{
        setBalance(e)
      }
     
   
      const getBalance = () => {
        Axios.get(`http://localhost:3002/balance?id_usuario=${idU}`)
        .then((response) => {
          handleBalance(response.data.saldo);
        })
        .catch((error) => {
          // Manejar el error aquí
          console.log(error);
        });
      };
      
      useEffect(()=>{
        getBalance()
    }, [])

    const apues = ()=>{
        console.log(idU)
        console.log(balance)
    }

  return (
    <div className='contenedor-principal'>
    <div className="sidebar">
            <div className='img-logo-contenedor'>
                <img className='img-logo' src={logo} alt="logo parce" />
            </div>
        <ul>
        <Link to='/home'>
            <div className='lista no-estoy'>
                <li>
                    <div className='contenedor-li'>
                        <div className='div-ico'><img className='ico' src={icohome} alt="" /></div>
                        <p>Home</p>
                    </div>
                </li>
            </div>
        </Link>
        <Link to='/shop'>
            <div className='lista no-estoy'>
                <li>
                    <div className='contenedor-li div-shop'>
                    <div className='div-ico'><img className='ico' src={icoshop} alt="" /></div>
                    <p>Tienda</p>
                    </div>
                </li>
            </div>
        </Link>
        <Link>
            <div className='lista no-estoy'>
                <li>
                    <div className='contenedor-li'>
                    <div className='div-ico'><img className='ico' src={icoperfil} alt="" /></div>
                    <p>Perfil</p>
                    </div>
                </li>
            </div>
                    </Link>
                    <Link>
            <div className='lista no-estoy'>
                <li>
                    <div className='contenedor-li'>
                    <div className='div-ico'><img className='ico' src={icocompras} alt="" /></div>
                    <p>Compras</p>
                    </div>
                </li>
            </div>
                    </Link>
                    <Link to='/recargar'>
            <div className='lista no-estoy'>
                <li>
                    <div className='contenedor-li'>
                    <div className='div-ico'><img className='ico' src={icorecarga} alt="" /></div>
                    <p>Aregar saldo</p>
                    </div>
                </li>
            </div>
                    </Link>
                    <Link id='isAdmin' className=' '>
                         <div className='lista estoy '>
                            <li>
                            <div className='contenedor-li'>
                                <div className='div-ico'><img className='ico' src={icorecarga} alt="" /></div>
                                <p>Gestión</p>
                            </div>
                            </li>
                        </div>
                    </Link>
        <div className='div-out'>
            <button className='btn-out' onClick={handleLogout}>
                Cerrar sesión
                </button>
        </div>
        </ul>
    </div>
    <div className="contenido">
        <nav>
            <h2>TECHBYTE</h2>
            <div className='div-datos'>
            <div className='div-nombre'><p>{datos.nombre}</p><p>{datos.apellido}</p></div>
            <p>Su balance es: {balance}Bs</p>
            </div>
        </nav>
            <div className="contenedor-compras">
                <h2>compras</h2>
                <div className="compra">
                    
                </div>
            </div>
            <button onClick={apues}>hihi</button>
    </div>
    </div>
  )
}

export default Compras