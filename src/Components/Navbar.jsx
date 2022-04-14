import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.div`
.nav {
    // font-family: 'Source Serif Pro', serif;
    font-family: 'Lobster', cursive;
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

.nav-right a {
    text-decoration: none;
    color: brown;
}

@media (max-width: 412px) {
    .nav-left {
        height: 80px;
        margin-left: 5%;
    }
    .nav-right {
        display: flex;
        gap: 10%;
        align-items: center;
        justify-content: center;
        padding-left: 15%;
        padding-right: 20%
    }
    .nav-right h1 {
        display: none;
    }
}

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

.skills {
    display: flex;
}
.skills-logo {
    width: 30px;
    padding-top: 15px;
    padding-right: 10px;
}
.skills-logo img {
    width: 100%;
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
`

function Navbar() {
    return(
        <NavbarWrapper>
            <div className="nav">
                <div className="nav-left">
                    <img src="Vishal_singh.gif" alt="logo" className="nav-logo" />
                </div>
                <div className="nav-right">
                    <a href="#home">
                        <div className="home">
                            <div className="home-logo">
                                <img src="Home.png" alt="home_logo" />
                            </div>
                            <div className="home-about">
                                <h1>Home</h1>
                            </div>
                        </div>
                    </a>
                    <a href="#about">
                        <div className="about">
                            <div className="about-logo">
                                <img src="about.png" alt="about_logo" />
                            </div>
                            <div className="about-about">
                                <h1>About</h1>
                            </div>
                        </div>
                    </a>
                    <a href="#skills">
                        <div className="skills">
                            <div className="skills-logo">
                                <img src="skills2.png" alt="skills_logo" />
                            </div>
                            <div className="skills-about">
                                <h1>Skills</h1>
                            </div>
                        </div>
                    </a>
                    <a href="#project">
                        <div className="projects">
                            <div className="projects-logo">
                                <img src="Projects.png" alt="project_logo" />
                            </div>
                            <div className="projects-about">
                                <h1>Project</h1>
                            </div>
                        </div>
                    </a>
                    <a href="#contact">
                        <div className="contact">
                            <div className="contact-logo">
                                <img src="Contact.png" alt="contact_logo" />
                            </div>
                            <div className="contact-about">
                                <h1>Contact</h1>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </NavbarWrapper>
    )
}

export { Navbar }