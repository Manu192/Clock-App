import './App.css'
import Clock from './Components/Clock'
import Clocklist from './Components/Clocklist'
import SearchBar from './Components/SearchBar'

function App() {
 

  return (
    <>
       <div className="min-h-screen bg-gradient-to-br from-gray-500 to-gray-900 flex flex-col items-center px-4 py-10">
      
      <Clock />

      
      <SearchBar />

      
      <Clocklist />
    </div>
    </>
  )
}

export default App
