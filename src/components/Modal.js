import React from 'react'


export default function Modal({showModal,setShowModal,image}) {
    const closeModal =()=>{
        setShowModal(false)
        console.log("ican see you")  
    }

    if(!showModal){
        return null
    }

    
    return (
        <div className='modal' onClick={closeModal}>
            <div className='modal-content' onClick ={(e)=> e.stopPropagation()}>
                <div className='modal-header'>
                <h4 className="modal-title">
                <button onClick={closeModal} className="button"> &times;</button>

                </h4>                

                </div>
                <div className='modal-body'>
                    <img className="modal-image" src={image.largeImageURL}></img>
                </div>
                <div className='modal-footer'>
                </div>

            </div>
        </div>
    )
}
