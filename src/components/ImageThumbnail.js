import React,{useState} from 'react'
import Modal from './Modal'

export default function ImageThumbnail({image}) {
      // console.log(image.webformatURL)
      const [showModal , setShowModal] = useState(false)


    const tags =image.tags.split(',');

    return (

    <div  className="max-w-sm rounded overflow-hidden shadow-lg zoom-in-effect">
      <figure>
        <img onClick={()=> setShowModal(true)} src={image.webformatURL} alt="" className="w-full"/> 
      </figure>   
      <div className = "px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo By {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className = 'px-6 py-4'>
      {tags.map((tag,i)=>

        <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" >
          #{tag}
        </span>

      )}
        
      </div>
        <Modal key={image.id} image={image}  setShowModal={setShowModal} showModal={showModal}/>

    </div>
    )
}
