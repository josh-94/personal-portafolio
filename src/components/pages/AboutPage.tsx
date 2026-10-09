import { t, type Locale } from '../../i18n/ui';
import { routes } from '../../lib/routes';
import { Cover } from '../Cover';
import { HoverCard } from '../Motion';

const stack = ['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint', 'SQL Server', 'Azure', 'Gateways', 'Pipelines', 'Django', 'Flutter'];

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const es = locale === 'es';
  const work = es
    ? [
        'Diseña aplicaciones de lienzo, flujos e integraciones para procesos de negocio: Power Apps, Power Automate, Dataverse, SharePoint, SQL Server, Azure Key Vault y gateways on-premises, con despliegue mediante Power Platform Pipelines en DEV, TEST y PROD.',
        'El encargo es simplificar una tarea que hoy se hace a mano, conectarla con los sistemas que la empresa ya tiene y dejarla lista para que operaciones la use y TI la gobierne.',
      ]
    : [
        'He designs canvas apps, flows, and integrations for business processes: Power Apps, Power Automate, Dataverse, SharePoint, SQL Server, Azure Key Vault, and on-premises gateways, released with Power Platform Pipelines across DEV, TEST, and PROD.',
        'The work is to simplify a task that is still done by hand, connect it to the systems the company already has, and leave it ready for operations to use and for IT to govern.',
      ];
  const steps = es
    ? [
        ['understand', 'Entender el proceso', 'Quién lo hace, qué dato toca y dónde se rompe.'],
        ['usable', 'Dejarlo usable', 'Una pantalla o un flujo que la operación puede seguir.'],
        ['govern', 'Dejarlo gobernable', 'Solución, entornos y un camino de DEV a PROD.'],
      ]
    : [
        ['understand', 'Understand the process', 'Who runs it, which data it touches, and where it breaks.'],
        ['usable', 'Make it usable', 'A screen or a flow operations can follow.'],
        ['govern', 'Make it governable', 'A solution, environments, and a path from DEV to PROD.'],
      ];
  const path = es
    ? [
        ['Desde julio de 2023', 'Power Platform Developer, Surgicorp', 'Lima, presencial.'],
        ['Diciembre de 2022 a junio de 2023', 'Instructor de programación, Crack The Code', 'Clases de programación y desarrollo de videojuegos para niños y adolescentes. Lima, en remoto.'],
        ['Producto propio', 'RUMBO', 'Aplicación web en mi.apprumbo.online, hecha usando IA como herramienta de desarrollo.'],
      ]
    : [
        ['Since July 2023', 'Power Platform Developer, Surgicorp', 'Lima, on-site.'],
        ['December 2022 to June 2023', 'Programming instructor, Crack The Code', 'Programming and video-game development classes for children and teenagers. Lima, remote.'],
        ['Own product', 'RUMBO', 'Web app at mi.apprumbo.online, built using AI as a development tool.'],
      ];
  const study = es
    ? [
        ['Octubre de 2026 a diciembre de 2029', 'Utel Universidad', 'Ingeniería en Desarrollo de Software.'],
        ['Octubre de 2021 a julio de 2022', 'Holberton School', 'Full-stack Software Engineering.'],
        ['Marzo de 2013 a diciembre de 2018', 'Universidad San Ignacio de Loyola', 'Bachiller en Marketing.'],
        ['Agosto de 2025', 'PL-900', 'Microsoft Certified: Aspectos básicos de Power Platform.'],
        ['Octubre de 2022', 'TOEFL iBT', 'Puntaje global 63.'],
      ]
    : [
        ['October 2026 to December 2029', 'Utel Universidad', 'Software Development Engineering.'],
        ['October 2021 to July 2022', 'Holberton School', 'Full-stack Software Engineering.'],
        ['March 2013 to December 2018', 'Universidad San Ignacio de Loyola', 'Bachelor of Marketing.'],
        ['August 2025', 'PL-900', 'Microsoft Certified: Power Platform Fundamentals.'],
        ['October 2022', 'TOEFL iBT', 'Overall score 63.'],
      ];

  return (
    <div className="wrap page-head">
      <div className="profile">
        <img src="/jeshua.png" width={400} height={400} alt="Jeshua Cabanillas Blanco" />
        <div>
          <h1>{copy.about.title}</h1>
          <p className="profile-lead">{copy.about.lead}</p>
          <p className="kicker">Power Platform Developer · Surgicorp · Lima</p>
        </div>
      </div>

      <section className="about-block">
        <h2>{es ? 'El trabajo' : 'The work'}</h2>
        <div className="prose">
          {work.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="about-block">
        <h2>{es ? 'Cómo trabajo' : 'How I work'}</h2>
        <div className="grid-3">
          {steps.map(([key, title, text]) => (
            <HoverCard className="card" key={key}>
              <Cover translationKey={key} />
              <div className="card-body">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </HoverCard>
          ))}
        </div>
      </section>

      <section className="about-block">
        <h2>{es ? 'Recorrido' : 'Path'}</h2>
        <dl className="fact-list">
          {path.map(([when, title, text]) => (
            <div key={title}>
              <dt>{when}</dt>
              <dd>
                <strong>{title}</strong>
                <span>
                  {title === 'RUMBO' ? (
                    <>
                      {es ? 'Aplicación web en ' : 'Web app at '}
                      <a href="https://mi.apprumbo.online/">mi.apprumbo.online</a>
                      {es ? ', hecha usando IA como herramienta de desarrollo.' : ', built using AI as a development tool.'}
                    </>
                  ) : (
                    text
                  )}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="about-block">
        <h2>{es ? 'Formación' : 'Training'}</h2>
        <dl className="fact-list">
          {study.map(([when, title, text]) => (
            <div key={title}>
              <dt>{when}</dt>
              <dd>
                <strong>{title}</strong>
                <span>{text}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p>
          <a className="more" href={routes[locale].training}>
            {copy.training.title}
          </a>
        </p>
      </section>

      <section className="about-block">
        <h2>Stack</h2>
        <p className="meta">
          {stack.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </p>
        <p className="prose">
          {es
            ? 'La base de software, aparte de Power Platform, es Django, Flutter y SQL Server.'
            : 'The software base, alongside Power Platform, is Django, Flutter, and SQL Server.'}
        </p>
      </section>

      <div className="actions">
        <a className="btn btn-primary" href={routes[locale].contact}>
          {copy.home.ctaContact}
        </a>
        <a className="btn btn-ghost" href="https://www.linkedin.com/in/jeshuacabanillas/">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
