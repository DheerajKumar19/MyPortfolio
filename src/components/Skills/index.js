import './index.scss'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  window.setTimeout(function () {
    try {
      window.TagCanvas.Start('myCanvas', 'tags', {
        textColour: '#ffd700',
        outlineColour: '#000',
        reverse: true,
        depth: 0.6,
        maxSpeed: 0.1,
        initial: [0.1, -0.1],
      })
    } catch (e) {
      console.log("Tag cloud init failed", e);
      // Handle error
    }
  }, 500);

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1 aria-label="Skills &amp" class="blast-root">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', ' i', 'l', 'l', 's', ' ', '&']}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={22}
            />
          </h1>

          <p>
            As a passionate and dedicated software development engineer (SDE), I
            thrive on transforming ideas into practical solutions. With 3 years
            of experience in the industry as an SDET, I have honed my skills in
            Java, HTML, CSS, Python, JavaScript, Selenium, Cucumber, Jenkins,
            Git etc.
          </p>
          <p>
            I am excited about the opportunity to contribute my skills and
            passion to impactful projects, collaborate with like-minded
            professionals, and make a meaningful difference in the world of
            software development.
          </p>
          <p>
            Please feel free to get in touch with me, visit my
            <a
              className="links"
              onclick="ga('send', {'hitType': 'event', 'eventCategory': 'Skills Page', 'eventAction': 'Link Clicked',
           'eventLabel': 'Linkedin profile' });"
              target="_blank"
              href="https://www.linkedin.com/in/dheerajkumarm"
            >
              {' '}
              LinkedIn
            </a>{' '}
            profile for more details. Also you can checkout my cv on
            <a
              className="links"
              onclick="ga('send', {'hitType': 'event', 'eventCategory': 'Skills Page', 'eventAction': 'Link Clicked',
           'eventLabel': 'Resume/CV' });"
              target="_blank"
              href="https://github.com/DheerajKumar19/MyPortfolio/blob/master/src/assets/DheerajResume_2.pdf"
            >
              {' '}
              link
            </a>{' '}
            , this if you want to talk about potential partnerships, exchange
            ideas, or just chat about technology in general.
          </p>
        </div>
        <div className="skills-chart">
            <canvas width="500" height="500" id="myCanvas">
              <ul className="rotate-element" id="tags">
                <li>
                  <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">
                    HTML 5
                  </a>
                </li>
                <li>
                  <a
                    data-weight="25"
                    href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
                    target="_blank"
                  >
                    CSS3
                  </a>
                </li>
                <li>
                  <a
                    data-weight="25"
                    href="https://en.wikipedia.org/wiki/JavaScript"
                    target="_blank"
                  >
                    JavaScript
                  </a>
                </li>
                <li>
                  <a
                    data-weight="24"
                    href="https://en.wikipedia.org/wiki/Representational_state_transfer"
                    target="_blank"
                  >
                    REST
                  </a>
                </li>
                <li>
                  <a
                    data-weight="14"
                    href="https://en.wikipedia.org/wiki/JSON"
                    target="_blank"
                  >
                    JSON
                  </a>
                </li>
                <li>
                  <a
                    data-weight="13"
                    href="https://en.wikipedia.org/wiki/XML"
                    target="_blank"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    data-weight="17"
                    href="https://en.wikipedia.org/wiki/Git"
                    target="_blank"
                  >
                    Git
                  </a>
                </li>
                <li>
                  <a
                    data-weight="14"
                    href="https://en.wikipedia.org/wiki/Python_(programming_language)"
                    target="_blank"
                  >
                    Python
                  </a>
                </li>
                <li>
                  <a
                    data-weight="25"
                    href="https://en.wikipedia.org/wiki/Java"
                    target="_blank"
                  >
                    Java
                  </a>
                </li>
                <li>
                  <a
                    data-weight="24"
                    href="https://en.wikipedia.org/wiki/Spring_Boot"
                    target="_blank"
                  >
                    Spring Boot
                  </a>
                </li>
                <li>
                  <a
                    data-weight="24"
                    href="https://sanic.dev/en/"
                    target="_blank"
                  >
                    Sanic
                  </a>
                </li>
                <li>
                  <a
                    data-weight="25"
                    href="https://cucumber.io/"
                    target="_blank"
                  >
                    Cucumber
                  </a>
                </li>
              </ul>
            </canvas>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
