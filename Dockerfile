# Escolhendo a imagem base
FROM node:alpine

# Definindo o diretório de trabalho
WORKDIR /app

# Copiando os arquivos da aplicação para o container
COPY package*.json /app

# Instalando as dependências da aplicação
RUN npm install

COPY . .
# Expondo a porta 3000
EXPOSE 3000

# Definindo o comando padrão para iniciar a aplicação
CMD ["npm", "run", "dev"]