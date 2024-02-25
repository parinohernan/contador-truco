https://github.com/parinohernan/contador-truco.git

Plan de Implementación:

1. Configuración del Proyecto:
   Configurar un proyecto de React Native con TypeScript.
   Instalar todas las dependencias necesarias, como React Navigation para la navegación entre pantallas, si es necesario.
2. Estructura del Proyecto:
   Dividir el proyecto en componentes lógicos que representen las diferentes partes del contador del juego.
   Organizar los archivos y carpetas de manera que reflejen la estructura del juego de truco argentino.
3. Diseño de Componentes:
   Crear componentes para mostrar los puntos de "Nosotros" y "Ellos".
   Implementar botones para sumar y restar puntos para cada lado.
   Mostrar el estado actual del juego, como el número de puntos buenos y malos para cada equipo.
4. Lógica del Contador:
   Implementar la lógica para sumar y restar puntos tanto para "Nosotros" como para "Ellos".
   Validar las reglas del juego, como asegurarse de que los puntos no excedan el límite máximo de 30 puntos.
   Controlar el flujo del juego y determinar al ganador cuando uno de los equipos alcanza los 15 puntos buenos.
5. Estilo y Diseño:
   Aplicar estilos a los componentes para que la interfaz de usuario sea intuitiva y atractiva.
   Utilizar colores y elementos visuales que reflejen la estética del truco argentino.
6. Pruebas:
   Escribir pruebas unitarias para los componentes y funciones clave del contador.
   Realizar pruebas de integración para asegurarse de que todos los componentes funcionen correctamente juntos.
7. Optimización y Despliegue:
   Optimizar el rendimiento de la aplicación para garantizar una experiencia fluida.
   Desplegar la aplicación en la plataforma deseada, ya sea iOS, Android o ambas.
   Consideraciones Adicionales:
   Implementar manejo de estado utilizando Redux o el contexto de React, según sea necesario.
   Utilizar buenas prácticas de accesibilidad para garantizar que la aplicación sea utilizada por la mayor cantidad de personas posible.
   Mantener la modularidad y la escalabilidad del código para facilitar futuras actualizaciones y mejoras.

---

Paso 1: Instalar React EXPO

npm install -g expo-cli

Paso 2: Crear un Nuevo Proyecto
Para crear un nuevo proyecto con Expo y TypeScript, ejecuta el siguiente comando en tu terminal:

<!-- esto ya no funciona expo init contadorDeTruco -->

npx create-expo-app contadorDeTruco

para intarar typescript
npm install --save-dev typescript @types/react @types/react-native
Renombra el archivo App.js a App.tsx.

Paso 3: Navegar al Directorio del Proyecto
Una vez que se haya creado el proyecto, navega al directorio del proyecto utilizando el siguiente comando:

cd contadorDeTruco

Paso 4: Ejecutar el Proyecto
Para ejecutar el proyecto en tu simulador de iOS o Android, ejecuta el siguiente comando:

nmp start

Asegúrate de tener configurado tu entorno de desarrollo para iOS o Android según corresponda.

Paso 5: Explorar el Proyecto
Ahora que has configurado con éxito tu proyecto de React Native con TypeScript, puedes empezar a explorar la estructura de archivos y comenzar a trabajar en tu aplicación.

Recuerda que este es solo el comienzo. A partir de aquí, puedes comenzar a agregar componentes, implementar la lógica del juego de truco argentino y diseñar la interfaz de usuario según tus necesidades.

creamos carpeta screens (donde ira cada pantalla)
creamos carpeta components (donde modularizamos los componentes)

paso : Navegator

npm install @react-navigation/native //permite routear en distintas screens
npm install @react-navigation/stack //muestra el stack. barra de navegacion
si es tu primer instalacion. npm install react-native-gesture-handler
