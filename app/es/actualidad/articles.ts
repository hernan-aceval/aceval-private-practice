export type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  highlight?: string;
};

export type Article = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  date: string;
  dateLabel: string;
  readingTime: string;
  category: string;
  patientQuestion?: string;
  introduction: string;
  sections: ArticleSection[];
  literature?: string[];
};
export const articles: Article[] = [
  {
    slug: "ayuno-intermitente-y-glp-1",

    title: "Ayuno intermitente y tratamiento con GLP-1: ¿Tiene sentido combinarlos?",

    shortTitle: "Ayuno intermitente y GLP-1 Therapie",

    description:
      "¿Puede un tratamiento con GLP-1 (Ozempic, Mounjaro y Wegovy) ayudar a mantener mejor el ayuno intermitente? ¿Y tiene realmente sentido combinar ambos métodos?",

    date: "2026-08-06",

    dateLabel: "6 de agosto de 2026",

    readingTime: "6 minutos de lectura",

    category: "Medicina nutricional",

    patientQuestion:
      "Doctor, ya he intentado varias veces perder peso con el ayuno intermitente. Al principio me va bastante bien, pero después de unas semanas ya no consigo mantenerlo. Por eso estoy pensando en empezar un tratamiento con una inyección para adelgazar. ¿Cree que con este tratamiento me resultaría más fácil mantener el ayuno intermitente? ¿Tiene sentido combinar ambos métodos?",

    introduction:
      "Esta es una pregunta que escucho cada vez con mayor frecuencia en mi consulta. Es perfectamente comprensible: tanto el ayuno intermitente como los modernos agonistas de los receptores de GLP-1, como la semaglutida o la tirzepatida, pueden ayudar a reducir el peso. Por ello, resulta lógico pensar que la combinación de ambos métodos podría ser especialmente eficaz. Sin embargo, la respuesta no es tan sencilla.",
    sections: [
      {
        heading: "¿Cómo actúan realmente los medicamentos GLP-1?",

        paragraphs: [ "Muchas personas creen que los medicamentos GLP-1 (Ozempic, Mounjaro y Wegovy) aceleran el metabolismo o queman directamente la grasa. Sin embargo, no es así.", 
            "Estos medicamentos ayudan al organismo a regular mejor el hambre y la sensación de saciedad. Muchos pacientes refieren, ya al poco tiempo de iniciar el tratamiento, que sienten menos hambre, se sacian antes y comen porciones más pequeñas.", 
            "Como consecuencia, la ingesta energética suele disminuir de forma prácticamente automática. Por este motivo, durante un tratamiento con GLP-1 no solo es importante cuánto se come, sino, sobre todo, qué se come.", ],
      },

      {
        heading: "¿Y cómo encaja el ayuno intermitente?",

        paragraphs: [ "En el ayuno intermitente se establece principalmente cuándo se come. El periodo diario destinado a la alimentación se limita, creando así intervalos más prolongados sin ingesta de alimentos.", 
            "En las redes sociales se transmite con frecuencia la impresión de que los periodos de ayuno especialmente prolongados son, por principio, mejores. Sin embargo, no existen evidencias convincentes que lo demuestren, especialmente en personas que reciben simultáneamente un tratamiento con GLP-1.", 
            "Según los conocimientos científicos actuales, no existe una recomendación general de combinar sistemáticamente un tratamiento con GLP-1 con un ayuno intermitente estricto. Pero tampoco es necesario renunciar a él de forma general.", ],
highlight:
    "La pregunta decisiva no es: ¿cuánto tiempo puedo ayunar? Lo más importante es: ¿continúa recibiendo mi organismo suficientes proteínas, vitaminas y minerales a pesar de la pérdida de peso?",
},
      {
  heading: "Al perder peso debemos perder grasa, no masa muscular",

  paragraphs: [
    "El objetivo de una pérdida de peso saludable no consiste únicamente en conseguir que la báscula marque una cifra más baja. El objetivo principal es reducir la grasa corporal y conservar al máximo la masa muscular.",

    "Durante un tratamiento con GLP-1, muchos pacientes comen considerablemente menos que antes. Si además se añaden periodos de ayuno muy prolongados, puede resultar más difícil ingerir cantidades suficientes de proteínas y otros nutrientes esenciales.",

    "La masa muscular desempeña un papel fundamental en el metabolismo, el rendimiento físico y el mantenimiento del peso a largo plazo.",
  ],

  list: [
    "ingerir una cantidad suficiente de proteínas",
    "mantener una actividad física regular",
    "realizar, siempre que sea posible, entrenamiento de fuerza dos o tres veces por semana",
  ],
},

      {
        heading: "Lo que recomiendo a mis pacientes",
        paragraphs: [ "En la mayoría de los casos, no considero necesario seguir un ayuno intermitente estricto durante un tratamiento con GLP-1.", 
            "En cambio, un ayuno nocturno natural de aproximadamente doce horas puede ser una opción razonable.", 
            "Este intervalo sin ingesta suele integrarse fácilmente en la vida cotidiana y, al mismo tiempo, deja tiempo suficiente para realizar comidas equilibradas y garantizar un aporte adecuado de nutrientes.", ],

        highlight:
          "Un ejemplo sencillo: cenar alrededor de las 19:00 h y desayunar alrededor de las 7:00 h.", },
      {
        heading: "Lo que realmente importa",
        paragraphs: [ "Lo importante no es permanecer sin comer durante el mayor tiempo posible. Lo importante es proporcionar al organismo los nutrientes que necesita durante los periodos de alimentación.", 
            "Dado que el apetito puede disminuir considerablemente durante un tratamiento con GLP-1, las comidas deben planificarse de forma consciente.", 
        ],
        list: [ 
            "proteínas de alta calidad para preservar la masa muscular", 
            "verduras y alimentos ricos en fibra",
            
            "hidratos de carbono complejos en lugar de productos azucarados altamente procesados", 
            
            "grasas saludables, por ejemplo procedentes del aceite de oliva, los frutos secos o el pescado", 
            
            "una hidratación adecuada", 
            
            "actividad física regular y entrenamiento de fuerza, siempre que el estado de salud lo permita", ],
      },
      {
        heading: "Mi conclusión",
        paragraphs: [ 
            "Cuando mis pacientes me preguntan si deberían practicar además ayuno intermitente durante un tratamiento con GLP-1, mi respuesta es: no necesariamente.", 
            
            "Un ayuno nocturno moderado de aproximadamente doce horas puede ser para muchas personas una opción razonable y fácil de integrar en la vida cotidiana. En cambio, los periodos de ayuno muy prolongados o especialmente estrictos no suelen ser necesarios.", 
            
            "Más importantes son una alimentación equilibrada y rica en proteínas, la actividad física regular y un tratamiento adaptado individualmente.", ],

        highlight:
          "No se trata de permanecer sin comer durante el mayor tiempo posible, sino de organizar las comidas de manera que el organismo continúe recibiendo los nutrientes que necesita a pesar de la pérdida de peso.", 
        },
    ],
    literature: [
      "Mozaffarian D et al. Nutritional Priorities to Support GLP-1 Therapy for Obesity. American Journal of Clinical Nutrition. 2025.",

      "Cozma D et al. Added Value to GLP-1 Receptor Agonist: Intermittent Fasting and Lifestyle Modification to Improve Therapeutic Effects and Outcomes. Biomedicines. 2025.",

      "Pantazopoulos D et al. GLP-1 Receptor Agonists and Sarcopenia: Weight Loss at a Cost? Clinical Nutrition. 2025.",

      "Time-Restricted Eating and Metabolic Health. Nature Reviews Endocrinology. 2024.",
    ],
  },
];

export const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}