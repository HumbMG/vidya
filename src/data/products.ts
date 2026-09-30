import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "prod-bolsa-nudo",
    slug: "bolsa-nudo-terracota",
    name: "Bolsa Nudo Terracota",
    shortDescription:
      "Bolsa tejida a mano con asas integradas y textura firme.",
    description:
      "Una bolsa ligera y resistente, tejida punto por punto con hilo de algodón. Su estructura flexible permite llevar lo esencial sin perder forma y el tono terracota acompaña cualquier temporada.",
    story:
      "Elena desarrolló este patrón después de observar cómo una sola cinta podía formar cuerpo y asas sin costuras visibles. Cada bolsa toma varios días y conserva pequeñas variaciones que revelan el trabajo manual.",
    talentId: "talent-elena-castaneda",
    category: "Textiles",
    price: 1450,
    stock: 4,
    status: "AVAILABLE",
    images: ["/images/products/textiles.png"],
    imageAlt: "Bolsa tejida color terracota sobre una superficie clara",
    featured: true,
  },
  {
    id: "prod-bufanda-bruma",
    slug: "bufanda-bruma",
    name: "Bufanda Bruma",
    shortDescription: "Tejido suave de trama abierta en tonos marfil y olivo.",
    description:
      "Una bufanda amplia de algodón y lana ligera, pensada para mañanas frescas y capas sencillas. La trama abierta aporta movimiento sin sumar demasiado volumen.",
    story:
      "La combinación nació de una libreta de muestras que Elena ha conservado durante años. Recuperó dos puntos clásicos y los llevó a una paleta más contemporánea.",
    talentId: "talent-elena-castaneda",
    category: "Textiles",
    price: 980,
    stock: 6,
    status: "AVAILABLE",
    images: ["/images/products/textiles.png"],
    imageAlt: "Bufanda artesanal en tonos marfil y verde olivo",
    featured: true,
  },
  {
    id: "prod-tapiz-jacaranda",
    slug: "tapiz-jacaranda",
    name: "Tapiz Jacaranda",
    shortDescription:
      "Pieza mural tejida en una composición de fibras naturales.",
    description:
      "Tapiz de pequeño formato con volúmenes sutiles y una paleta inspirada en la floración de las jacarandas. Incluye una varilla ligera lista para colocarse.",
    story:
      "Esta pieza continúa la investigación de Elena sobre cómo traducir recorridos por la ciudad en ritmo, color y textura.",
    talentId: "talent-elena-castaneda",
    category: "Decoración",
    price: 2200,
    stock: 0,
    status: "COMING_SOON",
    images: ["/images/products/textiles.png"],
    imageAlt: "Tapiz contemporáneo tejido con fibras naturales",
    featured: false,
  },
  {
    id: "prod-sombras-centro",
    slug: "impresion-sombras-del-centro",
    name: "Sombras del Centro",
    shortDescription:
      "Impresión fotográfica de edición corta, numerada y firmada.",
    description:
      "Fotografía arquitectónica impresa en papel de algodón de calidad museo. La imagen registra el encuentro de una fachada del Centro Histórico con la luz de la tarde.",
    story:
      "Arturo volvió al mismo punto durante varias semanas hasta encontrar el instante exacto en que la sombra convertía una fachada conocida en una composición abstracta.",
    talentId: "talent-arturo-vega",
    category: "Fotografía",
    price: 1200,
    stock: 8,
    status: "AVAILABLE",
    images: ["/images/products/fotografia.png"],
    imageAlt: "Impresión fotográfica de arquitectura del Centro Histórico",
    featured: true,
  },
  {
    id: "prod-geometrias-urbanas",
    slug: "lamina-geometrias-urbanas",
    name: "Geometrías urbanas",
    shortDescription: "Lámina fotográfica de líneas y sombras de la ciudad.",
    description:
      "Una impresión abierta en papel mate, fácil de enmarcar, que reúne detalles geométricos encontrados en la arquitectura moderna de la ciudad.",
    story:
      "La serie surgió de caminatas sin ruta fija. Arturo seleccionó esta imagen por la tensión entre una escalera, un muro y la luz del mediodía.",
    talentId: "talent-arturo-vega",
    category: "Fotografía",
    price: 850,
    stock: 0,
    status: "SOLD_OUT",
    images: ["/images/products/fotografia.png"],
    imageAlt: "Lámina fotográfica de geometrías urbanas",
    featured: false,
  },
  {
    id: "prod-libreta-luz",
    slug: "libreta-luz-y-sombra",
    name: "Libreta Luz y Sombra",
    shortDescription:
      "Libreta artesanal con cubierta de una fotografía original.",
    description:
      "Libreta cosida a mano con papel ahuesado y cubierta mate. Su formato compacto funciona para notas, bocetos y observaciones durante una caminata.",
    story:
      "Arturo usa libretas similares para registrar lugares y horas antes de fotografiar. Esta edición lleva una imagen de su archivo personal en la portada.",
    talentId: "talent-arturo-vega",
    category: "Papelería",
    price: 480,
    stock: 12,
    status: "AVAILABLE",
    images: ["/images/products/fotografia.png"],
    imageAlt: "Libreta artesanal junto a impresiones fotográficas",
    featured: false,
  },
  {
    id: "prod-acuarela-bugambilia",
    slug: "acuarela-bugambilia",
    name: "Bugambilia de septiembre",
    shortDescription: "Acuarela original sobre papel de algodón.",
    description:
      "Pieza única de formato mediano, pintada con pigmentos profesionales sobre papel de algodón. Se entrega con paspartú protector, lista para enmarcar.",
    story:
      "Lucía pintó esta rama del natural durante una mañana luminosa. Las transparencias conservan el gesto rápido y la intensidad de la flor sin buscar una reproducción literal.",
    talentId: "talent-lucia-barragan",
    category: "Arte",
    price: 1800,
    stock: 1,
    status: "AVAILABLE",
    images: ["/images/products/acuarela.png"],
    imageAlt: "Acuarela botánica de una bugambilia",
    featured: true,
  },
  {
    id: "prod-lamina-herbario",
    slug: "lamina-herbario-domestico",
    name: "Herbario doméstico",
    shortDescription: "Lámina de arte inspirada en plantas de patio y balcón.",
    description:
      "Reproducción de alta calidad de seis estudios botánicos reunidos en una composición serena. Impresa en papel texturizado de tono natural.",
    story:
      "Los originales forman parte del cuaderno con el que Lucía registra los cambios de su jardín a lo largo del año.",
    talentId: "talent-lucia-barragan",
    category: "Arte",
    price: 650,
    stock: 0,
    status: "COMING_SOON",
    images: ["/images/products/acuarela.png"],
    imageAlt: "Lámina artística con estudios de plantas",
    featured: false,
  },
  {
    id: "prod-postales-patio",
    slug: "postales-plantas-del-patio",
    name: "Postales Plantas del Patio",
    shortDescription: "Juego de seis postales con acuarelas botánicas.",
    description:
      "Seis reproducciones en cartulina gruesa con reverso listo para escribir. Pueden enviarse, enmarcarse o conservarse como pequeña colección.",
    story:
      "Lucía eligió seis plantas comunes porque cree que observar lo cercano puede ser tan sorprendente como descubrir una especie lejana.",
    talentId: "talent-lucia-barragan",
    category: "Papelería",
    price: 420,
    stock: 15,
    status: "AVAILABLE",
    images: ["/images/products/acuarela.png"],
    imageAlt: "Postales con ilustraciones de acuarela botánica",
    featured: false,
  },
  {
    id: "prod-prensa-botanica",
    slug: "prensa-botanica-de-bolsillo",
    name: "Prensa botánica de bolsillo",
    shortDescription: "Prensa compacta para conservar hojas y flores pequeñas.",
    description:
      "Dos placas ligeras de madera certificada, cartones ventilados y correas textiles forman una prensa sencilla para iniciar un herbario doméstico.",
    story:
      "Rafael adaptó las prensas de campo a una escala fácil de guardar. Incluye una guía breve para recolectar de manera responsable y registrar cada muestra.",
    talentId: "talent-rafael-montoya",
    category: "Objetos",
    price: 720,
    stock: 5,
    status: "AVAILABLE",
    images: ["/images/products/huerto.png"],
    imageAlt: "Prensa botánica compacta con hojas y cuaderno",
    featured: false,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const productCategories = Array.from(
  new Set(products.map((product) => product.category)),
).sort();
