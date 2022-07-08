import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef()
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);
  
  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('gmailMessage','template_g88fnj6',refForm.current,'SwRO_x2nvBBwHezkw')
      .then( () => {
        alert( 'Message successfully sent!' );
        window.location.reload( false );
      },
      () => {
        alert( 'Failed to send the message, please try again.' );
        // e.target.reset();
        } );
  }

  return (
   <>
    <div className="container contact-page">
      <div className="text-zone">
         <div className="lets-talk">
            <h1>
              <AnimatedLetters 
              letterClass={letterClass}
              strArray={['V','a','m','o','s',' ','c','o','n','v','e','r','s','a','r','?']}
              idx={15}
              className="title-lets-talk"
              />
            </h1>
              {/*A div abaixo foi disponibilizada pelo linkedin e está linkada ao script no index.html  */}
            <div
              class="badge-base LI-profile-badge"
              data-locale="pt_BR" data-size="large"
              data-theme="light" data-type="VERTICAL"
              data-vanity="patrickbastosdeveloper"
              data-version="v1">
              <a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/patrickbastosdeveloper?trk=profile-badge"> </a>
            </div>
            <p>
              I'm very ambitious front-end developer looking for a role in
              established IT company with the opportunity to work with the latest
              technologies on challenging and diverse projects.
            </p>
          </div>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Nome" required/>
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="E-mail" required/>
                </li>
                <li>
                  <input placeholder="Assunto" type="text" name="subject" required/>
                </li>
                <li>
                  <textarea placeholder="Mensagem" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-buttom" value="SEND"/>
                </li>
              </ul>
            </form>
          </div>
      </div>
    </div>
    <Loader type="cube-transition"/>
   </>
  )
}
