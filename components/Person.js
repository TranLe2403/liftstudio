import React from 'react'
import Logo_SN from './Logo_SN'
export default function Person(props) {
    return (
        <div>
            <div className="person_info">
                <img src={props.src} alt={props.alt} className="avatar" />
                <h2 className="name">{props.name}</h2>
                <p className="desc">
                    Ut enim ad minim venim, labos nisi ut aliquip ex ea commo consequat.
                </p>
                <div className="logo_network">
                    <Logo_SN />
                </div>
            </div>
            <style jsx>
                {`
        
        .person_info{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 900px;

        }
        .avatar{
            width: 300px;
            height: 300px;
            border-radius: 50%

        }
        .name {
          font-family: 'Orbitron';
          font-size: 25px;
          letter-spacing: 7px;
          color: #FFFFFF

        }
        .desc{
          font-family: 'Montserrat';
          font-size: 20px;
          height: 100px;
          color: #FFFFFF;
          letter-spacing: 3px;
          padding-left:20px;
          width: 75%;
        }
        .logo_network{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding 10px;
            
        }
    
        `}
            </style>
        </div>

    );
}