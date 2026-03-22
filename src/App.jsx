import MenuBar from "./components/MenuBar/MenuBar"
import Navbar from "./components/Navbar/Navbar"


function App() {


  return (
    <div className="h-screen">
      <header>
        <Navbar />
      </header>
      <main className="grid grid-cols-5">
        <div>
          <MenuBar />
        </div>
        <div>
          
        </div>
      </main>
    </div>
  )
}

export default App
