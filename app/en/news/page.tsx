import Link from "next/link";
import { sortedArticles } from "./articles";
export const metadata = {
  title: "News | Aceval Private Practice",
  description:
    "Current articles on general medicine, nutritional medicine, prevention, sports medicine and longevity medicine.",
};
export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#F3F4F7] text-[#2D3A66]">
      <header className="border-b border-[#DCE3EE] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <Link href="/en" aria-label="Zur deutschen Startseite">
            <img
              src="/logo.jpg"
              alt="Privatpraxis Aceval"
              className="h-24 w-auto object-contain md:h-32"
            />
          </Link>
          <Link
            href="/en"
            className="rounded-full border border-[#5163A0]/30 px-5 py-2.5 text-sm font-semibold text-[#5163A0] transition hover:border-[#5163A0] hover:bg-[#F3F4F7]"
          >
            Back to homepage
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#5163A0]">
            Medicine explained clearly
          </p>

          <h1 className="text-3xl font-light leading-tight tracking-[-0.02em] text-[#2D3A66] md:text-5xl">
            News
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#66708A]">
            Clear, scientifically grounded articles on general medicine, prevention,
nutrition, weight management, sports medicine and longevity medicine.
          </p>
        </div>
        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {sortedArticles.map((article, index) => (
            <article
              key={article.slug}
              className="group flex flex-col rounded-[2rem] border border-[#DCE3EE] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#5163A0]/40 hover:shadow-lg md:p-9"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-[#66708A]">
                <time dateTime={article.date}>{article.dateLabel}</time>

                <span aria-hidden="true">•</span>

                <span>{article.category}</span>
              </div>
              {index === 0 && (
                <span className="mt-5 w-fit rounded-full bg-[#EAF0FF] px-4 py-1.5 text-xs font-semibold text-[#5163A0]">
                  Latest article
                </span>
              )}
              <h2 className="mt-5 text-2xl font-medium leading-snug text-[#2D3A66]">
                {article.title}
              </h2>

              <p className="mt-5 flex-1 text-base leading-7 text-[#66708A]">
                {article.description}
              </p>
              <div className="mt-7 flex items-center justify-between gap-4 border-t border-[#E5EAF2] pt-6">
                <span className="text-sm text-[#66708A]">
                  {article.readingTime}
                </span>

                <Link
                  href={`/en/news/${article.slug}`}
                  className="font-semibold text-[#5163A0] transition group-hover:translate-x-1"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}