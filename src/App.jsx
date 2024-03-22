import {Routes, Route} from 'react-router-dom'
import './App.css'
import StartPage from './pages/StartPage/StartPage'

import Recipes from './pages/Recipes/Recipes'
import Country from './pages/Country/Country'
import Notfound from './pages/NotFound/Notfound'
import Recipe from './pages/Recipe/Recipe'

function App() {
  return (
      <div id='root'>
        <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/Country" element={<Country/>}/>
        <Route path="/Recipes/:city" element={<Recipes/>}/>
        <Route path="/Recipe/:id" element={<Recipe/>}/>
        <Route path="*" element={<Notfound/>}/>
        </Routes>
      </div>
  )
}

export default App
