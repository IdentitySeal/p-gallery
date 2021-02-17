// import React,{useState} from 'react';
import Modal from 'react-modal';

// import img from '../blacKIMO.PNG'

export default function ImageModal({closeModal,showModal,image}) {
    console.log(image.largeImageURL)
    return (
        <>
            <div className="my-10  shadow-lg- bg-gray-200 rounded-lg">
                <div className ="py-4 px-4">
                    <img src={image.largeImageURL} alt="" className="w-full  rounded-lg"/> 
                </div>
            </div>
        </>
    )
}
