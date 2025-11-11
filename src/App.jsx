

function App() {

  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]



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

      <select name="" id="">
        {movies.map((obj, index, arr) => (

          <option key={index} value=""> {obj.genre !== arr}</option>



        ))}


      </select>



    </>
  )
}

export default App
