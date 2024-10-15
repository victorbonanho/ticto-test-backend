# Use a imagem base do Node.js
FROM node:14

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos do package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte
COPY . .

# Exponha a porta que seu aplicativo irá usar
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npx", "tsx", "src/index.ts"]
