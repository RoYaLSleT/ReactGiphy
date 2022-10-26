import './App.css';
import { useState } from 'react';
import GifList from './components/GifList';
import SelectedGif from './components/SelectedGif';

const API_URL = "https://api.giphy.com/v1/gifs/trending"
const API_KEY = "B2Xd0A8N3nibH16c20v8bypEgmlpfM5K"

function App() {
  const [gifs, setGifs] = useState([])
  const [selectedGif, setSelectedGif] = useState({})

  const handleSelectedGif = (gif) => setSelectedGif(gif)

  const getTrendyGifs = () => {
    // api.giphy.com/v1/gifs/trending?api_key=B2Xd0A8N3nibH16c20v8bypEgmlpfM5K
    fetch(`${API_URL}?api_key=${API_KEY}&limit=5`)
    .then(response=>response.json())
    .then(result=>setGifs(result.data))
    .catch(err=>console.error(err))
  }

  return (
    <div className="App">
      <div>
        <button onClick={()=>getTrendyGifs()}>Chercher les GIFS</button>
      </div>
      <div className="content">
        <GifList gifs={gifs} handleSelectedGif={handleSelectedGif}/>
        {selectedGif.title && <SelectedGif gif={selectedGif}/>}
      </div>
    </div>
  );
}

export default App;
