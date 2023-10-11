import React from "react"

export default function Info() {
    return (
        <header>
            <img className="info--photo" src="./assets/Profile.png" alt="profile photo"/>
            <h1 className="info--name">Kimberly Galos</h1>
            <h3 className="info--description description">Frontend Developer</h3>
            <a href="mailto: kmgalos0909@gmail.com" className="email--btn"><img className="email-icon icon" src="./assets/email.png"/> Email</a>
        </header>
    )
}