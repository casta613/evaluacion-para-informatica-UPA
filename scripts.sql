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

insert into evaluacion_eduardo_castaneda.usuario (nombre,fecha,telefono,correo,creacion,EstadoUsuarioId) values ('EDUARDO CASTANEDA','1998-08-08','54856584','EDUARDO@GMAIL.COM',NOW() - INTERVAL 1 DAY,1);
insert into evaluacion_eduardo_castaneda.usuario (nombre,fecha,telefono,correo,creacion,EstadoUsuarioId) values ('ALEJANDRO CACERES','1998-08-08','58569586','ALEJANDRO@GMAIL.COM',NOW() - INTERVAL 1 DAY,1);

insert into evaluacion_eduardo_castaneda.usuario (nombre,fecha,telefono,correo,creacion,EstadoUsuarioId) values ('JULIO SANCHEZ','1996-06-12','45856558','JULIO@GMAIL.COM',NOW() - INTERVAL 1 MONTH,2);
insert into evaluacion_eduardo_castaneda.usuario (nombre,fecha,telefono,correo,creacion,EstadoUsuarioId) values ('MARCO VAZQUES','1985-06-20','48577898','MARCO@GMAIL.COM',NOW()- INTERVAL 1 MONTH,2);

