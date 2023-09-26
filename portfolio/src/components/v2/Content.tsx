import React from "react";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import CertificationCard from "./CertificationCard";

function Content(props: any) {
    const {about, experience, projects, certifications} = props;
    return (
        <main className="pt-24 lg:w-1/2 lg:py-24">
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={about}>
                <p>I am a <b>Full-stack Software Developer</b> that graduated from
                    Arizona State University from the Barrett Honors College in May of 2023!</p>
                <p>I&apos;ve worked summer internships with <b>OSISoft / AVEVA</b> and <b>Vincit</b>
                </p>
                <p>developing Software Engineering solutions in AGILE environments.</p>
                <p className="pt-5">My most proficient languages at the moment are <b>C#</b>, <b>JavaScript</b>, and <b>Python</b>.
                 I have worked extensively with <b>REST API development</b> and developing Cloud solutions employing Continuous Integration and Development.</p>
                 <p className="pt-5">In my personal life, I am very interested in fitness and physical activity, as well as gaming! I actively workout and practice 
                 calisthenics in my free time.</p>
            </section>
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={experience}>
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
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={projects}>
                <ProjectCard title="Senior Barrett Honors Thesis" tech="Cumulative Research Thesis" info="Arizona State University • July 2022 - May 2023">
                • Conducted a year-long research study on readability indices and their impact on technical documentation. <br></br>
                • Developed a new readability formula tailored to technical documentation, improving upon existing readability indices. <br></br>
                • Wrote a research paper summarizing the findings and conclusions, submitted to the Barrett Honors database. <br></br>
                • Successfully defended the thesis, presenting the research, findings, and conclusions. <br></br>
                </ProjectCard>
                <ProjectCard title="Pioneer Sand" tech="TypeScript, React, NextJS, Git, AWS" info="Vincit • June 2022 - September 2022">
                • Developed backend APIs with TypeScript, focusing on testing, validation, and creation. <br></br>
                • Implemented new features for the website using Next.js, React, and CSS. <br></br>
                • Participated in weekly Scrum meetings in an Agile environment. <br></br>
                • Utilized Git for source control and pushed numerous changes to production. <br></br>
                </ProjectCard>
                <ProjectCard title="Realtime Chat Application" tech="JavaScript, React, CSS, StreamChat" info="Personal • August 2023">
                • Created a Full-Stack Web Application that allows for realtime communication between users.<br></br>
                • Includes Channels & Direct Messaging for chatting with file upload and emoji functions.<br></br>
                • User database powered by StreamChat with REST backend for authentication.<br></br>
                • Link: <a target="_blank" href="https://github.com/connorabernethy/chat-application/tree/master" className="underline font-semibold">Realtime Chat Application</a><br></br>
                </ProjectCard>
                <ProjectCard title="LinkedList Visualization" tech="JavaScript, HTML5, CSS" info="Arizona State University • February 2023 - March 2023">
                • Created a web application to demonstrate the functionality of LinkedLists using CSS animations and JS. <br></br>
                • Completed this project as an Honors Contract through the Barrett Honors College.<br></br>
                • Link: <a target="_blank" href="http://linked-list-honors-contract.s3-website-us-west-1.amazonaws.com/" className="underline font-semibold">LinkedList Playground</a><br></br>
                </ProjectCard>
                <ProjectCard title="To-Do List Web App" tech="JavaScript, React, CSS" info="Personal • August 2023">
                • Created a web application with React to practice React hooks and building web applications.<br></br>
                • Single-page React web app deployed with Vercel.<br></br>
                • Link: <a target="_blank" href="https://to-do-web-app-mu.vercel.app/" className="underline font-semibold">To-Do List Web App</a><br></br>
                </ProjectCard>
            </section>
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" ref={certifications}>
                <CertificationCard title="JavaScript Algorithms & Data Structures Certification" org="freeCodeCamp.org" date="August 2023">
                    • Link: <a target="_blank" href="https://www.freecodecamp.org/certification/connorabernethy/javascript-algorithms-and-data-structures" className="underline font-semibold">Certificate Link</a>
                </CertificationCard>
            </section>
        </main>
    )
}

export default Content;