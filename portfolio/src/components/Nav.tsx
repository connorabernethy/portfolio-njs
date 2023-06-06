import Link from "next/link";
import React from "react";
import photo from "../../public/linkedin_photo.jpg";
import Image from "next/image";

function Nav(props: any) {
    const { about, projects, contact} = props;
    return(
        <div className="nav leaguespartan">
            <div className="photo">
                <Image src={photo.src} alt=""></Image>
            </div>
            <div className="link-container">
                <Link href="/about">{about}</Link>
                <Link href="/projects">{projects}</Link>
                <Link href="/contact">{contact}</Link>
            </div>
            <div className="vector-container">
            </div>
        </div>
    )
}

export default Nav;