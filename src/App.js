import { useEffect, useState } from 'react';
import './App.css';
import { Menu } from './components/menu/menu';

function App() {
  const [categories, setCategories] = useState([])
  const [selected, setSelected] = useState([12669, 12680])

  useEffect(() => {
    fetch('./categories.json')
      .then(res => res.json())
      .then(setCategories)
  }, [])

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="App">
      <Menu categories={categories} selected={selected} setSelected={setSelected} />
      
      {selected.map(id => <div>{categories.find(category => category.id === id).name}</div>)}
    </div>
  );
}

export default App;
