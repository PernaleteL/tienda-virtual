import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Shop.css'
import { useProductos } from '../components/useProductos';
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
import Swal from 'sweetalert2';
import ComprarProducto from '../components/comprarProducto';

const Shop = () => {
    const navigate = useNavigate();
    const datos = useDataUser();
    const balance = localStorage.getItem('saldo')
    console.log(balance)

    const {
        handleProductos,
        handleCategoria,
        productosFiltrados
    } = useProductos('');

    const getProductos = () =>{
        Axios.get("http://localhost:3002/productos")
        .then((response)=>{
            handleProductos(response.data);
            console.log("productos db");
        })
    }
    useEffect(()=>{
        getProductos();
    }, [])

    const handleLogout = () => {
        // Elimina el token de localStorage u otros datos de sesión
        localStorage.removeItem('token');
    
        // Redirige al usuario a la página de inicio de sesión
        navigate('/login');
        window.location.reload();
      };

      /*
      const comprarProducto = (precio, idU) =>{
        datos.saldo= datos.saldo - precio;
        Axios.put("http://localhost:3002/buy", {
            id_usuario:idU,
            saldo:datos.saldo
        })
        .then(()=>{
            console.log("productos db");
            Swal.fire({
                background:'rgba(0, 0, 0, 0.92)',
                color:'aliceblue',
                title:`Comprado! ${precio}`,
                text: 'Has comprado este producto y se te a descontado de tu balance.',
                icon: 'success',
                confirmButtonColor:'#3085d6'
              })
              console.log(datos.saldo)
              console.log(idU);
              return datos.saldo
        }).catch((error) => {
            console.error("Error al actualizar el balance:", error);
            alert("Error al actualizar el balance");
        });
        
      }
      */
     

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
            <div className='lista estoy'>
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
                <p>Su balance es: {balance}Bs</p>
                </div>
            </nav>
            <h2>Shop</h2>
            <div className='contenedor-categoria'>
                <p className='cate-p'>Categorias:</p>
                <select className='categorias' name="opciones" onChange={handleCategoria}>
                    <option className='cate-op' value="todos">Todos</option>
                    <option className='cate-op' value="smartphones">Celulares</option>
                    <option className='cate-op' value="laptops">Laptops</option>
                    <option className='cate-op' value="groceries">groceries</option>
                </select>
            </div>
            <div className='contenedor-productos'>
            {
                productosFiltrados && productosFiltrados.map((val, key)=>{
            
                    return <div className='contenedor' key={key}>
                            <Card className='carta'>
                            <Card.Img className='img-producto' variant="top" src={val.url} />
                            <Card.Body className='text-cont'>
                            <div>
                                <Card.Title  className='titulo'>{val.titulo}</Card.Title>
                                <p>{val.precio}$</p>
                            </div>
                            <Card.Text className='descripcion'>
                            {val.descripcion}
                            </Card.Text>
                            <ComprarProducto precio={val.precio} id_producto={val.id_producto} url={val.url} titulo={val.titulo} />


                            {/*<Button onClick={() => {
                                if (val.precio >= datos.saldo) {
                                    Swal.fire({
                                        background:'rgba(0, 0, 0, 0.92)',
                                        color:'aliceblue',
                                        icon: 'error',
                                        title: 'Balance insuficiente',
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
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                        comprarProducto(val.precio, datos.id_usuario);
                                        }
                                    })
                                }
                            }}  className='btn-comprar' variant="primary">Comprar</Button> 
                        */}
                        </Card.Body>
                        </Card>
                    </div>
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Shop