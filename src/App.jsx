import { use } from "react";
import { useState, useEffect } from "react"

function App() {

  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  const [movieSt, setMovieSt] = useState(movies)
  const [movieFilter, setMovieFilter] = useState(movies)
  const [gene, setGene] = useState('')

  const generi = ["Tutti"]

  movieSt.forEach((obj) => {
    if (!generi.includes(obj.genre)) {
      generi.push(obj.genre);
    }
  });


  useEffect(() => {


  }, [])



  return (
    <>
      <h1>CINEFORUM AZIENDALE</h1>
      <hr />
      <h2>Titoli dei film</h2>
      <ul>
        {movieSt.map((obj) => (

          <li key={obj.title}>
            <h3>{obj.title}</h3>
          </li>

        ))}
      </ul>

      <hr />
      <h3>scegli il genere di film che vuoi vedere</h3>
      <select name="" id="" value={gene} onChange={(e) => setGene(e.target.value)}>
        {generi.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>



    </>
  )
}

export default App
