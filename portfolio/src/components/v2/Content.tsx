import React from "react";
import ExperienceCard from "./ExperienceCard";

function Content() {
    return (
        <main className="pt-24 lg:w-1/2 lg:py-24">
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <p>I am a <b>Full-stack Software Developer</b> that graduated from
                    Arizona State University from the Barrett Honors College in May of 2023!</p>
                <p>I&apos;ve worked summer internships with <b>OSISoft / AVEVA</b> and <b>Vincit</b>
                </p>
                <p>developing Software Engineering solutions in AGILE environments.</p>
                <p className="pt-5">My most proficient languages at the moment are <b>C#</b>, <b>JavaScript</b>, and <b>Python</b>.
                 I have worked extensively with <b>REST API development</b> and developing Cloud solutions employing Continuous Integration and Development.</p>
                 <p className="pt-5">In my personal life, I am very interested in fitness and physical activity, as well as gaming! I actively workout and practice 
                 calisthenics in my free time. Some of my favorite all-time games include: Super Mario Sunshine and Counter-Strike!</p>
            </section>
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <ExperienceCard job="Vincit" position="Full-Stack Software Developer Intern">
                    Testing this feature.
                </ExperienceCard>
                <ExperienceCard job="OSISoft / AVEVA" position="Software Developer Intern">
                    Testing this feature.
                </ExperienceCard>
            </section>
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                Projects
            </section>
        </main>
    )
}

export default Content;