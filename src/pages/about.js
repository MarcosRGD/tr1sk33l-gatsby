import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import { FaLinkedin, FaReact } from "react-icons/fa"
// import { GrGatsbyjs, GrMysql } from "react-icons/gr"
// import { IoLogoJavascript } from "react-icons/io"

const AboutPage = styled.main`
  width: 100vw;
  height: 100vh;
`
const AboutText = styled.article`
  margin: 0 auto;
  font-size: 0.7rem;
  padding: 4rem 2rem 3rem 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  text-align: justify;
  @media (min-width: 768px) {
    padding-top: 5rem;
    width: 55vw;
  }
`
const Icons = styled.p`
  color: black;
  color: rgba(0, 0, 0, 0.02);
  @media (max-width: 768px) {
    margin-top: -30rem;
    margin-right: -10rem;
    font-size: 30rem;
    text-align: right;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: red;
`
const LinkedIn = styled(FaLinkedin)`
  font-size: 3rem;
  margin-bottom: -0.2rem;
  margin-right: 1rem;
  color: #0e76a8;
`
const About = () => {
  return (
    <AboutPage>
      <Layout>
        <AboutText>
          <header>
            <Link
              href="https://www.linkedin.com/in/marcosrgomezd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <LinkedIn />
            </Link>

            <b>Hello, I'm Marcos! Creative front-end developer.</b>
          </header>
          <hr />
          <p>
            I am actively looking for a junior developer position. Willing to
            join a dynamic, innovative, and collaborative team.
            <br />
            <i>
              <b>Offers related to the internship are highly welcome!</b>
            </i>
          </p>
          <p>
            Because of unfulfilled potential about myself I decided to make a
            career shift from administration and marketing to front-end development and infosec. I
            didn't choose it because of a decent salary and programming is not
            my hobby - it's my passion.
          </p>
          <p>
            <b>SKILLS CAN BE TAUGHT, BUT ATTITUDE CAN'T!</b>
            <ul>
              <li>
                Energetic, flexible, highly motivated, positive team player;
              </li>
              <li>Eager to learn and open to new challenges;</li>
              <li>Having the potential to motivate and support others;</li>
            </ul>
          </p>
          <p>
            I finished full-stack studies in a{" "}
            <Link
              href="https://www.londonappbrewery.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              London App Brewery
            </Link>{" "}
            in 2018-2019 March - was one of the most driven students. I was a
            self-taught front-end enthusiast, so I mentored my classmates and
            other students at coding school with our daily tasks and homework
            during scrum classes in the front-end web developer. We also got familiar
            with DOM, Node.js, Express, MongoDB and react.js.
          </p>
          <Icons>
            {/* <FaHtml5 />
            <FaCss3Alt />
            <FaSass />
            <FaBootstrap />
            <IoLogoJavascript /> */}
            {/* <FaReact /> */}
            {/* <GrGatsbyjs />
            <GrMysql />
            <FaGithub /> */}
          </Icons>
        </AboutText>
      </Layout>
    </AboutPage>
  )
}

export default About
