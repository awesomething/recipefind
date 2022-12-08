import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import Search from './components/Search'
import Recipes from './components/Recipes'



function App() {
  let [term, setTerm] = useState('')
  let [data, setData] = useState([])


  const handleSearch = (e, term) => {
    e.preventDefault()
    setTerm(term)
    e.target.reset()
  }

  const clearSearch = () => {
    setData([])
  }

  useEffect(() => {
    const API_URL = `https://api.spoonacular.com/food/site/search?query=`
    const apiKey = '3d32bc8938374ea7a68fd457c7ec3fa3'
    
    if (term) {
      const fetchData = async () => {
        const response = await fetch(API_URL + term + '&apiKey=' + apiKey)
        const resData = await response.json()
        if (resData.Recipes.length > 0) {
          setData(resData.Recipes)
          console.log(data)
        } else {
          window.alert('Not Found')
        }
      }
      fetchData()
    }
  }, [term])


  return (
    <div className="App">
      <Search handleSearch={handleSearch} clearSearch={clearSearch} />
      <Recipes data={data} term={term} />
    </div>
  );
}

export default App;
