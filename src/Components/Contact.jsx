import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
margin-top: 100px;
margin-bottom: 100px;

#contact {
    font-family: 'Source Serif Pro', serif;
}

.heading h2 {
    font-size: 50px;
    font-weight: bold;
    color: blue;
}

.contact {
    width: 100vw;
    display: flex;
    gap: 2%;
    align-items: center;
    justify-content: center;
}

.email {
    width: 100px;
}
.email img {
    width: 100%;
    padding-bottom: 15px;
}
.email abbr {
    font-weight: bold;
}

.phone {
    width: 100px;
}
.phone img {
    width: 100%;
}
.phone p {
    font-weight: bold;
}

.github {
    width: 100px;
}
.github img {
    width: 100%;
}
.github p {
    font-weight: bold;
    color: black;
}

.linkedin {
    width: 100px;
}
.linkedin img {
    width: 100%;
}
.linkedin p {
    font-weight: bold;
    color: black;
}

.contact-about {
    font-size: 20px;
    font-weight: bold;
}
`

function Contact() {
    return(
        <ContactWrapper>
            <div id="contact">
                <div className="heading">
                    <h2>Contact Me</h2>
                </div>
                <div className="contact-about">
                    <p>I'm actively looking for any new opportunities, in full-stack web development.</p>
                </div>
                <div className="contact">
                    <div className="email">
                        <img src="email.jpg" alt="email_logo" />
                        <abbr title="vishalsingh8574031285@gmail.com">Email</abbr>
                    </div>
                    <div className="phone">
                        <img src="mobile.png" alt="mobile_logo" />
                        <p>8574031285</p>
                    </div>
                    <div className="github">
                        <a href="https://github.com/Vishalrj750/" target={'_blank'}>
                            <img src="github.png" alt="github_logo" />
                            <p>Git Hub</p>
                        </a>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/vishal-singh-a9b811190/" target={'_blank'}>
                            <img src="linkedin.png" alt="linkedin_logo" />
                            <p>Linkedin</p>
                        </a>
                    </div>
                </div>
            </div>
        </ContactWrapper>
    )
}

export { Contact }