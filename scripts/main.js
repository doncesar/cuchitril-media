
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
    "“No hay plan, con suerte nos alcanza para el pan.”",
    "“¿Quién necesita UX cuando tienes intuición?”",
    "“Diseñamos con amor, caos y un poco de café soluble recalentado.”",
    "“La radio está encendida. Nadie sabe cómo se apaga.”",
    "“No es un bug, es una abuela con carácter.”",
    "“La estética es importante. La lógica, opcional.”",
    "“Este sitio fue testeado y aprobado por gatos.”",
    "“No tenemos misión. Tenemos intuición.”",
    "“La abuela dejó un Post-it en el servidor. Nadie lo entiende.”",
    "“Si algo falla, lo convertimos en contenido.”",
    "“El cuchitril no se explica. Se experimenta.”",
    "“Bienvenido al holding. No hay salida.”",
    "“El diseño es como la abuela: a veces incomprensible, pero siempre necesario.”",
    "“Si el sitio carga lento, es porque la abuela está preparando té.”",
    "“No hay cookies, pero sí galletas caseras.”",
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
    "Lo suyo no lo arregla ni el Fonasa, mijo!",
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
  const logsRandom = [ // Mensajes graciosos para la consola
    "👀 Veo que estás husmeando. Bienvenido al cuchitril interno.",
    "🧠 Este sitio no tiene IA, pero sí tiene abuela. Y eso es más peligroso.",
    "📡 Modo conspiranoia activado. Buscando señales en el código fuente...",
    "💾 Backup emocional detectado. Contiene memes, recetas y una carta sin enviar.",
    "🧨 No se autodestruyó nada, pero gracias por tu entusiasmo.",
    "🪤 Este sitio contiene trazas de sarcasmo, nostalgia y masking tape.",
    "🧃 ¿Sabías que este código fue escrito bajo los efectos del café soluble y la ansiedad?",
    "🧙‍♂️ Has desbloqueado el modo hechicero. No sirve de nada, pero suena místico.",
    "🧬 Código genético del cuchitril: 80% humor, 15% caos, 5% CSS que no entendemos.",
    "🧪 Este sitio fue testeado en navegadores, tostadoras y una calculadora Casio.",
    "🧘‍♀️ Si estás leyendo esto, probablemente estás procrastinando. Te apoyamos.",
    "🛠️ Advertencia: Este sitio fue construido con cinta adhesiva y buenas intenciones.",
    "🎩 Has encontrado el Easter Egg. No hay premio, pero te ganaste un saludo virtual.",
    "🚀 Modo explorador activado. Bienvenido a las entrañas del cuchitril."
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
    "Nivel de desinformación: Elevado. Cantaste el himno nacional durante el eclipse.",
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
    "Nivel de desinformación: Gourmet. Crees que el aceite de coco cura el estrés y las deudas.",
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
    "Escucha el episodio 5. No sé de qué trata, pero el título me dio curiosidad.",
    "El episodio 1 tiene más errores que tu ortografía, y me quedo corta...",
    "El episodio 3 es como una empanada sin pino: raro, pero igual se disfruta.",
    "No escuches el 2. Me hace llorar y no sé por qué.",
    "El 4 es el más corto. Ideal si estás apurado o emocionalmente inestable."
  ];
  const random = frases[Math.floor(Math.random() * frases.length)];
  document.querySelector(".abuela-recomienda").textContent = random;
}

// === Modal de El Cholguán ===
class CholguanModal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.titleEl = this.modal.querySelector(".modal-cholguan-title");
    this.textEl = this.modal.querySelector(".modal-cholguan-text");
    this.imgEl = this.modal.querySelector(".modal-cholguan-img");
    this.shareBtn = this.modal.querySelector(".modal-cholguan-share");
    this.closeBtn = this.modal.querySelector(".modal-cholguan-close");

    this.setupCloseEvents();
    this.setupShare();
  }

  setupCloseEvents() {
    this.closeBtn.addEventListener("click", () => this.close());
    window.addEventListener("click", (e) => {
      if (e.target === this.modal) this.close();
    });
  }

  setupShare() {
    this.shareBtn.addEventListener("click", () => {
      const texto = `${this.titleEl.textContent}\n\n${this.textEl.textContent}`;
      navigator.clipboard.writeText(texto).then(() => {
        this.shareBtn.textContent = "¡Copiado!";
        setTimeout(() => {
          this.shareBtn.textContent = "Compartir esta noticia";
        }, 1500);
      });
    });
  }

  open(noticia) {
    if (!noticia) return;

    this.titleEl.textContent = noticia.titulo;
    this.textEl.textContent = noticia.texto;
    this.imgEl.src = noticia.img;
    this.modal.style.display = "flex";
  }

  close() {
    this.modal.style.display = "none";
  }
}

function openCholguanModal() {
  fetch("noticias.json")
    .then(response => response.json())
    .then(data => {
      const grid = document.querySelector(".cholguan-grid");
      grid.innerHTML = "";

      const modalManager = new CholguanModal("modal-cholguan");

      data.forEach(noticia => {
        const card = document.createElement("div");
        card.className = "cholguan-card";
        card.innerHTML = `
          <img src="${noticia.img}" alt="Imagen noticia">
          <h3>${noticia.titulo}</h3>
          <p>${noticia.intro}</p>
          <button class="ver-mas" data-id="${noticia.id}">Ver más</button>
        `;
        grid.appendChild(card);
      });

      grid.querySelectorAll(".ver-mas").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-id");
          const noticia = data.find(n => n.id == id);
          modalManager.open(noticia);
        });
      });
    });
}

//== Fraces sección Contacto ===
function mostrarFraseContacto() {
  const frases = [
    "¿Tienes algo absurdo que contarnos?",
    "¿Tu abuela te dijo algo que merece ser archivado?",
    "¿La abuela Enriqueta te habló en sueños?",
    "¿Escuchaste un podcast que te hizo cuestionar la realidad?",
    "¿Tu gato te dio una idea millonaria?",
    "¿Te llegó una señal desde el subsuelo?",
    "¿Tu mensaje podría cambiar el mundo (o al menos hacernos reír)?",
    "¿Quieres confesar algo que ni tú entiendes?",
    "¿Tu tostadora te habló y necesitas contarlo?",
    "¿Tu absurda idea merece un lugar en El Cuchitril?"
  ];

  const fraseElemento = document.getElementById("frase-absurda");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % frases.length;
    fraseElemento.textContent = frases[index];
  }, 4000); // cambia cada 4 segundos

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
  openCholguanModal();
  mostrarFraseContacto();
  // Aquí puedes activar más funciones a medida que las vayas creando
});



