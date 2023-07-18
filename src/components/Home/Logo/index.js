import './index.scss'
import LogoDJ from '../../../assets/images/DJLogo.jpg'
import some from '../../../assets/images/DJ_2.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'


const Logo = () => {

  // const bgRef = useRef()
  // const outlineLogoRef = useRef()
  // const solidLogoRef = useRef()

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 0.5,
  //       opacity: 1,
  //     })
  //     .from(outlineLogoRef.current, {
  //       // drawSVG: 0,
  //       duration: 10,
  //     })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //     }
  //   )
  // }, [])

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        // ref={solidLogoRef}
        src={LogoDJ}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
