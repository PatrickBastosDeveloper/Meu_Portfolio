import { Link } from "react-router-dom";
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss'

export default function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br /> I'm
        <img src={ LogoTitle } alt="developer" />
        logodam
        <br />
        web developer
        </h1>
        <h2>Frontend Developer / JavaScript Expert</h2>
        <Link to="/contact" className="flat-buttom">CONTACT ME</Link>
      </div>
    </div>
  )
}
