import Skills from "@/components/Skills"
import Breadcrumbs from "@/components/Breadcrumbs"

import photo from "../../public/linkedin_photo.jpg"
import Image from "next/image"

export default function About() {
    const skillsList: any[] =
        [{
            name: 'TypeScript',
            value: 75
        },
        {
            name: 'React',
            value: 70
        },
        {
            name: 'C#',
            value: 80
        },
        {
            name: 'NextJS',
            value: 60
        },
        {
            name: 'Python',
            value: 50
        },
        {
            name: 'Java',
            value: 70
        },
        ]
    return (
        <main
            className={`flex min-h-screen flex-col justify-start p-24 leaguespartan`}>
            <h1 className={`pb-5 leaguespartan`}>About</h1>
            <div className="photo">
                <Image src={photo.src} alt=""></Image>
            </div>
            <p className={`pt-10 description`}>I am a Full-stack Software Developer that graduated from
                Arizona State University from the Barrett Honors College in May of 2023!</p>
            <p className={`description pt-3`}>
                I've worked summer internships with <b>OSISoft / AVEVA</b> and <b>Vincit</b>
            </p>
            <p className="description">developing Software
                Engineering solutions in AGILE environments.</p>
            <Skills skills={skillsList} />
            <Breadcrumbs one="home" two="projects" three="contact"></Breadcrumbs>
        </main>
    )
}