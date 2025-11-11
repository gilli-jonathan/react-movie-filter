import { useState } from "react"

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

  const generi = ["tutti"]

  movies.forEach((obj) => {
    if (!generi.includes(obj.genre)) {
      generi.push(obj.genre);
    }
  });

  console.log(generi);


  return (
    <>
      <h1>CINEFORUM AZIENDALE</h1>
      <hr />
      <h2>Titoli dei film</h2>
      <ul>
        {movies.map((obj) => (

          <li key={obj.title}>
            <h3>{obj.title}</h3>
          </li>

        ))}
      </ul>

      <select name="" id="" >
        {generi.map((item, index) => (
          <option key={index} value="">{item}</option>
        ))}
      </select>



    </>
  )
}

export default App
