import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-fotografia-celular",
    slug: "fotografia-con-celular",
    name: "Fotografía con celular: aprender a mirar",
    shortDescription:
      "Una caminata práctica para convertir escenas cotidianas en imágenes con intención.",
    description:
      "Arturo guía una sesión en grupo por calles tranquilas de la Roma Norte. Aprenderás a trabajar con luz disponible, encuadre y ritmo visual usando únicamente el teléfono que ya tienes.",
    learnings: [
      "Reconocer y aprovechar distintos tipos de luz",
      "Componer con líneas, capas y puntos de interés",
      "Editar una imagen sin perder naturalidad",
    ],
    talentId: "talent-arturo-vega",
    category: "Fotografía",
    price: 780,
    modality: "Presencial",
    zone: "Roma Norte, Cuauhtémoc",
    sessions: [
      {
        id: "foto-s1",
        label: "Sesión única",
        date: "18 de octubre de 2026",
        time: "10:00–13:00",
      },
    ],
    minimumCapacity: 5,
    maximumCapacity: 10,
    enrolled: 6,
    status: "OPEN",
    confirmationDeadline: "12 de octubre de 2026",
    materialsIncluded: ["Guía digital de ejercicios", "Mapa de recorrido"],
    image: "/images/products/fotografia.png",
    imageAlt: "Taller de fotografía urbana con celular en Ciudad de México",
    featured: true,
  },
  {
    id: "exp-crochet-cero",
    slug: "crochet-desde-cero",
    name: "Crochet desde cero",
    shortDescription:
      "Tres encuentros para dominar los puntos esenciales y terminar una pieza propia.",
    description:
      "Elena acompaña al grupo desde la forma de sostener el gancho hasta la lectura de un patrón sencillo. El ritmo permite practicar entre sesiones y resolver dudas con calma.",
    learnings: [
      "Elegir fibras y ganchos según el proyecto",
      "Tejer cadena, punto bajo y punto alto",
      "Leer un patrón básico y corregir errores comunes",
    ],
    talentId: "talent-elena-castaneda",
    category: "Textil",
    price: 1350,
    modality: "Presencial",
    zone: "San Miguel Chapultepec, Miguel Hidalgo",
    sessions: [
      {
        id: "crochet-s1",
        label: "Sesión 1",
        date: "7 de noviembre de 2026",
        time: "11:00–13:30",
      },
      {
        id: "crochet-s2",
        label: "Sesión 2",
        date: "14 de noviembre de 2026",
        time: "11:00–13:30",
      },
      {
        id: "crochet-s3",
        label: "Sesión 3",
        date: "21 de noviembre de 2026",
        time: "11:00–13:30",
      },
    ],
    minimumCapacity: 4,
    maximumCapacity: 8,
    enrolled: 5,
    status: "CONFIRMED",
    confirmationDeadline: "30 de octubre de 2026",
    materialsIncluded: [
      "Gancho de crochet",
      "Estambre para prácticas",
      "Patrón impreso",
    ],
    image: "/images/products/textiles.png",
    imageAlt: "Manos aprendiendo crochet con fibras de colores cálidos",
    featured: true,
  },
  {
    id: "exp-acuarela-principiantes",
    slug: "acuarela-para-principiantes",
    name: "Acuarela para principiantes",
    shortDescription:
      "Color, agua y observación para pintar una primera composición botánica.",
    description:
      "Una sesión luminosa para entender el comportamiento del agua y los pigmentos. Lucía propone ejercicios progresivos y acompaña a cada persona en una composición final.",
    learnings: [
      "Controlar agua y pigmento en lavados básicos",
      "Mezclar una paleta breve y armónica",
      "Construir volumen con transparencias",
    ],
    talentId: "talent-lucia-barragan",
    category: "Arte",
    price: 920,
    modality: "Presencial",
    zone: "Santa María la Ribera, Cuauhtémoc",
    sessions: [
      {
        id: "acuarela-s1",
        label: "Sesión única",
        date: "24 de octubre de 2026",
        time: "10:30–14:00",
      },
    ],
    minimumCapacity: 5,
    maximumCapacity: 9,
    enrolled: 9,
    status: "FULL",
    confirmationDeadline: "17 de octubre de 2026",
    materialsIncluded: [
      "Papel de algodón",
      "Pinceles de práctica",
      "Pigmentos compartidos",
    ],
    image: "/images/products/acuarela.png",
    imageAlt: "Mesa de taller con acuarelas botánicas y pinceles",
    featured: true,
  },
  {
    id: "exp-huerto-urbano",
    slug: "huerto-urbano-espacios-pequenos",
    name: "Huerto urbano en espacios pequeños",
    shortDescription:
      "Una propuesta para cultivar aromáticas y hojas verdes con la luz que sí tienes.",
    description:
      "Rafael prepara una experiencia práctica sobre contenedores, sustratos y selección de plantas para balcones y azoteas. Esta edición está validando interés antes de definir fecha.",
    learnings: [
      "Evaluar la luz disponible en casa",
      "Preparar un sustrato ligero y nutritivo",
      "Elegir cultivos realistas para cada espacio",
    ],
    talentId: "talent-rafael-montoya",
    category: "Jardinería",
    price: null,
    modality: "Presencial",
    zone: "Zona centro de CDMX por confirmar",
    sessions: [],
    minimumCapacity: 6,
    maximumCapacity: 12,
    enrolled: 0,
    status: "INTEREST_VALIDATION",
    confirmationDeadline: "Fecha por anunciar",
    materialsIncluded: ["Materiales por definir"],
    image: "/images/products/huerto.png",
    imageAlt: "Taller de huerto urbano en una terraza de Ciudad de México",
    featured: false,
  },
];

export function getExperienceBySlug(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}
