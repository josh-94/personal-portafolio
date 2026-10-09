import { t, type Locale } from '../../i18n/ui';

const pl900 = 'https://learn.microsoft.com/api/credentials/share/es-es/JeshuaCabanillasBlanco-7909/60F08FD1DAE8B4E5?sharingId';
const tecsup = 'https://academico-cloud.tecsup.edu.pe/pcc/#/home/certificado?c=894662&n=PIV%2F26%2F149';
const toefl = 'https://drive.google.com/file/d/1siAwhJ7XYqbv-GL3ZBb_isXYmny5LRVK/view';
const pl900Official = 'https://learn.microsoft.com/credentials/certifications/power-platform-fundamentals/';

export function TrainingPage({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const es = locale === 'es';
  const certs = es
    ? [
        {
          kicker: 'Examen PL-900 · agosto de 2025',
          title: 'Microsoft Certified: Aspectos básicos de Power Platform',
          text: 'Certificación de fundamentos. El ID es 60F08FD1DAE8B4E5.',
          links: [
            [pl900, 'Credencial en Microsoft Learn'],
            [pl900Official, 'Ficha oficial del examen'],
          ],
        },
        {
          kicker: 'TECSUP · enero a mayo de 2026',
          title: 'Arquitectura de Software',
          text: 'Programa integral virtual de 180 horas. Credencial PIV/26/149.',
          links: [[tecsup, 'Ver certificado']],
        },
        {
          kicker: 'TOEFL iBT · octubre de 2022',
          title: 'Puntaje global 63',
          text: 'ID 5042 1102 2677 6194.',
          links: [[toefl, 'Ver resultado']],
        },
      ]
    : [
        {
          kicker: 'Exam PL-900 · August 2025',
          title: 'Microsoft Certified: Power Platform Fundamentals',
          text: 'A fundamentals certification. The ID is 60F08FD1DAE8B4E5.',
          links: [
            [pl900, 'Credential on Microsoft Learn'],
            [pl900Official, 'Official exam page'],
          ],
        },
        {
          kicker: 'TECSUP · January to May 2026',
          title: 'Software Architecture',
          text: 'A 180-hour virtual program. Credential PIV/26/149.',
          links: [[tecsup, 'View certificate']],
        },
        {
          kicker: 'TOEFL iBT · October 2022',
          title: 'Overall score 63',
          text: 'ID 5042 1102 2677 6194.',
          links: [[toefl, 'View result']],
        },
      ];
  const study = es
    ? [
        ['Utel Universidad', 'Ingeniería en Desarrollo de Software. Octubre de 2026 a diciembre de 2029.'],
        ['Holberton School', 'Full-stack Software Engineering. Octubre de 2021 a julio de 2022.'],
        ['Universidad San Ignacio de Loyola', 'Bachiller en Marketing. Marzo de 2013 a diciembre de 2018.'],
      ]
    : [
        ['Utel Universidad', 'Software Development Engineering. October 2026 to December 2029.'],
        ['Holberton School', 'Full-stack Software Engineering. October 2021 to July 2022.'],
        ['Universidad San Ignacio de Loyola', "Bachelor's degree in Marketing. March 2013 to December 2018."],
      ];

  return (
    <div className="wrap page-head">
      <h1>{copy.training.title}</h1>
      <p>{copy.training.lead}</p>
      <div className="grid-3">
        {certs.map((item) => (
          <article className="panel" key={item.title}>
            <p className="kicker">{item.kicker}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.links.map(([href, label]) => (
              <p key={href}>
                <a href={href}>{label}</a>
              </p>
            ))}
          </article>
        ))}
      </div>
      <div className="grid-3">
        {study.map(([title, text]) => (
          <article className="panel" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
