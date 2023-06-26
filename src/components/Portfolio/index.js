import './index.scss'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible,
  Heading,
  Grommet,
  Image,
  Paragraph,
  CardHeader,
} from 'grommet'
import { FormDown, FormUp, Favorite, ShareOption } from 'grommet-icons'
import fineractGraduationImg from '../../assets/images/fineract-graduation.png'
import Banking from '../../assets/images/bank.png'
import Jenkins from '../../assets/images/jenkins.png'
import Telegram from '../../assets/images/Telegram-icon.png'
import JsonOrg from '../../assets/images/xmltoJson.jpg'
import { ExpandButton } from './components'

const theme = {
  global: {
    font: {
      family: `Poppins, -apple-system,
           BlinkMacSystemFont, 
           "Segoe UI", 
           Roboto`,
    },
  },
  card: {
    elevation: 'none',
    background: 'light-2',
    footer: {
      pad: 'medium',
    },
  },
}

const data = [
  {
    title: 'Apache Fineract',
    about: `Active Contributor to Open Source Project Firneract. Apache
    Fineract: Open source core banking platform for delivering financial
    services to underserved populations worldwide.`,
    description: `I have contributed to the open-source core banking platform Apache
    Fineract. I worked specifically on the ticket's implementation of
    the new Post Interest on Account Activation Date for Fixed Deposit
    and Recurring Deposit Accounts functionality. My contribution
    attempted to replace the previous end of month rationale with one
    that added interest on deposits and recurring deposits depending on
    the account activation date. I worked along with the project's
    maintainers and community members, responding to criticism and
    making sure my contribution was of a high caliber. Contributing to
    an open-source initiative that provides financial services to
    underprivileged individuals around the world was a fulfilling
    experience.`,
    image: fineractGraduationImg,
    link: `https://github.com/DheerajKumar19/fineract`,
  },
  {
    title: 'Testing and debugging of Jenkins',
    about: `Jenkins Testing Project is an open-source automation server that facilitates
     continuous integration, delivery, and deployment processes in software development.`,
    description: `I added new JUnit test cases to the open-source Jenkins project as part of my effort to improve the current test suite.
     I increased code coverage by at least 60 lines of code through rigorous analysis. To assure the dependability of the source code,
      I used both functional and structural testing techniques. I also discussed dependency injection testing and mocking techniques,
       demonstrating how testing can be made easier by adhering to coding standards using tools like SpotBugs and CheckStyle. Overall,
        I worked to improve the Jenkins project's testing capabilities and code quality.`,
    image: Jenkins,
    link: `https://github.com/DheerajKumar19/jenkins-261P/tree/master/JenkinsTesting`,
  },
  {
    title: 'Analysis of Telegram android app architecture',
    about: `MVVM pattern was visualized, components, intents, and services were 
    discovered, and the major feature architecture was consolidated after an analysis of the Telegram Android app's architecture.`,
    description: `As part of distributed software architecture course project, we were tasked to analyze the architecture of any Open source
     project. For this requirement we chose Telegram android messaging app. I  Visualized the MVVM architectural pattern used in the Telegram app.
     Represented the whole telegram architecture in pub-sub, Object-oriented, Implicit and explicit message invocation style, layered and client server style.
     Inspected the whole telegram app source code and 144 UI components, figured out the intents, services, android content providers, receivers involved and 
     method invocation type used in building the app and came up with a consolidated architecture for the main feature of telegram app. 
    `,
    image: Telegram,
    link: `https://github.com/DheerajKumar19/Telegram/tree/master/TelegramArchitectureReview`,
  },
  {
    title: 'Online Banking App – Software security and dependencies',
    about: `In this project, we created a software system and identified and fixed vulnerabilities
     in the implementations of other teams. It mimics the phases of developing secure software, with an emphasis on testing and issue fixing.`,
    description: `I contributed to this project's backend using Python and PostgreSQL as the database, and the frontend used React and JavaScript.
     Intentionally creating weaknesses served my evaluation needs. After that, I assessed the work of other teams in order to find and take advantage
      of their weaknesses. I gave instructions on how to resolve the problems with secure coding techniques.
     Last but not least, I updated our project by incorporating secure coding techniques to guarantee increased security. 
    `,
    image: Banking,
    link: `https://github.com/DheerajKumar19/BrokeBankers`,
  },
  {
    title: 'Adding Service Functionalities to JSON.ORG Code Base',
    about: `Improved XML to JSON parser in JSON.org code base, 
    maintained coding standards, implemented method sensitivity, streaming APIs, and asynchronous strategies using Java APIs.`,
    description: `Programming styles required us to work on the JSON.org code base as part of the course project.
     The project had five milestones. There were several requirements for each milestone. The biggest difficulty
     was maintaining the coding standards while working on an open source project without making changes to the existing
     code base. By the time the project was finished, we had improved the xml to json parser method. modified the existing
     procedure to make it sensitive to method calls, streaming APIs, and asynchronous strategies.
     Implemented this multistage project using accessible Java APIs like Functional, Spliterator, and ExecutorService. 
    `,
    image: JsonOrg,
    link: `https://github.com/DheerajKumar19/JSON-java/tree/master/Report`,
  },
]

const CardBox = ({ title, about, description, image, link }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Box pad="medium" align="start">
      <Card className="card-body" elevation="large" width="medium">
        <CardHeader height="small">
          <Image
            className="image-container"
            fit="cover"
            src={image}
            a11yTitle="Apache Fineract"
          />
        </CardHeader>
        <CardBody>
          <Box pad={{ horizontal: 'medium' }} responsive={false}>
            <Heading level="3" margin={{ vertical: 'medium' }}>
              {title}
            </Heading>
            <Paragraph margin={{ top: 'none' }}>{about}</Paragraph>
          </Box>
        </CardBody>
        <CardFooter>
          <Box direction="row" align="center" gap="small">
            <Anchor
              href="https://github.com/DheerajKumar19/fineract"
              label="Project Link"
            />
          </Box>
          <ExpandButton open={open} onClick={() => setOpen(!open)} />
        </CardFooter>
        <Collapsible open={open}>
          <Paragraph margin="medium" color="dark-3">
            {description}
          </Paragraph>
        </Collapsible>
      </Card>
    </Box>
  )
}

export const Cards = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Grommet theme={theme} className="vertical-center">
      <div className="hero-images">
        {data.map((d) => (
          <CardBox {...d}></CardBox>
        ))}
      </div>
    </Grommet>
  )
}

const Portfolio = () => {
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
            strArray={['M', 'Y', ' ', 'W', 'O', 'R', 'K']}
            idx={15}
          />
        </h1>
        <Cards />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
