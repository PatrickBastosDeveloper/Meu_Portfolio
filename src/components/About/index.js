import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode, faCss3, faDocker, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate');
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  
  return (
    <>
    <div className="about-page">
      <div className="text-zone-about">
      <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['U','m',' ','p','o','u','c','o',' ','s','o','b','r','e',' ','m','i','m']}
              idx={15}
            />
          </h1>
          <p>
            Eu sou um full-stack atualmente focado em back end, a procura de uma posição em uma
            empresa com projetos desafiadores e diversos.
          </p>
          <p align="LEFT">
            Estou sempre confiante que vai dar certo, curioso e pronto para um cafézinho.
          </p>
          <p>
            Apaixonado pela minha família, pai de um lindo e travesso menino, músico e
            fã nº 1 da trilogia The Godfather.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#026e00" />
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
              <FontAwesomeIcon icon={faDocker} color="#2496ed" />
            </div>
          </div>
      </div>
    </div>
    <Loader type="cube-transition"/>
    </>
  )
}
