# 🖤 Louco por Corinthians ⚽

## Descrição
Louco por Corinthians é uma plataforma interativa dedicada aos torcedores do Corinthians, onde eles podem participar de quizzes, fazer postagens, editar seus perfis e visualizar um dashboard com suas postagens mais curtidas e o desempenho nos quizzes.

## Funcionalidades
- **🧩 Participar de Quizzes**: Teste seus conhecimentos sobre o Corinthians com quizzes divertidos e desafiadores.
- **📝 Fazer Postagens**: Compartilhe suas experiências, fotos e pensamentos sobre o time.
- **👤 Editar Perfil**: Personalize seu perfil com informações e fotos.
- **📊 Dashboard**: Veja suas postagens mais curtidas e acompanhe seu desempenho nos quizzes.

## Tecnologias Utilizadas
- **Node.js**: Utilizado para o backend do projeto.
- **HTML**: Estruturação das páginas web.
- **CSS**: Estilização das páginas web.
- **MySQL**: Banco de dados para armazenar informações dos usuários, postagens e quizzes.

## Estrutura do Banco de Dados
### Tabelas:
1. **👥 Usuario**
    - `idUsuario`: INT, PRIMARY KEY, AUTO_INCREMENT
    - `nome`: VARCHAR(45)
    - `cpf`: CHAR(11)
    - `email`: VARCHAR(45)
    - `senha`: VARCHAR(45)
    - `imagem`: VARCHAR(2000)

2. **📝 Postagens**
    - `idPostagens`: INT, PRIMARY KEY, AUTO_INCREMENT
    - `titulo`: VARCHAR(45)
    - `descricao`: VARCHAR(245)
    - `imagem`: VARCHAR(900)
    - `fkUsuario`: INT, FOREIGN KEY
    - `data`: DATE

3. **❤️ Curtidas**
    - `idCurtida`: INT, PRIMARY KEY, AUTO_INCREMENT
    - `fkUsuario`: INT, FOREIGN KEY
    - `fkPostagem`: INT, FOREIGN KEY
    - UNIQUE(fkUsuario, fkPostagem)

4. **❓ resultado_questionario**
    - `idresultadoQuestionario`: INT, PRIMARY KEY, AUTO_INCREMENT
    - `qtdDeAcertos`: INT
    - `fkUsuario`: INT, FOREIGN KEY

## Como usar
### Pré-requisitos
- Node.js
- MySQL

### Passos para rodar o projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/JoaoGaldinoCunha/ProjetoIndividualPi.git
    ```

2. Entre no diretório do projeto:
    ```bash
    cd ProjetoIndividualPi
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure o banco de dados MySQL:
    - Crie o banco de dados e as tabelas usando os comandos SQL fornecidos.

5. Configure as variáveis de ambiente no arquivo `.env`:
    ```plaintext
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=sua_senha
    DB_NAME=LoucoPorCorinthians
    ```

6. Execute o projeto:
    ```bash
    npm start
    ```

7. Acesse a aplicação no navegador:
    ```plaintext
    http://localhost:3000
    ```

## Contribuição
Se você quiser contribuir com o projeto, aqui estão algumas maneiras de fazer isso:

1. Fork o projeto.
2. Crie um branch (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`).
4. Push para o branch (`git push origin feature/nova-funcionalidade`).
5. Abra uma Pull Request.

## Contato
[![Email](https://img.shields.io/badge/Email-joaovictorgacunha@gmail.com-red)](mailto:joaovictorgacunha@gmail.com)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://br.linkedin.com/in/jo%C3%A3o-victor-galdino-cunha-47a0a32a9)

## Acknowledgments
Este projeto foi desenvolvido como parte das atividades acadêmicas da **Faculdade SPTech**.
