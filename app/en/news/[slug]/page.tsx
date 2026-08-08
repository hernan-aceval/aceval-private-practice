import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articles,
  getArticleBySlug,
  sortedArticles,
} from "../articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
  return {
    title: "Article not found | Aceval Private Practice",
  };
}
return {
  title: `${article.title} | Aceval Private Practice`,
  description: article.description,
};
}
export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }
  const currentIndex = sortedArticles.findIndex(
    (item) => item.slug === article.slug,
  );
  const newerArticle =
    currentIndex > 0 ? sortedArticles[currentIndex - 1] : undefined;
  const olderArticle =
    currentIndex < sortedArticles.length - 1
      ? sortedArticles[currentIndex + 1]
      : undefined;
  return (
    <main className="min-h-screen bg-[#F3F4F7] text-[#2D3A66]">
      <header className="border-b border-[#DCE3EE] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <Link href="/">
            <img
              src="/logo.jpg"
              alt="Privatpraxis Aceval"
              className="h-24 w-auto object-contain md:h-32"
            />
          </Link>
          <div className="flex items-center gap-3">
            <Link
  href="/en/news"
              className="rounded-full border border-[#5163A0]/30 px-5 py-2.5 text-sm font-semibold text-[#5163A0]"
            >
              All articles
            </Link>
            <Link
              href="/en#kontakt"
    className="rounded-full bg-[#5163A0] px-7 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D3A66] hover:shadow-[0_10px_25px_rgba(81,99,160,0.25)]"
  >
    Request an appointment
            </Link>
          </div>
        </div>
      </header>
      <article className="mx-auto max-w-4xl px-6 py-14 md:px-12 md:py-20">
        <Link
  href="/en/news"
  className="text-sm font-semibold text-[#5163A0]"
>
  ← Back to News
        </Link>
        <header className="mt-10 border-b border-[#DCE3EE] pb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-[#66708A]">
            <time dateTime={article.date}>{article.dateLabel}</time>
            <span aria-hidden="true">•</span>
            <span>{article.category}</span>
            <span aria-hidden="true">•</span>
            <span>{article.readingTime}</span>
          </div>
          <h1 className="mt-6 text-3xl font-light leading-tight tracking-[-0.025em] text-[#2D3A66] md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-7 text-lg leading-8 text-[#66708A]">
            {article.description}
          </p>
        </header>
        <div className="mt-10 space-y-12">
          {article.patientQuestion && (
            <blockquote className="rounded-[2rem] border border-[#BFC9E2] bg-white p-7 text-lg italic leading-8 text-[#435071] shadow-sm md:p-9">
              „{article.patientQuestion}“
            </blockquote>
          )}
          <p className="text-lg leading-8 text-[#4E5A76]">
            {article.introduction}
          </p>
<figure className="mx-auto my-10 max-w-md overflow-hidden rounded-[2rem] border border-[#DCE3EE] bg-white shadow-sm">
  <img
  src="/glp-1.jpg"
  alt="Generischer Injektionspen für eine GLP-1-Therapie"
  className="h-auto w-full object-cover"
/>
  <figcaption className="px-6 py-4 text-sm leading-6 text-[#66708A]">
    GLP-1 medications can influence hunger and satiety. 
    However, they do not replace a balanced diet or individual medical guidance.
  </figcaption>
</figure>
          {article.sections.map((section, sectionIndex) => (
            <section key={`${article.slug}-${sectionIndex}`}>
              {section.heading && (
                <h2 className="text-2xl font-medium leading-snug text-[#2D3A66] md:text-3xl">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs && (
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={`${sectionIndex}-${paragraphIndex}`}
                      className="text-lg leading-8 text-[#4E5A76]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
              {section.list && (
                <ul className="mt-6 space-y-3">
                  {section.list.map((item, itemIndex) => (
                    <li
                      key={`${sectionIndex}-${itemIndex}`}
                      className="flex gap-3 text-lg leading-8 text-[#4E5A76]"
                    >
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#5163A0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.highlight && (
                <div className="mt-7 rounded-3xl border-l-4 border-[#5163A0] bg-[#EAF0FF] px-6 py-5 text-lg font-medium leading-8 text-[#35446F]">
                  {section.highlight}
                </div>
              )}
            
            {section.heading === "What I recommend to my patients" && (
                <figure className="mx-auto my-10 max-w-lg overflow-hidden rounded-[2rem] border border-[#DCE3EE] bg-white shadow-sm">
  <img
    src="/intervallfasten-12-12.jpg"
    alt="Darstellung der 12:12-Methode mit einer nächtlichen Fastenzeit von 19 bis 7 Uhr"
    className="h-auto w-full object-cover"
  />

  <figcaption className="px-6 py-4 text-sm leading-6 text-[#66708A]">
    An everyday example: a twelve-hour overnight fasting period from 7:00 p.m. to 7:00 a.m.
  </figcaption>
</figure>)}
            </section>
          ))}

          {article.literature && (
            <section className="rounded-[2rem] border border-[#DCE3EE] bg-white p-7 shadow-sm md:p-9">
              <h2 className="text-2xl font-medium text-[#2D3A66]">
  Selected literature
</h2>
              <ol className="mt-6 space-y-4">
                {article.literature.map((source, index) => (
                  <li
                    key={source}
                    className="flex gap-4 text-sm leading-6 text-[#66708A]"
                  >
                    <span className="font-semibold text-[#5163A0]">
                      {index + 1}.
                    </span>

                    <span>{source}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <aside className="rounded-[2rem] bg-[#6278B8] p-7 text-white md:p-9">
  <h2 className="text-xl font-semibold">
    Medical disclaimer
  </h2>

  <p className="mt-4 leading-7 text-white/80">
    This article is intended for general information only and does not
    replace an individual medical consultation. The most appropriate
    nutritional or therapeutic strategy should be determined following
    an individual medical assessment.
  </p>

  <Link
    href="/en#kontakt"
    className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2D3A66]"
  >
    Request an appointment
  </Link>
</aside>
        </div>

        <nav className="mt-14 grid gap-5 border-t border-[#DCE3EE] pt-10 sm:grid-cols-2">
          <div>
            {newerArticle && (
              <Link
                href={`/en/aktuelles/${newerArticle.slug}`}
                className="block rounded-3xl border border-[#DCE3EE] bg-white p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#66708A]">
                  Newer article
                </span>

                <span className="mt-3 block font-semibold text-[#5163A0]">
                  ← {newerArticle.shortTitle}
                </span>
              </Link>
            )}
          </div>

          <div>
            {olderArticle && (
  <Link
    href={`/en/news/${olderArticle.slug}`}
    className="block rounded-3xl border border-[#DCE3EE] bg-white p-6 text-right"
  >
    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#66708A]">
      Older article
    </span>

    <span className="mt-3 block font-semibold text-[#5163A0]">
      {olderArticle.shortTitle} →
    </span>
  </Link>
)}
          </div>
        </nav>
      </article>
    </main>
  );
}