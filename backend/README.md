# Documentação da API

<div display="flex">
  <img src="https://img.shields.io/static/v1?label=Node&message=18-alpine&color=green&style=for-the-badge&logo=node.js"/> 
  <img src="https://img.shields.io/static/v1?label=Express&message=4.19.2&color=yellow&style=for-the-badge&logo=express"/> 
  <img src="https://img.shields.io/static/v1?label=MySQL2&message=3.9.4&color=blue&style=for-the-badge&logo=mysql2"/>
  <img src="https://img.shields.io/static/v1?label=Swagger&message=5.0.0&color=darkgreen&style=for-the-badge&logo=swagger"/>
  <img src="https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=Version&message=1.0.0&color=orange&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=Author&message=Luiz%20Felipe%20Silva&color=blue&style=for-the-badge"/>
</div>

<img src="./src/assets/swagger.png" alt="Swagger" width="100%"/>

## Sumário

- [Introdução](#introdução)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Visão geral da API](#visão-geral-da-api)
- [Documentação do Swagger](#documentação-do-swagger)
- [Recursos principais e Exemplos](#recursos-principais-e-exemplos)
  - [1. Listar tarefas](#1-listar-tarefas)
  - [2. Criar tarefa](#2-criar-tarefa)
  - [3. Atualizar tarefa](#4-atualizar-tarefa)
  - [4. Deletar tarefa](#5-deletar-tarefa)

## Introdução

Bem-vindo à documentação da API Tasks! Esta documentação fornece informações detalhadas sobre como usar a API, incluindo endpoints disponíveis, parâmetros aceitos, códigos de status e exemplos práticos. A documentação Swagger está disponível para uma visão mais interativa da API.

## Instalação

Para instalar e executar o projeto, siga os passos abaixo:

1. Clone o repositório
- Abra o terminal e execute o comando abaixo para clonar o repositório:

```bash
git clone https://github.com/luizfelipe9627/todolist-fullstack/backend.git
```

2. Defina as variáveis de ambiente
- Deixei um arquivo de exemplo chamado `.env.example` na raiz do projeto. Copie o conteúdo desse arquivo e crie um novo arquivo chamado `.env`. Preencha as variáveis de ambiente com as informações como no exemplo abaixo:

```bash
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=tasks
```

5. Instale o Docker
- Para instalar o Docker, siga as instruções no link abaixo:

```bash
https://docs.docker.com/get-docker/
```

4. Inicie o Docker
- Esse comando irá instalar as dependências do projeto e iniciar o container da aplicação e do banco de dados:

```bash
npm run docker:start
```

5. Acesse o servidor local
- Acesse no terminal do editor de código ou no do Docker o link do servidor local, sendo a porta definida no arquivo `.env`:

```bash
http://localhost:3000
```

## Visão geral da API

A API foi projetada para ser fácil e simples de usar. Abaixo estão alguns pontos importantes para começar:

- **Base URL**: O endpoint base para todas as chamadas da API é [http://localhost:3000].
- **Autenticação**: A API não requer autenticação.
- **Estrutura da resposta**: As respostas da API são retornadas em formato JSON. Os exemplos de resposta são fornecidos na documentação abaixo para cada endpoint.
- **Códigos de status**: A API retorna os seguintes códigos de status padrão: 200, 201 e 400. Códigos de status personalizados podem ser retornados em determinadas situações.

## Documentação do Swagger

Explore e teste a API de forma interativa usando a documentação local do Swagger. Acesse [link para a documentação do Swagger](http://localhost:3000) para obter uma visão visual completa dos endpoints, parâmetros e exemplos. Só é possível acessar a documentação do Swagger localmente após a instalação e execução do projeto.

## Recursos principais e Exemplos

### 1. Listar tarefas

Retorna uma lista de todos as tarefas.

- **Endpoint**: `/tasks`
- **Método**: `GET`

**Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "title": "Reunião de Planejamento",
    "status": "Concluída",
    "created_at": "Sun, 14 Apr 2024 22:09:50 GMT",
  }
  {
    "id": 2,
    "title": "Relatório Mensal",
    "status": "Pendente",
    "created_at": "Sun, 14 Apr 2024 22:09:50 GMT",
  }
]
```

### 2. Criar tarefa

Cria uma nova tarefa.

- **Endpoint**: `/tasks`
- **Método**: `POST`

**Exemplo de corpo da solicitação:**

```json
{
  "title": "Relatório Anual",
}
```

**Exemplo de resposta:**

```json
{
  "message": "Tarefa criada com sucesso."
}
```

### 3. Atualizar tarefa

Atualiza uma tarefa específica.

- **Endpoint**: `/tasks/:id`
- **Método**: `PUT`

**Exemplo de corpo da solicitação:**

```json
{
  "title": "Reunião com o Cliente",
  "status": "Concluída",
}
```

**Exemplo de resposta:**

```json
{
  "message": "Tarefa atualizada com sucesso."
}
```

### 4. Deletar tarefa

Deleta uma tarefa específica.

- **Endpoint**: `/products/:id`
- **Método**: `DELETE`

**Exemplo de resposta:**

```json
{
  "message": "Tarefa deletada com sucesso."
}
```
