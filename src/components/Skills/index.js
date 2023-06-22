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

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'Y', ' ', 'S', 'K', 'I', 'L', 'L', 'S', '.']}
            idx={15}
          />
        </h1>
        <p>
          As a passionate and dedicated software
          development engineer (SDE), I thrive on transforming ideas into
          practical solutions. With 3 years of experience in the industry as an
          SDET, I have honed my skills in Java, HTML, CSS, Python,
          JavaScript, Selenium, Cucumber, Jenkins, Git etc.
        </p>
        <p>
          I am excited about the opportunity to contribute my skills and passion
          to impactful projects, collaborate with like-minded professionals, and
          make a meaningful difference in the world of software development.
        </p>
        <p>
          Please feel free to get in touch with me, visit my
          <a
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
            onclick="ga('send', {'hitType': 'event', 'eventCategory': 'Skills Page', 'eventAction': 'Link Clicked',
           'eventLabel': 'Resume/CV' });"
            target="_blank"
            href="https://www.linkedin.com/in/dheerajkumarm"
          >
            {' '}
            link
          </a>{' '}
          , this if you want to talk about potential partnerships, exchange ideas,
          or just chat about technology in general.
        </p>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
