import Canvas from './canvas'
import Customizer from './pages/Customizer'
import Home from './pages/Home'

function App() {

  return (
    <>
      <main className = "app transition-allease-in">
        <Home />
        <Customizer />
        <Canvas />
      </main>
    </>
  )
}

export default App