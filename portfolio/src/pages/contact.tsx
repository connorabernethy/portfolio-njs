import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Contact() {
    return (
        <main
            className={`flex min-h-screen flex-col justify-start p-24 leaguespartan`}>
            <h1 className={`pb-5 leaguespartan`}>Contact</h1>
            <Link href="https://www.linkedin.com/in/connor-abernethy/" className={`pb-5 leaguespartan`}>LinkedIn</Link>
            <h1 className={`pb-5 leaguespartan`}>Email: <p>connorabernethy@icloud.com</p></h1>
            <Breadcrumbs one="home" two="projects" three="about"></Breadcrumbs>
        </main>
    )
}