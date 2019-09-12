import React from 'react'
import Logo from '../components/Logo_SN.js'

export default function Person(props) {

    return (
        <div>
            <div className="person_info">
                <div className="block1">
                    <img src={props.src} alt={props.alt} className="avatar" />
                    <h2 className="name">{props.name}</h2>
                </div>
                <div className="logo_network">

                    <a href={props.fb} target="_blank">
                        <Logo src="https://cutt.ly/IwpgIvr" alt="fb" />
                    </a>

                    <a href={props.github} target="_blank">
                        <Logo src="https://cutt.ly/nwpgU6A" alt="github" />
                    </a>

                    <a href={props.gmail} target="_blank">
                        <Logo src="https://cutt.ly/AwpgtSt" alt="gmail" />
                    </a>

                </div>
                <p className="desc">
                    {props.des}
                </p>
            </div>
            <style jsx>
                {`
        
        .block1 {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .person_info{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 35vh;
            margin: 20px 0;

        }
        .avatar{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            padding-bottom: 10px;

        }
        .name {
          font-family: 'Orbitron';
          font-size: 14px;
          letter-spacing: 7px;
          color: #FFFFFF

        }
        .desc{
          font-family: 'Montserrat';
          font-size: 15px;
          height: 100px;
          width: 40%;
          color: #FFFFFF;
          letter-spacing: 3px;
          text-align: justify;
        }
        .logo_network{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 30px;
            
        }
        @media screen and (min-width: 768px) {
  /* For desktop: */
        .person_info {
            flex-direction: column;
            height: 900px;
        }
        .logo_network{
            flex-direction: row;
            padding: 10px
        }
        .avatar{
            width: 300px;
            height: 300px;
      }
        .name {
            font-size: 25px;
        }
        .desc { 
            font-size: 20px;
            width: 75%;
        }
    }
        `}
            </style>
        </div>

    );
}