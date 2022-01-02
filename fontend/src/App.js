import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import DogPage from './components/Dogs/DogPage';
import Cart from './components/Cart/Cart';
import NavBar from './NavBar/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { CartContext } from './Contexts/CartContext'

function App() {
  const [allDogs, setAllDogs] = useState([])
  const [myCart, addToCart] = useState([{}])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/dogs");
      return res;
    }
    getData().then((res) => setAllDogs(res.data))
    getData().catch((err) => console.log(err))
  },[])
  return (
    <CartContext.Provider value={{myCart, addToCart, total, setTotal}}>
      <Router>
          <NavBar />
          <div className="page-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dog" element={<DogPage allDogs={allDogs}/>} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
