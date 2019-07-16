import React from 'react'


export default function Logo_SN() {
    return (
        <React.Fragment>
            <Logo src="/static/Rectangle 8.2.png" alt="fb" />
            <Logo src="/static/Rectangle 8.1.png" alt="github" />
            <Logo src="/static/gmail.png" alt="gmail" />

        </React.Fragment>
        

    );
}

function Logo(props) {
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