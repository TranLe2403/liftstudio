import React from 'react'




export default function Logo(props) {
    return (
        <div>
            <img src={props.src} alt={props.alt} className="logo_SN" />
            <style jsx>
                {`
                    .logo_SN{
                        padding: 10px;
                        width: 50px; 
                        height: 50px;
                    }
                `}
            </style>
        </div>
    );
}