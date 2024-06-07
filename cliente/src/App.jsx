import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import Gestion from './pages/Gestion';
import Recargar from './pages/Recargar';
import Compras from './pages/Compras';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

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


function App() {
  const isAuthenticated = (parseJwt(localStorage.getItem('token')).exp * 1000 > Date.now());
  const tokenizado = parseJwt(localStorage.getItem('token'))
  const datos = JSON.parse(JSON.stringify(tokenizado));
  console.log(datos.apellido);
  console.log(datos.admin);
  console.log(datos.id_usuario);
  const balance = localStorage.getItem('saldo')
  console.log(balance)


  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route path='/login' element={isAuthenticated ? <Navigate to='/home'/> : <Login/>} />
            <Route path='/registrarse' element={<Registrar/>} />
            {/* Rutas privadas */}
            <Route
              path='/home'
              element={isAuthenticated ? <Home /> : <Navigate to='/login' />}
            />
            <Route
              path='/shop'
              element={isAuthenticated ? <Shop /> : <Navigate to='/login' />}
            />
            <Route
              path='/recargar'
              element={isAuthenticated ? <Recargar /> : <Navigate to='/login' />}
            />
            <Route
              path='/compras'
              element={isAuthenticated ? <Compras /> : <Navigate to='/login' />}
            />
            <Route path='/gestion' element={isAuthenticated && datos.admin == 'admin' ? <Gestion/> : <Navigate to='/home' />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;