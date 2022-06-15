import './index.scss';
import AnimatedLetters from '../AnimatedLetters'

export default function About() {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={ [ 'A', 'b', 'o', 'u', 't', ' ', 'm', 'e' ] }
            idx={15}
          />
        </h1>
        <p>O g1 é um portal de notícias brasileiro mantido pelo Grupo Globo e sob orientação da Central Globo de Jornalismo. Foi lançado em 18 de setembro de 2006, ano que a TV Globo fez 41 anos. Wikipédia
        </p>
        <p>Guns N' Roses é uma banda norte-americana de hard rock formada em Los Angeles, Califórnia, em 1985. A banda lançou, até o momento, seis álbuns de estúdio, três EPs e um álbum ao vivo. A banda vendeu mais de 100 milhões de cópias em todo o mundo, sendo cerca de 43 milhões somente nos Estados Unidos. Wikipédia
        </p>
        <p>
          Nirvana foi uma banda norte-americana de rock formada pelo vocalista e guitarrista Kurt Cobain e pelo baixista Krist Novoselic em Aberdeen no ano de 1987, que obteve grande sucesso no movimento grunge de Seattle no início dos anos 1990. Wikipédia
        </p>
      </div>
    </div>
  )
}
