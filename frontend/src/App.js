import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Products from './components/products/Products'
import CreateProduct from './pages/CreateProduct/CreateProduct'
import EditPage from './pages/EditPage/EditPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Router>
      {/* router */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/create' element={<CreateProduct/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<EditPage/>} />
      </Routes>
    </Router>
  )
}

export default App