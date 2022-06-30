# Finer Things - Trabajo de Fin de Grado

Este trabajo de fin de grado tiene como propósito la creación de una aplicación web para la publicación y lectura de relatos cortos.

Se ofrece una IP de acceso público a la aplicación, para la cual no es necesaria ninguna configuración previa. Finer Things está disponible en la IP http://34.138.17.102:3000/.

Se proporciona un Dockerfile, .dockerignore y docker-compose para facilitar el despliegue de la aplicación web.  Se debe clonar el repositorio e introducir los siguientes comandos en el directorio /finerthings.

1. Para construir el contenedor: docker build -t tfg .
2. Para conectar la aplicación con la base de datos: docker-compose up
3. La aplicación se encontrará en http://127.0.0.1:3500

