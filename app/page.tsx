"use client";
export default function Home() {
    function closeMobileMenu(event: React.MouseEvent<HTMLAnchorElement>) {
    const details = event.currentTarget.closest("details");
    if (details) {
      details.removeAttribute("open");
    }
  }
  return (
    <main className="min-h-screen bg-[#F3F4F7] text-[#2D3A66]">
      <header className="sticky top-0 z-50 border-b border-[#dce3ee] bg-white/95 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-4 md:px-12">
    <div className="mb-0 hidden justify-end md:flex">
      <div className="flex items-center gap-2">
        <a href="/">
          <img src="/de.jpg" alt="Deutsch" className="h-4 w-auto hover:opacity-80 transition" />
        </a>
        <a href="/es">
          <img src="/es.jpg" alt="Español" className="h-4 w-auto hover:opacity-80 transition" />
        </a>
        <a href="/en">
          <img src="/en.jpg" alt="English" className="h-4 w-auto hover:opacity-80 transition" />
        </a>
      </div>
    </div>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-1 pb-1 md:px-12">
          <div className="-ml-12">
  <img
    src="/logo.jpg"
    alt="Privatpraxis Aceval"
    className="h-24 w-auto object-contain md:h-36"
  />
</div>
          <nav className="hidden items-center gap-5 text-lg font-medium text-[#5163A0] md:flex">
            <a href="#">Home</a>
<a href="#schwerpunkte"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Schwerpunkte</a>
<a href="#abnehmen"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Abnehmen</a>
<a href="#arthrose"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Arthrose</a>
<a href="#maennergesundheit"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Männergesundheit</a>
<a href="#kontakt"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Kontakt</a>
<a href="/impressum"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Impressum</a>
          </nav>
       <details className="relative ml-auto md:hidden">
  <summary className="cursor-pointer list-none text-3xl font-semibold text-[#5163A0]">
    ☰
  </summary>

  <div className="absolute right-0 top-10 z-50 w-64 rounded-2xl border border-[#DCE3EE] bg-white p-4 shadow-xl">
    <div className="mb-3 flex items-center gap-2 border-b border-[#DCE3EE] pb-3">
  <a onClick={closeMobileMenu} href="/">
    <img src="/de.jpg" alt="Deutsch" className="h-4 w-auto" />
  </a>
  <a onClick={closeMobileMenu} href="/es">
    <img src="/es.jpg" alt="Español" className="h-4 w-auto" />
  </a>
  <a onClick={closeMobileMenu} href="/en">
    <img src="/en.jpg" alt="English" className="h-4 w-auto" />
  </a>
</div>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#">Home</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#schwerpunkte">Schwerpunkte</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#abnehmen">Abnehmen</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#arthrose">Arthrose</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#maennergesundheit">Männergesundheit</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#ueber-mich">Über mich</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#kontakt">Kontakt</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="/impressum">Impressum</a>
  </div>
</details>
 </div>
 </div>
      </header>

      <section
        id="praxis"
        className="mx-auto flex min-h-[68vh] max-w-7xl items-center px-6 py-12 md:px-12"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#5163A0]">
              Privatpraxis für moderne Allgemeinmedizin
            </p>

            <h1 className="max-w-xl text-2xl font-light leading-[1.3] tracking-[-0.01em] text-[#2D3A66] md:text-3xl">
              Moderne Privatmedizin mit persönlicher ärztlicher Begleitung.
            </h1>

            <p className="mt-10 max-w-xl text-base leading-8 text-[#66708A] md:text-lg">
              Prävention, Ernährungsmedizin, Sportmedizin und Longevity
              Medicine — individuell, strukturiert und ärztlich verantwortet.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#5163A0]">
              Für Privatpatienten und Selbstzahler
            </p>

           <div className="mt-14 flex flex-col gap-3 sm:flex-row">
  <a
    href="#ueber-mich"
    className="rounded-full border border-[#5163A0]/30 bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#5163A0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5163A0] hover:bg-[#F3F4F7]"
  >
    Über mich
  </a>

  <a
    href="#telemedizin"
    className="rounded-full border border-[#5163A0]/30 bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#5163A0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5163A0] hover:bg-[#F3F4F7]"
  >
    Telemedizin entdecken
  </a>

  <a
    href="#kontakt"
    className="rounded-full bg-[#5163A0] px-7 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D3A66] hover:shadow-[0_10px_25px_rgba(81,99,160,0.25)]"
  >
    Termin anfragen
  </a>
</div>
          </div>

          <div className="relative flex justify-center">
            <div className="inline-block overflow-hidden rounded-[2rem] border border-[#DCE3EE] bg-white p-2 shadow-[0_20px_60px_rgba(36,52,77,0.08)]">
              <img
                src="/hernan-main.jpg"
                alt="Dr. Hernan Aceval"
                className="h-auto max-h-[500px] w-auto rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
  id="schwerpunkte"
  className="scroll-mt-24 border-t border-[#DCE3EE] bg-white px-6 py-20 md:px-12"
>
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#5163A0]">
            Schwerpunkte
          </p>

          <h2 className="max-w-2xl text-2xl font-light leading-[1.3] tracking-[-0.01em] text-[#2D3A66] md:text-3xl">
            Medizinische Schwerpunkte unserer Praxis.
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-8 text-[#66708A] md:text-lg">
            Unsere Schwerpunkte liegen auf Check-up & Prävention,
            Ernährungsmedizin, Sportmedizin mit Arthrose-Sprechstunden sowie
            Langlebigkeitsmedizin (Longevity Medicine).
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
  title: "Check-up & Prävention",
  id: "vorsorge",
                short:
                  "Früherkennung und Prävention sind die Grundlage langfristiger Gesundheit.",
                text:
                  "Gesundheit ist individuell – genauso wie Vorsorge. Je nach Alter, Geschlecht, familiärer Vorbelastung, beruflicher Situation und Lebensstil entstehen unterschiedliche gesundheitliche Risiken. Im Rahmen unserer Check-up- und Präventionsmedizin analysieren wir mögliche Risikofaktoren frühzeitig und erstellen ein individuell abgestimmtes Vorsorgekonzept. Dazu gehören moderne Diagnostik, gezielte Laboruntersuchungen sowie Empfehlungen zu Ernährung, Bewegung und Lebensstil.",
                more:
                  "Die Präventionsmedizin in unserer Praxis geht bewusst über klassische Kassenleistungen hinaus. Eine besondere Rolle spielen dabei die ausführliche familiäre Anamnese und – wenn medizinisch sinnvoll – auch genetische Analysen. Gleichzeitig ermöglicht eine präzise und individuelle Anamnese, gezielt die Untersuchungen auszuwählen, die wirklich sinnvoll sind, ohne Patienten unnötig finanziell zu belasten. Meine Philosophie ist klar: Hochwertige und moderne Medizin sollte für Menschen zugänglich und bezahlbar bleiben – auch im Bereich der Selbstzahlerleistungen. Für weiterführende Untersuchungen arbeite ich mit einem erfahrenen Netzwerk spezialisierter Fachärzte und diagnostischer Einrichtungen zusammen, um eine umfassende medizinische Betreuung zu gewährleisten.",
              },
              {
  title: "Ernährungsmedizin & Gewichtsreduktion",
  id: "abnehmen",
                short:
                  "Nachhaltige Gewichtsreduktion bedeutet mehr als nur weniger Kalorien.",
                text:
                  "Wir begleiten Sie individuell und medizinisch fundiert bei Ernährungsumstellung, Stoffwechseloptimierung und langfristiger Gewichtskontrolle – mit einem ganzheitlichen Konzept aus Ernährung, Bewegung und modernen Fastentechniken. Ein besonderer Schwerpunkt unserer Praxis ist die sichere und sinnvolle Anwendung moderner Medikamente zur Gewichtsreduktion wie Ozempic® oder Wegovy® (die sog. „Abnehmspritze“).",
               more: (
  <> Viele Patienten haben Fragen oder Unsicherheiten zur Behandlung – ich berate Sie ausführlich, verschreibe die Therapie individuell und begleite Sie engmaschig während der gesamten Anwendung, um den bestmöglichen und nachhaltigen Effekt zu erzielen. Die Betreuung erfolgt persönlich, individuell abgestimmt und kann – sofern medizinisch sinnvoll – auch telemedizinisch durchgeführt werden.
 <img
      src="/essen.jpg"
      alt="Mediterrane Ernährung"
      className="mt-6 w-full max-w-md rounded-xl border border-[#DCE3EE]"
    />
  </>
), 
},
              {
  title: "Sportmedizin & Arthrose-Sprechstunde",
  id: "arthrose",
                short:
                  "Bewegung erhalten, Schmerzen reduzieren, Lebensqualität verbessern.",
                text:
                  "Bewegung ist ein wichtiger Bestandteil eines gesunden und aktiven Lebens – unabhängig von Alter oder Leistungsniveau. Ich begleite Leistungs- und Freizeitsportler ebenso wie Menschen, die ihre Beweglichkeit, Belastbarkeit und Lebensqualität im Alltag oder im höheren Alter erhalten möchten.",
                more: (
  <>
    Ein besonderer Schwerpunkt meiner Praxis ist die Diagnostik und Behandlung von Beschwerden des Bewegungsapparates sowie der Arthrose – insbesondere der Gonarthrose. Ein wichtiger Bestandteil dieses Therapiekonzeptes ist dabei die moderne{" "}
    <a
      href="https://arthrosamid.com/de/our-solution"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[#5163A0] underline"
    >
      Arthrosamid
    </a>
    -Behandlung bei Kniearthrose.
  </>
),
},
{
  title: "Männergesundheit",
  id: "maennergesundheit",
                short:
                  "Gesundheit, Leistungsfähigkeit und Wohlbefinden in jeder Lebensphase.",
                text:
                  "Männlichkeit und Virilität sind für viele Männer wichtige Bestandteile von Lebensqualität, Leistungsfähigkeit und Wohlbefinden. Sie prägen nicht nur die sexuelle Gesundheit, sondern auch Selbstvertrauen, Ausstrahlung, Energie und die Art, wie Männer sich selbst erleben.",
                more: (
  <>
                  Im Rahmen meiner Männersprechstunde begleite ich Männer in allen Lebensphasen bei den gesundheitlichen Herausforderungen des Mannseins. Dazu gehören unter anderem Testosteronmangel, Erektionsstörungen, nachlassende Libido, Prostatabeschwerden, Haarausfall sowie Fragen rund um gesundes Altern und Longevity. Als Arzt, Diplom-Psychologe und Sportler verbinde ich medizinische, hormonelle und psychologische Aspekte der Männergesundheit zu einem ganzheitlichen Konzept. Vertrauen, Diskretion und eine individuelle Betreuung bilden dabei die Grundlage meiner Arbeit.
             <img
      src="/rugby.jpg"
      alt="Männergesundheit"
      className="mt-6 w-96 rounded-xl border border-[#DCE3EE]"
    />
  </>
),
                },
              {
                title: "Longevity",
                short:
                  "Gesund älter werden bedeutet mehr als nur Krankheit zu vermeiden.",
                text:
                  "Es ist nie zu früh – und nie zu spät –, sich mit Longevity zu beschäftigen. Für mich bedeutet Longevity einen ganzheitlichen medizinischen Ansatz mit dem Ziel, nicht nur die Lebensspanne zu verlängern, sondern vor allem die Zeit körperlicher und geistiger Gesundheit („Healthspan“) möglichst lange zu erhalten.",
                more:(
  <>
                  Der Begriff „Longevity“ wird heute oft von Coaches, Medfluencern und selbsternannten Experten geprägt, die komplexe medizinische Themen ohne ausreichende Expertise vereinfachen oder falsch darstellen – eine Entwicklung, die ich gerade im Gesundheitsbereich für problematisch halte. Mein Ansatz grenzt sich davon bewusst ab: evidenzbasiert, medizinisch fundiert und auf seriöse Diagnostik statt auf Trends, Marketing oder Internet-Hypes aufgebaut.
             <img
      src="/aging.jpg"
      alt="Longevity"
      className="mt-6 w-96 rounded-xl border border-[#DCE3EE]"
    />
  </>
), },
              {
                title: "Telemedizin",
                id: "telemedizin",
                short:
                  "Moderne medizinische Begleitung — auch zwischen den Praxisbesuchen.",
                text:
                  "Viele Anliegen lassen sich heute effizient, diskret und persönlich telemedizinisch begleiten: Befundbesprechungen, Verlaufskontrollen, Ernährungsmedizin, GLP-1-Therapie (die Abnehmspritze), Männergesundheit, präventivmedizinische Beratung und sportmedizinische Betreuung.",
                more: (
  <ul className="mt-2 list-disc space-y-3 pl-5">
    <li>
      <strong>Bequem und flexibel:</strong> Wahrnehmung von Arztterminen bequem von zu Hause oder von unterwegs.
    </li>

    <li>
      <strong>Keine Wartezeiten:</strong> Effizientere Abläufe und optimiertes Zeitmanagement.
    </li>

    <li>
      <strong>Maximaler Komfort:</strong> Wegfall von Anfahrtswegen und Parkplatzsuche.
    </li>

    <li>
      <strong>Infektionsschutz:</strong> Kein Kontakt zu anderen Patienten im Wartezimmer.
    </li>

    <li>
      <strong>Mitbetreuung:</strong> Einfache Einbindung von Angehörigen in das Arztgespräch.
    </li>
  </ul>
),
              },
            ].map((item) => (
              <details
                id={item.id}
                key={item.title}
                className="group scroll-mt-48 rounded-[1.5rem] border border-[#DCE3EE] bg-[#F3F4F7] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b8d2e8] hover:bg-white hover:shadow-[0_12px_40px_rgba(36,52,77,0.08)]"
              >
                <summary className="cursor-pointer list-none">
                  <h3 className="text-xl font-semibold text-[#2D3A66]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-[#5163A0]">
                    {item.short}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#66708A]">
                    {item.text}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-[#5163A0]">
  <span className="group-open:hidden">mehr</span>
  <span className="hidden group-open:inline">weniger</span>
</p>
                </summary>

                 <div className="mt-6 border-t border-[#DCE3EE] pt-5 text-sm leading-7 text-[#66708A]">
  {item.more}

  {item.id === "arthrose" && (
    <div className="mt-6">
      <img
        src="/knie.jpg"
        alt="Kniegelenk"
        className="mb-4 w-60 rounded-xl border border-[#DCE3EE]"
      />

      <a
        href="https://arthrosamid.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-full bg-[#5163A0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#40518A]"
      >
        Erfahren Sie mehr über Arthrosamid
      </a>
    </div>
  )}
</div>
</details>
))}
</div>

          <p className="mt-10 max-w-4xl text-base leading-8 text-[#66708A] md:text-lg">
            Darüber hinaus bieten wir eine umfassende allgemeinmedizinische
            Betreuung bei akuten und chronischen Erkrankungen sowie eine
            psychosomatische Grundversorgung – stets mit dem Ziel, Ihre
            Gesundheit langfristig zu erhalten und Ihr Wohlbefinden nachhaltig zu
            fördern.
          </p>
        </div>
      </section>
      <section
  id="ueber-mich"
  className="scroll-mt-28 border-t border-[#DCE3EE] bg-white px-6 py-24 md:px-12"
>
  <div className="mx-auto max-w-6xl">
    <div className="grid items-start gap-12 md:grid-cols-[380px_1fr]">

      <div className="-mt-12">
  <img
    src="/ueber-mich.jpg"
    alt="Dr. Hernán Aceval als Notarzt"
    className="mt-28 max-w-[380px] rounded-[1.6rem] object-cover"
  />

</div>

      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#5163A0]">
          Über mich
        </p>

        <h2 className="max-w-2xl text-2xl font-light leading-[1.3] tracking-[-0.01em] text-[#2D3A66] md:text-3xl">
          Medizin mit Erfahrung und persönlicher Begleitung.
        </h2>

        <p className="mt-6 text-base leading-8 text-[#66708A]">
          Hernán Leonardo Aceval Munoz, Studium der Humanmedizin und Psychologie an der Universität Bonn. Facharzt für Allgemeinmedizin, Notarzt, Flugarzt und Diplom-Psychologe.
          </p>
          <p className="mt-6 text-base leading-8 text-[#66708A]">
          Nach vielen Jahren in der stationären chirurgischen Versorgung bin ich heute überwiegend in der ambulanten Allgemeinmedizin tätig. Parallel dazu arbeite ich weiterhin als 
          Notarzt und Flugarzt im nationalen und internationalen Patiententransport und Versorgung, auch in Krisenregionen.
          Besonders interessieren mich die Bereiche Ernährungsmedizin, Sportmedizin, Männergesundheit und Longevity. Als Arzt und Diplom-Psychologe betrachte ich dabei körperliche 
          und psychische Gesundheit als untrennbar miteinander verbunden. Eine individuelle und persönliche Betreuung auf Augenhöhe steht für mich im Mittelpunkt jeder ärztlichen Behandlung.
        </p>
        <p className="mt-6 text-base leading-8 text-[#66708A]">
          Die Entscheidung zur Gründung einer Privatpraxis habe ich bewusst getroffen. Sie ermöglicht mir die notwendige Unabhängigkeit, um Diagnostik, 
          Therapie und Prävention ausschließlich an den Bedürfnissen meiner Patienten auszurichten. Ohne starre Vorgaben und ohne Zeitdruck kann ich 
          mir die Zeit nehmen, die eine sorgfältige und moderne Medizin benötigt.
          Ich behandle Privatpatienten ebenso wie gesetzlich Versicherte auf Selbstzahlerbasis. Dabei ist mir wichtig, dass der Zugang zu einer individuellen 
          medizinischen Betreuung nicht allein vom Versicherungsstatus oder von finanziellen Überlegungen abhängt. 
          Deshalb suche ich gemeinsam mit meinen Patienten nach sinnvollen und fairen Lösungen, die sowohl medizinisch als auch persönlich tragbar sind.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="px-6 py-12 md:px-12">
  <div className="mx-auto max-w-6xl rounded-[1.5rem] border border-[#DCE3EE] bg-white p-8">

    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5163A0]">
      Mitgliedschaften
    </h3>

    <p className="mt-4 text-base leading-8 text-[#66708A]">
      Deutsche Gesellschaft für Allgemeinmedizin (DEGAM), Sportärztebund Nordrhein, Deutsche Gesellschaft für Ernährungsmedizin e.V. 

      (DGEM), Deutsche Gesellschaft für Mann und Gesundheit e.V. (DGMG), Deutsche Gesellschaft für Geriatrie e.V. (DGG), 

      Deutsche Gesellschaft für Katastrophenmedizin e.V. (DGKM), Deutsche Interdisziplinäre Vereinigung für Intensiv- und Notfallmedizin (DIVI), 

      Deutsche Gesellschaft für Notfallmedizin e.V (DGINA), Berufsverband der Deutschen Chirurgie e.V. (BDC)
    </p>

  </div>
</section>
      <section id="kontakt" className="scroll-mt-28 px-6 pt-6 pb-16 md:px-12">
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-[#5E74B7] p-8 text-white shadow-[0_20px_60px_rgba(36,52,77,0.15)]">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#eaf3fb]">
            Kontakt
          </p>

          <h2 className="max-w-xl text-2xl font-light leading-[1.3] tracking-[-0.01em]">
            Termin oder telemedizinische Beratung anfragen.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#eef6fb]">
            Die Online-Terminbuchung wird in Kürze verfügbar sein. Bis dahin können Sie gerne eine Terminanfrage per E-Mail senden.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#eef6fb]">
              Präsenztermine sind derzeit mittwochs in den Räumlichkeiten der Praxis für Allgemeinmedizin O. Brenig in Bonn-Bad Godesberg möglich, 
              insbesondere für Erstgespräche, Untersuchungen, Diagnostik und Laboruntersuchungen. Weitere Präsenztermine in Remagen werden in Kürze angeboten.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#eef6fb]">
            Bitte beachten Sie, dass Terminvereinbarungen für meine Privatpraxis ausschließlich über die hier angegebenen Kontaktmöglichkeiten erfolgen. Die Praxis 
            O. Brenig ist eine eigenständige hausärztliche Praxis und kann keine Terminvereinbarungen oder Auskünfte zu meiner Sprechstunde übernehmen.
            Ihre Anfrage wird zeitnah persönlich beantwortet.
          </p>
          <a
            href="mailto:termin-praxis@aceval.com"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#5163A0] transition hover:bg-[#eef6fb]"
          >
            Anfrage per E-Mail senden
          </a>
        </div>
      </section>
    </main>
  );
}