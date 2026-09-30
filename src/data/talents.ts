import type { Talent } from "@/types";

export const talents: Talent[] = [
  {
    id: "talent-elena-castaneda",
    slug: "elena-castaneda",
    name: "Elena Castañeda",
    specialty: "Diseño textil y tejido",
    shortBio:
      "Convierte fibras, color y paciencia en piezas contemporáneas hechas para acompañar la vida diaria.",
    story:
      "Elena aprendió a tejer en familia y convirtió esa práctica cotidiana en un lenguaje propio. Durante décadas ha explorado telares, crochet y fibras mexicanas, siempre buscando que cada pieza sea útil, durable y tenga una presencia serena. Hoy abre su mesa de trabajo para compartir procesos, errores y pequeños secretos que solo llegan con la práctica.",
    experienceYears: 38,
    experiencePhrase: "Más de 38 años trabajando con fibras y color.",
    image: "/images/talents/elena-castaneda.png",
    imageAlt: "Elena Castañeda trabajando con textiles en su taller",
    productIds: [
      "prod-bolsa-nudo",
      "prod-bufanda-bruma",
      "prod-tapiz-jacaranda",
    ],
    experienceIds: ["exp-crochet-cero"],
  },
  {
    id: "talent-arturo-vega",
    slug: "arturo-vega",
    name: "Arturo Vega",
    specialty: "Fotografía urbana",
    shortBio:
      "Observa la ciudad con calma y enseña a encontrar imágenes memorables en lo cotidiano.",
    story:
      "Arturo ha recorrido la Ciudad de México con distintas cámaras, pero sostiene que la herramienta más importante sigue siendo aprender a mirar. Su trabajo se concentra en la arquitectura, la luz y los gestos mínimos de la calle. Como maestro, traduce la técnica en decisiones claras y accesibles para que cada persona encuentre su propia voz visual.",
    experienceYears: 42,
    experiencePhrase: "Más de 40 años detrás de una cámara.",
    image: "/images/talents/arturo-vega.png",
    imageAlt: "Arturo Vega en su estudio de fotografía",
    productIds: [
      "prod-sombras-centro",
      "prod-geometrias-urbanas",
      "prod-libreta-luz",
    ],
    experienceIds: ["exp-fotografia-celular"],
  },
  {
    id: "talent-lucia-barragan",
    slug: "lucia-barragan",
    name: "Lucía Barragán",
    specialty: "Acuarela botánica",
    shortBio:
      "Pinta la vegetación de la ciudad con transparencias, ritmo y una mirada profundamente curiosa.",
    story:
      "Lucía llegó a la acuarela buscando registrar las plantas de su patio y encontró una forma de observar con mayor atención. Su práctica combina dibujo, mezcla de pigmentos y estudio botánico sin perder espontaneidad. Le interesa enseñar desde la exploración: entender el agua, perder el miedo a la hoja y construir una voz propia capa por capa.",
    experienceYears: 31,
    experiencePhrase: "Tres décadas explorando agua, pigmento y papel.",
    image: "/images/talents/lucia-barragan.png",
    imageAlt: "Lucía Barragán pintando una acuarela botánica",
    productIds: [
      "prod-acuarela-bugambilia",
      "prod-lamina-herbario",
      "prod-postales-patio",
    ],
    experienceIds: ["exp-acuarela-principiantes"],
  },
  {
    id: "talent-rafael-montoya",
    slug: "rafael-montoya",
    name: "Rafael Montoya",
    specialty: "Huerto urbano y jardinería",
    shortBio:
      "Diseña pequeños ecosistemas productivos para balcones, patios y azoteas de la ciudad.",
    story:
      "Rafael ha dedicado años a entender qué necesita una planta para prosperar entre concreto, cambios de clima y espacios reducidos. Su método parte de observar antes de comprar: la luz disponible, el agua, el tiempo y los hábitos de cada hogar. Comparte soluciones realistas para cultivar sin idealizar el proceso y disfrutar cada avance.",
    experienceYears: 28,
    experiencePhrase: "Casi 30 años cultivando en espacios urbanos.",
    image: "/images/talents/rafael-montoya.png",
    imageAlt:
      "Rafael Montoya cuidando un huerto en una terraza de Ciudad de México",
    productIds: ["prod-prensa-botanica"],
    experienceIds: ["exp-huerto-urbano"],
  },
];

export function getTalentById(id: string) {
  return talents.find((talent) => talent.id === id);
}

export function getTalentBySlug(slug: string) {
  return talents.find((talent) => talent.slug === slug);
}
