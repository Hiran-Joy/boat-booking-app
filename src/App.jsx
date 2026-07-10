import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddBoat from './components/AddBoat'
import ViewBoat from './components/ViewBoat'
import SearchBoat from './components/SearchBoat'  // You need to create this
import DeleteBoat from './components/DeleteBoat'  // You need to create this
import NavigationBar from './components/NavigationBar'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<AddBoat/>}/>
          <Route path='/search' element={<SearchBoat/>}/>
          <Route path='/delete' element={<DeleteBoat/>}/>
          <Route path='/view' element={<ViewBoat/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App