import React from 'react'

export default function Pic (props) {
    return (
        <div>
            <img src={props.src} alt={props.alt} className="gamePic" />
            <style jsx>
                {`
                    .gamePic{
                        width: 408px;
                        height: 427px;
                    }
                `}
            </style>
        </div>

    );
}
