import Link from "next/link";
import React from "react";

function Nav(props: any) {
    const { about, projects, contact} = props;
    return(
        <div className="nav leaguespartan">
            <div className="photo"></div>
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