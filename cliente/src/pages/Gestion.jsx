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
import { useState } from 'react';
import Swal from 'sweetalert2';

import Card from 'react-bootstrap/Card';



const Gestion = () => {
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    numeros: /^[0-9]+$/ 
  };
  const navigate = useNavigate();
  const datos = useDataUser();

    const [btnProducto, setBtnProductos] = useState(true);
    const [panelProducto, setPanelProdcuto] = useState(false);
    const [btnUsuarios, setBtnUsuarios] = useState(true);
    const [panelUsuarios, setPanelUsuarios] = useState(false);
    const [btnRecargas, setBtnRecargas] = useState(true);
    const [panelRecargas, setPanelRecargas] = useState(false);

    //Productos///////
    const  [idP,setIdP] = useState("")
    const   [tituloP,setTituloP] = useState("")
    const  [precioP, setPrecioP] = useState("")
    const   [descripcionP,setDescripcionP] = useState("")
    const  [categoriaP,setCategoriaP] = useState("")
    const   [urlP,setUrlP] = useState("")
    //USUARIO/////////////////
    const [idU,setIdU] =useState("")
    const [nombreU,setNombreU] =useState("")
    const [apellidoU,setApellidoU] =useState("")
    const [usuarioU,setUsuarioU] =useState("")
    const [claveU,setClaveU] =useState("")
    const [saldoU,setSaldoU] =useState("")
    const [rollU,setRollU] =useState("")
    //RECARGAR
    const [idR,setIdR] = useState("")
    const [idUserR,setIdUserR] = useState("")
    const [referenciaR,setReferenciR] = useState("")
    const [montoR,setMontoR] = useState("")
    const [estadoR,setEstadoR] = useState("")
    const [fechaR,setFechaR] = useState("")
        
  //HANDLE PRODUCTO/////////////
    const handleInputId = (e) => {
        setIdP(e.target.value);
      };

    const handleInputUrl = (e) => {
        setUrlP(e.target.value);
      };
    const handleInputCategoria = (e) => {
        setCategoriaP(e.target.value);
      };
    
      const handleInputTitulo = (e) => {
        setTituloP(e.target.value);
      };
    
      const handleInputPrecio = (e) => {
        setPrecioP(e.target.value);
      };
    
      const handleInputDescipcion = (e) => {
        setDescripcionP(e.target.value);
      };
      
      //HANDLE USUARIO
      const handleInputIdU = (e) => {
        setIdU(e.target.value);
      };
      
      const handleInputNombreU = (e) => {
        setNombreU(e.target.value);
      };
      
      const handleInputApellidoU = (e) => {
        setApellidoU(e.target.value);
      };
      
      const handleInputUsuarioU = (e) => {
        setUsuarioU(e.target.value);
      };
      
      const handleInputClaveU = (e) => {
        setClaveU(e.target.value);
      };
      
      const handleInputSaldoU = (e) => {
        setSaldoU(e.target.value);
      };
      
      const handleInputRollU = (e) => {
        setRollU(e.target.value);
      };
      
      //HANDLE RECARGAS///////
      const handleInputIdR = (e) => {
        setIdR(e.target.value);
      };
      const handleInputIdUserR = (e) => {
        setIdUserR(e.target.value);
      };
      const handleInputReferenciaR = (e) => {
        setReferenciR(e.target.value);
      };
      const handleInputMontoR = (e) => {
        setMontoR(e.target.value);
      };
      const handleInputEstadoR = (e) => {
        setEstadoR(e.target.value);
      };
      const handleInputFechaR = (e) => {
        setFechaR(e.target.value);
      };
      
    const visibleProductos = () =>{
        setBtnProductos(false)
        setPanelProdcuto(true)
        setBtnRecargas(false)
        setBtnUsuarios(false)
    }
    const visibleUsuario = () =>{
        setBtnProductos(false)
        setBtnUsuarios(false)
        setBtnRecargas(false)
        setPanelUsuarios(true)
    }
    const visibleRecarga = () =>{
        setBtnProductos(false)
        setBtnUsuarios(false)
        setBtnRecargas(false)
        setPanelRecargas(true)
    }
    const cancelar = () =>{
        setBtnProductos(true)
        setBtnUsuarios(true)
        setBtnRecargas(true)
        setPanelProdcuto(false)
        setPanelUsuarios(false)
        setPanelRecargas(false)
    }

    
    const handleLogout = () => {
        // Elimina el token de localStorage u otros datos de sesión
        localStorage.removeItem('token');
    
        // Redirige al usuario a la página de inicio de sesión
        navigate('/login');
        window.location.reload();
      };

      // APIs DE PRODUCTO/////////////////////////////////////////////////////////////////
      const crearProducto = () =>{
        
        try {
          Axios.post("http://localhost:3002/crearproducto",{
          titulo: tituloP,
          precio:precioP,
          descripcion:descripcionP,
          categoria:categoriaP,
          url:urlP
        })
        Swal.fire({
          background:'rgba(0, 0, 0, 0.92)',
          color:'aliceblue',
          icon: 'success',
          title: 'Producto registrado con exito',
          confirmButtonColor:'#EB193C',
          confirmButtonText:'Aceptar'
        })
        } catch (error) {
          console.log(error)
        }
        
      }
      
    const obtenerProducto = () =>{
        console.log(idP)
        
        Axios.post("http://localhost:3002/buscarproducto",{
          id_producto: idP
        })
        .then((response)=>{
            setTituloP(response.data.titulo)
            setPrecioP(response.data.precio)
            setDescripcionP(response.data.descripcion)
            setCategoriaP(response.data.categoria)
            setUrlP(response.data.url)
        })
        .catch((error)=>{
          // Manejar el error aquí
          console.log(error)
        })
       
      }

      const updateProducto = () => {
        Axios.put("http://localhost:3002/updateproducto", {
            id_producto:idP,
            titulo: tituloP,
            precio: precioP,
            descripcion: descripcionP,
            categoria: categoriaP,
            url: urlP
        }).then(() => {
          Swal.fire({
            background:'rgba(0, 0, 0, 0.92)',
            color:'aliceblue',
            icon: 'success',
            title: 'Producto actualizado con exito',
            confirmButtonColor:'#EB193C',
            confirmButtonText:'Aceptar'
          })
        }).catch((error) => {
            console.error("Error al actualizar el empleado:", error);
            alert("Error al actualizar el empleado");
        });
    }
    const eliminarProducto = () => {
      console.log(idP)
      Axios.delete(`http://localhost:3002/eliminarproducto/${idP}`)
        .then(() => {
          // La eliminación del producto fue exitosa
        })
        .catch((error) => {
          // La eliminación del producto falló
          console.error("Error al eliminar el producto:", error);
        });
    };
    
    //APIs DE USUARIO////////////////////////////////////////////////////////////////////
    const crearUsuario = () =>{
      try {
        Axios.post("http://localhost:3002/crearusuario",{
        nombre: nombreU,
        apellido:apellidoU,
        usuario:usuarioU,
        clave:claveU
      })
      Swal.fire({
        background:'rgba(0, 0, 0, 0.92)',
        color:'aliceblue',
        icon: 'success',
        title: 'Usuario registrado con exito',
        confirmButtonColor:'#EB193C',
        confirmButtonText:'Aceptar'
      })
      } catch (error) {
        console.log(error)
      }
      
    }
      
    const obtenerUsuario = () =>{
      Axios.post("http://localhost:3002/buscarusuario",{
        id_usuario: idU
      })
      .then((response)=>{
          setNombreU(response.data.nombre)
          setApellidoU(response.data.apellido)
          setUsuarioU(response.data.usuario)
          setClaveU(response.data.clave)
          setSaldoU(response.data.saldo)
          setRollU(response.data.roll)
      })
      .catch((error)=>{
        // Manejar el error aquí
        console.log(error)
      })
     
    }

    const updateUsuario = () => {
      Axios.put("http://localhost:3002/updateusuario", {
          id_usuario:idU,
          nombre: nombreU,
          apellido: apellidoU,
          usuario: usuarioU,
          clave: claveU,
          saldo: saldoU,
          roll:rollU
      }).then(() => {
        Swal.fire({
          background:'rgba(0, 0, 0, 0.92)',
          color:'aliceblue',
          icon: 'success',
          title: 'Usuario actualizado con exito',
          confirmButtonColor:'#EB193C',
          confirmButtonText:'Aceptar'
        })
      }).catch((error) => {
          console.error("Error al actualizar el usuario:", error);
          alert("Error al actualizar el usuariooo");
      });
  }

  //APIs RECARGAR////////////////////////////////////////////////////////////////
  const crearRecarga = () =>{
    try {
      Axios.post("http://localhost:3002/crearrecarga",{
      id_usuario:idUserR,
      referencia:referenciaR,
      monto:montoR,
      estado:estadoR
    })
    Swal.fire({
      background:'rgba(0, 0, 0, 0.92)',
      color:'aliceblue',
      icon: 'success',
      title: 'Recarga registrado con exito',
      confirmButtonColor:'#EB193C',
      confirmButtonText:'Aceptar'
    })
    } catch (error) {
      console.log(error)
    }
  }
  const obtenerRecarga = () =>{
    Axios.post("http://localhost:3002/buscarrecarga",{
      id_recarga: idR
    })
    .then((response)=>{
        setIdUserR(response.data.id_usuario)
        setReferenciR(response.data.referencia)
        setMontoR(response.data.monto)
        setEstadoR(response.data.estado)
        setFechaR(response.data.fecha_recarga)
    })
    .catch((error)=>{
      // Manejar el error aquí
      console.log(error)
    })
   
  }

  const updateRecarga = () => {
    Axios.put("http://localhost:3002/updaterecarga", {
      id_recarga:idR,
        id_usuario:idUserR,
        referencia: referenciaR,
        monto: montoR,
        estado: estadoR,
        fecha_recarga: fechaR
    }).then(() => {
      Swal.fire({
        background:'rgba(0, 0, 0, 0.92)',
        color:'aliceblue',
        icon: 'success',
        title: 'Recarga actualizada con exito',
        confirmButtonColor:'#EB193C',
        confirmButtonText:'Aceptar'
      })
    }).catch((error) => {
        console.error("Error al actualizar el recarga:", error);
        alert("Error al actualizar el recarga");
    });
}


const eliminarRecarga = () => {
  console.log(idP)
 if (!expresiones.numeros.test(idR)) {
  Swal.fire({
    background:'rgba(0, 0, 0, 0.92)',
    color:'aliceblue',
    icon: 'error',
    title: 'El id no puede estar vacio.',
    confirmButtonColor:'#EB193C',
    confirmButtonText:'Aceptar'
  })
 } else {
  Swal.fire({
    background:'rgba(0, 0, 0, 0.92)',
    color:'aliceblue',
    title: 'Estas seguro de que quieres comprar este producto?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Sí, estoy seguro!'
  })
  .then((result)=>{
    if (result.isConfirmed) {
      Axios.delete(`http://localhost:3002/eliminarrecarga/${idR}`)
      .then(() => {
        Swal.fire({
          background:'rgba(0, 0, 0, 0.92)',
          color:'aliceblue',
          title:`Recarga eliminada`,
          icon: 'success',
          confirmButtonColor:'#3085d6'
        })
      })
    .catch((error) => {
      // La eliminación del producto falló
      console.error("Error al eliminar la recarga:", error);
    });
    }
  })
 }
};

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
            <p>Su balance es: {datos.saldo}Bs</p>
            </div>
        </nav>
        <h2>Gestion de la pagina</h2>
     <div className="botones">
     {btnProducto && (
        <button className='btn-gp' onClick={visibleProductos}>Productos</button>
      )}
        {btnUsuarios && (
        <button className='btn-gp' onClick={visibleUsuario}>Usuarios</button>
      )}
        {btnRecargas && (
        <button className='btn-gp' onClick={visibleRecarga}>Recargas</button>
      )}
     </div>
      {panelProducto && (
         <div>
            <Card className='cuerpo'>
            <Card.Body className='contenedor-gestion'>
              <h2 className='h2'>Productos</h2>
                <div className='campo'>
                  <p className='campo-p'>Id:</p>
                    <input value={idP} onChange={handleInputId} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Titulo:</p>
                    <input value={tituloP} onChange={handleInputTitulo} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Precio:</p>
                    <input value={precioP} onChange={handleInputPrecio} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Descripción:</p>
                    <input value={descripcionP} onChange={handleInputDescipcion} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Categoría:</p>
                    <input value={categoriaP} onChange={handleInputCategoria} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Url:</p>
                    <input value={urlP} onChange={handleInputUrl} className='input-campo' type="text" />
                </div>

            <div className="panel-btn">
            <button className='btn-modificar btn' onClick={crearProducto}>Crear</button>
            <button className='btn-modificar btn' onClick={obtenerProducto}>Buscar</button>
            <button className='btn-modificar btn' onClick={updateProducto}>Modificar</button>
            <button className='btn-eliminar btn' onClick={eliminarProducto}>Eliminar</button>
            <button className='btn-cancelar btn' onClick={cancelar}>Cancelar</button>
            </div>
            </Card.Body>
            </Card>
         </div>
         
      )}
      {panelUsuarios && (
         <div>
            <Card className='cuerpo'>
            <Card.Body className='contenedor-gestion'>
            <h2 className='h2'>Usuario</h2>
                <div className='campo'>
                  <p className='campo-p'>Id:</p>
                    <input value={idU} onChange={handleInputIdU} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Nombre:</p>
                    <input value={nombreU} onChange={handleInputNombreU} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Apellido:</p>
                    <input value={apellidoU} onChange={handleInputApellidoU} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Usuario:</p>
                    <input value={usuarioU} onChange={handleInputUsuarioU} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Clave:</p>
                    <input value={claveU} onChange={handleInputClaveU} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Saldo:</p>
                    <input value={saldoU} onChange={handleInputSaldoU} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Roll:</p>
                    <input value={rollU} onChange={handleInputRollU} className='input-campo' type="text" />
                </div>

            <div className="panel-btn">
            <button className='btn-modificar btn' onClick={crearUsuario}>Crear</button>
            <button className='btn-modificar btn' onClick={obtenerUsuario}>Buscar</button>
            <button className='btn-modificar btn' onClick={updateUsuario}>Modificar</button>
            <button className='btn-eliminar btn' onClick={eliminarProducto}>Eliminar</button>
            <button className='btn-cancelar btn' onClick={cancelar}>Cancelar</button>
            </div>
            </Card.Body>
            </Card>
         </div>
         
      )}
      {panelRecargas && (
         <div>
            <Card className='cuerpo'>
            <Card.Body className='contenedor-gestion'>
            <h2 className='h2'>Recarga</h2>
                <div className='campo'>
                  <p className='campo-p'>Id:</p>
                    <input value={idR} onChange={handleInputIdR} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Id del usuario:</p>
                    <input value={idUserR} onChange={handleInputIdUserR} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Referencia:</p>
                    <input value={referenciaR} onChange={handleInputReferenciaR} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Monto:</p>
                    <input value={montoR} onChange={handleInputMontoR} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Estado:</p>
                    <input value={estadoR} onChange={handleInputEstadoR} className='input-campo' type="text" />
                </div>
                <div className='campo'>
                  <p className='campo-p'>Fecha:</p>
                    <input value={fechaR} onChange={handleInputFechaR} className='input-campo' type="text" />
                </div>

            <div className="panel-btn">
            <button className='btn-modificar btn' onClick={crearRecarga}>Crear</button>
            <button className='btn-modificar btn' onClick={obtenerRecarga}>Buscar</button>
            <button className='btn-modificar btn' onClick={updateRecarga}>Modificar</button>
            <button className='btn-eliminar btn' onClick={eliminarRecarga}>Eliminar</button>
            <button className='btn-cancelar btn' onClick={cancelar}>Cancelar</button>
            </div>
            </Card.Body>
            </Card>
         </div>
         
      )}
    
    </div>
</div>
  )
}

export default Gestion