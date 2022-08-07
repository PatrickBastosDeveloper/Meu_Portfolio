import React, {useEffect, useState} from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from '../AnimatedLetters';
import portifolioData from '../../data/portfolio.json'

export default function Portfolio() {
  const [ letterClass, setLetterClass ] = useState( 'text-animate' );
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);
  
  const renderPortfolio = (portfolios) =>{
    return (
      <div className="images-container">
      {
          portfolios.map((portfolio, idx) => {
              return (
                  <figure className="image-box" key={idx}>
                      <img 
                      src={portfolio.cover}
                      className="portfolio-image"
                      alt="portfolio" />
                      <figcaption className="content">
                          <h4 className="title">{portfolio.title}</h4>
                          <p className="description">{portfolio.description}</p>
                          <button
                              className="btn"
                              onClick={() => window.open(portfolio.urlView)}
                          >VISUALIZAR</button>
                          <button
                              className="btn"
                              onClick={() => window.open(portfolio.urlRepository)}
                          >Repositório</button>
                      </figcaption>
                  </figure>
              )
          })
      }
  </div>
);
}

  return (
    <>
    <div className="container portfolio-page">
      <h1 className="page-title">
      <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />    
      </h1>
      <div>
        {renderPortfolio(portifolioData.portfolio)}
      </div>
    </div>
    <Loader type="cube-transition"/>
    </>
  )
}
