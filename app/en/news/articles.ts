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

    title:
      "Intermittent Fasting and GLP-1 Treatment: Does It Make Sense to Combine Them?",

    shortTitle: "Intermittent Fasting and GLP-1 Therapy",

    description:
      "Can GLP-1 treatment with medications such as Ozempic, Mounjaro or Wegovy make intermittent fasting easier to maintain? And does combining both approaches actually make sense?",

    date: "2026-08-06",

    dateLabel: "August 6, 2026",

    readingTime: "6 min read",

    category: "Nutritional Medicine",

    patientQuestion:
      "Doctor, I have already tried several times to lose weight with intermittent fasting. At first, it works quite well, but after a few weeks I can no longer keep it up. I am therefore considering starting treatment with a weight-loss injection. Do you think this treatment would make it easier for me to maintain intermittent fasting? Does it make sense to combine both approaches?",

    introduction:
      "This is a question I hear increasingly often in my practice. It is perfectly understandable: both intermittent fasting and modern GLP-1 receptor agonists such as semaglutide or tirzepatide can support weight loss. It therefore seems logical to assume that combining both approaches could be particularly effective. However, the answer is not quite that simple.",

    sections: [
      {
        heading: "How do GLP-1 medications actually work?",

        paragraphs: [
          "Many people believe that GLP-1 medications such as Ozempic, Mounjaro and Wegovy speed up the metabolism or directly burn fat. However, this is not how they work.",

          "These medications help the body regulate hunger and satiety more effectively. Many patients report shortly after starting treatment that they feel less hungry, become full more quickly and eat smaller portions.",

          "As a result, energy intake often decreases almost automatically. For this reason, during GLP-1 treatment, it is not only important how much you eat, but above all what you eat.",
        ],
      },

      {
        heading: "And where does intermittent fasting fit in?",

        paragraphs: [
          "Intermittent fasting primarily determines when food is eaten. The daily eating window is restricted, creating longer periods without food intake.",

          "Social media often gives the impression that particularly long fasting periods are automatically better. However, there is no convincing evidence to support this, especially in people who are simultaneously receiving GLP-1 treatment.",

          "Based on current scientific evidence, there is no general recommendation to systematically combine GLP-1 treatment with strict intermittent fasting. At the same time, there is also no need to avoid intermittent fasting altogether.",
        ],

        highlight:
          "The key question is not: How long can I fast? What matters more is: Is my body still receiving enough protein, vitamins and minerals despite the weight loss?",
      },

      {
        heading: "When losing weight, we should lose fat, not muscle",

        paragraphs: [
          "The goal of healthy weight loss is not simply to make the number on the scale go down. The primary aim is to reduce body fat while preserving as much muscle mass as possible.",

          "During GLP-1 treatment, many patients eat considerably less than before. If very long fasting periods are added on top of this, it may become more difficult to consume sufficient amounts of protein and other essential nutrients.",

          "Muscle mass plays an important role in metabolism, physical performance and long-term weight maintenance.",
        ],

        list: [
          "consume an adequate amount of protein",
          "maintain regular physical activity",
          "include strength training two to three times per week whenever possible",
        ],
      },

      {
        heading: "What I recommend to my patients",

        paragraphs: [
          "In most cases, I do not consider strict intermittent fasting necessary during GLP-1 treatment.",

          "A natural overnight fasting period of around twelve hours can, however, be a reasonable option.",

          "This fasting interval can usually be integrated easily into everyday life while still leaving enough time for balanced meals and an adequate intake of essential nutrients.",
        ],

        highlight:
          "A simple example: have dinner at around 7:00 p.m. and breakfast at around 7:00 a.m.",
      },

      {
        heading: "What really matters",

        paragraphs: [
          "The goal is not to go without food for as long as possible. What matters is providing the body with the nutrients it needs during the eating periods.",

          "Because appetite may decrease considerably during GLP-1 treatment, meals should be planned consciously.",
        ],

        list: [
          "high-quality protein to help preserve muscle mass",
          "vegetables and fibre-rich foods",
          "complex carbohydrates instead of highly processed sugary foods",
          "healthy fats, for example from olive oil, nuts or fish",
          "adequate hydration",
          "regular physical activity and strength training, provided your health allows it",
        ],
      },

      {
        heading: "My conclusion",

        paragraphs: [
          "When my patients ask whether they should also practise intermittent fasting during GLP-1 treatment, my answer is: not necessarily.",

          "A moderate overnight fasting period of around twelve hours can be a reasonable and practical option for many people. Very long or particularly strict fasting periods, however, are usually unnecessary.",

          "A balanced diet with sufficient protein, regular physical activity and individually tailored treatment are more important.",
        ],

        highlight:
          "The aim is not to stay without food for as long as possible, but to organise meals in a way that ensures the body continues to receive the nutrients it needs despite the weight loss.",
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