import './Login.css'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useRegistrar } from '../components/useRegistrar';
import Swal from 'sweetalert2';

const Registrar = () => {
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    clave: /^.{4,12}$/ // 4 a 12 digitos.
  };
  const {
    nombre,
    handleNombre,
    apellido,
    handleApellido,
    usuario,
    handleUsuario,
    clave,
    handleClave
  } = useRegistrar();

  const handleInputNombre = (e) => {
    handleNombre(e);
  };

  const handleInputApellido = (e) => {
    handleApellido(e);
  };

  const handleInputUsuario = (e) => {
    handleUsuario(e);
  };

  const handleInputClave = (e) => {
    handleClave(e);
  };

  const addUsuario = async () =>{
    if (!expresiones.nombre.test(nombre)) {
      Swal.fire({
        background:'rgba(0, 0, 0, 0.92)',
        color:'aliceblue',
        icon: 'error',
        title: 'El nombre solo puede contener letras y espacios y no puede estar vacio.',
        confirmButtonColor:'#EB193C',
        confirmButtonText:'Aceptar'
      })
    } else{
      if (!expresiones.apellido.test(apellido)) {
        Swal.fire({
          background:'rgba(0, 0, 0, 0.92)',
          color:'aliceblue',
          icon: 'error',
          title: 'El apellido solo puede contener letras y espacios y no puede estar vacio.',
          confirmButtonColor:'#EB193C',
          confirmButtonText:'Aceptar'
        })
      } else{
        if (!expresiones.usuario.test(usuario)) {
          Swal.fire({
            background:'rgba(0, 0, 0, 0.92)',
            color:'aliceblue',
            icon: 'error',
            title: 'El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.',
            confirmButtonColor:'#EB193C',
            confirmButtonText:'Aceptar'
          })
        } else{
          if (!expresiones.clave.test(clave)) {
            Swal.fire({
              background:'rgba(0, 0, 0, 0.92)',
              color:'aliceblue',
              icon: 'error',
              title: 'La contraseña tiene que ser de 4 a 12 dígitos.',
              confirmButtonColor:'#EB193C',
              confirmButtonText:'Aceptar'
            })
          } 
          else {
            try {
              const response = await Axios.post("http://localhost:3002/create", {
                nombre: nombre,
                apellido: apellido,
                usuario: usuario,
                clave: clave
              });
              Swal.fire({
                background:'rgba(0, 0, 0, 0.92)',
                color:'aliceblue',
                icon: 'success',
                title: 'Usuario registrado con exito',
                confirmButtonColor:'#EB193C',
                confirmButtonText:'Aceptar'
              })
            } catch (error) {
              if (error.response.status === 400) {
                Swal.fire({
                  background:'rgba(0, 0, 0, 0.92)',
                  color:'aliceblue',
                  icon: 'error',
                  title: 'El usuario ya existe',
                  confirmButtonColor:'#EB193C',
                  confirmButtonText:'Aceptar'
                })
              } else {
                alert(`Error al registrar usuario:${error}`);
              }
            }
          }
        }
      }
    }
  };


  return (
    <div className='full'>
       <div className="container login">
        <div className="row justify-content-center pt-2 mt-5">
        <div className="col-md-4 formulario">
            <form className='from' action="">
              <div className="form-group mt-3 text-center">
                <h1 className='p-1'>Registrarse</h1>
              </div>
              <div className="form-group mx-sm-4 my-3 ">
                <input type="text" className='form-control my-2' placeholder='Ingrese su nombre' 
                onChange={handleInputNombre} value={nombre}/>
              </div>
              <div className="form-group mx-sm-4 my-3">
                <input type="text" className='form-control my-2' placeholder='Ingrese su apellido' 
                onChange={handleInputApellido} value={apellido}/>
              </div>
              <div className="form-group mx-sm-4 my-3">
                <input type="text" className='form-control my-2' placeholder='Ingrese su usuario' 
                onChange={handleInputUsuario} value={usuario}/>
              </div>
              <div className="form-group mx-sm-4 my-3">
                <input type="password" className='form-control my-2' placeholder='Ingrese su contraseña' 
                onChange={handleInputClave} value={clave}/>
              </div>
              
            </form>
              <div className="div-btn">
                <button className='btn mt-3 mb-2 btn-ingresar' onClick={addUsuario}>Registrarse </button>
                <p>¿Ya tienes cuenta?</p>
                <Link to='/login'><button className='btn btn-ingresar mb-4'>Iniciar sesión</button></Link>
              </div>
          </div>
        </div>
       </div>

    </div>
  )
}

export default Registrar;