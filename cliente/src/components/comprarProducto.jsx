import Swal from "sweetalert2";
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import '../pages/Shop.css'

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

const ComprarProducto = (precio) =>{

  const tokenizado = parseJwt(localStorage.getItem('token'))
  const datos = JSON.parse(JSON.stringify(tokenizado));

  
  const handleClick = () => {
      console.log(datos.saldo)
      const resto = datos.saldo - precio.precio;
      const titulo = precio.titulo;
      const url = precio.url;
      const id_producto = precio.id_producto;
      const costo = precio.precio
      console.log(resto)
      console.log(precio.titulo)
      console.log(precio.url)
      console.log(costo)
    if (costo >= datos.saldo) {
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
          localStorage.setItem('saldo', resto);
          // Realizar la consulta a la API
          Axios.put("http://localhost:3002/buy", {
            id_usuario: datos.id_usuario,
            saldo: resto
          })
          .then(()=>{
            Axios.post("http://localhost:3002/compra", {
            id_usuario: datos.id_usuario,
            id_producto: id_producto,
            titulo: titulo,
            url: url,
            costo: costo
          })
          .then(() => {
            Swal.fire({
              background:'rgba(0, 0, 0, 0.92)',
              color:'aliceblue',
              title:`Comprado! ${resto}`,
              text: 'Has comprado este producto y se te a descontado de tu balance.',
              icon: 'success',
              confirmButtonColor:'#3085d6'
            })
          })
          .catch((error) => {
            console.error("Error al crear el nuevo dato en la tabla compra:", error);
            alert("Error al crear el nuevo dato en la tabla compra");
          });
        })
          .catch((error) => {
            console.error("Error al actualizar el balance:", error);
            alert("Error al actualizar el balance");
          });
        }
      })
    }
  };

  return (
    <Button className="btn-comprar" onClick={handleClick} variant="primary">
      Comprar
    </Button>
  );
};

export default ComprarProducto;