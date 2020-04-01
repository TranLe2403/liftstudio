import React from 'react'

export default function Menu({ open, children }) {


    return (
        <React.Fragment>
            <div className="menu_list">
                {
                    open ? <div className="list">{children}</div> : null
                }
            </div>
            <style jsx>
                {`
                .menu_list{
                    margin-top: 23px;;
                    position: absolute;
                    right: 0;
                    height: ${open ? '100%' : 0};
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    background-color: #F1EBEB;
                    opacity: 0.95;
                    color: black;
                    transition: height 0.3s ease;
                    z-index: 2;
                    align-items: center;
                    }
                .list {
                    padding: 30px;
                    font-family: Orbitron;
                    letter-spacing: 3px;
                }
                `}
            </style>
        </React.Fragment>
    )
}