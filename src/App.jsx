import AddProducts from "./components/AddProducts/AddProducts"
import MenuBar from "./components/MenuBar/MenuBar"
import Navbar from "./components/Navbar/Navbar"
import ShowProducts from "./components/ShowProducts/ShowProducts"


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
          <AddProducts />
        </div>
        <div className="col-span-3">
          <ShowProducts />
        </div>
      </main>
    </div>
  )
}

export default App
