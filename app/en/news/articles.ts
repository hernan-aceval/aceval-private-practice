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
    slug: "intermittent-fasting-and-glp-1",

    title: "Intermittent Fasting and GLP-1 Therapy – Does Combining Them Make Sense?",

    shortTitle: "Intervallfasten und GLP-1-Therapie",

    description:
      "Kann eine GLP-1-Therapie dabei helfen, Intervallfasten besser durchzuhalten? Und ist die Kombination beider Methoden überhaupt sinnvoll?",

    date: "2026-08-06",

    dateLabel: "6. August 2026",

    readingTime: "6 Minuten Lesezeit",

    category: "Ernährungsmedizin",

    patientQuestion:
      "Herr Doktor, ich habe schon mehrmals versucht, mit Intervallfasten abzunehmen. Anfangs klappt es ganz gut, aber nach einigen Wochen halte ich es einfach nicht mehr durch. Deshalb denke ich jetzt über eine Behandlung mit der Abnehmspritze nach. Glauben Sie, dass ich damit das Intervallfasten besser schaffen würde? Wäre die Kombination beider Methoden sinnvoll?",

    introduction:
      "Diese Frage höre ich in meiner Sprechstunde immer häufiger. Sie ist nachvollziehbar: Sowohl Intervallfasten als auch moderne GLP-1-Rezeptoragonisten wie Semaglutid oder Tirzepatid können beim Abnehmen helfen. Da liegt der Gedanke nahe, dass die Kombination beider Methoden besonders wirksam sein müsste. Ganz so einfach ist die Antwort allerdings nicht.",

    sections: [
      {
        heading: "Wie wirken GLP-1-Medikamente überhaupt?",

        paragraphs: [
          "Viele Menschen glauben, dass GLP-1-Medikamente den Stoffwechsel beschleunigen oder Fett direkt verbrennen. Das ist jedoch nicht der Fall.",

          "Diese Medikamente unterstützen den Körper dabei, Hunger und Sättigung besser zu regulieren. Viele Patienten berichten schon nach kurzer Zeit, dass sie weniger Hunger verspüren, schneller satt werden und kleinere Portionen essen.",

          "Dadurch wird meist automatisch weniger Energie aufgenommen. Deshalb ist während einer GLP-1-Therapie nicht nur entscheidend, wie viel gegessen wird, sondern vor allem, was gegessen wird.",
        ],
      },

      {
        heading: "Und wie passt das Intervallfasten dazu?",

        paragraphs: [
          "Beim Intervallfasten wird vor allem festgelegt, wann gegessen wird. Die tägliche Essenszeit wird begrenzt, sodass längere Essenspausen entstehen.",

          "In sozialen Medien entsteht häufig der Eindruck, dass besonders lange Fastenphasen grundsätzlich besser seien. Dafür gibt es jedoch keine überzeugenden Belege – insbesondere nicht bei Menschen, die gleichzeitig eine GLP-1-Therapie erhalten.",

          "Nach dem derzeitigen Stand der Wissenschaft gibt es keine allgemeine Empfehlung, eine GLP-1-Therapie grundsätzlich mit strengem Intervallfasten zu kombinieren. Es muss aber auch nicht grundsätzlich darauf verzichtet werden.",
        ],

        highlight:
          "Die entscheidende Frage lautet nicht: Wie lange kann ich fasten? Wichtiger ist: Wird mein Körper trotz Gewichtsabnahme ausreichend mit Eiweiß, Vitaminen und Mineralstoffen versorgt?",
      },

      {
        heading: "Beim Abnehmen soll Fett verloren gehen – nicht Muskulatur",

        paragraphs: [
          "Das Ziel einer gesunden Gewichtsabnahme ist nicht nur eine niedrigere Zahl auf der Waage. Vor allem Körperfett soll reduziert werden, während die Muskulatur möglichst erhalten bleibt.",

          "Unter einer GLP-1-Therapie essen viele Patienten deutlich weniger als früher. Kommen zusätzlich sehr lange Fastenphasen hinzu, kann es schwieriger werden, ausreichend Eiweiß und andere wichtige Nährstoffe aufzunehmen.",

          "Muskulatur ist für den Stoffwechsel, die körperliche Leistungsfähigkeit und den langfristigen Erhalt des Gewichts von großer Bedeutung.",
        ],

        list: [
          "ausreichend Eiweiß aufnehmen",
          "regelmäßig körperlich aktiv sein",
          "nach Möglichkeit zwei- bis dreimal pro Woche Krafttraining durchführen",
        ],
      },

      {
        heading: "Was ich meinen Patienten empfehle",

        paragraphs: [
          "In den meisten Fällen halte ich ein strenges Intervallfasten während einer GLP-1-Therapie nicht für notwendig.",

          "Sinnvoll kann dagegen ein natürliches nächtliches Fasten von ungefähr zwölf Stunden sein.",

          "Diese Essenspause lässt sich meist gut in den Alltag integrieren und lässt gleichzeitig genügend Zeit für ausgewogene Mahlzeiten und eine ausreichende Nährstoffaufnahme.",
        ],

        highlight:
          "Ein einfaches Beispiel: Abendessen gegen 19 Uhr und Frühstück gegen 7 Uhr.",
      },

      {
        heading: "Worauf es wirklich ankommt",

        paragraphs: [
          "Entscheidend ist nicht, möglichst lange nichts zu essen. Entscheidend ist, den Körper während der Essenszeiten gut zu versorgen.",

          "Da der Appetit unter einer GLP-1-Therapie deutlich geringer sein kann, sollten die Mahlzeiten bewusst zusammengestellt werden.",
        ],

        list: [
          "hochwertiges Eiweiß zum Erhalt der Muskulatur",
          "Gemüse und ballaststoffreiche Lebensmittel",
          "komplexe Kohlenhydrate statt stark verarbeiteter Zuckerprodukte",
          "gesunde Fette, beispielsweise aus Olivenöl, Nüssen oder Fisch",
          "ausreichend Flüssigkeit",
          "regelmäßige Bewegung und Krafttraining, soweit gesundheitlich möglich",
        ],
      },

      {
        heading: "Mein Fazit",

        paragraphs: [
          "Wenn mich Patienten fragen, ob sie während einer GLP-1-Therapie zusätzlich Intervallfasten machen sollten, lautet meine Antwort: Nicht unbedingt.",

          "Ein moderates nächtliches Fasten von ungefähr zwölf Stunden kann für viele Menschen eine sinnvolle und alltagstaugliche Ergänzung sein. Sehr lange oder besonders strenge Fastenphasen sind dagegen meist nicht erforderlich.",

          "Wichtiger sind eine ausgewogene, eiweißreiche Ernährung, regelmäßige Bewegung und eine individuell abgestimmte Behandlung.",
        ],

        highlight:
          "Nicht möglichst lange nichts essen – sondern die Mahlzeiten so gestalten, dass der Körper trotz Gewichtsabnahme gut versorgt bleibt.",
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