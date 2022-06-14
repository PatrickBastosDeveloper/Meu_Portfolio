import './index.scss';

export default function AnimatedLetters({letterClass, strArray, idx}) {
  return (
    <span>
      {
        strArray.map( ( char, i ) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
              {char}
          </span>
        ))
      }
    </span>
  )
}

// O primeiro argumento, (letterClass) vai ser a classe, 
// o segundo vai ser o array (strArray) dos caracteres e o terceiro vai ser o index (idx) para setar o delay da animação. 

