import { useState } from "react"
import AddProducts from "./components/AddProducts/AddProducts"
import Navbar from "./components/Navbar/Navbar"
import ShowProducts from "./components/ShowProducts/ShowProducts"


function App() {
  const [allProducts, setAllProducts] = useState([]);
  const handleNewProduct = (data) => {
    const newProducts = [...allProducts, data]
    setAllProducts(newProducts)
  }


  return (
    <div className="h-screen">
      <header>
        <Navbar />
      </header>
      <main className="grid md:grid-cols-4">
        <AddProducts handleNewProduct={handleNewProduct} allProducts={allProducts}/>
        <div className="md:col-span-3">
          <ShowProducts allProducts={allProducts} />
        </div>
      </main>
    </div>
  )
}

export default App
