import * as React from "react";
import Helmet from "react-helmet";
import "../components/styles.scss";
import DATA from "../data";

// styles
// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Sirin+Stencil&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/04cab24f52.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <div>
        <main className="card">
          <div className="card-header">
            <div>
              <p className="name"> {DATA.name} </p>
              <em className="designation">
                {" "}
                {DATA.designation},{" "}
                <a href={DATA["company-linkedin"]}> {DATA.company} </a>{" "}
              </em>
            </div>

            <div>
              <ul>
                <li>
                  {" "}
                  <a href={"mailto:" + DATA.email}>
                    {" "}
                    {DATA.email}{" "}
                    <span className="icon">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={"https://www." + DATA.linkedin}>
                    {" "}
                    {DATA.linkedin}{" "}
                    <span className="icon">
                      <i className="fa-brands fa-linkedin"></i>
                    </span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href={"https://www." + DATA.github}>
                    {" "}
                    {DATA.github}{" "}
                    <span className="icon">
                      <i className="fa-brands fa-github"></i>
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <div className="left border-right">
              <div className="content education">
                <div className="content-title mt-0 border-top  ">Education</div>
                <div className="content-body">
                  <p className="mb-0">
                    <strong> {DATA.education.degree} </strong>
                    in
                    <strong> {DATA.education.major} </strong>
                  </p>
                  <p className="mt-0 mb-0">
                    <a href={DATA.education["institute-website"]}>
                      {" "}
                      {DATA.education["institute-name"]}{" "}
                    </a>
                    | <u> {DATA.education.cgpa} CGPA </u>
                  </p>
                  <p className="mt-0"> {DATA.education.period} </p>
                </div>
              </div>

              <div className="content skills ">
                <div className="content-title mt-0 border-top  ">Skills</div>
                <div className="content-body">
                  <ul className="list-style-none p-0">
                    {Object.keys(DATA.skills).map((skill, index) => (
                      <li key={skill + index}>
                        <strong className="skillType">{skill}: </strong>

                        {DATA.skills[skill].map((item, index) => (
                          <span key={item[0] + index} className="skillContent">
                            {item[0]}{" "}
                            <i className={"fa-brands fa-" + item[1]}></i>
                          </span>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="content interests">
                <div className="content-title mt-0 border-top  ">Interests</div>
                <div className="content-body">
                  <ul className="list-style-none p-0">
                    {DATA.interests.map((interest, index) => (
                      <li key={interest + index}>{interest}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="content about">
                <div className="content-title mt-0 border-top ">About</div>
                <div className="content-body">
                  <p>
                    I am a Software Engineer and a tech enthusiast who primarily
                    loves to work on UI/UX projects because I believe it is the
                    primary thread of connection between a client and the
                    product.
                  </p>
                </div>
              </div>
              <div className="content experience ">
                <div className="content-title mt-0 border-top ">Experience</div>
                <div className="content-body">
                  <p>
                    <strong>Frontend Developer Intern</strong> |{" "}
                    <a href="https://www.tcs.com/about-us">
                      TCS Innovation Labs (TRDDC)
                    </a>{" "}
                    | June 2021 - December 2021
                  </p>
                  <p>
                    Worked on developing the UI for the project
                    <em>Ideation Tool</em> which is a digital tool encompassing
                    various stages of Project Ideation Lifecycle such as
                    Planning New Session, Agenda, Preparing Material, Generating
                    Invite Link and Conducting Ideation Session.
                  </p>

                  <ul>
                    <li>
                      Coordinate with Design Team and understand various design
                      aspects
                    </li>
                    <li>Developing UI(Frontend) as per design requirements</li>
                    <li>
                      Researching about various UI components and libraries,
                      developing POCs and discussing with Lead Application
                      Developer and then providing feedback to design team
                      accordingly
                    </li>
                    <li>
                      Technologies Used:
                      <ul className="list-style-dash">
                        <li>Angular</li>
                        <li>Typescript</li>
                        <li>Bootstrap</li>
                        <li>Web-Sockets</li>
                        <li>KonvaJS</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer"></div>
        </main>
      </div>
    </>
  );
};

export default IndexPage;
