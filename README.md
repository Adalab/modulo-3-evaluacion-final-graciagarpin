## OWEN WILSON'S WOW 😮🗯️

🚀 PRIMEROS PASOS PARA INICIAR EL PROYECTO EN TU ORDENADOR:

🛠️ Para visualizar este proyecto necesitas tener instalados en tu VSC (o similar):  
- NPM
- Node.js
- React

Si no tienes instalada la librería React, instala Create React App con el siguiente comando de npm:

npm install -g create-react-app

Una vez hemos instalado React de manera global, instala las dependencias y React Route Dom con los siguientes comandos:

npm install  
npm install react-router-dom

📌Objetivos del ejercicio:  
1. Listar las escenas que traemos de la API:  
Nos piden realizar una web con el listado de 50 escenas donde el actor Owen Wilson ha dicho 'wow'.  
Para eso, utilizamos el servicio de https://owen-wilson-wow-api.onrender.com/wows/random?results=50 que nos devuelve información de 50 escenas de películas aleatorias. Sobre cada una, vamos a mostrar al menos:  
- Poster (poster)
- Película (movie)
- Frase completa (full_line)
- Año (year)
Puedes ingresar a la página oficial del Api en el siguiente enlace https://owen-wilson-wow-api.onrender.com/

2. Filtrado por película  
Ya tenemos el listado de escenas, realizamos un filtro para buscar por película.  Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo las escenas cuya película contiene las letras escritas.

3. Filtrado por año  
Filtramos el listado por año de la película.  
Para eso, añadimos un select a la interfaz, de forma que al seleccionar un año queden en la interfaz solo las escenas que coincidan con el año seleccionado.
Por defecto, cuando carga la página aparecen todos en orden numérico ascendente.

4. Componentes de la aplicación
La aplicación debe tener los siguientes componentes como mínimo:
- Componente para los filtros.
- Componente para el listado.
- Componente para la tarjeta de cada escena del listado.
- Componente para el detalle de cada escena del listado.

5. Detalle de cada escena  
Implementamos una nueva funcionalidad: al hacer clic sobre la tarjeta de una escena, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la pantalla de detalle aparecerá:
- nombre de la película,
- frase completa
- director
- el enlace del audio de la escena - que al darle clic debe mostrarse en una pestaña aparte en el navegador-.

6. Detallitos de calidad
- Como nos gusta cuidar la semántica, el campo de texto debe estar recubierto por una etiqueta <form />.
- Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie la ruta sin querer.
- Si se busca por un texto por ejemplo "ZZZ" y no hay ninguna escena de película que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ninguna nombre de película que coincida con la palabra ZZZ".
- El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
- Al entrar en el detalle de un escena y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.
7. BONUS: Mejoras visuales  
Para terminar, podéis realizar algunas mejoras visuales del ejercicio. Por ejemplo:
- Poner bonita tu web y agregar el estilo que desees.
- Agregar iconos a la información que se muestre en el detalle de las escenas.
- Usar algún sistema de grid para pintar el listado.
- Que funcione bien el responsive en dispositivos pequeños.
8. BONUS: URL compatible    
Como ejercicio extra os proponemos que la URL del detalle de cada escena sea compatible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle de la escena de una película.
Si refrescamos el navegador en el detalle de una escena de la película debe volver a mostrar el detalle de la película, solo si está almacenado en el local storage.
Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo
http://localhost:3000/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje del tipo "La escena que buscas no existe".
9. BONUS: Ordenación  
Un extra interesante sería que ordenáseis el listado de escenas alfabéticamente por el nombre de la película.


