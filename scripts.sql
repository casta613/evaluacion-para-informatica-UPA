CREATE DATABASE evaluacion_eduardo_castaneda;
USE evaluacion_eduardo_castaneda;
CREATE TABLE usuario (
	id integer not null auto_increment primary key,
    nombre varchar(100)not null,
    fecha date not null,
    telefono integer not null,
    correo varchar(50) not null,
    creacion date not null,
    EstadoUsuarioId integer not null
);

CREATE TABLE EstadoUsuario(
	id integer not null auto_increment primary key,
    titulo varchar(20) not null,
    clave varchar(20) not null
);

ALTER TABLE usuario 
add constraint fk_estado_usuario foreign key (EstadoUsuarioId) references EstadoUsuario(id);


INSERT INTO EstadoUsuarioestadousuario (titulo,clave) values ("Activo","activo");
INSERT INTO EstadoUsuario (titulo,clave) values ("Baja Permanente","baja");

