import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Products'
import Content from './pages/Content'
import Notfountpages from './pages/Notfountpages'
import Header from './components/Header'
import EmployeeAbout from './pages/EmployeeAbout'
import CompanyAbout from './pages/CompanyAbout'

//routers  00=> route
function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} >
          <Route path="employee" element={<EmployeeAbout />} />
          <Route path="company" element={<CompanyAbout />} />
        </Route>

        <Route path="/products" element={<Product />} />
        <Route path="/content" element={<Content />} />
        <Route path="/*" element={<Notfountpages />} />
      </Routes>
    </>
  )
}

export default App
