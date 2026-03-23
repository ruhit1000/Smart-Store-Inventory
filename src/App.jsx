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

  const handleDelete = (productName) => {
    const updatedProducts = allProducts.filter(product => product.name !== productName)
    setAllProducts(updatedProducts)
  }

  const productsQuantityUpdate = (updatedQuantity, productName) => {
    const updatedProducts = allProducts.map((product) => product.name === productName? {...product, quantity: updatedQuantity} : product)
    setAllProducts(updatedProducts)
  }


  return (
    <div className="h-screen">
      <header>
        <Navbar />
      </header>
      <main className="grid md:grid-cols-4">
        <AddProducts handleNewProduct={handleNewProduct} allProducts={allProducts}/>
        <div className="md:col-span-3">
          <ShowProducts handleDelete={handleDelete} allProducts={allProducts} productsQuantityUpdate={productsQuantityUpdate} />
        </div>
      </main>
    </div>
  )
}

export default App
