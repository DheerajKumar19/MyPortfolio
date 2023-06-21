import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello, I'm Dheeraj Kumar M. As a passionate and dedicated software
            development engineer (SDE), I thrive on transforming ideas into
            practical solutions. With 3 years of experience in the industry as
            an SDET, I have honed my skills in Java, HTML, CSS, Python
            (beginner), JavaScript (beginner), allowing me to tackle complex
            challenges with confidence
          </p>
          <p>
            My method of problem-solving is firmly grounded in logical reasoning
            and close attention to detail. I adore delving into complex issues,
            dissecting them into solvable parts, and creating beautiful
            solutions that achieve the best outcomes. As I respect open
            communication and perform best in collaborative contexts,
            collaboration and cooperation are also fundamental to my work ethic.
          </p>
          <p>
            I am excited about the opportunity to contribute my skills and
            passion to impactful projects, collaborate with like-minded
            professionals, and make a meaningful difference in the world of
            software development.
          </p>
          <p>
            Please feel free to get in touch with me if you want to talk about
            potential partnerships, exchange ideas, or just chat about
            technology in general. I'm looking forward to getting to know other
            enthusiasts and seizing new chances alongside them.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face7">
              <FontAwesomeIcon icon={faJava} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
