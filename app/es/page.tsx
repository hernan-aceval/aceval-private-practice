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
            <a href="#">Inicio</a>
<a href="#schwerpunkte"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Especialización</a>
<a href="#abnehmen"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Nutrición</a>
<a href="#arthrose"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Artrosis</a>
<a href="#maennergesundheit"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Salud masculina</a>
<a href="#kontakt"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Contacto</a>
<a href="/impressum"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Aviso legal</a>
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
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#">Inicio</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#schwerpunkte">Especialización</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#abnehmen">Nutrición</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#arthrose">Artrosis</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#maennergesundheit">Männergesundheit</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#ueber-mich">Sobre mí</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#kontakt">Contacto</a>
     <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="/impressum">Aviso legal</a>
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
              CONSULTA PRIVADA DE MEDICINA GENERAL, PREVENCIÓN & LONGEVIDAD
            </p>

            <h1 className="max-w-xl text-2xl font-light leading-[1.3] tracking-[-0.01em] text-[#2D3A66] md:text-3xl">
              Medicina privada moderna con acompañamiento médico personalizado.
            </h1>

            <p className="mt-10 max-w-xl text-base leading-8 text-[#66708A] md:text-lg">
              Prevención, medicina nutricional, medicina deportiva y medicina de la longevidad: 
              atención individualizada, estructurada y bajo responsabilidad médica.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#5163A0]">
              PARA PACIENTES PRIVADOS Y PARTICULARES
            </p>

           <div className="mt-14 flex flex-col gap-3 sm:flex-row">
  <a
    href="#ueber-mich"
    className="rounded-full border border-[#5163A0]/30 bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#5163A0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5163A0] hover:bg-[#F3F4F7]"
  >
    Sobre mi
  </a>

  <a
    href="#telemedizin"
    className="rounded-full border border-[#5163A0]/30 bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#5163A0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5163A0] hover:bg-[#F3F4F7]"
  >
    Descubre la telemedicina
  </a>

  <a
    href="#kontakt"
    className="rounded-full bg-[#5163A0] px-7 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D3A66] hover:shadow-[0_10px_25px_rgba(81,99,160,0.25)]"
  >
    Solicita una cita
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
            Especialización
          </p>

          <h2 className="max-w-2xl text-2xl font-light leading-[1.3] tracking-[-0.01em] text-[#2D3A66] md:text-3xl">
            Áreas de especialización en mi Consulta
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-8 text-[#66708A] md:text-lg">
            Nuestras áreas de especialización incluyen la medicina preventiva y los chequeos médicos, la medicina nutricional, 
            la medicina deportiva con atención especializada para pacientes con artrosis, la salud masculina y la 
            medicina de la longevidad. (Longevity Medicine).
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
  title: "Chequeos médicos y prevención",
  id: "vorsorge",
                short:
                  "La detección precoz y la prevención constituyen la base de una salud duradera.",
                text:
                  "La salud es individual, al igual que la prevención. La edad, el sexo, los antecedentes familiares, la situación profesional y el estilo de vida influyen en los riesgos para la salud de cada persona. En el marco de nuestra medicina preventiva, analizamos de forma temprana los posibles factores de riesgo y elaboramos un plan de prevención adaptado a las necesidades individuales de cada paciente. Para ello utilizamos métodos diagnósticos modernos, análisis de laboratorio específicos y recomendaciones personalizadas sobre alimentación, actividad física y hábitos de vida.",
                more:
                  "Nuestra medicina preventiva va deliberadamente más allá de las prestaciones preventivas habituales. Un papel especialmente importante lo desempeñan la historia clínica familiar detallada y, cuando existe una indicación médica, también los estudios genéticos. Al mismo tiempo, una anamnesis precisa e individualizada permite seleccionar de forma específica aquellas exploraciones que realmente aportan valor clínico, evitando gastos innecesarios para el paciente. Mi filosofía es clara: una medicina moderna y de alta calidad no tiene porque no ser accesible y asequible para todas las personas, también en el ámbito de los servicios médicos privados. Para estudios complementarios y procedimientos diagnósticos especializados colaboro con una amplia red de médicos especialistas y centros diagnósticos de referencia, con el objetivo de garantizar una atención médica integral.",
              },
              {
  title: "Medicina nutricional y reducción de peso",
  id: "abnehmen",
                short:
                  "La reducción de peso sostenible significa mucho más que simplemente consumir menos calorías.",
                text:
                  "Te acompaño de forma individualizada y basada en criterios médicos en el proceso de cambio de hábitos alimentarios, optimización metabólica y control del peso a largo plazo, mediante un enfoque integral que combina nutrición, actividad física y técnicas modernas de ayuno. Uno de los principales ámbitos de especialización de nuestra consulta es la utilización segura y adecuada de los medicamentos modernos para la reducción de peso (la denominada «inyección para adelgazar»).",
               more: (
  <> Muchos pacientes tienen preguntas o dudas sobre este tipo de tratamiento. Por ello, le ofrezco un asesoramiento exhaustivo, prescribo la terapia de forma individualizada y realizo un seguimiento estrecho durante todo el tratamiento con el fin de lograr los mejores resultados posibles de forma segura y sostenible. La atención se adapta a las necesidades de cada paciente y puede realizarse de manera presencial o, cuando esté médicamente indicado, también mediante telemedicina.
 <img
      src="/essen.jpg"
      alt="Mediterrane Ernährung"
      className="mt-6 w-full max-w-md rounded-xl border border-[#DCE3EE]"
    />
  </>
), 
},
              {
  title: "Medicina deportiva y consulta especializada en artrosis",
  id: "arthrose",
                short:
                  "Mantener la movilidad, reducir el dolor y mejorar la calidad de vida.",
                text:
                  "La actividad física es un componente fundamental de una vida saludable y activa, independientemente de la edad o del nivel de rendimiento. Acompaño tanto a deportistas profesionales y aficionados como a personas que desean preservar su movilidad, capacidad funcional y calidad de vida en la vida cotidiana o a medida que envejecen.",
                more: (
  <>
    Uno de los principales ámbitos de especialización de mi consulta es el diagnóstico y tratamiento de las enfermedades y trastornos del aparato locomotor, así como de la artrosis, especialmente la gonartrosis (artrosis de rodilla). Un componente importante de este enfoque terapéutico es el tratamiento moderno de la artrosis de rodilla con{" "}
    <a
      href="https://arthrosamid.com/de/our-solution"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[#5163A0] underline"
    >
      Arthrosamid®
    </a>
    
  </>
),
},
{
  title: "Salud masculina",
  id: "maennergesundheit",
                short:
                  "Salud, vitalidad y bienestar en todas las etapas de la vida.",
                text:
                  "La masculinidad y la virilidad son, para muchos hombres, componentes importantes de la calidad de vida, el rendimiento físico y mental, y el bienestar general. No solo influyen en la salud sexual, sino también en la confianza en uno mismo, la presencia personal, los niveles de energía y la forma en que cada hombre se percibe a sí mismo.",
                more: (
  <>
                  En el marco de mi consulta de salud masculina, acompaño a hombres de todas las edades en los distintos desafíos relacionados con su salud. Entre ellos se incluyen el déficit de testosterona, la disfunción eréctil, la disminución de la libido, los problemas prostáticos, la caída del cabello, así como cuestiones relacionadas con el envejecimiento saludable y la medicina de la longevidad. Como médico, psicólogo titulado y deportista, integro los aspectos médicos, hormonales y psicológicos de la salud masculina en un enfoque integral. La confianza, la discreción y una atención individualizada constituyen la base de mi trabajo.
             <img
      src="/rugby.jpg"
      alt="Männergesundheit"
      className="mt-6 w-96 rounded-xl border border-[#DCE3EE]"
    />
  </>
),
                },
              {
                title: "Longevidad",
                short:
                  "Envejecer de forma saludable significa mucho más que la ausencia de enfermedades.",
                text:
                  "Nunca es demasiado pronto —ni demasiado tarde— para ocuparse de la longevidad. Para mí, la longevidad representa un enfoque médico integral cuyo objetivo no es únicamente prolongar la vida, sino también preservar durante el mayor tiempo posible la salud física y mental, así como la autonomía y la calidad de vida.",
                more:(
  <>
                  En la actualidad, el concepto de «longevidad» está cada vez más influenciado por coaches, divulgadores en redes sociales y supuestos expertos que simplifican o interpretan de forma incorrecta cuestiones médicas complejas sin la formación adecuada. Considero que esta tendencia es especialmente problemática cuando se trata de temas relacionados con la salud. 
                  Mi enfoque se diferencia deliberadamente de estas corrientes. Se basa en la evidencia científica, en una medicina sólidamente fundamentada y en un diagnóstico riguroso, no en modas pasajeras, estrategias de marketing o tendencias virales de Internet.
             <img
      src="/aging.jpg"
      alt="Longevity"
      className="mt-6 w-96 rounded-xl border border-[#DCE3EE]"
    />
  </>
), },
              {
                title: "Telemedicina",
                id: "telemedizin",
                short:
                  "Acompañamiento médico moderno, también entre las consultas presenciales.",
                text:
                  "Hoy en día, muchas cuestiones médicas pueden abordarse de forma eficiente, discreta y personalizada mediante telemedicina. Entre ellas se incluyen la revisión de resultados y pruebas diagnósticas, los controles de seguimiento, la medicina nutricional, la terapia con GLP-1 (la denominada «inyección para adelgazar»), la salud masculina, el asesoramiento en medicina preventiva y el seguimiento médico-deportivo.",
                more: (
  <ul className="mt-2 list-disc space-y-3 pl-5">
    <li>
      <strong>Comodidad y flexibilidad:</strong> realice sus consultas médicas cómodamente desde su domicilio o mientras se encuentra de viaje.
    </li>

    <li>
      <strong>Sin tiempos de espera:</strong> procesos más eficientes y una mejor gestión de su tiempo.
    </li>

    <li>
      <strong>Máxima comodidad:</strong> sin desplazamientos ni búsqueda de aparcamiento.
    </li>

    <li>
      <strong>Protección frente a infecciones:</strong> sin contacto con otros pacientes en salas de espera.
    </li>

    <li>
      <strong>Participación de familiares:</strong> posibilidad de incorporar fácilmente a familiares o personas de confianza a la consulta médica.
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
        Más información sobre Arthrosamid®
      </a>
    </div>
  )}
</div>
</details>
))}
</div>

          <p className="mt-10 max-w-4xl text-base leading-8 text-[#66708A] md:text-lg">
            Además, ofrecemos una atención integral de medicina general para enfermedades agudas y crónicas, 
            así como atención psicosomática básica, siempre con el objetivo de preservar su salud a largo plazo 
            y promover de forma sostenible su bienestar.
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
          Sobre mi
        </p>

        <h2 className="max-w-2xl text-2xl font-light leading-[1.3] tracking-[-0.01em] text-[#2D3A66] md:text-3xl">
          Medicina con experiencia y acompañamiento personal.
        </h2>

        <p className="mt-6 text-base leading-8 text-[#66708A]">
          Hernán Leonardo Aceval Munoz, Licenciado en Medicina y Psicología por la Universidad de Bonn. Médico especialista en Medicina General en Alemania, médico de emergencias y rescate, médico de transporte sanitario aéreo y psicólogo titulado.
          </p>
          <p className="mt-6 text-base leading-8 text-[#66708A]">
          Tras muchos años de experiencia en cirugía hospitalaria, actualmente desarrollo mi actividad principalmente en el ámbito de la medicina ambulatoria. 
          Paralelamente, continúo trabajando como médico de emergencias y médico de transporte sanitario aéreo en el ámbito nacional e internacional, 
          incluyendo misiones en regiones en crisis. </p>
          <p className="mt-6 text-base leading-8 text-[#66708A]">
            Mis principales áreas de interés son la medicina nutricional, la medicina deportiva, la salud masculina y la medicina de la longevidad. 
            Como médico y psicólogo, considero que la salud física y la salud mental están estrechamente interrelacionadas y no pueden entenderse por separado. 
            Por ello, una atención individualizada, cercana y basada en la confianza constituye el eje central de mi práctica médica.
        </p>
        <p className="mt-6 text-base leading-8 text-[#66708A]">
          La decisión de fundar una consulta privada fue una elección consciente. Me permite disponer de la independencia necesaria para orientar el 
          diagnóstico, el tratamiento y la prevención exclusivamente a las necesidades de mis pacientes. Sin limitaciones administrativas ni presión de tiempo, 
          puedo dedicar a cada persona la atención que requiere una medicina moderna, rigurosa y de calidad.
        </p>
        <p className="mt-6 text-base leading-8 text-[#66708A]">Atiendo tanto a pacientes privados como a pacientes particulares. Considero que el acceso a una atención médica individualizada 
            no debería depender únicamente del tipo de seguro médico ni de criterios económicos. Por ello, procuro encontrar junto con cada paciente soluciones razonables 
            y equilibradas que resulten viables tanto desde el punto de vista médico como personal.</p>
      </div>

    </div>
  </div>
</section>
<section className="px-6 py-12 md:px-12">
  <div className="mx-auto max-w-6xl rounded-[1.5rem] border border-[#DCE3EE] bg-white p-8">

    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5163A0]">
      Afiliaciones profesionales
    </h3>

    <p className="mt-4 text-base leading-8 text-[#66708A]">
      Deutsche Gesellschaft für Allgemeinmedizin (DEGAM), Sportärztebund Nordrhein, Deutsche Gesellschaft für Ernährungsmedizin e.V. 

      (DGEM), Deutsche Gesellschaft für Mann und Gesundheit e.V. (DGMG), Deutsche Gesellschaft für Geriatrie e.V. (DGG), 

      Deutsche Gesellschaft für Katastrophenmedizin e.V. (DGKM), Deutsche Interdisziplinäre Vereinigung für Intensiv- und Notfallmedizin (DIVI), 

      Deutsche Gesellschaft für Interdisziplinäre Notfall- und Akutmedizin e.V.(DGINA), Berufsverband der Deutschen Chirurgie e.V. (BDC)
    </p>

  </div>
</section>
     <section id="kontakt" className="scroll-mt-28 px-6 pt-6 pb-16 md:px-12">
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-[#5E74B7] p-8 text-white shadow-[0_20px_60px_rgba(36,52,77,0.15)]">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#eaf3fb]">
            CONTACTO
          </p>
          <h2 className="max-w-xl text-2xl font-light leading-[1.3] tracking-[-0.01em]">
            Solicita una cita o una consulta de telemedicina.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#eef6fb]">
            La reserva de citas online estará disponible próximamente. Hasta entonces, puede enviar su solicitud de cita por correo electrónico.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#eef6fb]">
              Actualmente, las consultas presenciales pueden realizarse los miércoles en las instalaciones de la consulta de Medicina General del Dr. O. Brenig, en Bonn-Bad Godesberg, Alemania, 
              especialmente para primeras consultas, exploraciones médicas, procedimientos diagnósticos y análisis de laboratorio. 
              Próximamente también se ofrecerán consultas presenciales en la ciudad de Remagen, Alemania y en el futuro no muy lejano, también 
              en la ciudad de Gijón, Asturias, España.
            Tenga en cuenta que las citas para mi consulta privada se gestionan exclusivamente a través de los medios de contacto indicados en esta página. 
            La consulta del Dr. O. Brenig es una consulta médica independiente y no puede gestionar citas ni proporcionar información relacionada 
            con mi actividad asistencial.
         Su solicitud será atendida personalmente a la mayor brevedad posible.
          </p>
          <a
            href="mailto:termin-praxis@aceval.com"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#5163A0] transition hover:bg-[#eef6fb]"
          >
            Enviar solicitud por correo electrónico
          </a>
        </div>
      </section>
    </main>
  );
}