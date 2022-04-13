import React from "react";
import styled from "styled-components";

const ProjectsWrapper = styled.div`
margin-top: 100px;
margin-bottom: 100px;

#project {
    font-family: 'Source Serif Pro', serif;
}

.heading h2 {
    font-size: 50px;
    font-weight: bold;
    color: blue;
}

.project-items {
    width: 100vw;
    display: flex;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: aliceblue;
    box-shadow: 10px 10px 5px #cecece;
}

.project-items-left {
    flex: 1;
    padding-left: 50px;
}

.project-items-left img {
    width: 100%;
}

.project-items-right {
    flex: 2;
    padding-left: 100px;
}

.project-items-right h3 {
    font-family: 'Lobster', cursive;
    text-align: left;
    padding-left: 20px;
    font-size: 50px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.project-items-right ul {
    text-align: left;
    font-weight: bold;
}

.project-items-right-btns {
    display: flex;
    gap: 10%;
    padding-left: 10%;
}

.project-items-right-btns button {
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: blue;
    padding: 6px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 25px;
}

.project-items-right-btns button:hover {
    font-size: 16px;
    font-weight: bold;
    color: blue;
    background-color: white;
    padding: 6px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 25px;
    cursor: pointer;
}
`

function Projects() {
    return(
        <ProjectsWrapper>
            <div id="project">
                <div className="heading">
                    <h2>My Projects</h2>
                </div>
                <div className="project-items">
                    <div className="project-items-left">
                        <img src="KFC1.png" alt="kfc_image" />
                    </div>
                    <div className="project-items-right">
                        <h3>KFC Clone</h3>
                        <ul>
                            <li>Made the project using HTML, CSS and Javascript</li>
                            <li>Deployed the project within 5 days with a team of 3 members</li>
                            <li>Learned how to work with colaboration with a team</li>
                            <li>I focused more on the Menu page, Cart page and the payment gatway page</li>
                            <li>Being a team lead had some extra responsibility of overall flow of the website</li>
                        </ul>
                        <div className="project-items-right-btns">
                            <a href="https://jolly-hawking-c11904.netlify.app/" target={'_blank'}><button>Live</button></a>
                            <a href="https://github.com/Vishalrj750/Final_Kfc_Repo" target={'_blank'}><button>Git Hub</button></a>
                        </div>
                    </div>
                </div>
                <div className="project-items">
                    <div className="project-items-left">
                        <img src="myntra.png" alt="myntra_image" />
                    </div>
                    <div className="project-items-right">
                        <h3>Myntra Clone</h3>
                        <ul>
                            <li>Made the project using HTML, CSS, Javascript, ReactJS, ReduxJS</li>
                            <li>Deployed the project within 5 days with a team of 3 members</li>
                            <li>Learned how to work with colaboration with a team</li>
                            <li>I focused more on the Navbar, product page, wishlist page and the bag page</li>
                            <li>All the tasks of state management done by me using redux</li>
                            <li>Being a team lead had some extra responsibility of overall flow of the website</li>
                        </ul>
                        <div className="project-items-right-btns">
                            <a href="https://myntracloneusingredux.netlify.app/" target={'_blank'}><button>Live</button></a>
                            <a href="https://github.com/Vishalrj750/Myntra_Clone" target={'_blank'}><button>Git Hub</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectsWrapper>
    )
}

export { Projects }