
CREATE DATABASE  LoucoPorCorinthians;

USE LoucoPorCorinthians;

CREATE TABLE  Usuario (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45),
  cpf CHAR(11),
  email VARCHAR(45),
  senha VARCHAR(45),
  imagem VARCHAR(2000)
);

CREATE TABLE Postagens (
  idPostagens INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(45),
  descricao VARCHAR(245),
  imagem varchar(900),
  fkUsuario INT,
  data date,
  FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario)
);

CREATE TABLE Curtidas (
  idCurtida INT PRIMARY KEY AUTO_INCREMENT,
  fkUsuario INT,
  fkPostagem INT,
  FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario),
  FOREIGN KEY (fkPostagem) REFERENCES Postagens (idPostagens),
  UNIQUE(fkUsuario, fkPostagem)  
);

CREATE TABLE resultado_questionario (
  idresultadoQuestionario INT PRIMARY KEY AUTO_INCREMENT,
  qtdDeAcertos INT,
  fkUsuario INT,
  FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario)
);

select * from curtidas;

 SELECT 
            p.idPostagens,
            p.titulo,
            p.descricao,
            p.data,
            p.fkUsuario,
            u.idUsuario,
            u.nome,
            u.imagem as imagemUsuario,
            p.imagem
        FROM postagens p
            INNER JOIN usuario u
                ON p.fkUsuario = u.idUsuario;
                
select * from usuario ;

select * from postagens;

select * from resultado_questionario;

INSERT INTO resultado_questionario (qtdDeAcertos,fkUsuario)VALUES();

SELECT * FROM resultado_questionario WHERE fkUsuario=2 LIMIT 5;

select * from postagens;
select * from curtidas;

	SELECT titulo,COUNT(idCurtida) as curtidas
FROM postagens as p
	left JOIN curtidas as c
ON p.idPostagens= c.fkPostagem
	WHERE p.fkUsuario=2
GROUP BY idPostagens LIMIT 5;
    
SELECT * FROM resultado_questionario WHERE fkUsuario= 2  ORDER BY idresultadoQuestionario DESC LIMIT 5;
