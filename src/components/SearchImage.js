import React, {useState} from 'react'

export default function SearchImage({searchTerm}) {
    const [text,setText] = useState('');
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(text)
        searchTerm(text)

    }
    if (text.length !== 0  && handleSubmit) {
        console.log("TOP")
    }
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={handleSubmit}  className="w-full max-w-sm">
                <div className="flex items-center border-b-2 border-purple-500 py-2" >
                    <input onChange={((e) => setText(e.target.value))} className="apperance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search for image..."/>
                    <button className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm boder-4 text-white py-1 px-2 rounded" type="submit">Search</button>
                </div>
            </form>          
        </div>
    )  
}
