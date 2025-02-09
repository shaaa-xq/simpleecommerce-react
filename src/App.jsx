import Providers from './Providers'
import Navbar from './components/Header'
import SearchItem from './components/SearchItem'
import './App.css'


const App = () => {
  return(
    <Providers>
      <Navbar />
      <SearchItem />
    </Providers>
  )
}

export default App