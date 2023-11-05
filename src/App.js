import { useEffect, useState } from 'react';
import './App.css';
import { Menu } from './components/menu/menu';

function App() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('./categories.json')
      .then(res => res.json())
      .then(setCategories)
  }, [])
  return (
    <div className="App">
      <Menu categories={categories} />
    </div>
  );
}

export default App;
