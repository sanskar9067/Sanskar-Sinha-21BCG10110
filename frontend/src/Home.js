import React from 'react'
import './Home.css'

export default function Home() {

    return (
        <div>
            <div><h1 style={{ color: "white" }}>Welcome to Chess</h1></div>
            <div className='playArea'>
                <div className='board'>
                    <div className='gridBlock white'><div style={{ fontSize: "70px", textAlign: "center" }}>♟</div></div>
                    <div className='gridBlock black'><div style={{ fontSize: "70px", textAlign: "center" }}>♟</div></div>
                    <div className='gridBlock white'><div style={{ fontSize: "70px", textAlign: "center" }}>♚</div></div>
                    <div className='gridBlock black'><div style={{ fontSize: "70px", textAlign: "center" }}>♛</div></div>
                    <div className='gridBlock white'><div style={{ fontSize: "70px", textAlign: "center" }}>♟</div></div>
                    <div className='gridBlock black'></div>
                    <div className='gridBlock white'></div>
                    <div className='gridBlock black'></div>
                    <div className='gridBlock white'></div>
                    <div className='gridBlock black'></div>
                    <div className='gridBlock white'></div>
                    <div className='gridBlock black'></div>
                    <div className='gridBlock white'></div>
                    <div className='gridBlock black'></div>
                    <div className='gridBlock white'></div>
                    <div className='gridBlock black'></div>
                    <div className='gridBlock white'></div>
                    <div className='gridBlock black'></div>
                    <div className='gridBlock white'></div>
                    <div className='gridBlock black'></div>
                    <div className='gridBlock white'><div style={{ fontSize: "70px", textAlign: "center" }}>♙</div></div>
                    <div className='gridBlock black'><div style={{ fontSize: "70px", textAlign: "center" }}>♙</div></div>
                    <div className='gridBlock white'><div style={{ fontSize: "70px", textAlign: "center" }}>♔</div></div>
                    <div className='gridBlock black'><div style={{ fontSize: "70px", textAlign: "center" }}>♕</div></div>
                    <div className='gridBlock white'><div style={{ fontSize: "70px", textAlign: "center" }}>♙</div></div>
                </div>
            </div>
        </div >
    )
}
