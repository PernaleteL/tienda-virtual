import './Home.css'
import Axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from './img/logoo.png';
import icohome from './img/ico-home.png'
import icoshop from './img/ico-shop.png'
import icoperfil from './img/ico-perfil.png'
import icocompras from './img/ico-compras.png'
import icorecarga from './img/ico-recarga.png'
import useDataUser from '../components/useDataUser';

const Home = () => {
  const datos = useDataUser();
  const navigate = useNavigate();


  const handleLogout = () => {
    // Elimina el token de localStorage u otros datos de sesión
    localStorage.removeItem('token');

    // Redirige al usuario a la página de inicio de sesión
    navigate('/login');
    window.location.reload();
  };

      return (
    <div className='contenedor-principal'>
    <div className="sidebar">
            <div className='img-logo-contenedor'>
                <img className='img-logo' src={logo} alt="logo parce" />
            </div>
        <ul>
                        <Link to='/home'>
            <div className='lista estoy'>
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
                    <Link to='/compras'>
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
                    {
                        datos.admin === 'admin' && (
                            <Link to='/gestion'>
                            <div className='lista no-estoy'>
                                <li>
                                    <div className='contenedor-li'>
                                    <div className='div-ico'><img className='ico' src={icorecarga} alt="" /></div>
                                    <p>Gestión</p>
                                    </div>
                                </li>
                            </div>
                                    </Link>
                        )
                    }
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
            <p>Su balance es: {datos.saldo}Bs</p>
            </div>
        </nav>
        <div className="div-home">
            <p className='h3'>Bienvenido {datos.nombre}</p>
            <p className='h4'>¿Que quieres hacer?</p>
            <div className="conte-buttons">
               <Link to='/shop'> <button className='button'>Comprar</button></Link>
                <Link to='/recargar'><button className='button'>Recargar tu balance</button></Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Home;