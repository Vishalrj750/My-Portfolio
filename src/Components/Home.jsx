import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
margin-top: 100px;
margin-bottom: 100px;
#home {
    width: 100vw;
    display: flex;
    // gap: 15%;
    padding: 20px;
}

.home-left {
    flex: 1;
}

.home-left-about {
    text-align: left;
    padding-left: 10%;
}

.hello {
    font-family: 'Source Serif Pro', serif;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 0px;
    color: blue;
}

.name {
    font-family: 'Lobster', cursive;
    font-size: 100px;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 0px;
}

.profession {
    font-family: 'Source Serif Pro', serif;
    font-size: 50px;
    color: red;
    margin-top: 0px;
    margin-bottom: 0px;
}

.description {
    font-family: 'Source Serif Pro', serif;
    font-size: 16px;
    font-weight: bold;
}

.home-left-btn {
    padding-left: 10%;
    text-align: left;
}

.home-left-btn button {
    font-family: 'Source Serif Pro', serif;
    font-size: 18px;
    padding: 6px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: blue;
    color: white;
    font-weight: bold;
    border-radius: 20px;
}

.home-right {
    flex: 1;
}

.profile-img-div {
    width: 50%;
    padding-left: 20%;
}

.profile-img-div img {
    width: 100%;
    border-radius: 25px;
}

.home-left-btn button:hover {
    font-family: 'Source Serif Pro', serif;
    font-size: 18px;
    padding: 6px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: white;
    color: blue;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer; 
}

@media (max-width: 412px) {
    #home {
        width: 100vw;
        display: flex;
        flex-direction: column;
        // gap: 15%;
        padding: 20px;
    }

    .hello {
        font-family: 'Source Serif Pro', serif;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 0px;
        color: blue;
    }

    .name {
        font-family: 'Lobster', cursive;
        font-size: 60px;
        font-weight: bold;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .profession {
        font-family: 'Source Serif Pro', serif;
        font-size: 30px;
        color: red;
        margin-top: 0px;
        margin-bottom: 0px;
    }
}
`

function Home() {
    return(
        <HomeWrapper>
            <div id="home">
                <div className="home-left">
                    <div className="home-left-about">
                        <p className="hello">Hii, My name is</p>
                        <p className="name">Vishal Singh</p>
                        <p className="profession"><i>Full-Stack Web Developer</i></p>
                        <p className="description"> Hi, I am a Full stack Web Developer based in Gorakhpur. I build things for web.</p>
                    </div>
                    <div className="home-left-btn">
                        <a href="resume.pdf" target={'_blank'}><button>Resume</button></a>
                    </div>
                </div>
                <div className="home-right">
                    <div className="profile-img-div">
                        <img src="vishal.png" alt="profile img" />
                    </div>
                </div>
            </div>
        </HomeWrapper>
    )
}

export { Home }