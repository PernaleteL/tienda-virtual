import './Login.css'
import logo from './img/logoo.png';
import { Link } from 'react-router-dom';
import { useRegistrar } from '../components/useRegistrar';
import Axios from 'axios';
import Swal from 'sweetalert2'
//import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    usuario,
    handleUsuario,
    clave,
    handleClave
  } = useRegistrar('');

 // const navigate = useNavigate();

  const handleInputUsuario = (e) =>{
    handleUsuario(e)
  }
  const handleInputClave = (e) =>{
    handleClave(e)
  }

  const handleIngresar = async () => {
    console.log(usuario, clave);
  
    try {
      const response = await Axios.post("http://localhost:3002/login", {
        usuario: usuario,
        clave: clave,
      })
      
      // Extrae el token del objeto de respuesta
      const { token } = response.data;
  

      if (token) {
        localStorage.setItem("token", token);
        
        window.location.reload();
      }else{
        Swal.fire({
          background:'rgba(0, 0, 0, 0.92)',
          color:'aliceblue',
          icon: 'error',
          title: 'Usuario o contraseña incorrectos',
          confirmButtonColor:'#EB193C',
          confirmButtonText:'Aceptar'
        })
      }

    } catch (error) {
      console.log(`Error al iniciar sesión ${error}`);
    }
  }

  return (
    <div className='full'>
       <div className="container login">
        <div className="row justify-content-center pt-2 mt-5">
        <div className="col-md-4 formulario">
            <form className='from' action="">
              <div className="form-group mx-sm-4 contenedor-img">
                <img className='img mt-2' src={logo} alt="" />
              </div>
              <div className="form-group text-center">
                <h1 className=''>Iniciar Sesión</h1>
              </div>
              <div className="form-group mx-sm-4">
                <input type="text" className='form-control mt-2' placeholder='Ingrese su usuario' 
                onChange={handleInputUsuario} value={usuario}
                />
              </div>
              <div className="form-group mx-sm-4">
                <input type="password" className='form-control mt-4' placeholder='Ingrese su contraseña' 
                onChange={handleInputClave} value={clave}
                />
              </div>
            </form>
              <div className="div-btn">
                <button className='btn mt-4 mb-2 btn-ingresar' 
                onClick={handleIngresar}
                >Ingresar</button>
                <p>¿No tienes cuenta?</p>
                <Link to='/registrarse'><button className='btn btn-ingresar mb-4'>Crear una cuenta</button></Link>
              </div>
          </div>
        </div>
       </div>

    </div>
  )
}

export default Login;