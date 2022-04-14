import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
margin-top: 100px;
margin-bottom: 100px;

#about {
    font-family: 'Source Serif Pro', serif;
}

.heading-div h2 {
    font-family: 'Lobster', cursive;
    font-size: 80px;
    font-weight: bold;
    color: blue;
    margin-bottom: 0px;
}

.heading-items {
    width: 100vw;
    display: flex;
}

.heading-left {
    flex: 1;
}

.heading-left img {
    width: 80%;
}

.heading-right {
    flex: 2;
    padding-top: 100px;
    background-color: aliceblue;
}

.heading-right p {
    padding-left: 25px;
    padding-right: 25px;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
}

.skills-top {
    width: 60vw;
    display: flex;
    gap: 2%;
    align-items: center;
    justify-content: center;
    transform: translateX(30%);
}

.skills-bottom {
    width: 60vw;
    display: flex;
    gap: 2%;
    align-items: center;
    justify-content: center;
    transform: translateX(30%);
}

.html {
    width: 30%;
    background-color: #cecece;
    border-radius: 25px;
}
.html img {
    width: 85%;
}
.html p {
    font-weight: bold;
}

.css {
    width: 30%;
    background-color: #cecece;
    border-radius: 25px;
}
.css img {
    width: 60%;
}
.css p {
    font-weight: bold;
}

.js {
    width: 30%;
    background-color: #cecece;
    border-radius: 25px;
}
.js img {
    width: 85%;
}
.js p {
    font-weight: bold;
}

.react {
    width: 30%;
    background-color: #cecece;
    border-radius: 25px;
}
.react img {
    width: 100%;
}
.react p {
    font-weight: bold;
}

.redux {
    width: 30%;
    background-color: #cecece;
    border-radius: 25px;
}
.redux img {
    width: 95%;
}
.redux p {
    font-weight: bold;
}

.node {
    width: 30%;
    background-color: #cecece;
    border-radius: 25px;
}
.node img {
    width: 85%;
}
.node p {
    font-weight: bold;
}

.mongo {
    width: 30%;
    background-color: #cecece;
    border-radius: 25px;
}
.mongo img {
    width: 80%;
}
.mongo p {
    font-weight: bold;
}

.express {
    width: 30%;
    background-color: #cecece;
    border-radius: 25px;
}
.express img {
    width: 90%;
}
.express p {
    font-weight: bold;
}

.mysql {
    width: 30%;
    background-color: #cecece;
    border-radius: 25px;
}
.mysql img {
    width: 100%;
}
.mysql p {
    font-weight: bold;
}

.ds {
    width: 30%;
    background-color: #cecece;
    border-radius: 25px;
}
.ds img {
    width: 85%;
}
.ds p {
    font-weight: bold;
}

.skills-heading-div h3 {
    font-family: 'Lobster', cursive;
    font-size: 80px;
    font-weight: bold;
    color: blue;
}

#skills {
    margin-top: 100px;
    margin-bottom: 100px;
}

@media (max-width: 412px) {
    .heading-items {
        width: 100vw;
        display: flex;
        flex-direction: column;
    }
    .html p, .css p, .js p, .react p, .redux p, .node p, .mongo p, .express p, .mysql p, .ds p {
        display: none;
    }
}


`

function About() {
    return(
        <AboutWrapper>
            <div id="about">
                <div className="heading-div">
                    <h2>About Me</h2>
                </div>
                <div className="heading-items">
                    <div className="heading-left">
                        <img src="https://raw.githubusercontent.com/himrd95/me_Himanshu/main/public/developer.gif" alt="gif" />
                    </div>
                    <div className="heading-right">
                        <p>Hello! My name is Vishal and I enjoy creating things that live on the Internet. My interest in web development started back last year when I was trying to edit things on the web - taught me a lot about HTML and CSS.</p>
                        <p>Fast forwarding to today, I built a number of web applications and 2 major projects. Learned a great deal about teamwork, leadership and communication. After months of regorous training, here I am looking for an oppertunity as a full stack web developer.</p>
                    </div>
                </div>
                <div id="skills">
                    <div className="skills-heading-div">
                        <h3>I am Proficient in</h3>
                    </div>
                    <div className="skills-top">
                        <div className="html">
                            <img src="html.png" alt="HTML" />
                            <p>HTML5</p>
                        </div>
                        <div className="css">
                            <img src="css2.png" alt="CSS" />
                            <p>CSS3</p>
                        </div>
                        <div className="js">
                            <img src="js.png" alt="JS" />
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className="react">
                            <img src="react.png" alt="React" />
                            <p>REACT</p>
                        </div>
                        <div className="redux">
                            <img src="redux.png" alt="Redux" />
                            <p>REDUX</p>
                        </div>
                    </div>
                    <div className="skills-bottom">
                        <div className="node">
                            <img src="node.png" alt="Node" />
                            <p>NodeJS</p>
                        </div>
                        <div className="mongo">
                            <img src="mongo.png" alt="Mongo" />
                            <p>MongoDB</p>
                        </div>
                        <div className="express">
                            <img src="express.png" alt="Express" />
                            <p>ExpressJS</p>
                        </div>
                        <div className="mysql">
                            <img src="mysql.png" alt="MySQL" />
                            <p>mySQL</p>
                        </div>
                        <div className="ds">
                            <img src="ds2.webp" alt="DS_ALGO" />
                            <p>Data Structures and Algorithm</p>
                        </div>
                    </div>
                </div>
            </div>
        </AboutWrapper>
    )
}

export { About }