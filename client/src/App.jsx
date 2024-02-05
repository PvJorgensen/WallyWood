import { useState } from 'react'
import './App.scss'

import { Header } from './Components/Partials/Header'
import { AppRouter } from './Components/AppRouter/AppRouter'
import { Main } from './Components/Partials/Main'
import { Footer } from './Components/Partials/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Main>
      <AppRouter></AppRouter>
    </Main>
    </>
  )
}

export default App
