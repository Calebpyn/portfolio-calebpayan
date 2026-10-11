import { stack } from "@/content/profile";

export function Stack() {
  return (
    <section id="stack" className="container stack" aria-labelledby="stack-title">
      <div className="section-head">
        <p className="eyebrow">Stack</p>
        <h2 id="stack-title" className="section-title">
          Tools I reach for.
        </h2>
      </div>
      <div className="bento">
        <div className="tile tile-half">
          <div className="blob tile-blob-1" aria-hidden="true" />
          <h3 className="tile-label">Frontend</h3>
          <ul className="chips" style={{ gap: 12 }}>
            {stack.frontend.map((s, i) => (
              <li key={s} className={`chip chip-xl chipf glass${i === stack.frontend.length - 1 ? " is-dark" : ""}`}>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="tile tile-half">
          <div className="blob slow tile-blob-2" aria-hidden="true" />
          <h3 className="tile-label">Backend &amp; data</h3>
          <ul className="chips">
            {stack.backend.map((s) => (
              <li key={s} className="chip chip-lg chipf">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="tile tile-wide">
          <h3 className="tile-label">Platforms &amp; tools</h3>
          <ul className="chips">
            {stack.automation.map((s) => (
              <li key={s} className="chip chip-md chipf">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
