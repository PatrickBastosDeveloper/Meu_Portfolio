import { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';
import patrickCartoon from '../../assets/video/patrickCartoon.mp4'

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
const nameArray = ['','P','a','t','r','i','c','k',' ','B','a','s','t','o','s',','];
  const jobArray = ['d','e','s',' e','n','v','o','l','v','e','d','o','r',' ','w','e','b','.'];
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  
  return (
    <>
    <div className="container home-page">
      <div className="text-zone-home">
        <h1>
          <span className={ letterClass }>O</span>
            <span className={ `${ letterClass } _12` }>l</span>
            <span className={ `${ letterClass } _13` }>á</span>
            <span className={`${letterClass} _14`}>!</span>
            <br />
            <span className={`${letterClass} _15`}>S</span>
            <span className={ `${ letterClass } _16` }>o</span>
            <span className={`${letterClass} _17`}>u</span>
          <AnimatedLetters
            letterClass={ letterClass }
            strArray={ nameArray }
            idx={ 15 }
          />
        <br />
        <AnimatedLetters
            letterClass={ letterClass }
            strArray={ jobArray }
            idx={ 22 }
          />
        </h1>
        <main>
          <video
          className="video"
          src={ patrickCartoon }
          type="video/mp4"
          loop
          autoPlay
          muted
          />
        </main>
        <h2>Full Stack Web Developer</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
    <Loader type="cube-transition"/>
    </>
  )
}
