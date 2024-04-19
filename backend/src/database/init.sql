# O create é usado para criar um banco de dados. O IF NOT EXISTS é usado para verificar se o banco de dados já existe antes de criá-lo, se não existir, ele será criado.
CREATE DATABASE IF NOT EXISTS todolist;

# O use é usado para selecionar um banco de dados existente. Se o banco de dados não existir, uma mensagem de erro será exibida.
USE todolist;

# O CREATE TABLE é usado para criar uma nova tabela no banco de dados. Dentro dos parênteses, você deve especificar os nomes das colunas e os tipos de dados que elas armazenarão.
CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT, # Define o id um valor inteiro que como uma chave primária(o id é único para cada linha) e o AUTO_INCREMENT é para que o MySQL gere automaticamente um novo valor para o id sempre que uma nova linha for inserida.
    title VARCHAR(1000) NOT NULL, # Define o title como uma string de até 45 caracteres e não pode ser nulo.
    status VARCHAR(45) NOT NULL, # Define o status como uma string de até 45 caracteres e não pode ser nulo.
    created_at VARCHAR(45) NOT NULL # Define o created_at como uma string de até 45 caracteres e não pode ser nulo.
);