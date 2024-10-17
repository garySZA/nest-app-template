<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="500" alt="Nest Logo" /></a>
</p>

# NEST APP - TEMPLATE

1. Clonar del repositorio
```
git clone https://github.com/garySZA/nest-app-template.git
```
2. Instalar dependencias
```
  yarn install
```
3. Clonar el archivo __.env.template__ y renombrar la copia a __.env__
4. Llenar las variables de entorno definidas en el archivo ```.env```
5. Levantar la aplicación en modo Dev
```
yarn start:dev
```

## Docker

1. Construir la imagen
```
docker build -t nest-app-template .
```
2. Ejecutar la imagen
```
docker run -p 7001:5005 --env PORT=5005 --env JWT_SECRET="your_jwt" nest-app-template
```

## Documentación
* Swagger
```
localhost:PORT/api/v1/documentation
```

![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

## Stack
* Docker
* JWT
* Nest JS
* Swagger
* Typescript
* Yarn

<br/>

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)