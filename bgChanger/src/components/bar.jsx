import React from 'react'
import { useState } from "react"


function Bar() {
    const [Color, setColor] = useState("olive")
    return (
        <>
        <div className="w-full h-screen duration-200"
        style={{ backgroundColor: Color }}
      >

        
        <aside className="fixed flex flex-wrap justify-center h-screen w-24 flex-col bg-black overflow-y-auto border-r  py-10">
            <div className="flex flex-wrap justify-center text-white gap-8 shadow-lg px-3 py-2 rounded-3xl">
                <button 
                onClick={()=>setColor("black")}
                className='outline-none px-4 py-2 rounded-full text-white gap-7 rotate-45 hover:rotate-12 shadow-lg border-8 border-pink'
                    style={{ backgroundColor: "black" }}>
                    Black
                </button>
                <button 
                onClick={()=>setColor("red")}
                className='outline-none px-4 py-2 rounded-full text-white gap-7 rotate-45 hover:rotate-12 shadow-lg border-8 border-pink'
                    style={{ backgroundColor: "red" }}>
                    Red
                </button>
                <button 
                onClick={()=>setColor("green")}
                className='outline-none px-4 py-2 rounded-full text-white gap-7 rotate-45 hover:rotate-12 shadow-lg border-8 border-pink'
                    style={{ backgroundColor: "green" }}>
                    Green
                </button>
                <button 
                onClick={()=>setColor("blue")}
                className='outline-none px-4 py-2 rounded-full text-white gap-7 rotate-45 hover:rotate-12 shadow-lg border-8 border-pink'
                    style={{ backgroundColor: "blue" }}>
                    Boue
                </button>
                <button 
                onClick={()=>setColor("orange")}
                className='outline-none px-4 py-2 rounded-full text-white gap-7 rotate-45 hover:rotate-12 shadow-lg border-8 border-pink'
                    style={{ backgroundColor: "orange" }}>
                    Orange
                </button>
                <button 
                onClick={()=>setColor("pink")}
                className='outline-none px-4 py-2 rounded-full text-white gap-7 rotate-45 hover:rotate-12 shadow-lg border-8 border-pink'
                    style={{ backgroundColor: "pink" }}>
                    Pink
                </button>
                <button 
                onClick={()=>setColor("yellow")}
                className='outline-none px-4 py-2 rounded-full text-white gap-7 rotate-45 hover:rotate-12 shadow-lg border-8 border-pink'
                    style={{ backgroundColor: "yellow" }}>
                    Yellow
                </button>
            </div>
            </aside>
            </div>
        </>
    )
}

export default Bar
