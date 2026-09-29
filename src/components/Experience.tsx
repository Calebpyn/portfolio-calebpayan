import { experience } from "@/content/profile";

export function Experience() {
  return (
    <section id="experience" className="container experience" aria-labelledby="exp-title">
      <div className="section-head">
        <p className="eyebrow">Experience</p>
        <h2 id="exp-title" className="section-title">
          Real clients, real constraints.
        </h2>
      </div>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.role + job.company} className="row">
            <div className="row-period">{job.period}</div>
            <div className="row-role">
              <h3>{job.role}</h3>
              <p>{job.company}</p>
            </div>
            <div className="row-body">
              <p>{job.summary}</p>
              <ul className="pills tags">
                {job.tags.map((t) => (
                  <li key={t} className="pill">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
