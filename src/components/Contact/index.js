import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])

  const sendEmail = (e) => {
    console.log(form.current)
    e.preventDefault()

    emailjs
      .sendForm(
        'service_6aysx0w',
        'template_lszmifj',
        form.current,
        'uP4E2hjN8jmItIDfb'
      )
      .then(
        (result) => {
          // show the user a success message
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          // show the user an error
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am actively looking for positions as a Software Development
            Engineer (SDE) as a recent software engineering graduate. Please use
            the form below to contact me if you have any open vacancies or any
            other questions. I'm excited to lend my expertise and work with you
            on worthwhile projects.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul className="contact-form-ul">
                <li placeholder="contact-form-list" className="half">
                  <input
                    placeholder="Your Name"
                    type="text"
                    name="user_name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Your Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="email_subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Dheeraj Mohan Kumar,
          <br />
          United States of America,
          <br />
          Irvine CA-92617.
          <br />
          <span className="email-address">dmohanku@uci.edu</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[33.64597, -117.83365]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[33.64597, -117.83365]}>
              <Popup>DJ lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
