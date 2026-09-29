import { Fragment } from "react";
import { education } from "@/content/profile";

export function Education() {
  return (
    <section className="container education" aria-label="Education">
      <p>
        <span className="eyebrow">Education</span>
        {education.map((e, i) => (
          <Fragment key={e.school}>
            {i > 0 && (
              <span className="sep" aria-hidden="true">
                ·
              </span>
            )}
            <span>
              {e.detail}
              <strong>{e.school}</strong>
              {e.after}
            </span>
          </Fragment>
        ))}
      </p>
    </section>
  );
}
