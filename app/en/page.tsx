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
>Specialties</a>
<a href="#abnehmen"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Weight management</a>
<a href="#arthrose"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Osteoarthritis</a>
<a href="#maennergesundheit"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Men's Medicine</a>
<a href="#kontakt"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Contact</a>
<a href="/impressum"
  className="relative transition-all duration-300 hover:text-[#2D3A66] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5163A0] after:transition-all after:duration-300 hover:after:w-full"
>Legal notice</a>
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
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#schwerpunkte">Specialties</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#abnehmen">Weight management</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#arthrose">Osteoarthritis</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#maennergesundheit">Men's medicine</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#ueber-mich">About me</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="#kontakt">Contact</a>
    <a onClick={closeMobileMenu} className="block py-2 text-[#5163A0]" href="/impressum">Legal Notice</a>
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
              PRIVATE PRACTICE FOR MODERN GENERAL MEDICINE AND PREVENTIVE HEALTH
            </p>

            <h1 className="max-w-xl text-2xl font-light leading-[1.3] tracking-[-0.01em] text-[#2D3A66] md:text-3xl">
              Modern private healthcare with personalised medical guidance.
            </h1>

            <p className="mt-10 max-w-xl text-base leading-8 text-[#66708A] md:text-lg">
              Prevention, Nutritional Medicine, Sports Medicine, advanced non-surgical treatments for knee osteoarthritis including Arthrosamid®, 
              and Longevity Medicine — personalised, structured and physician-led.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#5163A0]">
              For private patients and self-paying patients
            </p>

           <div className="mt-14 flex flex-col gap-3 sm:flex-row">
  <a
    href="#ueber-mich"
    className="rounded-full border border-[#5163A0]/30 bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#5163A0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5163A0] hover:bg-[#F3F4F7]"
  >
    About me
  </a>

  <a
    href="#telemedizin"
    className="rounded-full border border-[#5163A0]/30 bg-white px-7 py-3.5 text-center text-sm font-semibold text-[#5163A0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5163A0] hover:bg-[#F3F4F7]"
  >
    Explore Telemedicine
  </a>

  <a
    href="#kontakt"
    className="rounded-full bg-[#5163A0] px-7 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D3A66] hover:shadow-[0_10px_25px_rgba(81,99,160,0.25)]"
  >
    Request an Appointment
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
            Specialties
          </p>

          <h2 className="max-w-2xl text-2xl font-light leading-[1.3] tracking-[-0.01em] text-[#2D3A66] md:text-2xl">
            Areas of Medical Expertise of our Practice.
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-8 text-[#66708A] md:text-base">
            Our practice focuses on preventive health assessments and check-ups, Nutritional Medicine, 
            Sports Medicine with a dedicated osteoarthritis clinic, and Longevity Medicine.
          </p>
          <p className="mt-6 max-w-4xl text-base leading-8 text-[#66708A] md:text-base">
            As part of our osteoarthritis care, particular emphasis is placed on the treatment of knee osteoarthritis, 
            including the use of {" "}
    <a
      href="https://arthrosamid.com/de/our-solution"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[#5163A0] underline"
    >
      Arthrosamid®
    </a>, an injectable hydrogel implant designed to provide long-lasting pain relief without surgery and to help improve mobility and quality of life.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
  title: "Check-ups & Preventive Medicine",
  id: "vorsorge",
                short:
                  "Early detection and prevention are the foundation of long-term health.",
                text:
                  "Health is individual – and so is prevention. Age, sex, family history, professional circumstances and lifestyle all influence personal health risks in different ways. As part of our check-up and preventive medicine programme, we identify potential risk factors at an early stage and develop a personalised prevention strategy tailored to your individual needs. This includes modern diagnostic assessments, targeted laboratory testing, and evidence-based recommendations regarding nutrition, physical activity and lifestyle.",
                more:
                  "Our approach to preventive medicine goes beyond standard health assessments. Particular emphasis is placed on a detailed family history and, where medically appropriate, genetic testing. Based on a comprehensive individual assessment, we focus on the examinations that are truly relevant while avoiding unnecessary procedures and costs. For specialised diagnostics, I work closely with an experienced network of medical specialists and diagnostic centres.",
              },
              {
  title: "Nutritional Medicine & Weight Management",
  id: "abnehmen",
                short:
                  "Sustainable weight loss is about more than simply reducing calorie intake.",
                text:
                  "We provide personalised, evidence-based medical support for dietary change, metabolic health optimisation and long-term weight management through a comprehensive approach that combines nutrition, physical activity and modern fasting strategies. A particular focus of our practice is the safe and appropriate use of modern weight-loss medications such as Ozempic® and Wegovy® (GLP-1 receptor agonists).",
               more: (
  <>Many patients have questions or concerns about these treatments. I provide detailed medical advice, prescribe therapy on an individual basis and closely monitor progress throughout treatment to help achieve the best possible long-term results. Care is tailored to each patient’s individual needs and, where medically appropriate, can also be provided through telemedicine.
 <img
      src="/essen.jpg"
      alt="Mediterrane Ernährung"
      className="mt-6 w-full max-w-md rounded-xl border border-[#DCE3EE]"
    />
  </>
), 
},
              {
  title: "Sports Medicine & Osteoarthritis Care",
  id: "arthrose",
                short:
                  "Preserving mobility, reducing pain and improving quality of life.",
                text:
                  "Physical activity is an essential part of a healthy and active life, regardless of age or fitness level. I support both recreational and competitive athletes, as well as individuals who wish to maintain their mobility, physical performance and quality of life throughout adulthood and later life.",
                more: (
  <>
    A particular focus of my practice is the diagnosis and treatment of musculoskeletal conditions and osteoarthritis, especially knee osteoarthritis. An important component of this treatment approach is{" "}
    <a
      href="https://arthrosamid.com/de/our-solution"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[#5163A0] underline"
    >
      Arthrosamid® 
    </a>
    , an innovative non-surgical treatment option for knee osteoarthritis. Supported by more than two decades of research, Arthrosamid® has been shown to be safe and effective, providing long-lasting pain relief and helping patients maintain mobility and daily function.
  </>
),
},
{
  title: "Men's Medicine",
  id: "maennergesundheit",
                short:
                  "Health, vitality and well-being at every stage of life.",
                text:
                  "Physical health, vitality and sexual well-being are important aspects of quality of life for many men. They influence not only sexual health, but also confidence, energy levels, performance and overall well-being.",
                more: (
  <>
                  As part of my men's health consultations, I support men through the health challenges that may arise at different stages of life. These include testosterone deficiency, erectile dysfunction, reduced libido, prostate-related concerns, hair loss, and questions related to healthy ageing and longevity. As a physician, psychologist and lifelong sports enthusiast, I integrate medical, hormonal and psychological aspects of men's health into a comprehensive and personalised approach. Trust, discretion and individualised care form the foundation of my work.
             <img
      src="/rugby.jpg"
      alt="Männergesundheit"
      className="mt-6 w-96 rounded-xl border border-[#DCE3EE]"
    />
  </>
),
                },
              {
                title: "Longevity Medicine",
                short:
                  "Healthy ageing is about more than simply avoiding disease.",
                text:
                  "It is never too early – and never too late – to focus on longevity. For me, Longevity Medicine represents a comprehensive medical approach aimed not only at extending lifespan, but above all at preserving physical and cognitive health for as long as possible.",
                more:(
  <>
                  Today, the field of longevity is increasingly influenced by coaches, social media personalities and self-proclaimed experts who often oversimplify or misrepresent complex medical topics. I believe this trend is particularly problematic in healthcare. My approach is deliberately different: evidence-based, medically grounded and built on sound diagnostics rather than trends, marketing claims or internet hype.
             <img
      src="/aging.jpg"
      alt="Longevity"
      className="mt-6 w-96 rounded-xl border border-[#DCE3EE]"
    />
  </>
), },
              {
                title: "Telemedicine",
                id: "telemedizin",
                short:
                  "Modern medical care — even between practice visits.",
                text:
                  "Many health concerns can now be managed efficiently, discreetly and personally through telemedicine, including the discussion of test results, follow-up consultations, Nutritional Medicine, GLP-1 therapy for weight management, Men's Medicine, preventive health consultations and Sports Medicine.",
                more: (
  <ul className="mt-2 list-disc space-y-3 pl-5">
    <li>
      <strong>Convenient and flexible:</strong> attend appointments from the comfort of your home or while travelling.
    </li>

    <li>
      <strong>No waiting rooms:</strong> efficient scheduling and better use of your time.
    </li>

    <li>
      <strong>Maximum convenience:</strong> no travel time or parking concerns.
    </li>

    <li>
      <strong>Reduced exposure to infections:</strong> no contact with other patients in waiting areas.
    </li>

    <li>
      <strong>Family involvement:</strong> relatives or caregivers can easily participate in consultations when appropriate.
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
        Learn More About Arthrosamid®
      </a>
    </div>
  )}
</div>
</details>
))}
</div>

          <p className="mt-10 max-w-4xl text-base leading-8 text-[#66708A] md:text-lg">
            In addition, we offer comprehensive general medical care for acute and chronic health conditions, as well as 
            psychosomatic medical support, with the aim of helping you maintain long-term health and lasting well-being.
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
          About me
        </p>

        <h2 className="max-w-2xl text-2xl font-light leading-[1.3] tracking-[-0.01em] text-[#2D3A66] md:text-3xl">
          Medicine guided by experience and personalised care.
        </h2>

        <p className="mt-6 text-base leading-8 text-[#66708A]">
          Hernán Leonardo Aceval Munoz, I studied Medicine and Psychology at the University of Bonn and am a board-certified specialist in General Medicine, Emergency Physician, Aeromedical Physician and Psychologist.
          </p>
          <p className="mt-6 text-base leading-8 text-[#66708A]">
          After many years working in hospital-based surgical care, I now practise primarily in outpatient General Medicine. In parallel, I continue to work as an 
          Emergency Physician and Aeromedical Physician, providing national and international patient transport and medical care, including assignments in crisis regions.
          My particular areas of interest include Nutritional Medicine, Sports Medicine, Men's Medicine and Longevity Medicine. As both a physician and psychologist, 
          I regard physical and mental health as inseparably linked. Individualised care, personal attention and a partnership-based doctor–patient relationship 
          are at the heart of my medical practice.
        </p>
        <p className="mt-6 text-base leading-8 text-[#66708A]">
          The decision to establish a private medical practice was a conscious one. It gives me the professional independence to focus diagnostics, treatment and preventive 
          care entirely on the individual needs of my patients. Without rigid administrative constraints or unnecessary time pressure, I am able to devote the time that careful, 
          modern medicine requires. I welcome both privately insured patients and self-paying patients. It is important to me that access to personalised medical care should not 
          depend solely on insurance status or financial considerations. For this reason, I work together with my patients to find solutions that are both medically appropriate 
          and individually sustainable.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="px-6 py-12 md:px-12">
  <div className="mx-auto max-w-6xl rounded-[1.5rem] border border-[#DCE3EE] bg-white p-8">

    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5163A0]">
      PROFESSIONAL MEMBERSHIPS
    </h3>

    <p className="mt-4 text-base leading-8 text-[#66708A]">
      German College of General Practitioners and Family Physicians (DEGAM), Sports Physicians Association of North Rhine (Sportärztebund Nordrhein), 
      German Society for Nutritional Medicine (DGEM), German Society for Men's Health (DGMG), German Geriatrics Society (DGG), 
      German Society for Disaster Medicine (DGKM), German Interdisciplinary Association for Intensive Care and Emergency Medicine (DIVI), 
      German Society for Emergency Medicine (DGINA), Professional Association of German Surgeons (BDC)
    </p>

  </div>
</section>
      <section id="kontakt" className="scroll-mt-28 px-6 pt-6 pb-16 md:px-12">
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-[#5E74B7] p-8 text-white shadow-[0_20px_60px_rgba(36,52,77,0.15)]">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#eaf3fb]">
            Contact
          </p>

          <h2 className="max-w-xl text-2xl font-light leading-[1.3] tracking-[-0.01em]">
            Request an appointment or telemedicine consultation.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#eef6fb]">
            Online appointment booking will be available soon. In the meantime, you are welcome to request an appointment by email.
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#eef6fb]">
              In-person appointments are currently available on Wednesdays at the premises of O. Brenig General Practice in Bonn-Bad Godesberg, 
              particularly for initial consultations, physical examinations, diagnostic assessments and laboratory testing. 
              Additional in-person appointments in Remagen will be available soon.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#eef6fb]">
            Please note that appointments for my private practice can only be arranged through the contact details provided on this website. 
            O. Brenig General Practice is an independent primary care practice and is unable to schedule appointments or provide 
            information regarding my consultations. Your enquiry will be reviewed and answered personally as soon as possible.
          </p>
          <a
            href="mailto:termin-praxis@aceval.com"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#5163A0] transition hover:bg-[#eef6fb]"
          >
            Request an Appointment by Email
          </a>
        </div>
      </section>
    </main>
  );
}