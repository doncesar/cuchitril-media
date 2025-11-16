// document.getElementById("playAudio").addEventListener("click", () => {
//   const audio = document.getElementById("cortina");
//   audio.play();
// });

// document.addEventListener("DOMContentLoaded", () => {         //Espera a que el HTML esté completamente cargado antes de ejecutar el script. Así evitamos errores si el DOM aún no existe.
//   const formulario = document.querySelector("#abuela form");  // Selecciona el formulario dentro de la sección de la abuela
//   const input = document.querySelector("#pregunta");          // Selecciona el campo de entrada de texto
//   const botonConsejo = document.querySelector("#consejo-dia");// Selecciona el botón para obtener un consejo del día

//   const respuestas = [                                        // Array de respuestas al estilo "abuela chilena"
//     "¡Mijo, eso se arregla con una siesta y un pancito con té!",
//     "No hay que confiar en nadie que no sepa hacer pebre.",
//     "La vida es como un Excel sin fórmulas: pura intuición.",
//     "Si te duele el alma, ponte una frazada y escucha Los Ángeles Negros.",
//     "No te preocupís tanto, que hasta el JavaScript tiene días malos.",
//     "¡Eso no lo arregla ni el Fonasa, mijo!",
//     "A veces hay que reiniciar el día como si fuera Windows XP.",
//     "Si no te pescan, haz como el disquete: quédate firme y cuadrado.",
//     "No hay bug que no se arregle con una sopaipilla bien frita.",
//     "El amor es como el CSS: a veces no se alinea, pero igual embellece.",
//     "¡Mijo, si no hay pan, se hace tortilla!",
//     "No todo se arregla con un reinicio, pero ayuda.",
//     "La vida es como un cassette: hay que rebobinar antes de seguir.",
//     "Si te ignoran, haz como el fax: insiste hasta que te escuchen.",
//     "No confíes en alguien que no sabe preparar un buen charquicán.",
//     "A veces hay que guardar los sentimientos en un disquete y seguir.",
//     "El amor es como el Windows 95: lento, pero inolvidable.",
//     "Si estás triste, ponte una frazada y escucha a Zalo Reyes.",
//     "No hay pena que no se alivie con sopaipilla y TVN en la tarde.",
//     "La paciencia es como el módem: hace ruido, pero conecta.",
//     "No todo lo que brilla es oro, a veces es solo papel aluminio.",
//     "Si te duele el alma, llama a tu abuela antes que al soporte técnico.",
//     "La vida no tiene manual, pero sí tiene receta: pancito, té y cariño.",
//     "No hay bug más grande que un corazón roto, mijo.",
//     "Si te sentís perdido, busca el norte en una empanada de pino."

//   ];

//   formulario.addEventListener("submit", (e) => {                                  // Escucha el evento de envío del formulario
//     e.preventDefault();                                                           // Evita que la página se recargue al enviar el formulario
//     const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];  //Selecciona una frase aleatoria del arreglo. Math.random() genera un número entre 0 y 1, y Math.floor() lo redondea hacia abajo
//     mostrarRespuesta(respuesta);                                                  //Llama a la función que muestra la respuesta en pantalla
//     input.value = "";                                                             // Limpia el campo de entrada después de enviar la pregunta
//   });

//   botonConsejo.addEventListener("click", () => {
//     const consejo = respuestas[Math.floor(Math.random() * respuestas.length)];
//     mostrarRespuesta(consejo);
//   });

//   function mostrarRespuesta(texto) {                                              //Función para mostrar la respuesta en la página
//     let contenedor = document.querySelector("#abuela .respuesta");                //Busca si ya existe un contenedor para mostrar la respuesta. Si no, lo crea.
//     if (!contenedor) {
//       contenedor = document.createElement("div");
//       contenedor.className = "respuesta";
//       document.querySelector("#abuela").appendChild(contenedor);
//     }
//     contenedor.textContent = texto;                                               //Si no existe el contenedor, lo crea y lo agrega al DOM. Luego muestra la frase dentro de ese contenedor.
//   }
// });

// === Funciones del menu ===
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Crea el fondo interactivo
const overlay = document.createElement("div");
overlay.className = "menu-overlay";
document.body.appendChild(overlay);

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  toggle.classList.toggle("open"); // cambia ícono ☰ ↔ ❌
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  toggle.classList.remove("open");
});


// === Señales desde el cuchitril ===
function mostrarFraseRetro() {
  const frases = [
    "“Todo es contenido, incluso lo que no lo parece.”",
    "“La abuela Enriqueta está viendo tus cookies.”",
    "“Si no entendiste, mejor. Esa es la idea.”",
    "“No actualices, podrías despertarnos.”",
    "“Este sitio se autodestruirá en 5... 4... 3...”",
    "“No hay plan, con suerte nos va quedando pan.”",
    "“¿Quién necesita UX cuando tienes intuición?”",
    "“Diseñamos con amor, caos y un poco de café soluble recalentado.”",
    "“La radio está encendida. Nadie sabe cómo se apaga.”",
    "“No es un bug, es una abuela con carácter.”",
    "“La estética es importante. La lógica, opcional.”",
    "“Este sitio fue testeado y aprobado por gatos.”",
    "“No tenemos misión. Tenemos intuición.”",
    "“La abuela dejó un post-it en el servidor. Nadie lo entiende.”",
    "“Si algo falla, lo convertimos en contenido.”",
    "“El cuchitril no se explica. Se experimenta.”",
    "“Bienvenido al holding. No hay salida.”"
  ];

  const mensaje = document.getElementById("mensaje-cuchitril");
  if (!mensaje) return;

  let index = 0;

  function escribirFrase(frase) {
    mensaje.textContent = "";
    let i = 0;

    function escribir() {
      if (i < frase.length) {
        mensaje.textContent += frase.charAt(i);
        i++;
        setTimeout(escribir, 50);
      }
    }

    escribir();
  }

  function nuevaFrase() {
    const random = Math.floor(Math.random() * frases.length);
    escribirFrase(frases[random]);
  }

  // Mostrar una al cargar
  nuevaFrase();

  // Cambiar cada 10 segundos
  setInterval(nuevaFrase, 10000);
}

function activarCholguan() {
  const frases = [
    "Nivel de desinformación: moderado. Sospechamos que ves matinales.",
    "Has sido diagnosticado con síndrome de scroll eterno.",
    "Estado mental: confundido pero entretenido.",
    "Tu señal de humo fue interceptada por un influencer.",
    "Nivel de cuchitrilidad: aceptable para continuar.",
    "La abuela Enriqueta te está observando. No preguntes cómo.",
    "Tu historial de búsqueda es preocupante.",
    "Diagnóstico: exceso de pestañas abiertas.",
    "Recomendación: cerrar los ojos y pensar en MacGyver."
  ];

  const contenedor = document.querySelector(".experimento-card .cholguan-diagnostico");
  if (!contenedor) return;

  const texto = frases[Math.floor(Math.random() * frases.length)];
  let index = 0;

  contenedor.textContent = "";
  contenedor.style.display = "block";

  function escribir() {
    if (index < texto.length) {
      contenedor.textContent += texto.charAt(index);
      index++;
      setTimeout(escribir, 50); // velocidad de escritura
    }
  }

  escribir();

}


// === Animaciones del hero (placeholder) ===
function iniciarAnimacionesHero() {
  // Aquí podrías agregar efectos como glitch, fade, o scroll reveal
  // Por ahora está vacío, pero listo para crecer
}

// === Inicialización general ===
document.addEventListener("DOMContentLoaded", () => {
  mostrarFraseRetro();
  iniciarAnimacionesHero();
  // Aquí puedes activar más funciones a medida que las vayas creando
});
