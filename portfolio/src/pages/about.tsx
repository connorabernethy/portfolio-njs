import photo from "../../public/linkedin_photo.jpg"

export default function About() {
    return(
        <main
        className={`flex min-h-screen flex-col justify-start p-24 leaguespartan`}>
            <h1 className="leaguespartan">About</h1>
            <div className="photo">
                <img src={photo.src}></img>
            </div>
        </main>
    )
}