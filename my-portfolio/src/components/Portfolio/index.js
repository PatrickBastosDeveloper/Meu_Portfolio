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
                  <div className="image-box" key={idx}>
                      <img 
                      src={portfolio.cover}
                      className="portfolio-image"
                      alt="portfolio" />
                      <div className="content">
                          <p className="title">{portfolio.title}</p>
                          <h4 className="description">{portfolio.description}</h4>
                          <button
                              className="btn"
                              onClick={() => window.open(portfolio.url)}
                          >VIEW</button>
                      </div>
                  </div>
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
