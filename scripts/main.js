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
//     "Mijo, No hay que confiar en nadie que no sepa hacer pebre.",
//     "Mijo, Si te duele el alma, ponte una frazada y escucha Los Ángeles Negros.",
//     "Mijo, ¡Eso no lo arregla ni el Fonasa, mijo!",
//     "Mijo, A veces hay que reiniciar el día como si fuera Windows XP.",
//     "Mijo, Si no te pescan, haz como el disquete: quédate firme y cuadrado.",
//     "Mijo, No hay bug que no se arregle con una sopaipilla bien frita.",
//     "Mijo, ¡Si no hay pan, se hace tortilla!",
//     "Mijo, No todo se arregla con un reinicio, pero ayuda.",
//     "Mijo, La vida es como un cassette: hay que rebobinar antes de seguir.",
//     "Mijo, Si te ignoran, haz como el fax: insiste hasta que te escuchen.",
//     "Mijo, No confíes en alguien que no sabe preparar un buen charquicán.",
//     "Mijo, A veces hay que guardar los sentimientos en un disquete y seguir.",
//     "Mijo, El amor es como el Windows 95: lento, pero inolvidable.",
//     "Mijo, Si estás triste, ponte una frazada y escucha a Zalo Reyes.",
//     "Mijo, No hay pena que no se alivie con sopaipilla y TVN en la tarde.",
//     "Mijo, La paciencia es como el módem: hace ruido, pero conecta.",
//     "Mijo, No todo lo que brilla es oro, a veces es solo papel aluminio.",
//     "Mijo, Si te duele el alma, llama a tu abuela antes que al soporte técnico.",
//     "Mijo, La vida no tiene manual, pero sí tiene receta: pancito, té y cariño.",
//     "Mijo, Si te sentís perdido, busca el norte en una empanada de pino."

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
// === La abuela responde ===
function activarAbuela() {
  const frases = [
    "¡Mijo, eso se arregla con una siesta y un pancito con té!",
    "Mijo, No hay que confiar en nadie que no sepa hacer pebre.",
    "Mijo, Si te duele el alma, ponte una frazada y escucha Los Ángeles Negros.",
    "Mijo, ¡Eso no lo arregla ni el Fonasa, mijo!",
    "Mijo, A veces hay que reiniciar el día como si fuera Windows XP.",
    "Mijo, Si no te pescan, haz como el disquete: quédate firme y cuadrado.",
    "Mijo, No hay bug que no se arregle con una sopaipilla bien frita.",
    "Mijo, ¡Si no hay pan, se hace tortilla!",
    "Mijo, No todo se arregla con un reinicio, pero ayuda.",
    "Mijo, La vida es como un cassette: hay que rebobinar antes de seguir.",
    "Mijo, Si te ignoran, haz como el fax: insiste hasta que te escuchen.",
    "Mijo, No confíes en alguien que no sabe preparar un buen charquicán.",
    "Mijo, A veces hay que guardar los sentimientos en un disquete y seguir.",
    "Mijo, El amor es como el Windows 95: lento, pero inolvidable.",
    "Mijo, Si estás triste, ponte una frazada y escucha a Zalo Reyes.",
    "Mijo, No hay pena que no se alivie con sopaipilla y TVN en la tarde.",
    "Mijo, La paciencia es como el módem: hace ruido, pero conecta.",
    "Mijo, No todo lo que brilla es oro, a veces es solo papel aluminio.",
    "Mijo, Si te duele el alma, llama a tu abuela antes que al soporte técnico.",
    "Mijo, La vida no tiene manual, pero sí tiene receta: pancito, té y cariño.",
    "Mijo, Si te sentís perdido, busca el norte en una empanada de pino."
  ]

  const contenedor = document.querySelector(".experimento-card .abuela-consejo");
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

// === Modal autodestructible ===
function openModal() {

  const logsRandom = [
    "👀 Veo que estás husmeando. Bienvenido al cuchitril interno.",
    "🧠 Este sitio no tiene IA, pero sí tiene abuela. Y eso es más peligroso.",
    "📡 Modo conspiranoia activado. Buscando señales en el código fuente...",
    "💾 Backup emocional detectado. Contiene memes, recetas y una carta sin enviar.",
    "🧨 No se autodestruyó nada, pero gracias por tu entusiasmo.",
    "🪤 Este sitio contiene trazas de sarcasmo, nostalgia y masking tape.",
    "🧃 ¿Sabías que este código fue escrito bajo los efectos de jugo de piña y ansiedad?",
    "🧙‍♂️ Has desbloqueado el modo hechicero. No sirve de nada, pero suena místico.",
    "🧬 Código genético del cuchitril: 80% humor, 15% caos, 5% CSS que no entendemos.",
    "🧪 Este sitio fue testeado en navegadores, tostadoras y una calculadora Casio.",
    "🧘‍♀️ Si estás leyendo esto, probablemente estás procrastinando. Te apoyamos.",
    "🧂 Este sitio contiene sal. Mucha sal. Especialmente en los diagnósticos."
  ]
  
  document.getElementById('autodestruct-modal').style.display = 'flex';

  const log = logsRandom[Math.floor(Math.random() * logsRandom.length)];
  console.log(log);
}

function closeModal() {
  document.getElementById('autodestruct-modal').style.display = 'none';
}


// === El Cholguán interactivo ===
function activarCholguan() {
  const frases = [
    "Nivel de desinformación: Crítico. Has compartido una cadena de WhatsApp con más de tres emojis de alerta.",
    "Nivel de desinformación: Elevado. Crees que el eclipse afecta el WiFi.",
    "Nivel de desinformación: Moderado. Consultaste si el cloro sirve como enjuague bucal.",
    "Nivel de desinformación: Preocupante. Reenviaste un video titulado “Mira esto antes de que lo borren”.",
    "Nivel de desinformación: Bajo. Pero sigues creyendo que los gatos absorben la mala energía.",
    "Nivel de desinformación: Intermitente. Alternas entre leer columnas de opinión y ver TikToks de tarot.",
    "Nivel de desinformación: Latente. Te pareció convincente un hilo de Twitter con fuentes tipo “mi primo trabaja en la NASA”.",
    "Nivel de desinformación: Institucional. Citaste a un panelista de “Mucho Gusto” en una discusión académica.",
    "Nivel de desinformación: Folklórico. Crees que el boldo cura el estrés financiero.",
    "Nivel de desinformación: Nostálgico. Extrañas cuando los noticieros duraban tres horas y tenían música de suspenso.",
    "Nivel de desinformación: Alto. Sospechamos que ves matinales.",
    "Nivel de desinformación: Crónico. Has compartido memes como si fueran hechos verificables.",
    "Nivel de desinformación: Agudo. Crees que el café descafeinado es una conspiración.",
    "Nivel de desinformación: Viral. Has reenviado un audio de más de 10 minutos sin verificar su contenido.",
    "Nivel de desinformación: Epidémico. Confundes noticias con horóscopos.",
    "Nivel de desinformación: Pandémico. Crees que las vacunas alteran el ADN y también la receta del pisco sour.",
    "Nivel de desinformación: Global. Has discutido con un extranjero sobre teorías conspirativas locales.",
    "Nivel de desinformación: Universal. Crees que todo es fake news, incluso este diagnóstico.",
    "Nivel de desinformación: Severo. Crees que el horóscopo influye en la tasa de interés.",
    "Nivel de desinformación: Pasivo-agresivo. Dices “yo no me meto en política” pero compartes memes de Piñera en modo Jedi.",
    "Nivel de desinformación: Místico. Consultaste si Mercurio retrógrado afecta el sistema de pensiones.",
    "Nivel de desinformación: Rural digital. Usas Facebook como motor de búsqueda.",
    "Nivel de desinformación: Aspiracional. Te pareció confiable un video con voz robótica y fondo de galaxia.",
    "Nivel de desinformación: Contagioso. Has dicho “yo lo vi en TikTok, así que debe ser cierto”.",
    "Nivel de desinformación: Vintage. Aún crees que el virus se transmite por antenas 5G.",
    "Nivel de desinformación: Transversal. Has compartido noticias falsas de izquierda, derecha y astrología.",
    "Nivel de desinformación: Gourmet. Crees que el aceite de coco cura el estrés y la deuda.",
    "Nivel de desinformación: Institucionalizado. Citaste a un diputado en una conversación sobre física cuántica."
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

// === Capitulos recomendados por la abuela ===
function recomendarEpisodio() {
  const frases = [
    "Escucha el episodio 5. No sé de qué trata, pero el título me dio rabia.",
    "El episodio 2 tiene menos errores que tu ortografía. Apenas.",
    "El episodio 3 es como una empanada sin pino: raro, pero igual se disfruta.",
    "No escuches el 4. Me hace llorar y no sé por qué.",
    "El 1 es el más corto. Ideal si estás apurado o emocionalmente inestable."
  ];
  const random = frases[Math.floor(Math.random() * frases.length)];
  document.querySelector(".abuela-recomienda").textContent = random;
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
