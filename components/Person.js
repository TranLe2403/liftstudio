import React from 'react'
import Logo from '../components/Logo_SN.js'

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
                    
                            <a href={props.fb} target="_blank">
                             	<Logo src="/static/Rectangle 8.2.png" alt="fb"/>
                            </a>
                            
                            <a href={props.github} target="_blank">
                             	<Logo src="/static/github.png" alt="github"/>
                            </a>

                            <a href={props.gmail} target="_blank">
                             	<Logo src="/static/gmail.png" alt="gmail"/>
                            </a>

                </div>
            </div>
            <style jsx>
                {`
        .logo_SN{
            padding: 10px;
            width: 50px; 
            height: 50px;
        }
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