import React ,{useEffect}from 'react'


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
                    Hey
                </h4>                

                </div>
                <div className='modal-body'>
                    <img src={image.webformatURL}></img>
                </div>
                <div className='modal-footer'>
                    <button onClick={closeModal} className="button"> &times;</button>
                </div>

            </div>
        </div>
    )
}
