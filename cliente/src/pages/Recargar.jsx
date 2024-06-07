import './Recargar.css'
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import logo from './img/logoo.png';
import icohome from './img/ico-home.png'
import icoshop from './img/ico-shop.png'
import icoperfil from './img/ico-perfil.png'
import icocompras from './img/ico-compras.png'
import icorecarga from './img/ico-recarga.png'
import useDataUser from '../components/useDataUser';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Recargar = () => {
  const datos = useDataUser();
  const navigate = useNavigate();
  const expresiones = {numeros:/^[0-9]{4,}$/}

  const [inputValue, setInputValue] = useState('');
  const [comboBoxValue, setComboBoxValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleComboBoxChange = (event) => {
    setComboBoxValue(event.target.value);
  };

  const handleLogout = () => {
    // Elimina el token de localStorage u otros datos de sesión
    localStorage.removeItem('token');

    // Redirige al usuario a la página de inicio de sesión
    navigate('/login');
    window.location.reload();
  };

  const handleRecargar =()=>{
    if (!expresiones.numeros.test(inputValue)) {
        Swal.fire({
            background:'rgba(0, 0, 0, 0.92)',
            color:'aliceblue',
            icon: 'error',
            title: 'La referencia solo pueden ser numeros y no puede estar vacia.',
            confirmButtonColor:'#EB193C',
            confirmButtonText:'Aceptar'
          })
    } else {
        Axios.post("http://localhost:3002/recargar",{
        id_usuario: datos.id_usuario,
        referencia:inputValue,
        monto:comboBoxValue
    })
    Swal.fire({
        background:'rgba(0, 0, 0, 0.92)',
        color:'aliceblue',
        icon: 'success',
        title: 'Su recarga estará siendo procesada en breve.',
        confirmButtonColor:'#EB193C',
        confirmButtonText:'Aceptar'
      })
    }
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
                    <Link>
            <div className='lista estoy'>
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
    <div className="contenido-recargar">
        <nav>
            <h2 className='tech'>TECHBYTE</h2>
            <div className='div-datos'>
            <div className='div-nombre'><p>{datos.nombre}</p><p>{datos.apellido}</p></div>
            <p>Su balance es: {datos.saldo}Bs</p>
            </div>
        </nav>
        <div className='contenedor-recargar'>
            <h1>Recargar</h1>
            <p>{datos.nombre} aquí puedes agregar saldo a tu balance</p>
            <div className="nota">
                <p className='info'>Seleccione el monton que va a agregar a su balance y haga el pago a los datos que estan a continuación con el mismo monton que selecciono, cuando ya lo haya hecho ingrese su referencia y haga click en el boton de pago efectuado.</p>
                <p className="nota-p">Nota: El balance se actualizara en un plazo de 2 a 24 horas luego de que efectue su pago.</p>
            </div>
            <div className='pagom'>
                <p className="p-monto">Datos para realizar el pago:</p>
                <div className="datos-pago">
                    <p>Banco: 0108</p>
                    <p>Cedula: 33303303</p>
                    <p>Teléfono: 04123033030</p>
                </div>
            </div>
            <div className="dato-ingresar">
                <div className="contenedor-montos">
                 <p className='p-monto'>Selecciona la cantidad que vas a recargar</p>
                 <select value={comboBoxValue} onChange={handleComboBoxChange} className='montos'>
                    <option className='monto-op' value="100">100</option>
                    <option className='monto-op' value="500">500</option>
                    <option className='monto-op' value="1000">1000</option>
                 </select>
                </div>
                <div className="refe">
                    <p className='p-monto'>Ingresa la referencia de del pago móvil</p>
                    <input value={inputValue} onChange={handleInputChange} className='input-refe' type="text"  placeholder='Ejemplo: 0004567890123456'/>
                </div>
                <button onClick={handleRecargar} className='btn-recargar'>Pago efectuado</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Recargar;