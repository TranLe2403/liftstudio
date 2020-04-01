import React, { useState } from 'react'

export default function MenuItem({onClick, children,}) {
    const [hover, setHover] = useState(false)

    const handleHover = () => {
        setHover(!hover)
    }


    return (
        <div>
            <div className="menu_item">
                <div
                    className="items"
                    onMouseEnter={ handleHover }
                    onMouseLeave={ handleHover }
                    onClick={onClick}
                >
                    {children}
                </div>
            </div>
            <style jsx>
            {`
                .menu_item {
                    animation: 1s appear forwards;
                }
                .items{
                    font-size: 25px;
                    padding: 1rem 0;
                    margin: 0 5%
                    cursor: pointer;
                    color: ${hover ? 'red':'#444141'};
                    animation: 0.5s slideIn forwards;  
                    transition: transform .2s;
                    text-align: center;
                    
                }
                .items:hover {
                    transform: scale(1.5);
                }
                
                
                `}
            </style>
        </div>
    )
}
