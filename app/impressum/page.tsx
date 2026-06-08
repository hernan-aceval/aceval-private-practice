export default function Impressum() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-8 text-sm leading-6 text-[#2D3A66]">
      <nav className="mb-6 text-sm text-[#5163A0]">
  <a href="/" className="hover:underline">
    Startseite
  </a>
  <span className="mx-2">›</span>
  <span>Impressum</span>
</nav>
<h1 className="mb-6 text-3xl font-semibold">Impressum</h1>

      <div className="grid gap-x-16 md:grid-cols-2">
        <div className="space-y-5">
          <section>
            <h2 className="mb-1 text-lg font-semibold">Angaben gemäß § 5 DDG</h2>
            <p>
              Dipl.-Psych. Hernán Leonardo Aceval Muñoz<br />
              Herderstraße 45<br />
              53173 Bonn<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="mb-1 text-lg font-semibold">Aufsichtsbehörde</h2>
            <p>
              Ärztekammer Nordrhein<br />
              Tersteegenstraße 9<br />
              40474 Düsseldorf
            </p>
            <p className="mt-1">Website: https://www.aekno.de</p>
          </section>

          <section>
            <h2 className="mb-1 text-lg font-semibold">
              Angaben zur Berufshaftpflichtversicherung
            </h2>
            <p>
              Deutsche Ärzteversicherung<br />
              AXA Versicherung AG<br />
              51171 Köln
            </p>
            <p className="mt-1">Geltungsraum der Versicherung: Deutschland</p>
          </section>

          <section>
            <h2 className="mb-1 text-lg font-semibold">Datenschutz</h2>
            <p>
              Informationen zum Umgang mit personenbezogenen Daten finden Sie in
              unserer Datenschutzerklärung.
            </p>
            <p className="mt-2">
              <a
                href="/datenschutz"
                className="font-semibold text-[#5163A0] underline"
              >
                Zur Datenschutzerklärung
              </a>
            </p>
          </section>
        </div>

        <div className="space-y-5">
          <section>
            <h2 className="mb-1 text-lg font-semibold">Kontakt</h2>
            <p>
              Telefon: +49 175 6616477<br />
              E-Mail: info-praxis@aceval.com
            </p>
          </section>

          <section>
            <h2 className="mb-1 text-lg font-semibold">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p>
              Berufsbezeichnung: Facharzt für Allgemeinmedizin<br />
              Verliehen durch: Bundesrepublik Deutschland
            </p>
            <p className="mt-2">Es gelten folgende berufsrechtliche Regelungen:</p>
            <p>Berufsordnung der Ärztekammer Nordrhein</p>
            <p className="mt-1">
              Die berufsrechtlichen Regelungen sind einsehbar unter:<br />
              https://www.aekno.de
            </p>
          </section>

          <section>
            <h2 className="mb-1 text-lg font-semibold">
              Verantwortlich für den Inhalt gemäß § 18 MStV
            </h2>
            <p>
              Hernán Leonardo Aceval Muñoz<br />
              Herderstraße 45<br />
              53173 Bonn
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}