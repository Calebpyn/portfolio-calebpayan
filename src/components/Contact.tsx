import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section id="contact" className="container contact" aria-labelledby="contact-title">
      <div className="blob contact-blob" aria-hidden="true" />
      <p className="eyebrow">Contact</p>
      <h2 id="contact-title" className="contact-title">
        Let&apos;s build something useful.
      </h2>
      <a className="ulink contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="contact-actions">
        <a className="btn btn-light btn-md" href={profile.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a className="btn btn-light btn-md" href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a className="btn btn-dark btn-md" href={profile.cv} download>
          Download CV
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="container footer">
      <span>
        © {new Date().getFullYear()} {profile.fullName}
      </span>
      <span>Culiacán, Mexico · Working remotely</span>
    </footer>
  );
}
