## Descripción del Proyecto
Este proyecto está diseñado para mostrar las naves del universo de Star Wars, los pilotos que las conducen y las películas en las que aparecen. Se realiza una conexión con la API pública de Star Wars para obtener datos de las naves y sus respectivos pilotos, además de utilizar una fuente de imágenes para mostrar representaciones visuales de las naves. El objetivo es ofrecer una experiencia interactiva que permita a los usuarios explorar el vasto mundo de Star Wars a través de una interfaz amigable.

## Interacciones entre Componentes y Servicios
El proyecto consta de los siguientes componentes:

- Home: La página principal donde se puede navegar hacia las diferentes secciones del proyecto.
- Login: Permite a los usuarios autenticarse en la aplicación.
- Registro: Facilita el registro de nuevos usuarios.
- Starships: Muestra una lista de las naves de Star Wars obtenidas de la API.
- Starships-Details: Proporciona información detallada sobre una nave específica, incluidos los pilotos que la conducen.
- Las interacciones entre componentes y servicios son las siguientes:

## Servicios:
- AuthService: Se encarga de la autenticación de los usuarios.
- StarshipService: Maneja la lógica de obtención de datos de las naves y los pilotos desde la API.
- Guards: Se utilizan para restringir el acceso a ciertas rutas, asegurando que solo los usuarios autenticados puedan acceder a determinadas secciones de la aplicación.
- Características Principales
- Autenticación de usuarios mediante JSON Server y json-server-auth.
- Visualización de naves de Star Wars con sus respectivos pilotos y detalles.
- Protección de rutas mediante guards.
- Interfaz de usuario responsiva y atractiva gracias a Bootstrap y Angular Material.

## Estructura del Proyecto

/src
|-- /app
|   |-- /components
|   |   |-- home
|   |   |-- login
|   |   |-- registro
|   |   |-- starships
|   |   |-- starships-details
|   |-- /services
|   |   |-- auth.service.ts
|   |   |-- starship.service.ts
|   |-- /guards
|   |   |-- auth.guard.ts
|-- db.json

## Tecnologías Utilizadas
- Angular: Framework para la creación de la aplicación.
- Bootstrap: Framework CSS para diseño responsivo.
- Angular Material: Para formularios reactivos y componentes de interfaz de usuario.
- JSON Server: Para simular un backend RESTful.
- json-server-auth: Para manejar la autenticación de usuarios.

## Instalación
Para instalar y ejecutar este proyecto, sigue los pasos a continuación:

1. Clona el repositorio:
git clone <url-del-repositorio>
cd <nombre-del-repositorio>

2. Instala las dependencias: 
- npm install para instalar las dependencias Node.js del proyecto
- Instala JSON Server y json-server-auth: npm install -g json-server json-server-auth

3. Ejecuta la aplicación Angular y el servidor:

- Ejecuta el proyecto con **ng serve -o** para entrar directamente al puerto del proyecto "http://localhost:4200."
- Ejecuta el servidor con el comando **npm run servidor**


## Conclusiones
Este proyecto proporciona una plataforma interactiva para los aficionados de Star Wars, permitiendo explorar las naves y sus pilotos. La integración de Angular con servicios RESTful facilita la obtención de datos en tiempo real, mientras que la autenticación asegura que los usuarios tengan una experiencia personalizada. Las herramientas y tecnologías utilizadas en este proyecto son ampliamente reconocidas y proporcionan una base sólida para futuros desarrollos.