import React,{useState,useEffect} from 'react'
import ImageThumbnail from './components/ImageThumbnail'
import SearchImage from './components/SearchImage'


import './App.css';

// import random from './blacKIMO.PNG'

function App() {
  const [images , setImages] = useState([]);
  const [loading , setLoading] = useState(true)
  const [searchterm,setSearchterm] = useState('')


  


  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchterm}&image_type=photo&pretty=true`)
    .then((res) => res.json())
    .then((data) =>{
      setImages(data.hits)
      setLoading(false)
    })
    .catch(err => console.log(err))
  },[searchterm]);

  

  return (
    <div className="container mx-auto">
      <SearchImage searchTerm={(term)=> setSearchterm(term)}/>
      {!loading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-32">No image Found</h1> }
      { loading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading</h1> : <div className="grid grid-cols-3 gap-4">
      {images.map((image)=>  
        <div>
        <ImageThumbnail key={image.id} image={image} />
        </div>
      )}


      </div>}

    </div>

    
  );
}

export default App;
