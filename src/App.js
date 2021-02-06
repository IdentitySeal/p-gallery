import React,{useState,useEffect} from 'react'
import './App.css';
import random from './blacKIMO.PNG'

function App() {
  const [images , setImages] = useState([]);
  const [loading , setLoading] =useState(true)
  const [searchterm,setSearchterm] = useState('')


  useEffect(()=>{
    // fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchterm}&image_type=photo&pretty=true`)
    fetch(`https://pixabay.com/api/?key=20171130-e5f5ef24534abe508fcfd4038&q=yellow+flowers&image_type=photo&pretty=true`)
    .then(res=> res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  })
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={random} className="w-full"/>    
      <div className = "px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo By Timi
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            4000
          </li>
          <li>
            <strong>Downloads:</strong>
            200
          </li>
          <li>
            <strong>Likes:</strong>
            400
          </li>
        </ul>
      </div>
      <div className = 'px-6 py-4'>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" >
          #tag 1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" >
          #tag 2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" >
          #tag 3
        </span>

      </div>
    
    </div>
  );
}

export default App;
