# O from é um comando que define a imagem base do container. Nesse caso, está definindo a imagem node:18-alpine como imagem base.
FROM node:18-alpine

# O workdir é um comando que define o diretório de trabalho do container, ou seja, é o diretório onde os comandos do Dockerfile serão executados, que é o diretório /usr/app.
WORKDIR /usr/app

# O copy é um comando que copia arquivos e diretórios do host para o container. Nesse caso, está copiando os arquivos package.json e package-lock.json da raiz do projeto para o diretório /usr/app do container.
COPY package*.json ./

# O run é um comando que executa um comando no terminal do container. Nesse caso, está rodando o comando npm install para instalar as dependências do projeto.
RUN npm install

# O copy é um comando que copia arquivos e diretórios do host para o container. Nesse caso, está copiando todos os arquivos e diretórios do projeto para o container.
COPY . .

# O expose é um comando que informa ao Docker que a aplicação escuta a porta 3001. Ou seja, a aplicação está rodando na porta 3001.
EXPOSE 3001

# O CMD é um comando que executa um comando no terminal do container. Nesse caso, está rodando o comando npm run start para iniciar a aplicação.
# O comando sh -c é um comando que executa um comando no terminal do container. Nesse caso, está rodando um comando condicional que verifica se a variável de ambiente NODE_ENV é igual a development. Se for, executa o comando npm run dev, senão, executa o comando npm run start.
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then npm run dev; else npm run start; fi"]
