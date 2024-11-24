
CREATE DATABASE  LoucoPorCorinthians;

USE LoucoPorCorinthians;

CREATE TABLE  Usuario (
  idUsuario INT PRIMARY KEY,
  nome VARCHAR(45),
  cpf CHAR(11),
  email VARCHAR(45),
  senha VARCHAR(45)
);

CREATE TABLE Postagens (
  idPostagens INT PRIMARY KEY,
  titulo VARCHAR(45),
  descricao VARCHAR(245),
  imagem BLOB,
  curtidas INT,
  fkUsuario INT,
  FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario)
);

CREATE TABLE resultado_questionario (
  idresultadoQuestionario INT PRIMARY KEY,
  qtdDeAcertos INT,
  fkUsuario INT,
  FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario)
);