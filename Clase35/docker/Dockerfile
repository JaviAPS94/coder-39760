#Primero deefiinimos la imagen que vamos a tomar como base
FROM node:16.17.1-alpine3.16

#Defnir el directorio de trabajo
WORKDIR /app

#Copiamos el package.json
COPY package*.json ./

#Instalamos las dependencias en el contenedor
RUN npm install

#Copiamos el resto de archivos(nuestro código)
COPY . .

#De mi contendor yo quiero exponer el puerto 8080 para conectarme a mi aplicación desde mi computador o desde otros contenedores
EXPOSE 8080

#Definimos el comando que se ejecutará al iniciar el contenedor
CMD [ "npm", "start" ]
