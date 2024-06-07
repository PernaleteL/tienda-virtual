import { useState } from 'react'

export const useProductos = () => {
    
    const [productos, setProductos] = useState([]);
    const [categoria, setCategoria] = useState('todos');
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [balance, setBalance] = useState("");

    const handleProductos = (data) =>{
        setProductos(data);
        setProductosFiltrados(data);
    }

    const handleBalance =(data)=>{
        setBalance(data)
    }
    
    const handleCategoria = (e) => {
      const selectedCategoria = e.target.value;
      if (selectedCategoria === "todos") {
          // Si se selecciona "Todos", mostrar todos los productos sin filtrar
          setProductosFiltrados(productos);
      } else {
          // Filtrar productos por la categoría seleccionada
          setCategoria(selectedCategoria);
          setProductosFiltrados(productos.filter((producto) => producto.categoria === selectedCategoria));
      }
  }  

  return (
    {
        productos,
        handleProductos,
        categoria,
        handleCategoria,
        productosFiltrados,
        balance,
        handleBalance
    }
  )
}
