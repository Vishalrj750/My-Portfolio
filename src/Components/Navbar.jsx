import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.div`
.nav {
    font-family: 'Source Serif Pro', serif;
    width: 100vw;
    height: 80px;
    background-color: aliceblue;
    display: flex;
    box-shadow: 10px 10px 5px #cecece;
    position: fixed;
    top: 0;
}

.nav-left {
    height: 80px;
    margin-left: 10%;
}

.nav-logo {
    height: 100%;
}

.nav-right {
    display: flex;
    gap: 10%;
    align-items: center;
    justify-content: center;
    padding-left: 20%;
    padding-right: 20%
}

// @media (max-width: )

.nav-right h1 {
    font-size: 22px;
}

.home {
    display: flex;
}
.home-logo {
    width: 30px;
    padding-top: 15px;
    padding-right: 10px;
}
.home-logo img {
    width: 100%;
}
.home-about a {
    text-decoration: none;
    color: black;
}

.about {
    display: flex;
}
.about-logo {
    width: 30px;
    padding-top: 15px;
    padding-right: 10px;
}
.about-logo img {
    width: 100%;
}
.about-about a {
    text-decoration: none;
    color: black;
}

.projects {
    display: flex;
}
.projects-logo {
    width: 30px;
    padding-top: 15px;
    padding-right: 10px;
}
.projects-logo img {
    width: 100%;
}
.projects-about a {
    text-decoration: none;
    color: black;
}

.contact {
    display: flex;
}
.contact-logo {
    width: 30px;
    padding-top: 15px;
    padding-right: 10px;
}
.contact-logo img {
    width: 100%;
}
.contact-about a {
    text-decoration: none;
    color: black;
}
`

function Navbar() {
    return(
        <NavbarWrapper>
            <div className="nav">
                <div className="nav-left">
                    <img src="Vishal_singh.gif" alt="logo" className="nav-logo" />
                </div>
                <div className="nav-right">
                    <div className="home">
                        <div className="home-logo">
                            <img src="Home.png" alt="" />
                        </div>
                        <div className="home-about">
                            <a href="#home"><h1>Home</h1></a>
                        </div>
                    </div>
                    <div className="about">
                        <div className="about-logo">
                            <img src="about.png" alt="" />
                        </div>
                        <div className="about-about">
                            <a href="#about"><h1>About</h1></a>
                        </div>
                    </div>
                    <div className="projects">
                        <div className="projects-logo">
                            <img src="Projects.png" alt="" />
                        </div>
                        <div className="projects-about">
                            <a href="#project"><h1>Project</h1></a>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="contact-logo">
                            <img src="Contact.png" alt="" />
                        </div>
                        <div className="contact-about">
                            <a href="#contact"><h1>Contact</h1></a>
                        </div>
                    </div>
                </div>
            </div>
        </NavbarWrapper>
    )
}

export { Navbar }