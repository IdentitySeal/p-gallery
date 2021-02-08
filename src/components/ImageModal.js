// import React,{useState} from 'react';
import Modal from 'react-modal';

import img from '../blacKIMO.PNG'

export default function ImageModal({closeModal,showModal}) {
    return (
        <>        
        <Modal
        isOpen={showModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        >
            <div className="my-10  shadow-lg- bg-gray-200 rounded-lg">
                <div className ="py-4 px-4">
                    <img src={img} alt="" className="w-full  rounded-lg"/> 
                </div>
                <button onClick={closeModal}>close</button>

            </div>
            </Modal>
        </>
    )
}
