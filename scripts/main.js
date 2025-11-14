document.getElementById("playAudio").addEventListener("click", () => {
  const audio = document.getElementById("cortina");
  audio.play();
});

document.addEventListener("DOMContentLoaded", () => {         //Espera a que el HTML esté completamente cargado antes de ejecutar el script. Así evitamos errores si el DOM aún no existe.
  const formulario = document.querySelector("#abuela form");  // Selecciona el formulario dentro de la sección de la abuela
  const input = document.querySelector("#pregunta");          // Selecciona el campo de entrada de texto
  const botonConsejo = document.querySelector("#consejo-dia");// Selecciona el botón para obtener un consejo del día
  
  const respuestas = [                                        // Array de respuestas al estilo "abuela chilena"
    "¡Mijo, eso se arregla con una siesta y un pancito con té!",
    "No hay que confiar en nadie que no sepa hacer pebre.",
    "La vida es como un Excel sin fórmulas: pura intuición.",
    "Si te duele el alma, ponte una frazada y escucha Los Ángeles Negros.",
    "No te preocupís tanto, que hasta el JavaScript tiene días malos.",
    "¡Eso no lo arregla ni el Fonasa, mijo!",
    "A veces hay que reiniciar el día como si fuera Windows XP.",
    "Si no te pescan, haz como el disquete: quédate firme y cuadrado.",
    "No hay bug que no se arregle con una sopaipilla bien frita.",
    "El amor es como el CSS: a veces no se alinea, pero igual embellece.",
    "¡Mijo, si no hay pan, se hace tortilla!",
    "No todo se arregla con un reinicio, pero ayuda.",
    "La vida es como un cassette: hay que rebobinar antes de seguir.",
    "Si te ignoran, haz como el fax: insiste hasta que te escuchen.",
    "No confíes en alguien que no sabe preparar un buen charquicán.",
    "A veces hay que guardar los sentimientos en un disquete y seguir.",
    "El amor es como el Windows 95: lento, pero inolvidable.",
    "Si estás triste, ponte una frazada y escucha a Zalo Reyes.",
    "No hay pena que no se alivie con sopaipilla y TVN en la tarde.",
    "La paciencia es como el módem: hace ruido, pero conecta.",
    "No todo lo que brilla es oro, a veces es solo papel aluminio.",
    "Si te duele el alma, llama a tu abuela antes que al soporte técnico.",
    "La vida no tiene manual, pero sí tiene receta: pancito, té y cariño.",
    "No hay bug más grande que un corazón roto, mijo.",
    "Si te sentís perdido, busca el norte en una empanada de pino."

  ];

  formulario.addEventListener("submit", (e) => {                                  // Escucha el evento de envío del formulario
    e.preventDefault();                                                           // Evita que la página se recargue al enviar el formulario
    const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];  //Selecciona una frase aleatoria del arreglo. Math.random() genera un número entre 0 y 1, y Math.floor() lo redondea hacia abajo
    mostrarRespuesta(respuesta);                                                  //Llama a la función que muestra la respuesta en pantalla
    input.value = "";                                                             // Limpia el campo de entrada después de enviar la pregunta
  });

  botonConsejo.addEventListener("click", () => {
  const consejo = respuestas[Math.floor(Math.random() * respuestas.length)];
  mostrarRespuesta(consejo);
});
  
  function mostrarRespuesta(texto) {                                              //Función para mostrar la respuesta en la página
    let contenedor = document.querySelector("#abuela .respuesta");                //Busca si ya existe un contenedor para mostrar la respuesta. Si no, lo crea.
    if (!contenedor) {
      contenedor = document.createElement("div");
      contenedor.className = "respuesta";
      document.querySelector("#abuela").appendChild(contenedor);
    }
    contenedor.textContent = texto;                                               //Si no existe el contenedor, lo crea y lo agrega al DOM. Luego muestra la frase dentro de ese contenedor.
  }
});


