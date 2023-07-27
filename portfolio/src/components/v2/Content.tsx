import React from "react";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

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
                <ExperienceCard job="Vincit" position="Full-Stack Software Developer Intern" timespan="June 2022 - September 2022">
                    • Developed responsive and dynamic solutions using TypeScript, React and NextJS. <br></br>
                    • Designed a front-end implementation of a third-party eCommerce platform, focusing on user authentication and enhancing application
                    usability. <br></br>
                    • Created a back-end system for a web application using Typescript and NextJS facilitating communication with RESTful APIs to retrieve and
                    update user information within a database.
                </ExperienceCard>
                <ExperienceCard job="OSISoft / AVEVA" position="Software Developer Intern" timespan="June 2021 - August 2021">
                • Significantly improved the quality of a cloud software product by reducing the average defect rate of the product by 50% by implementing a
                testing framework in C# and .NET. <br></br>
                • Collaborated in an AGILE team focused on API development and testing, utilizing XUnit and Git to develop a comprehensive test suite. <br></br>
                • Conducted unit and smoke testing for code to be deployed to production based on customer requirements. <br></br>
                • Utilized Microsoft Azure for resource management and gained experience in cloud service architecture. <br></br>
                </ExperienceCard>
            </section>
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <ProjectCard title="Senior Barrett Honors Thesis"/>
                <ProjectCard title="Pioneer Sand"/>
            </section>
        </main>
    )
}

export default Content;