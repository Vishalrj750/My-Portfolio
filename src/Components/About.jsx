import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
margin-top: 100px;
margin-bottom: 100px;

#about {
    font-family: 'Source Serif Pro', serif;
}

.heading-div h2 {
    font-size: 50px;
    font-weight: bold;
    color: blue;
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

.skills {
    width: 100vw;
    display: flex;
    gap: 2%;
    margin-top: 50px;
    margin-bottom: 50px;
}

.html {
    flex: 1;
}
.html img {
    width: 80%;
}

.css {
    flex: 1;
}
.css img {
    width: 60%;
}

.js {
    flex: 1;
}
.js img {
    width: 80%;
}

.react {
    flex: 1;
}
.react img {
    padding-top: 25px;
    width: 100%;
}

.redux {
    flex: 1;
}
.redux img {
    padding-top: 15px;
    width: 100%;
}

.node {
    flex: 1;
}
.node img {
    padding-top: 20px;
    width: 100%;
}

.mongo {
    flex: 1;
}
.mongo img {
    padding-top: 10px;
    width: 100%;
}

.mysql {
    flex: 1;
}
.mysql img {
    width: 90%;
}

.ds {
    flex: 1;
}
.ds img {
    width: 100%;
}

.skills-heading-div h3 {
    font-size: 35px;
    font-weight: bold;
    color: blue;
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
                <div className="skkills-div">
                    <div className="skills-heading-div">
                        <h3>I am Proficient in</h3>
                    </div>
                    <div className="skills">
                        <div className="html">
                            <img src="html.jpg" alt="HTML" />
                        </div>
                        <div className="css">
                            <img src="css.png" alt="CSS" />
                        </div>
                        <div className="js">
                            <img src="js.png" alt="JS" />
                        </div>
                        <div className="react">
                            <img src="react.png" alt="React" />
                        </div>
                        <div className="redux">
                            <img src="redux.jpg" alt="Redux" />
                        </div>
                        <div className="node">
                            <img src="node.png" alt="Node" />
                        </div>
                        <div className="mongo">
                            <img src="mongo.jpg" alt="Mongo" />
                        </div>
                        <div className="mysql">
                            <img src="mysql.png" alt="MySQL" />
                        </div>
                        <div className="ds">
                            <img src="ds.jpg" alt="DS_ALGO" />
                        </div>
                    </div>
                </div>
            </div>
        </AboutWrapper>
    )
}

export { About }