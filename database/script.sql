CREATE DATABASE practicas;

USE practicas;

CREATE TABLE usuario (
    id INT(11) NOT NULL auto_increment PRIMARY KEY,
    nombre VARCHAR(45),
    username VARCHAR(45),
    correo VARCHAR(45),
    usuario_password VARCHAR(45),
    biografia VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE consola (
	id_consola int(11) not null auto_increment primary key,
    nombre varchar(45)
);

CREATE TABLE juego (
	id_juego int(11) not null auto_increment primary key,
    nombre varchar(45),
    descripcion varchar(45),
    cartucho varchar(45),
    fecha timestamp default current_timestamp,
    id_consola int(11) not null,
    foreign key (id_consola) references consola(id_consola)
);

CREATE TABLE biblioteca (
	id_biblioteca int(11) not null auto_increment primary key,
    id_usuario int(11) not null,
    id_juego int(11) not null,
    puntuacion int(10) not null,
    opinion varchar(45) not null,
    foreign key (id_usuario) references usuario(id),
    foreign key (id_juego) references juego(id_juego)
);

CREATE TABLE publicacion (
	id_publicacion int(11) not null auto_increment primary key,
    id_usuario int(11) not null,
    id_juego int(11) not null,
    fecha timestamp default current_timestamp not null,
    comentario varchar(45) not null,
    foreign key (id_usuario) references usuario(id),
    foreign key (id_juego) references juego(id_juego)
);

CREATE TABLE comentario (
	id_comentario INT(11) NOT NULL auto_increment PRIMARY KEY,
    id_publicacion int(11) not null,
    id_usuario int(11) not null,
    comentario varchar(45) not null,
    foreign key (id_usuario) references usuario(id),
    foreign key (id_publicacion) references publicacion(id_publicacion)
);

select * from usuario;
select * from consola;
select * from juego;
select * from biblioteca;
select * from publicacion;
select * from comentario;