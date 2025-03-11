import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './MainN'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
