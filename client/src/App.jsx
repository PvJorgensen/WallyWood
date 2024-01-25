import { useState } from 'react'
import './App.css'

import { Header } from './assets/Components/Partials/Header'
import { ContentWrapper } from './assets/Components/ContentWrapper/ContentWrapper'
import { AppRouter } from './assets/Components/AppRouter/AppRouter'
import { Main } from './assets/Components/Partials/Main'

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
