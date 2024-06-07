CREATE TABLE usuario (
 id_usuario INT NOT NULL AUTO_INCREMENT,
  usuario VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  nombre VARCHAR(255),
  apellido VARCHAR(255),
  usuario VARCHAR(255),
  clave VARCHAR(255),
  saldo DECIMAL(10, 2) DEFAULT 0
);

CREATE TABLE producto (
  id_producto INT PRIMARY KEY,
  titulo VARCHAR(255),
  descripcion TEXT,
  categoria VARCHAR(30),
  precio DECIMAL(10, 2),
  url VARCHAR(255),
  stock INT
);