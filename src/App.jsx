import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App() {
  

  return (
    <div>
      <NavBar/>
      <ItemListConteiner saludo = "Bienvenido a tu tienda favorita"/>
    </div>
  )
}

export default App
