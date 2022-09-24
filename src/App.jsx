import { Movie } from './data'; 
import './App.css';
import { useState } from 'react';
import List from './components/List';
function App() {
  const [movie , setMovie] = useState(Movie);
  return (
<>
<List movies={movie} />
</>
  );
}

export default App;
